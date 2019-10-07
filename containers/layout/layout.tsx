import React from 'react';
import styled from 'styled-components';
import { useSection } from 'hooks/useSection';
import { DelayRenderer, useDelay } from 'hooks';
import { Paddings } from 'theme';

const SingleColumnWrapper = styled.div<{ collapseMobile?: boolean }>`
    width: 100%;
    height: 100%;
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
            padding: ${Paddings.Large} 0;
        `}
    }
`;

interface TwoColumnProps {
    width?: number;
    reverted?: boolean;
}

const TwoColumnWrapper = styled(SingleColumnWrapper)<TwoColumnProps>`
    ${(props) =>
        props.reverted &&
        `
        flex-direction: row-reverse;
    `}
    > div:first-child {
        width: ${(props) => (props.width ? props.width : 50)}%;
        @media (max-width: 768px) {
            width: 100%;
        }
    }
    > div:last-child {
        width: ${(props) => (props.width ? 100 - props.width : 50)}%;
        @media (max-width: 768px) {
            width: 100%;
        }
    }
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
    const { entered, seen } = useSection();
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
