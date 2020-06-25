import { CookieStorage } from 'storage/cookieStorage';
import { getCookie, setCookie } from '../../util';

export class BrowserCookieStorage implements CookieStorage {
  public Get(name: string): string | null {
    return getCookie(name);
  }

  public Set(name: string, value: string, days?: number | undefined): void {
    setCookie(name, value, days);
  }
}
