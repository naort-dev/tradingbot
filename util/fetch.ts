import { IncomingMessage } from 'http';
import f from 'isomorphic-fetch';

function absoluteUrl(req: IncomingMessage | undefined, setLocalhost?: string) {
    var protocol = 'https:';
    var host = req ? req.headers['x-forwarded-host'] || req.headers['host'] : window.location.host;
    if (host && host.indexOf('localhost') > -1) {
        if (setLocalhost) host = setLocalhost;
        protocol = 'http:';
    }

    return {
        protocol: protocol,
        host: host,
        origin: protocol + '//' + host,
    };
}

export function slug(req: IncomingMessage | undefined) {
    if (req) {
        if (req.url) {
            return req.url.split('/').pop();
        } else {
            return 'unknown';
        }
    } else {
        return window.location.href.split('/').pop();
    }
}

export async function fetch<T extends object = any>(req: IncomingMessage | undefined, path: string): Promise<T> {
    const urlProps = absoluteUrl(req);
    const res = await f(urlProps.origin + path);
    return await res.json();
}
