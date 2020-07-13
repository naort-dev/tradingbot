import mixpanel from 'mixpanel-browser';
import { Provider, ProviderType } from '../Provider';
import { Registry, Config } from '../Registry';
import { Event, EventProperties, TrackingManagerConfig } from '../../types';

export interface MixpanelConfig {
  mixpanelId: string;
  crossSubdomainCookie: boolean;
  eventProperties: TrackingManagerConfig['eventProperties'];
}

export class Mixpanel implements Provider {
  public constructor(config: MixpanelConfig) {
    mixpanel.init(config.mixpanelId, {
      cross_subdomain_cookie: config.crossSubdomainCookie,
    });
    mixpanel.register({ ...config.eventProperties });
  }

  public TrackEvent<K extends keyof EventProperties>(
    event: Event<EventProperties[K], K>
  ) {
    mixpanel.track(event.key, { ...(event.payload || {}) });
  }

  public OptIn() {
    mixpanel.opt_in_tracking();
  }

  public Types() {
    return [ProviderType.Statistics];
  }

  public Identify(userId: string) {
    mixpanel.identify(userId)
  }  
}

Registry.Add(
  'mixpanel',
  (config: Config) => new Mixpanel(config as MixpanelConfig)
);
