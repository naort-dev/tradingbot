import { Provider, ProviderType } from './Provider';
import { TrackingManagerConfig, SessionDurationEvents } from '../types';
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

    if(this.HasOptedIn()) {
      this.OnPageView(this.getPathname())
      this.startTimeTracker()
    }      
  }

  private startTimeTracker() {
    const timeoutEvents = this.config.setSessionDurationTracker;
    if(!timeoutEvents) {
      return
    }

    timeoutEvents.map(event => {
      setTimeout(() => {
        this.TrackEvent(
          createEvent(
            event,
            {}
          )
        )
      }, this.getTimeoutDuration(event))
    })
  }

  private getTimeoutDuration(event: SessionDurationEvents) {
    switch(event) {
      case EventType.Time1m:
        console.log("get duration", event)
        return 1000 * 60;
      case EventType.Time3m: 
        return 1000 * 60 * 3;
      case EventType.Time5m:
        return 1000 * 60 * 5;
      case EventType.Time10m:
        return 1000 * 60 * 10;
    }
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

  public Identify(userId: string) {
    this.providers.map(provider => provider.Identify(userId));
  }

  private OnPageView(url: string) {
    const location = (url || '/').split('?')[0];
    const pageView = createEvent(EventType.Pageview, {
      location,
      ...this.config.eventProperties,
    });
    this.providers.map(provider => provider.TrackEvent(pageView));
  }

  private getPathname() {
    if(window.location.pathname === '/' && window.location.hash.length > 0) {
      return window.location.hash.split('#')[1]
    }
    return window.location.pathname
  }
}
