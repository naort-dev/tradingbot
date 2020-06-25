import { Provider, ProviderType } from '../Provider';
import { Registry, Config } from '../Registry';
import { Event, TrackingManagerConfig } from '../../types';

export interface EchoTrackerConfig {
  id: string;
  eventProperties: TrackingManagerConfig['eventProperties'];
}

export class EchoTracker implements Provider {
  private config: EchoTrackerConfig;

  public constructor(config: EchoTrackerConfig) {
    console.log('[Echo Tracker]: Initizialize echo tracker.', { config });
    this.config = config;
  }

  public TrackEvent(event: Event<any, any>) {
    console.log('[Echo Tracker]: called track event method:', { event });
  }

  public OptIn() {
    console.log('[Echo Tracker]: Called optin method.', this.config);
  }

  public Types() {
    console.log('[Echo Tracker]: Called types method.');
    return [ProviderType.Marketing, ProviderType.Statistics];
  }
}

Registry.Add(
  'echo',
  (config: Config) => new EchoTracker(config as EchoTrackerConfig)
);
