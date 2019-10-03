import React from 'react';
import styled from 'styled-components';
import { Blog } from './types';
import { decode } from '@util';

interface Props {
    article: Blog;
}

const Container = styled.div`
    width: 100%;
`;

const HeaderImage = styled.div<{ image?: string }>`
    height: 50vh;
    background-color: ${(props) => props.theme.bluePrimary};
    ${(props) =>
        props.image &&
        `
        background: url(${props.image}) no-repeat center;
        background-size: cover;
    `}
`;
const ContentContainer = styled.div`
    a {
        color: ${(props) => props.theme.bluePrimary};
    }
    img {
        max-width: 100%;
        text-align: center;
    }
    p < img {
        text-align: center;
    }
`;

export const BlogContent: React.FC<Props> = ({ article }) => {
    const html = decode(article.content);
    return (
        <Container>
            <HeaderImage image={article.image} />
            <ContentContainer dangerouslySetInnerHTML={{ __html: html }} />
        </Container>
    );
};
