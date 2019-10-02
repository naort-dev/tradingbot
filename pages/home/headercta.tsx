import styled from 'styled-components';
import { useMixpanel } from 'hooks/mixpanel';
import { Button } from '@components';
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

export const HeaderCta = () => {
    const mixpanel = useMixpanel();

    const onClick = () => {
        mixpanel.track('clicked:signup');
        window.open('https://auth.beta.trality.com/#/signup', '_blank');
    };

    return (
        <Container>
            <h5>
                Trality is a platform for traders of all levels of experience to create automated trading bots. Use the most flexible tools to code,
                build, test and live-trade using our Creator tools. Follow or rent-out bots in our marketplace and bring your trading to a whole new
                level.
            </h5>
            <Bottom>
                <Button onClick={onClick}>Join now</Button>
                <div>
                    <Call src={Icons.ActionCall} />
                </div>
            </Bottom>
        </Container>
    );
};

export default HeaderCta;
