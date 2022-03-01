import { Navigation } from '@theme';
import * as React from 'react';
import { styled, Text, Button, Cell, Row, MainContainer, PaddingSizes, Padding, device, HideDesktop } from '@trality/web-ui-components';
import * as CloseBtn from '../../assets/images/ic_close_mobile.svg';
import { isDissmissed, setSessionDismissed } from '../../util/session';

const BannerWrapper = styled.div`
    color: ${(props) => props.theme.colors.white.main};
    background-color: ${(props) => props.theme.colors.black.main};
    width: 100%;
    max-height: 72px;
    position: fixed;
    top: 0px;
    z-index: 100;
    @media ${device.tablet} {
        max-height: fit-content;
        position: fixed;
        padding-top: ${Navigation.Height};
    }
`;

const BannerText = styled(Text)`
    color: ${(props) => props.theme.colors.white.main};
    display: inline-block;
    font-size: ${PaddingSizes.Sixteen}px; // Special temporary text style
    line-height: ${PaddingSizes.TwentyFour}px; // Special temporary text style
    font-family: 'BasierSquareMedium'; // Special temporary text style
    @media ${device.tablet} {
        width: 80%;
    }
`;

const ComeptitionPlaceholder = styled.div`
    margin-bottom: 180px;
`;

const ButtonPadding = styled(Padding)`
    display: inline-block;
    @media ${device.tablet} {
        display: block;
        & > * {
            width: 100%;
        }
    }
`;

const CloseContainer = styled.div`
    position: absolute;
    top: 0px;
    right: 0px;
    height: 24px;
    width: 24px;
    cursor: pointer;
    display: none;
    @media ${device.tablet} {
        display: block;
    }
`;

const CompCell = styled(Cell)`
    position: relative;
`;

export const CompetitionBanner = () => {
    const [dismissed, setDismissed] = React.useState(() => (isDissmissed() ? true : false));

    const onDismiss = () => {
        setDismissed(true);
        setSessionDismissed();
    };

    if (dismissed) {
        return null;
    }
    return (
        <>
            <BannerWrapper>
                <Padding size={{ top: PaddingSizes.Sixteen, bottom: PaddingSizes.Sixteen }}>
                    <MainContainer>
                        <Row>
                            <CompCell size={12} mobileSize={12} align="center" alignMobile="left" alignVertical="middle">
                                <BannerText bodyType="Body1">
                                    The Trality Trading Competition (2022) | March 1 - May 16, 2022 | 60,000 USDT Prize Pool
                                </BannerText>
                                <ButtonPadding
                                    size={{ left: PaddingSizes.Fourty }}
                                    mobileSize={{ left: PaddingSizes.Zero, top: PaddingSizes.TwentyFour }}
                                >
                                    <Button onClick={() => window.location.assign('/competition')} size="medium">
                                        Learn more
                                    </Button>
                                </ButtonPadding>
                                <CloseContainer onClick={onDismiss}>
                                    <img src={CloseBtn} />
                                </CloseContainer>
                            </CompCell>
                        </Row>
                    </MainContainer>
                </Padding>
            </BannerWrapper>

            <HideDesktop>
                <ComeptitionPlaceholder />
            </HideDesktop>
        </>
    );
};
