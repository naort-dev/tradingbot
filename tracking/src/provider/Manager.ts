import { Provider, ProviderType } from './Provider';
import { TrackingConfig } from '../types';
import { getCookie, setCookie } from '../util';
import { Registry } from './Registry';
import { createEvent, EventType, Event, EventProperties } from '../types';

export class TrackingManager implements Provider {
  private providers: Provider[];
  private config: TrackingConfig;
  private cookie: string | null;

  public constructor(config: TrackingConfig) {
    this.providers = [];
    this.config = config;
    if (config.setPageviewCallback) {
      config.setPageviewCallback(this.OnPageView.bind(this));
    }

    this.cookie = this.config.options.browser
      ? getCookie(this.config.options.cookieName)
      : null;
  }

  public InitTracking() {
    if (this.config.options.debug) {
      return;
    }

    this.config.configLinks.map(link => {
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
    if (!this.cookie && this.config.options.browser) {
      this.cookie = getCookie(this.config.options.cookieName);
    }

    return (
      !this.config.options.browser ||
      !!this.cookie ||
      !!this.config.options.ignoreGDPR
    );
  }

  public OptIn() {
    if (!this.HasOptedIn()) {
      this.cookie = 'true';
      setCookie(this.config.options.cookieName, 'true', 360);
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
