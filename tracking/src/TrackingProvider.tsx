import React, { createContext, useContext, useMemo, useEffect } from 'react';
import { TrackingManager } from './provider';
import { TrackingConfig } from './types';

const TrackerContext = createContext<TrackingManager>(null as any);

export const useTracker = () => {
  return useContext(TrackerContext);
};

interface TrackingProviderProps {
  config: TrackingConfig;
}

export const TrackingProvider: React.FC<TrackingProviderProps> = props => {
  const { config, children } = props;
  const tracker = useMemo(() => new TrackingManager(config), [config]);

  useEffect(() => {
    if (config.options.browser) {
      tracker.InitTracking();
    }
  }, [tracker]);

  return (
    <TrackerContext.Provider value={tracker}>
      {children}
    </TrackerContext.Provider>
  );
};
