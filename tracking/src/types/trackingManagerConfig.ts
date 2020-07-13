import { EventOrigin, EventStage } from './eventProperties';
import { EventType } from './events';

export type SessionDurationEvents = EventType.Time1m | EventType.Time3m | EventType.Time5m | EventType.Time10m

export interface TrackingManagerConfig {
  configLinks: string[];
  options: {
    cookieName: string;
    ignoreGDPR?: boolean;
    debug?: boolean;
    isBrowser: boolean;
  };
  eventProperties: {
    landingpage?: number;
    app: string;
    origin: EventOrigin;
    stage: EventStage;
  };
  setPageviewCallback?: (callback: (url: string) => void) => void;
  setSessionDurationTracker?: SessionDurationEvents[];
}
