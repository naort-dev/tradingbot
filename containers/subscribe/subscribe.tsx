import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { useCookie } from '@hooks';
import { useMailChimp } from '@hooks';
import { ArrowDown } from 'components/arrow';
import { Button } from 'components';
import { Loader } from 'components/loader';
import { Paddings, Margins } from '@theme';
import { useTracker, createEvent, EventType, CookieStorageProvider, CookieStorage } from '@trality/web-tracking';

const EmailRegex =
    /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

const Text = styled.input`
    border-radius: none;
    border: solid 1px ${(props) => props.theme.borderColor};
    box-shadow: none !important;
    border-right: none;
    height: 55px
    transition: 0.3s;
    padding: 0px ${Paddings.Large};
    font-size: 16px;
    color: #8686ac;
    width: 100%;
    -webkit-appearance: none;
    border-radius: 0px;
    border-top-left-radius: 3px;
    border-bottom-left-radius: 3px;
    box-sizing: border-box;
    &:focus {
        outline: none;
    }
`;

const ButtonContainer = styled.div`
    margin-top: ${Margins.Large};
    position: relative;
    width: 100%;
    display: flex;
    flex-wrap: wrap;
    max-width: 600px;
    @media (max-width: 768px) {
        width: 100%;
        justify-content: center;
        > div {
            width: 100%;
        }
        > button {
            margin-top: ${Margins.Large};
        }
    }
`;

const InputContainer = styled.div`
    flex-grow: 1;
    margin-right: ${Margins.Middle};
    display: flex;
`;

const Confirm = styled.div<{ disabled?: boolean }>`
    border: solid 1px #c4c4e2;
    background-color: #fff;
    width: 30px;
    height: 55px;
    border-top-right-radius: 3px;
    border-bottom-right-radius: 3px;
    border-left: none;
    display: flex;
    position: relative;
    box-sizing: border-box;
`;

const Checkmark = styled.div<{ show?: boolean }>`
    position: absolute;
    top: 17px;
    transition: 0.3s all;
    opacity: 0;
    &:after {
        content: '';
        display: block;
        width: 8px;
        height: 14px;
        border: solid ${(props) => props.theme.main};
        border-width: 0 3px 3px 0;
        transform: rotate(45deg);
    }
    ${(props) => props.show && 'opacity: 1.0'};
`;

const Error = styled.div<{ show?: boolean }>`
    position: absolute;
    left: 0px;
    top: 18px;
    width: 14px;
    height: 14px;
    opacity: 0;
    transition: 0.3s all;
    &:before,
    &:after {
        position: absolute;
        left: 3px;
        content: ' ';
        height: 20px;
        width: 3px;
        background-color: ${(props) => props.theme.errorRed};
    }
    &:before {
        transform: rotate(45deg);
    }
    &:after {
        transform: rotate(-45deg);
    }
    ${(props) => props.show && 'opacity: 1.0'};
`;

const Confirmation = styled.div`
    color: black;
`;

const Label = styled.label`
    text-indent: -10000px; // hide if offscreen, but still available.
`;

const subscribePlaceholder = 'Your email <3';

export const Subscribe = () => {
    const tracker = useTracker();
    const [cookie, setCookie] = useCookie('trality_subscribed');
    const [email, setEmail] = useState('');
    const { sending, send, error, setError, success } = useMailChimp();
    const cookieStorage: CookieStorage = CookieStorageProvider.Get();

    const isValidEmail = EmailRegex.test(email.toLowerCase());

    const onClick = () => {
        if (isValidEmail) {
            send(email);
        } else {
            setError('Invalid Email');
            setTimeout(() => setError(undefined), 1000);
        }
    };

    useEffect(() => {
        if (success) {
            setCookie('true');
            tracker.TrackEvent(createEvent(EventType.SubscribeCompleted, {}));
        }
    }, [success]);

    if (cookieStorage.Get('trality_subscribed')) {
        return (
            <ButtonContainer>
                <Confirmation>
                    <ArrowDown /> Awesome! Thank you for subscribing to our mailing list.
                </Confirmation>
            </ButtonContainer>
        );
    }

    return (
        <ButtonContainer>
            <InputContainer>
                <Label htmlFor="textEmailInput">{subscribePlaceholder}</Label>
                <Text
                    id="textEmailInput"
                    disabled={sending}
                    type="input"
                    placeholder={subscribePlaceholder}
                    value={email}
                    onChange={(ev) => setEmail(ev.target.value)}
                />
                <Confirm disabled={sending}>
                    <Checkmark show={isValidEmail && !sending && !error} />
                    <Error show={!!error && !sending} />
                    <Loader show={sending} />
                </Confirm>
            </InputContainer>
            <Button onClick={onClick} dark>
                Stay connected.
            </Button>
        </ButtonContainer>
    );
};
