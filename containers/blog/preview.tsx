import React from 'react';
import styled from 'styled-components';
import { Article } from './types';
import { Margins, Paddings } from 'theme';
import { Misc } from '@util';

const C = styled.div`
    display: flex;
    flex-wrap: wrap;
    width: 100%;
    justify-content: left;
    > a {
        text-decoration: none;
        width: 25%;
        margin-left: ${Margins.Middle};
        margin-bottom: ${Margins.Middle};
    }
`;

export const BlogPreviewContainer: React.FC = ({ children }) => {
    return <C>{children}</C>;
};

const I = styled.div`
    width: 100%;
    height: 320px;
    background-color: ${(props) => props.theme.background};
    box-shadow: 0 5px 20px 0 rgba(0, 0, 0, 0.1);
`;

const Bg = styled.div<{ image?: string }>`
    background-color: ${(props) => props.theme.bluePrimary};
    height: 40%;
    width: 100%;
    position: relative;
    overflow: hidden;
    > img {
        height: 100%;
        width: auto;
    }
    ${(props) =>
        props.image &&
        `
        background: url(${props.image}) no-repeat center;
        background-size: cover;
    `}
`;

const D = styled.div`
    padding: ${Paddings.Large};
    height: 60%;
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    > * {
        width: 100%;
        text-align: left;
        text-decoration: none;
    }
    > div > span:first-child {
        width: 100%;
        color: ${(props) => props.theme.bluePrimary};
        margin: 0px;
    }
    > div > h4 {
        margin: 0;
        margin-top: ${Margins.Middle};
        text-align: left;
    }
`;

export const BlogPreview: React.FC<Article> = (article) => {
    return (
        <I>
            <Bg image={article.imagePreview} />
            <D>
                <div>
                    <span>{article.author}</span>
                    <h4>{article.header}</h4>
                </div>
                <span>{Misc.FormatDate(article.date)}</span>
            </D>
        </I>
    );
};
