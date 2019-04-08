import * as React from 'react';
import { LayoutTop } from '../../theme';
import styled from 'styled-components';
import { Content } from '../general';

const Center = styled.div`
    width: 80%;
    @media (max-width: 768px) {
        width: 80%;
    }
    @media (max-width: 468px) {
        width: 90%;
    }
`;

const Q = styled.div<{ open: boolean }>`
    position: relative;
    width: 100%;
    border-bottom: 1px solid #6d7385;
    height: 80px;
    overflow: hidden;
    transition: height 0.5s;
    ${(props) =>
        props.open &&
        `
        height: auto;
    `}
`;

const H = styled.div`
    font-size: 25px;
    letter-spacing: -0.5px;
    text-align: left;
    color: #ffffff;
    margin: 30px 0px;
    margin-right: 50px;
    cursor: pointer;
    @media (max-width: 768px) {
        font-size: 19px;
        letter-spacing: -0.1px;
    }
`;

const A = styled.div`
    color: #6d7385;
    margin-bottom: 23px;
    font-size: 15px;
    line-height: 1.53;
    text-align: left;
    margin-right: 50px;
`;

const Indicator = styled.div`
    width: 19px;
    height: 19px;
    object-fit: contain;
    border-radius: 3px;
    border: 1px solid #6d7385;
    color: #fff;
    position: absolute;
    right: 0px;
    top: 35px;
    display: flex;
    align-items: center;
    justify-content: center;
    font-weight: 500;
    cursor: pointer;
`;

interface QuestionProp {
    q: string;
}

const Question: React.FunctionComponent<QuestionProp> = (props) => {
    let [open, setOpen] = React.useState(false);
    const toggleOpen = React.useCallback(() => {
        setOpen(!open);
    }, [open]);
    return (
        <Q onClick={toggleOpen} open={open}>
            <Indicator>{open ? '-' : '+'}</Indicator>
            <H>{props.q}</H>
            <A>{props.children}</A>
        </Q>
    );
};

export const Slide4: React.FunctionComponent<{}> = (props) => {
    return (
        <LayoutTop>
            <Center>
                <Content>
                    <h1>The most frequently asked questions</h1>
                    <Question q="How long can I follow a bot">
                        Some traders just love to build custom trading bots. They are wizards with technical analysis and they want to maintain and
                        improve their bots constantly.
                    </Question>
                    <Question q="How long can I follow a bot">
                        Some traders just love to build custom trading bots. They are wizards with technical analysis and they want to maintain and
                        improve their bots constantly.
                    </Question>
                    <Question q="How long can I follow a bot">
                        Some traders just love to build custom trading bots. They are wizards with technical analysis and they want to maintain and
                        improve their bots constantly.
                    </Question>
                </Content>
            </Center>
        </LayoutTop>
    );
};
