import TagManager from 'react-gtm-module';
import { Provider, ProviderType } from '../Provider';
import { Registry, Config } from '../Registry';
import { Event, EventProperties, EventType, TrackingConfig } from '../../types';

export interface GoogleTagManagerConfig {
  gtmId: string;
  dataLayerName?: string;
  eventProperties: TrackingConfig['eventProperties'];
}

export class GoogleTagManager implements Provider {
  private config: GoogleTagManagerConfig;

  public constructor(config: GoogleTagManagerConfig) {
    this.config = config;
    TagManager.initialize(config);
  }

  public TrackEvent<K extends keyof EventProperties>(
    event: Event<EventProperties[K], K>
  ) {
    TagManager.dataLayer({
      dataLayer: {
        event: event.key,
        ...event.payload,
      },
    });
  }

  public OptIn() {
    this.TrackEvent({
      key: EventType.Pageview,
      payload: {
        location: window.location.pathname,
        ...this.config.eventProperties,
      },
    });
  }

  public Types() {
    return [ProviderType.Marketing, ProviderType.Statistics];
  }
}

Registry.Add(
  'gtm',
  (config: Config) => new GoogleTagManager(config as GoogleTagManagerConfig)
);
