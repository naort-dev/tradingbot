export class Misc {
    public static IsServer() {
        return typeof window === 'undefined';
    }
    public static FormatDate(date: number) {
        const d = new Date(date);
        return `${d.getDate()}.${d.getMonth()}.${d.getFullYear()}`;
    }
}
