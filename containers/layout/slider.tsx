import React, { useState, useCallback } from 'react';
import styled from 'styled-components';
import { Preload } from 'components/preload';
import { useInterval } from 'hooks/useInterval';
import { Loader, KnowMore } from '@components';

const SlideContainer = styled.div`
    width: 100%;
    height: 500px;
    display: flex;
`;

const Bar = styled.div`
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding-top: 15px;
    padding-left: 25px;
    padding-right: 25px;
`;

const Content = styled.div`
    height: 100%;
    overflow: hidden;
    display: flex;
    flex-grow: 1;
    position: relative;
    background-color: transparent;
    box-shadow: 0 5px 20px 0 rgba(0, 0, 0, 0.3);
    align-items: center;
    justify-content: center;
`;

const Item = styled.img`
    max-width: 100%;
    height: auto;
`;

const ItemWrapper = styled.div<{ visible?: boolean }>`
    display: flex;
    align-items: center;
    width: 100%;
    height: 100%;
    position: absolute;
    top: 0;
    left: 0;
    opacity: 0;
    transition: 0.3s opacity;
    ${(props) =>
        props.visible &&
        `
        opacity: 1;
    `}
`;

const MenuItem = styled.div<{ active?: boolean }>`
    padding: 20px;
    margin: 10px 20px;
    cursor: pointer;
    box-shadow: 0 0px 0px 0 rgba(0, 0, 0, 0);
    transition: 0.3s all;
    color: ${(props) => props.theme.font};
    max-width: 200px;
    border-radius: 5px;
    font-weight: 500;
    &:hover {
        box-shadow: 0 5px 20px 0 rgba(0, 0, 0, 0.1);
    }
    ${(props) =>
        props.active &&
        `
        box-shadow: 0 5px 20px 0 rgba(0,0,0,.1);    
        color: ${props.theme.lightPrimary};
        background-color: ${props.theme.darkPrimary};
    `}
`;

const LinkItem = styled.div`
    margin: 0px 20px;
    cursor: pointer;
    max-width: 200px;
    text-align: center;
    > button {
        padding: 0px;
    }
`;

const MenuIcon = styled.div`
    > img {
        max-height: 30px;
        margin-bottom: 15px;
    }
`;

const MenuText = styled.div`
    font-size: 15px;
    font-weight: 500;
`;

const LoaderCenter = styled.div`
    position: absolute;
    z-index: -1;
    top: 50%;
    left: 50%;
    margin-left: -14px;
    margin-top: -14px;
    width: 28px;
    height: 28px;
`;

interface SliderItem {
    name: string;
    source?: string;
    icon?: string;
}

interface SliderProps {
    items: SliderItem[];
    link?: {
        title: string;
        target: string;
    };
}

export const Slider: React.FC<SliderProps> = ({ items }) => {
    const [active, setActive] = useState(0);
    const [manual, setManual] = useState(0);

    const select = (idx: number) => {
        setManual(Date.now());
        setActive(idx);
    };

    const next = useCallback(() => {
        if (Date.now() - manual < 10000) {
            return;
        }
        let next = active + 1;
        if (next >= items.length) {
            next = 0;
        }
        setActive(next);
    }, [active, items, manual]);

    useInterval(next, 5000);

    return (
        <SlideContainer>
            <Content>
                {items.map((i, idx) => (
                    <ItemWrapper key={i.name} visible={active === idx}>
                        <Item src={i.source} />
                    </ItemWrapper>
                ))}
                <LoaderCenter>
                    <Loader show />
                </LoaderCenter>
            </Content>
            <Bar>
                {items.map((i, idx) => (
                    <MenuItem key={i.name} onClick={() => select(idx)} active={active === idx}>
                        <MenuIcon>{i.icon && <img src={i.icon} />}</MenuIcon>
                        <MenuText>{i.name}</MenuText>
                    </MenuItem>
                ))}
                <LinkItem style={{ display: 'none' }}>
                    <KnowMore>Getting started guide</KnowMore>
                </LinkItem>
            </Bar>
            <Preload images={items.filter((i) => i.source).map((i) => i.source as string)} />
        </SlideContainer>
    );
};
