import { CookieStorage } from './cookieStorage';
import { BrowserCookieStorage } from './impl';

class CookieStorageProviderImpl {
  private storage: CookieStorage;
  constructor() {
    this.storage = new BrowserCookieStorage();
  }

  public Get(): CookieStorage {
    return this.storage;
  }

  public Set(storage: CookieStorage) {
    this.storage = storage;
  }
}

// useful singleton to enable SSR
export const CookieStorageProvider = new CookieStorageProviderImpl();
