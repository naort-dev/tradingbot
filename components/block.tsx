import styled from 'styled-components';

export const Block = styled.div<{ margin: number; gap?: number; flexWrap?: boolean; mobileMargin: number }>`
    display: flex;
    margin-top: ${(props) => props.margin}px;
    & > * + * {
        ${(props) => props.gap && `margin-left: ${props.gap}px`}
    }
    @media only screen and (max-width: 750px) {
        flex-basis: 100%;
        flex-wrap: wrap;
        gap: 15px;
        & > * + * {
            margin-left: 0px;
            margin-top: 15px;
        }
        margin-top: ${(props) => props.mobileMargin}px;
    }

    ${(props) => props.flexWrap && `flex-wrap: wrap;`}
`;
