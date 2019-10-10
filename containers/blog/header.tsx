import React from 'react';
import styled from 'styled-components';
import { Article } from './types';
import { TextBlock, KnowMore } from '@components';
import { Paddings, Margins } from 'theme';
import { Misc } from '@util';

const Container = styled.div`
    position: relative;
    width: 100%;
    height: 100%;
    margin-bottom: ${Margins.Large};
`;

const Description = styled.div`
    background-color: ${(props) => props.theme.background};
    padding: ${Paddings.VeryLarge};
    max-width: 50vw;
    position: absolute;
    left: 0;
    bottom: 0;
    z-index: 1;
    box-shadow: 0 5px 20px 0 rgba(0, 0, 0, 0.1);
    opacity: 0.95;
    @media (max-width: 768px) {
        width: 100%;
        max-width: 100vw;
        opacity: 0.8;
    }
`;

const ImageWrapper = styled.div<{ image?: string }>`
    min-width: 60vw;
    position: absolute;
    right: 0;
    bottom: 0;
    background-color: ${(props) => props.theme.bluePrimary};
    height: 100%;
    ${(props) =>
        props.image &&
        `
        background: url(${props.image}) no-repeat center;
        background-size: cover;
    `}
    @media (max-width: 768px) {
        width: 100%;
        max-width: 100vw;
    }
`;

export const BlogHeader: React.FC<Article> = (article) => {
    return (
        <Container>
            <Description>
                <h1>{article.header}</h1>
                <TextBlock>{article.subheader}</TextBlock>
                <div>
                    <div>
                        {article.author}, {Misc.FormatDate(article.date)}
                    </div>
                    <KnowMore to={`/blog/${article.link}`}>Read more </KnowMore>
                </div>
            </Description>
            <ImageWrapper image={article.image} />
        </Container>
    );
};
