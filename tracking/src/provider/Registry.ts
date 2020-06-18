import { Provider } from './provider';

type Factory = (config: Config) => Provider;

export interface Config {
  [key: string]: any;
}

class ProviderRegistry {
  private factories: { [key: string]: Factory } = {};

  public Add(protocol: string, factory: Factory) {
    this.factories[protocol] = factory;
  }

  public Create(protocol: string, config: Config) {
    return this.factories[protocol](config);
  }
}

export const Registry = new ProviderRegistry();
