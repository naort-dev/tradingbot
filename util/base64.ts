import { Misc } from './misc';

export function decode(content: string) {
    if (Misc.IsServer()) {
        return Buffer.from(content, 'base64').toString('utf-8');
    } else {
        return window.atob(content);
    }
}
