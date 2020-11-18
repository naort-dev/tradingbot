import React, { useState, useCallback, useRef, useEffect, createRef } from 'react';
import styled from 'styled-components';
import { Preload } from 'components/preload';
import { useInterval } from 'hooks/useInterval';
import { Loader, KnowMore } from '@components';
import { Paddings, Margins } from 'theme';
import { isObject } from 'util';
import { useSection } from 'hooks/useSection';
import { useIsMobile } from 'hooks/useIsMobile';
import { LazyImage } from 'components/lazyImage';
import { LazyVideo } from 'components/lazyVideo';

const SlideContainer = styled.div`
    width: 100%;
    height: 500px;
    display: flex;
    margin-left: -${Margins.Large};
    @media (max-width: 768px) {
        justify-content: center;
        margin-left: 0;
    }
`;

const Bar = styled.div`
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding-top: ${Paddings.Middle};
    padding-left: 0;
    padding-right: ${Paddings.Large};
    user-select: none;
    @media (max-width: 768px) {
        padding: 0;
    }
`;

const Content = styled.div`
    height: 100%;
    overflow: hidden;
    display: flex;
    flex-grow: 1;
    position: relative;
    background-color: transparent;
    align-items: center;
    justify-content: center;
    @media (max-width: 768px) {
        display: none;
    }
`;

const Item = styled(LazyImage)<{ video?: boolean }>`
    max-width: 100%;
    height: auto;
    box-shadow: 0 5px 20px 0 rgba(0, 0, 0, 0.3);
`;

/*
max-width: 100%;
    height: auto;
    position: absolute;
    left: 0;
    top: 0;
*/

const VideoItem = styled(LazyVideo)`
    height: 100%;
    @media (max-width: 1100px) {
        height: auto;
        width: 100%;
    }
`;

const ItemWrapper = styled.div<{ visible?: boolean }>`
    display: flex;
    align-items: center;
    justify-content: center;
    justify-content: flex-end;
    padding-right: ${Margins.Large};
    height: 100%;
    width: 100%;
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

const ShadowWrapper = styled.div`
    box-shadow: 0 5px 10px 0 rgba(0, 0, 0, 0.3);
    height: calc(100% - 30px);
    @media (max-width: 1100px) {
        height: auto;
        width: calc(100% - 30px);
    }
`;

const MenuItem = styled.div<{ active?: boolean }>`
    padding: ${Paddings.Large};
    margin: ${Margins.Small} ${Margins.Large};
    cursor: pointer;
    box-shadow: 0 0px 0px 0 rgba(0, 0, 0, 0);
    transition: 0.3s all;
    color: ${(props) => props.theme.font};
    max-width: 200px;
    border-radius: 5px;
    font-weight: 500;
    &:hover {
        box-shadow: 0 5px 20px 0 rgba(0, 0, 0, 0.1);
        @media (max-width: 768px) {
            box-shadow: none;
        }
    }
    @media (max-width: 768px) {
        text-align: center;
        box-shadow: none;
        margin: ${Margins.Large} 0;
        padding: 0;
    }
    ${(props) =>
        props.active &&
        `
        box-shadow: 0 5px 20px 0 rgba(0,0,0,.1);    
        color: ${props.theme.lightPrimary};
        background-color: ${props.theme.darkPrimary};
        @media (max-width: 768px) {
            color: ${props.theme.font};
            background-color: transparent;
            text-align: center;
            box-shadow: none;
        }
    `}
`;

const LinkItem = styled.div`
    margin: 0px ${Margins.Large};
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
        margin-bottom: ${Margins.Middle};

        @media (max-width: 768px) {
            max-height: 70px;
            margin-top: ${Margins.Middle};
        }
    }
`;

const MenuText = styled.div`
    font-size: 15px;
    font-weight: 500;
    @media (max-width: 768px) {
        color: ${(props) => props.theme.fontHeader};
    }
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
    timeout?: number;
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
    const ref = useRef([...Array(items.length)].map(() => createRef<HTMLVideoElement>()));
    const { entered } = useSection();
    const isMobile = useIsMobile();

    const select = (idx: number) => {
        setManual(Date.now());
        setActive(idx);
    };

    const next = useCallback(() => {
        if (Date.now() - manual < (items[active].timeout || 10000) + 1000) {
            return;
        }
        let next = active + 1;
        if (next >= items.length) {
            next = 0;
        }
        setActive(next);
    }, [active, items, manual]);

    //useInterval(next, items[active].timeout || 5000);

    useEffect(() => {
        if (ref.current && ref.current[active] && ref.current[active].current) {
            const video = ref.current[active].current;
            if (video && video.pause) {
                video.pause();
                video.currentTime = 0;
                video.load();
            }
        }
    }, [active, ref.current]);

    return (
        <SlideContainer>
            <Content>
                {items.map((i, idx) => {
                    const video = i.source && i.source.endsWith('.mp4');
                    const Renderer: any = video ? VideoItem : Item;
                    return (
                        <ItemWrapper key={i.name} visible={active === idx} id={`vid-${idx}`}>
                            <ShadowWrapper>
                                <Renderer src={i.source} video={video} autoPlay={!isMobile} loop muted={true} ref={ref.current[idx]} />
                            </ShadowWrapper>
                        </ItemWrapper>
                    );
                })}
                <LoaderCenter>
                    <Loader show />
                </LoaderCenter>
            </Content>
            <Bar>
                {items.map((i, idx) => (
                    <MenuItem key={i.name} onClick={() => select(idx)} active={active === idx}>
                        <MenuIcon>{i.icon && <LazyImage alt={i.name} src={i.icon} />}</MenuIcon>
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
