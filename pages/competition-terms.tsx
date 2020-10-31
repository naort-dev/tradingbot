import * as React from 'react';
import styled from 'styled-components';
import { Layout } from '@containers';
import { Header } from '@components';

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
            content: counters(item, '.') ' ';
            counter-increment: item;
        }
    }
`;


const Terms = () => {
    return (
        <Layout.Page title="terms">
            <Layout.Section fullHeight noPadding id="overview">
                <Layout.Center>
                    Terms &amp; Conditions here. 
                </Layout.Center>
            </Layout.Section>
        </Layout.Page>
    );
};


export default Terms;
