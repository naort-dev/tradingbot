import styled from 'styled-components';
import * as React from 'react';
import { ArrowDown, ArrowRight } from './arrow';
import Router from 'next/router';
import { Paddings, Margins } from 'theme';

export const Button = styled.button<{ hollow?: boolean; knowmore?: boolean; small?: boolean; dark?: boolean; border?: boolean }>`
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

interface Props {
    to?: string;
    blank?: boolean;
}

export const KnowMore: React.FunctionComponent<Props> = ({ children, to, blank }) => {
    const onClick = () => {
        if (to) {
            if (blank) {
                window.open(to, '_blank');
            } else {
                Router.push(to);
            }
        }
    };

    return (
        <Button knowmore onClick={onClick}>
            <ArrowRight />
            {children}
        </Button>
    );
};
