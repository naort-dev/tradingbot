import jsonp from 'jsonp';
import { useState } from 'react';

const BASE_URL = 'https://trality.us19.list-manage.com/subscribe/post-json?u=c7a47bb0a40e39af74ae61074&id=9db93b0bb1&EMAIL=';

function makeUrl(email: string) {
    return `${BASE_URL}${email.toLowerCase()}`;
}

export const useMailChimp = () => {
    const [sending, setSending] = useState(false);
    const [success, setSuccess] = useState(false);
    const [error, setError] = useState(undefined as string | undefined);

    const send = (email: string) => {
        const url = makeUrl(email);
        setSending(true);
        jsonp(
            url,
            {
                param: 'c',
            },
            (err, data) => {
                if (err) {
                    setError('Unknown error.');
                } else if (data.result !== 'success') {
                    if (data.msg.indexOf('is already subscribed to list') !== -1) {
                        setSuccess(true);
                    } else {
                        setError(data.msg);
                    }
                } else {
                    setSuccess(true);
                }
                setSending(false);
            },
        );
    };

    return { send, sending, success, error, setError };
};
