import styled from 'styled-components';
import { useMixpanel } from 'hooks/mixpanel';
import { Button, TextBlock } from '@components';
import { Icons } from '@assets';

const Container = styled.div``;

const Bottom = styled.div`
margin-top: 25px;
text-align: left !important;

> div {
    text-align: left;
    width: 100%
    margin-top: 20px;
    @media (max-width: 768px) {
        text-align: center;
    }
}
> button {
    display: block;
    margin-left: 0px;
    width:40%;
    min-width: 150px;
    @media (max-width: 768px) {
        margin: auto;
    }
}
`;

const Call = styled.img`
    margin-left: 75px;
`;

/*
Trality lets traders of all levels of experience profit from trading bots. Use the Trality Creator Tools to code, build and optimize
                the most professional trading bots or, alternatively, simply follow created bots on the Trality Bot Marketplace. Cloud-based, 24/7,
                secure and encrypted! ✌️

                                Whether you to create or follow professional and profitable
                strategies, we bring your trading to a whole new level - 

Code, build, test and live-trade your trading strategies using our creator tools. Or follow them on our marketplace. The choice is up tp you.

Trality lets traders of all levels of experience profit from trading bots. Whether you to create or follow professional strategies,
                you've come to the right place! ✌️


*/

export const HeaderCta = () => {
    const mixpanel = useMixpanel();

    const onClick = () => {
        mixpanel.track('clicked:signup');
        window.open('https://auth.beta.trality.com/#/signup', '_blank');
    };

    return (
        <Container>
            <TextBlock>
                Code, build, optimize and live-trade your trading bots using our Creator tools. Or follow Creators on our marketplace on your mobile
                app. The choice is yours! ✌️
            </TextBlock>
            <Bottom>
                <Button onClick={onClick}>Try it for free!</Button>
                <div>
                    <Call src={Icons.ActionCall} />
                </div>
            </Bottom>
        </Container>
    );
};

export default HeaderCta;
