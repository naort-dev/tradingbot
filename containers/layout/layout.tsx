import React from 'react';
import styled from 'styled-components';
import { useSection } from 'hooks/useSection';

const SingleColumnWrapper = styled.div`
    width: 100%;
    display: flex;
    position: relative;
    flex-wrap: wrap;

    @media (max-width: 768px) {
        text-align: center;
        min-height: 80vh;
        align-items: center;
    }
`;

const TwoColumnWrapper = styled(SingleColumnWrapper)`
    > div {
        width: 50%;
        @media (max-width: 768px) {
            width: 100%;
            height: 100%;
        }
    }
`;

export const OneColumn: React.FC = ({ children }) => {
    return <SingleColumnWrapper>{children}</SingleColumnWrapper>;
};

export const TwoColumn: React.FC = ({ children }) => {
    return <TwoColumnWrapper>{children}</TwoColumnWrapper>;
};

const ThreeColumnWrapper = styled.div`
    display: grid;
    width: 100%;
    position: relative;
    grid-column-gap: 2em;
    grid-template-areas:
        'h h h'
        'a b c'
        'a b c'
        'a b c';

    @media (max-width: 768px) {
        display: flex;
        flex-direction: column;
    }
`;

const ThreeColumnContainer: React.FC = ({ children }) => {
    return <ThreeColumnWrapper>{children}</ThreeColumnWrapper>;
};

type ThreeColumSelector = 'a' | 'b' | 'c';
const ThreeColumDelay = {
    a: 0,
    b: 0.2,
    c: 0.4,
};

const ThreeColumnItemWrapper = styled.div<{ area: ThreeColumSelector; seen?: boolean }>`
    grid-area: ${(props) => props.area};
    opacity: 0;
    transition: 0.3s all;
    transition-delay: ${(props) => ThreeColumDelay[props.area]}s;
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
        margin: 0px 30px;
        margin-bottom: 30px;
    }
`;

const ThreeColumnItem: React.FC<{ area: ThreeColumSelector }> = ({ children, ...props }) => {
    const { entered, seen } = useSection();
    return (
        <ThreeColumnItemWrapper {...props} seen={seen}>
            {children}
        </ThreeColumnItemWrapper>
    );
};

const ThreeColumnHeaderWrapper = styled.div`
    grid-area: h;
    margin-bottom: 45px;
    @media (max-width: 768px) {
        margin-bottom: 15px;
    }
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
