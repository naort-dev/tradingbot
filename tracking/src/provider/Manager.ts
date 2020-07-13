import { Provider, ProviderType } from './Provider';
import { TrackingManagerConfig } from '../types';
import { Registry } from './Registry';
import { createEvent, EventType, Event, EventProperties } from '../types';
import { CookieStorage, CookieStorageProvider } from '../storage';

export class TrackingManager implements Provider {
  private providers: Provider[];
  private config: TrackingManagerConfig;
  private cookieStorage: CookieStorage;

  public constructor(config: TrackingManagerConfig) {
    this.providers = [];
    this.config = config;
    this.cookieStorage = CookieStorageProvider.Get();
    if (config.setPageviewCallback) {
      config.setPageviewCallback(this.OnPageView.bind(this));
    }
  }

  public InitTracking() {
    if (this.config.options.debug) {
      return;
    }

    this.config.configLinks.forEach(link => {
      try {
        const parsedLink = this.ParseConfigLink(link);
        this.providers.push(
          Registry.Create(parsedLink.protocol, {
            ...parsedLink.params,
            eventProperties: this.config.eventProperties,
          })
        );
      } catch (error) {
        console.log('An error occured during tracker initialization.', error);
      }
    });

    this.HasOptedIn() && this.OnPageView(window.location.pathname);
  }

  private ParseConfigLink(
    link: string
  ): { protocol: string; params: { [key: string]: string } } {
    let params: any = {};
    const url = new URL(link);
    const searchParams = new URLSearchParams(url.searchParams);

    searchParams.forEach((value, key) => {
      params[key] = value;
    });

    return { protocol: url.protocol.slice(0, -1), params };
  }

  public TrackEvent<K extends keyof EventProperties>(
    event: Event<EventProperties[K], K>
  ) {
    if (this.HasOptedIn()) {
      this.providers.map(provider =>
        provider.TrackEvent({ ...event, ...this.config.eventProperties })
      );
    }
  }

  public HasOptedIn(): boolean {
    return (
      !!this.cookieStorage.Get(this.config.options.cookieName) ||
      !!this.config.options.ignoreGDPR
    );
  }

  public OptIn() {
    if (!this.HasOptedIn()) {
      this.cookieStorage.Set(this.config.options.cookieName, 'true', 360);
      this.providers.map(provider => provider.OptIn());
    }
  }

  public Types() {
    const usedTypes = this.providers.reduce((acc: ProviderType[], provider) => {
      acc.push(...provider.Types());
      return acc;
    }, []);

    return Array.from(new Set(usedTypes));
  }

  private OnPageView(url: string) {
    const location = (url || '/').split('?')[0];
    const pageView = createEvent(EventType.Pageview, {
      location,
      ...this.config.eventProperties,
    });
    this.providers.map(provider => provider.TrackEvent(pageView));
  }
}
