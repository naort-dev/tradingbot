import styled from 'styled-components';
import * as React from 'react';
import { ArrowDown } from './arrow';

export const Button = styled.button<{ hollow?: boolean; knowmore?: boolean; small?: boolean; dark?: boolean }>`
    background-color: ${(props) => props.theme.main};
    color: white;
    border: 0;
    padding-left: 30px;
    padding-right: 30px;
    padding-top: 16px;
    padding-bottom: 16px;
    border-radius: 3px;
    font-size: 15px;
    font-weight: 600;
    font-style: normal;
    font-stretch: normal;
    line-height: 1.53;
    letter-spacing: normal;
    cursor: pointer;
    max-height: 55px;
    transition: 0.3s all;
    &:hover {
        opacity: 0.8;
    }
    ${(props) =>
        props.hollow &&
        `
        background-color: transparent;
        color: ${props.theme.main};
        border: 1px solid ${props.theme.main};
        &:hover {
            border: 1px solid black;
        }
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
        margin-top: 10px;
        cursor: auto;
        &:hover {
            opacity: 1.0;
        }
    `}
    & > img {
        margin-right: 10px;
    }

`;

export const KnowMore: React.FunctionComponent<{}> = (props) => {
    return (
        <Button knowmore>
            <ArrowDown />
            {props.children}
        </Button>
    );
};
