import React from 'react';
import styled from 'styled-components';
import { useSection } from '@hooks';
import { DelayRenderer, useDelay } from '@hooks';
import { Paddings } from '@theme';

const SingleColumnWrapper = styled.div<{ collapseMobile?: boolean }>`
    width: 100%;
    display: flex;
    position: relative;
    flex-wrap: wrap;

    @media (max-width: 768px) {
        text-align: center;
        min-height: 80vh;
        align-items: center;
        height: auto;
        ${(props) =>
            props.collapseMobile &&
            `
            min-height: auto;
            padding: ${Paddings.Middle} 0;
        `}
    }
`;

interface TwoColumnProps {
    columnWidth?: number;
    reverted?: boolean;
    mobileWithHeader?: boolean;
    mobileReverted?: boolean;
    collapseMobile?: boolean;
    border?: boolean;
}

const TwoColumnWrapper = styled(SingleColumnWrapper)<TwoColumnProps>`
    > div:first-of-type {
        width: ${(props) => (props.columnWidth ? props.columnWidth : 50)}%;
        ${(props) =>
            props.border &&
            `
            border-right: 1px solid ${props.theme.borderColor};
        `}
        @media (max-width: 768px) {
            width: 100%;
            border-right: 0;
        }
    }
    > div:last-child {
        width: ${(props) => (props.columnWidth ? 100 - props.columnWidth : 50)}%;
        @media (max-width: 768px) {
            width: 100%;
        }
    }
    ${(props) =>
        props.reverted &&
        `
    flex-direction: row-reverse;
    ${
        props.mobileReverted !== undefined &&
        `
        flex-direction: ${props.mobileReverted ? 'row-reverse' : 'row'};
    `
    }
`}
`;

export const OneColumn: React.FC<{ collapseMobile?: boolean }> = ({ children, ...props }) => {
    return <SingleColumnWrapper {...props}>{children}</SingleColumnWrapper>;
};

export const TwoColumn: React.FC<TwoColumnProps> = ({ children, ...props }) => {
    return <TwoColumnWrapper {...props}>{children}</TwoColumnWrapper>;
};

const ThreeColumnWrapper = styled.div`
    display: grid;
    width: 100%;
    position: relative;
    grid-column-gap: 2em;
    grid-template-areas:
        'h h h'
        'a b c';

    @media (max-width: 768px) {
        display: flex;
        flex-direction: column;
    }
`;

const ThreeColumnContainer: React.FC = ({ children }) => {
    return (
        <ThreeColumnWrapper>
            <DelayRenderer multiplier={0.65}>{children}</DelayRenderer>
        </ThreeColumnWrapper>
    );
};

type ThreeColumSelector = 'a' | 'b' | 'c';

const ThreeColumnItemWrapper = styled.div<{ area: ThreeColumSelector; seen?: boolean; delay: number }>`
    grid-area: ${(props) => props.area};
    opacity: 0;
    transition: 0.3s all;
    transition-delay: ${(props) => props.delay}s;
    text-align: center;
    ${(props) =>
        props.seen &&
        `
        opacity: 1.0;
    `}
    > img {
        max-width: 100%;
    }
    @media (max-width: 768px) {
        margin-bottom: 25px;
        padding-bottom: 25px;
    }
`;

const ThreeColumnItem: React.FC<{ area: ThreeColumSelector }> = ({ children, ...props }) => {
    const { seen } = useSection();
    const { delay } = useDelay();
    return (
        <ThreeColumnItemWrapper {...props} seen={seen} delay={delay}>
            {children}
        </ThreeColumnItemWrapper>
    );
};

const ThreeColumnHeaderWrapper = styled.div`
    grid-area: h;
`;

const ThreeColumnHeader: React.FC = ({ children }) => {
    return <ThreeColumnHeaderWrapper>{children}</ThreeColumnHeaderWrapper>;
};

export const ThreeColumn = {
    Container: ThreeColumnContainer,
    Column: ThreeColumnItem,
    Header: ThreeColumnHeader,
};

const SingleRowWrapper = styled.div`
    height: 100%;
    display: flex;
    position: relative;
    flex-direction: column;
`;

export const OneRow: React.FC = ({ children }) => {
    return <SingleRowWrapper>{children}</SingleRowWrapper>;
};

const TwoRowsWrapper = styled(SingleRowWrapper)`
    > div {
        height: 50%;
    }
`;

export const TwoRows: React.FC = ({ children }) => {
    return <TwoRowsWrapper>{children}</TwoRowsWrapper>;
};
