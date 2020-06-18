import { EventOrigin, EventStage } from './eventProperties';

export interface TrackingConfig {
  configLinks: string[];
  options: {
    cookieName: string;
    ignoreGDPR?: boolean;
    debug?: boolean;
    browser: boolean;
  };
  eventProperties: {
    landingpage?: number;
    app: string;
    origin: EventOrigin;
    stage: EventStage;
  };
  setPageviewCallback?: (callback: (url: string) => void) => void;
}
