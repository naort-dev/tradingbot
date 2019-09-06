import * as React from 'react';
import styled from 'styled-components';
import { LayoutTop, Page } from '../theme';
import Link from 'next/link';
import * as arrow from '../assets/images/arrow-down.svg';
import { useMixpanel } from '../hooks/mixpanel';
import { useDark } from '../hooks/dark';

const Header = styled.h1`
    font-weight: normal;
    font-size: 42px;
    text-align: left;
    @media (max-width: 768px) {
        text-align: center;
    }
`;
const Subheader = styled.h2`
    font-weight: normal;
    font-size: 15px;
    text-align: left;
    margin-bottom: 50px;
    margin-top: 10px;
    @media (max-width: 768px) {
        text-align: center;
    }
`;

const Container = styled.div`
    margin-bottom: 50px;
    justify-content: left;
    text-align: left;
    ul {
        text-align: left;
    }
    font-size: 13px;
    @media (max-width: 768px) {
        width: 100%;
        padding-right: 25px;
        padding-left: 25px;
        text-align: center;
        font-size: 13px;
    }
    & > span {
        color: #00b3d8 !important;
    }
    > p {
        display: block;
        margin-top: 15px;
    }
`;

const Top = styled.div`
    display: flex;
    justify-content: space-between;
`;

const Section = styled.div<{ center?: boolean }>`
    margin-top: 15px;
    text-align: justify;

    line-height: 170%;
    width: 100%;
    ${(props) =>
        props.center &&
        `
        text-align: center;
        margin-bottom: 40px;
    `}



      ol {
        counter-reset: item;
        margin-top: 25px;
        li {
          display: block;
          margin: 15px 0;
          font-size: 13px;
        }
        li:before {
          margin-right: 10px;
          content: counters(item, ".") " ";
          counter-increment: item
        }
        }

`;

const Component: React.FunctionComponent<{}> = () => {
    const mixpanel = useMixpanel();
    let { dark, setDark } = useDark();
    React.useCallback(() => {
        mixpanel.track(`blog`);
    }, []);

    React.useEffect(() => {
        setDark(false);
    }, [dark]);

    React.useEffect(() => {
        if (typeof window !== 'undefined') {
            mixpanel.pageview('blog');
        }
    }, []);

    return (
        <Page>
            <LayoutTop>
                <div>
                    <Header>Blog</Header>
                        <Section>
                        <blockquote class="embedly-card" data-card-controls="0"><h4><a href="https://medium.com/trality/we-got-big-plans-7c7bba227fbd">We got Big Plans</a></h4><p>A first view on the product development roadmap of Trality. Ok, here it comes: Trality's first ever Medium story. I want to kick things off on this channel by giving you an "exclusive" glimpse at the roadmap we have set out for developing Trality over the coming months.</p></blockquote>
<script async src="//cdn.embedly.com/widgets/platform.js" charset="UTF-8"></script>
                        </Section>
                    </div>
            </LayoutTop>
        </Page>
    );
};

export default Component;
