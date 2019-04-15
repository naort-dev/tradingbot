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
    margin-bottom: 25px;
`;

const Q = styled.div<{ open: boolean }>`
    position: relative;
    width: 100%;
    border-bottom: 1px solid #6d7385;
    overflow: hidden;
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

const A = styled.div<{ open: boolean }>`
    margin-bottom: 0px;
    font-size: 15px;
    line-height: 1.53;
    text-align: left;
    margin-right: 50px;
    color: ${(props) => props.theme.onDark};
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
            <A open={open}>{props.children}</A>
        </Q>
    );
};

export const Slide4: React.FunctionComponent<{}> = () => {
    return (
        <LayoutTop>
            <Center>
                <Content>
                    <h1>Frequently asked questions.</h1>
                    <Question q="Where do i need to deposit money/how do i start trading?">
                        All you need is an account on your favorite crypto exchange as well as API keys, which allow access to it. We currently
                        support Binance and more exchanges will follow. For more info on connecting exchanges and APIs, please visit our wiki.
                    </Question>
                    <Question q="How do you guarantee that the bots on the marketplace arent used for scamming people?">
                        We have a state-of-the-art screening process in place, which will ensure only trustworthy bots to be published on the Bot
                        Marketplace. This includes a set of risk/return criteria as well as extensive scenario testing of each bot.
                    </Question>
                    <Question q="How do you guarantee that my algorithm remains safe and unseen by others?">
                        All bots are completely sandboxed and run individually. Your followers will never directly touch your bot or the underlying
                        code/algorithm. Instead, Trality only mirrors signals and portfolio distributions depending on the circumstances of the
                        individual follower. Logging, debugging and other functionality is not available for followers.
                    </Question>
                </Content>
            </Center>
        </LayoutTop>
    );
};
