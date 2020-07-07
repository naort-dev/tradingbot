import { PopupComponents, PopupOptions } from './types';
import { useState, useEffect, useCallback } from 'react';
import { Popup } from '@components';
import { useRouter } from 'next/router';

interface PopupItem {
    id: string;
    options: PopupOptions;
}

export class PopupManager {
    private static prefix = 't_lp_p_';
    private static utmCampaign?: string | null;
    private static queue: string[] = PopupManager.ResolveQueue();
    public static onNotify?: () => void;

    public static Pop() {
        while (true) {
            const next: string | undefined = PopupManager.queue.shift();
            if (!next) {
                break;
            } else if (this.WasShown(next)) {
                continue;
            }
            return {
                id: next,
                options: PopupComponents[next],
            };
        }

        return undefined;
    }

    public static WasShown(key: string) {
        return localStorage.getItem(PopupManager.PrefixKey(key)) != null;
    }

    public static SetShown(key: string, shown: boolean) {
        key = PopupManager.PrefixKey(key);
        if (shown) {
            localStorage.setItem(key, `${Date.now()}`);
        } else {
            localStorage.removeItem(key);
        }
        if (this.onNotify) {
            this.onNotify();
        }
    }

    public static PrefixKey(key: string) {
        return PopupManager.prefix + key;
    }

    private static ResolveUtmCampaign() {
        if (typeof window === 'undefined') {
            return null;
        }
        const parameters = decodeURIComponent(window.location.search.substring(1)).split('?').pop()?.split('&');
        if (parameters) {
            for (const parameter of parameters) {
                const parts = parameter.split('=');
                if (parts.length > 1 && parts[0].toLowerCase() === 'utm_campaign') {
                    return parts[1];
                }
            }
        }
        return null;
    }

    public static ResolveQueue() {
        if (PopupManager.utmCampaign === undefined) {
            PopupManager.utmCampaign = PopupManager.ResolveUtmCampaign();
        }
        const raw = (process.env.NEXT_PUBLIC_APP_ACTIVE_POPUPS || '').split(',').filter((e) => e.trim() !== '');
        return raw.filter((uid) => {
            const options = PopupComponents[uid];
            if (!options) {
                return false;
            }
            if (
                (PopupManager.utmCampaign === null && options.default) ||
                (options.utmCampaign && PopupManager.utmCampaign && options.utmCampaign.includes(PopupManager.utmCampaign))
            ) {
                return true;
            }
            return false;
        });
    }
}

export const PopupManagerComponent = () => {
    const [next, setNext] = useState<PopupItem | undefined>();
    const route = useRouter();

    const onNotify = useCallback(() => {
        const next = PopupManager.Pop();
        // Clear old popup first
        setNext(undefined);
        if (next) {
            setTimeout(() => {
                setNext(next);
            }, Math.max(next.options.timeout || 0, 5000));
        }
    }, []);

    useEffect(() => {
        const next = PopupManager.Pop();
        if (next) {
            setTimeout(() => {
                setNext(next);
            }, next.options.timeout || 0);
        } else {
            setNext(next);
        }
        PopupManager.onNotify = onNotify;
        return () => (PopupManager.onNotify = undefined);
    }, []);

    const onClose = useCallback(() => {
        if (next) {
            PopupManager.SetShown(next.id, true);
        }
    }, [next]);

    const onCloseWithUrl = useCallback(
        (url?: string) => {
            onClose();
            if (url) {
                if (url.startsWith('http')) {
                    window.open(url, '_blank');
                } else {
                    route.push(url);
                }
            }
        },
        [onClose, route],
    );

    if (!next) {
        return null;
    }

    return (
        <Popup onClose={onClose}>
            <next.options.Component id={next.id} onClose={onCloseWithUrl} />
        </Popup>
    );
};
