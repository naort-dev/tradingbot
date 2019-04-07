import React from 'react';
import styled from 'styled-components';
import { useDark, DarkProp } from '../../hooks/dark';

const C = styled.div<DarkProp>`
    > h1 {
        font-size: 60px;
        font-weight: normal;
        font-style: normal;
        font-stretch: normal;
        line-height: 1.18;
        letter-spacing: normal;
        color: #181927;
        margin-bottom: 35px;
        text-align: left;
        @media (max-width: 768px) {
            font-size: 45px;
            text-align: center;
            max-width: 70vw;
        }
    }
    > p {
        color: #646482;
        margin-bottom: 28px;
        text-align: left;
        line-height: 1.53;
        @media (max-width: 768px) {
            text-align: justify;
        }
    }
    > ul {
        margin-bottom: 28px;
        padding-left: 0px;
        > li {
            font-weight: 500;
            margin-bottom: 10px;
            list-style: none;
        }
        > li::before {
            color: #00b3d8;
            content: '\\2022';
            font-size: 1.2em;
            padding-right: 1.1225em;
            position: relative;
            top: 0em;
        }
        @media (max-width: 768px) {
            text-align: left;
        }
    }
    > button {
        padding: 19px 41px;
        background-color: #f2fbfd;
        color: #00b3d8;
        font-weight: 500;
        letter-spacing: -0.3px;
        text-align: center;
        border-radius: 4px;
        border: none;
        cursor: pointer;
        margin-top: 15px;
        ${(props) =>
            props.dark &&
            `
            background-color: #192837;
        `}
    }
    @media (max-width: 768px) {
        text-align: center;
        display: flex;
        flex-direction: column;
        align-items: center;
        flex-wrap: wrap;
    }
`;

export const Content: React.FunctionComponent<{}> = (props) => {
    const { dark } = useDark();
    return <C dark={dark}>{props.children}</C>;
};
