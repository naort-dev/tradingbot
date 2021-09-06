import styled from 'styled-components';
import * as React from 'react';
import { ArrowRight } from './arrow';
import Router, { useRouter } from 'next/router';
import { Paddings, Margins } from '@theme';
import { useTracker, EventType, createEvent, EventProperties } from '@trality/web-tracking';

interface BProps {
    hollow?: boolean;
    knowmore?: boolean;
    small?: boolean;
    className?: string;
    dark?: boolean;
    border?: boolean;
    onClick?: (e: React.MouseEvent<HTMLButtonElement>) => void;
}

export const StyledButton = styled.button<BProps>`
    background-color: ${(props) => props.theme.main};
    color: white;
    border: 0;
    padding: 16px ${Paddings.Large};
    border-radius: 3px;
    font-size: 15px;
    font-weight: 600;
    font-style: normal;
    font-stretch: normal;
    line-height: 1.53;
    letter-spacing: normal;
    cursor: pointer;
    max-width: 250px;
    transition: 0.3s all;
    box-sizing: border-box;
    &:focus {
        outline: 0;
    }
    ${(props) =>
        props.border &&
        `
        border: 2px solid transparent;
    `}
    &:hover {
        opacity: 0.8;
    }
    ${(props) =>
        props.hollow &&
        `
        background-color: transparent;
        color: ${props.theme.main};
        border: 2px solid ${props.theme.main};
    `}
    ${(props) =>
        props.dark &&
        `
        background-color: #181927;
        color: #fff;
        &:hover {
            opacity: 0.9;
        }
    `}

    ${(props) =>
        props.small &&
        `
        padding-left: 22px;
        padding-right: 22px;
        padding-top: 11px;
        padding-bottom: 11px;
        @media (max-width: 768px) {
            padding-left: 22px;
            padding-right: 22px;
            padding-top: 7px;
            padding-bottom: 7px;
        }
    `}
    ${(props) =>
        props.knowmore &&
        `
        color: ${props.theme.main};
        background-color: transparent;
        border: none;
        padding-left: 0px;
        margin-top: ${Margins.Middle};
        &:hover {
            opacity: 1.0;
            margin-left: ${Margins.Small};
        }
    `}
    & > img {
        margin-right: ${Margins.Middle};
    }
`;

export interface ButtonProps<K extends keyof EventProperties = EventType> {
    to?: string;
    blank?: boolean;
    event?: { type: K; attributes: EventProperties[K] };
}

export function Button<K extends keyof EventProperties>(props: React.PropsWithChildren<BProps & ButtonProps<K>>) {
    const { children, to, blank, event, className, onClick, ...rest } = props;
    const tracker = useTracker();
    const router = useRouter();

    const onClickDefault = (e: React.MouseEvent<HTMLButtonElement>) => {
        e.preventDefault();
        if (event) {
            tracker.TrackEvent(createEvent(event.type, { ...event.attributes }));
        }
        if (to) {
            if (blank || to.startsWith('http')) {
                window.open(to, '_blank');
            } else {
                Router.push(to);
            }
        }
    };
    return (
        <StyledButton {...props} className={className} onClick={onClick || onClickDefault}>
            {children}
        </StyledButton>
    );
}

export const KnowMore: React.FunctionComponent<ButtonProps<EventType>> = ({ children, ...props }) => {
    return (
        <Button knowmore {...props}>
            <ArrowRight />
            {children}
        </Button>
    );
};
