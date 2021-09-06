import styled from 'styled-components';

const C = styled.span`
    font-weight: normal;
    color: #2e3d48;
    animation: 1s blink step-end infinite;
    margin-right: 8px;
    font-size: 1.1em;
`;

export const Cursor = () => {
    return <C>|</C>;
};
