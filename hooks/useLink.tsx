import { ConstUrl, SignupOrigins } from '@constants';
import { createEvent, EventType, useTracker } from '@trality/web-tracking';
const Links = new Map([
    ['login', ConstUrl.Login],
    ['signup', ConstUrl.Signup],
]);

export const useLink = (linkType: 'login' | 'signup') => {
    const tracker = useTracker();
    const follow = () => {
        const link = Links.get(linkType);
        // we can here add any events etc that needs to be called.
        if (linkType === 'signup') {
            tracker.TrackEvent(createEvent(EventType.SignupInitiated, { signupOrigin: SignupOrigins.HeaderCta }));
        }
        if (link) {
            window.location.href = link;
        }
    };

    return follow;
};
