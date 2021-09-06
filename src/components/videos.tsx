import { Videos } from '@assets';
import { Padding, PaddingSizes, MainContainer, Row, Cell, Headline, Surface, Text, Assets, HideMobile } from '@trality/web-ui-components';
import { useIsMobile } from '@hooks';
import React, { useState } from 'react';
import { StyledImage } from './lazyImage';
import { LazyVideo, StyledVideo } from './lazyVideo';

const videoSlider = [
    { video: Videos.CodeV2, title: 'Flexible Rule Builder to build logic', icon: Assets.CodeBuilder },
    { video: Videos.RuleV2, title: 'Powerful Python API to code algorithms', icon: Assets.RuleBuilder },
    { video: Videos.BacktestV2, title: 'Fast backtester to optimize your bots', icon: Assets.Backtest },
];

const Wrapper: React.FunctionComponent = ({ children }) => (
    <Padding
        size={{ top: PaddingSizes.Zero, bottom: PaddingSizes.Zero, left: PaddingSizes.Eighty, right: PaddingSizes.Zero }}
        mobileSize={{ top: PaddingSizes.Zero, bottom: PaddingSizes.Zero, left: PaddingSizes.Zero, right: PaddingSizes.Zero }}
    >
        {children}
    </Padding>
);

export const VideosContainer = () => {
    const mobile = useIsMobile();
    const [activeVideo, setActiveVideo] = useState(0);
    return (
        <Padding
            size={{ top: PaddingSizes.SixtyFour, bottom: PaddingSizes.SixtyFour, left: PaddingSizes.Zero, right: PaddingSizes.Zero }}
            mobileSize={{
                top: PaddingSizes.Zero,
                bottom: PaddingSizes.Zero,
                left: PaddingSizes.Zero,
                right: PaddingSizes.Zero,
            }}
        >
            <MainContainer>
                <Row>
                    <Cell size={12} mobileSize={12} align="center">
                        <Padding size={{ bottom: PaddingSizes.SixtyFour }}>
                            <Headline headlineType="Headline5">Fall in love with our Creator tools.</Headline>
                        </Padding>
                    </Cell>
                </Row>
                <Row>
                    <Cell size={8} mobileSize={12}>
                        <HideMobile>
                            <StyledVideo src={videoSlider[activeVideo].video} autoPlay={true} muted={true} />
                        </HideMobile>
                    </Cell>

                    <Cell size={4} mobileSize={12} alignVertical="middle">
                        <Row>
                            {videoSlider.map((item, i) => {
                                const itemComp = (
                                    <div style={{ cursor: 'pointer' }}>
                                        <Padding
                                            size={{
                                                top: PaddingSizes.Sixteen,
                                                bottom: PaddingSizes.Sixteen,
                                                left: PaddingSizes.TwentyFour,
                                                right: PaddingSizes.TwentyFour,
                                            }}
                                            mobileSize={{
                                                top: PaddingSizes.ThirtyTwo,
                                                bottom: PaddingSizes.ThirtyTwo,
                                                left: PaddingSizes.TwentyFour,
                                                right: PaddingSizes.TwentyFour,
                                            }}
                                        >
                                            <Row center>
                                                <Cell size={12} mobileSize={12} alignMobile="center">
                                                    <StyledImage src={item.icon} />
                                                </Cell>
                                            </Row>
                                            <Row center>
                                                <Cell size={12} mobileSize={12} alignMobile="center">
                                                    <Text bodyType="Body3">{item.title}</Text>
                                                </Cell>
                                            </Row>
                                        </Padding>
                                    </div>
                                );
                                return (
                                    <Cell size={12} mobileSize={12} onClick={() => setActiveVideo(i)} key={item.title}>
                                        {i === activeVideo && !mobile && (
                                            <Wrapper>
                                                <Surface>{itemComp}</Surface>
                                            </Wrapper>
                                        )}
                                        {(i !== activeVideo || mobile) && <Wrapper>{itemComp}</Wrapper>}
                                    </Cell>
                                );
                            })}
                        </Row>
                    </Cell>
                </Row>
            </MainContainer>
        </Padding>
    );
};
