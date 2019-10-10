import styled from 'styled-components';

export const Loader = styled.div<{ show?: boolean }>`
    position: absolute;
    width: 28px;
    height: 28px;
    top: 17px;
    left: -5px;
    z-index: 0;
    &:after {
        content: ' ';
        display: block;
        width: 20px;
        height: 20px;
        margin: 1px;
        border-radius: 50%;
        border: 3px solid ${(props) => props.theme.main};
        border-color: ${(props) => props.theme.main} transparent ${(props) => props.theme.main} transparent;
        animation: lds-dual-ring 1.2s linear infinite;
    }
    @keyframes lds-dual-ring {
        0% {
            transform: rotate(0deg);
        }
        100% {
            transform: rotate(360deg);
        }
    }
    ${(props) => (props.show ? 'display: block' : 'display: none')};
`;
