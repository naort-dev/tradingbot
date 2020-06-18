import { Event, EventProperties } from '../types';

export enum ProviderType {
  Marketing = 'm',
  Statistics = 's',
}

export interface Provider {
  TrackEvent<K extends keyof EventProperties>(
    event: Event<EventProperties[K], K>
  ): void;
  OptIn(): void;
  Types(): ProviderType[];
}
