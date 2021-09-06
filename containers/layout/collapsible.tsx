import React from 'react';
import styled from 'styled-components';
import { Margins } from '@theme';

const Q = styled.div`
    position: relative;
    width: 100%;
    border-bottom: 1px solid ${(props) => props.theme.borderColor};
    overflow: hidden;
`;

const H = styled.div`
    font-size: 25px;
    letter-spacing: -0.5px;
    text-align: left;
    margin: ${Margins.Large} 0px;
    margin-right: ${Margins.VeryLarge};
    cursor: pointer;
    @media (max-width: 768px) {
        font-size: 19px;
        letter-spacing: -0.1px;
    }
`;

const A = styled.div<{ open: boolean }>`
    margin-bottom: 0px;
    font-size: 15px;
    line-height: 1.53;
    text-align: left;
    margin-right: ${Margins.VeryLarge};
    color: ${(props) => props.theme.font};
    height: 0;
    overflow: hidden;
    opacity: 0;
    ${(props) =>
        props.open &&
        `
        height: auto;
        opacity: 1.0;
        margin-bottom: 23px;
    `}
    transition: all 0.5s;
    @media (max-width: 768px) {
        margin-right: 0;
    }
`;

const Indicator = styled.div`
    width: 19px;
    height: 19px;
    object-fit: contain;
    border-radius: 3px;
    border: 1px solid ${(props) => props.theme.borderColor};
    position: absolute;
    right: 0px;
    top: 35px;
    display: flex;
    align-items: center;
    justify-content: center;
    font-weight: 500;
    cursor: pointer;
`;

interface Props {
    title: string;
}

export const Collapsible: React.FunctionComponent<Props> = (props) => {
    let [open, setOpen] = React.useState(false);
    const toggleOpen = React.useCallback(() => {
        setOpen(!open);
    }, [open]);
    return (
        <Q onClick={toggleOpen}>
            <Indicator>{open ? '-' : '+'}</Indicator>
            <H>{props.title}</H>
            <A open={open}>{props.children}</A>
        </Q>
    );
};
