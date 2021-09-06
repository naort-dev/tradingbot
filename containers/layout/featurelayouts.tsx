import { LazyImage } from 'components/lazyImage';
import React from 'react';
import styled from 'styled-components';
import { Margins } from '@theme';

interface A {
    icon: any;
    header: string;
}

const Wrapper = styled.div`
    display: flex;
    margin: ${Margins.Large};
    @media (max-width: 768px) {
        flex-direction: column;
        align-items: center;
    }
`;

const Icon = styled.div`
    width: 70px;
    height: 80px;
    display: flex;
    justify-content: flex-start;
    align-items: center;
    margin-right: ${Margins.Large};
    @media (max-width: 768px) {
        justify-content: center;
    }
`;

const Content = styled.div`
    flex-grow: 1;
`;

const ImgWrapper = styled.div<{ scale: number }>`
    width: ${(props) => props.scale * 70}px;
    & > svg {
        height: auto;
        width: 100%;
    }
    & > img {
        height: auto;
        width: 100%;
    }
`;

export const FeatureTypeA: React.FC<A> = ({ icon, header, children }) => {
    const Item = icon;
    return (
        <Wrapper>
            <Icon>
                <ImgWrapper scale={1}>{typeof Item === 'string' ? <LazyImage src={Item} /> : <Item />}</ImgWrapper>
            </Icon>
            <Content>
                <h3>{header}</h3>
                <div>{children}</div>
            </Content>
        </Wrapper>
    );
};

export const FeatureLayouts = {
    TypeA: FeatureTypeA,
};
