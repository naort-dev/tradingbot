export interface CookieStorage {
  Get(name: string): string | null;
  Set(name: string, value: string, days?: number): void;
}
