import { MainContainer, Row, Cell, Padding, PaddingSizes, Headline, TextLink, HideMobile } from '@trality/web-ui-components';
import * as React from 'react';
import { BlogData } from './blogdata';

export const Blog = () => {
    return (
        <MainContainer>
            <Row>
                <Cell size={6} mobileSize={12}>
                    <Padding
                        size={{ top: PaddingSizes.SixtyFour, bottom: PaddingSizes.SixtyFour }}
                        mobileSize={{
                            top: PaddingSizes.FiftySix,
                            bottom: PaddingSizes.FiftySix,
                        }}
                    >
                        <Headline headlineType="Headline5">Featured Blogs</Headline>
                    </Padding>
                </Cell>
                <Cell size={6} mobileSize={12} align="right" alignVertical="middle">
                    <HideMobile>
                        <TextLink href="https://www.trality.com/blog" withArrow bold>
                            Read more
                        </TextLink>
                    </HideMobile>
                </Cell>
            </Row>
            <BlogData />
        </MainContainer>
    );
};
