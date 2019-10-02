import React, { useState, useCallback } from 'react';
import styled from 'styled-components';
import { Preload } from 'components/preload';
import { useInterval } from 'hooks/useInterval';

const SlideContainer = styled.div`
    width: 100%;
    height: 100%;
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
    box-shadow: 0 5px 20px 0 rgba(0, 0, 0, 0.1);
`;

const Item = styled.div<{ visible?: boolean; imageSrc?: string }>`
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
    background: url(${(props) => props.imageSrc}) no-repeat center;
    background-size: contain;
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

interface SliderItem {
    name: string;
    source?: string;
    icon?: string;
}

interface SliderProps {
    items: SliderItem[];
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
                    <Item key={i.name} imageSrc={i.source} visible={active === idx} />
                ))}
            </Content>
            <Bar>
                {items.map((i, idx) => (
                    <MenuItem key={i.name} onClick={() => select(idx)} active={active === idx}>
                        <MenuIcon>{i.icon && <img src={i.icon} />}</MenuIcon>
                        <MenuText>{i.name}</MenuText>
                    </MenuItem>
                ))}
            </Bar>
            <Preload images={items.filter((i) => i.source).map((i) => i.source as string)} />
        </SlideContainer>
    );
};
