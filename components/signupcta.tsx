import React from 'react';
import { Button } from '../theme';
import styled from 'styled-components';

import * as call from '../assets/images/actioncall_beta.svg';
import { useMixpanel } from '../hooks/mixpanel';

const Call = styled.img`
    margin-left:100px;
    margin-top: 15px;
`;

const Container = styled.div`
    margin-top: 25px;
    text-align: left !important;

    > div {
        text-align: center;

    }
    > button {
        display: block;
        margin-left: 0px;
        width:40%;

    }
`;

export const SignupCta: React.FC = () => {
    const mixpanel = useMixpanel();

    const onClick = () => {
        mixpanel.track('clicked:signup');
        window.open('https://auth.beta.trality.com/#/signup', '_blank');
    };

    return (
        <Container>
            <Button onClick={onClick}>Join now</Button>
            <Call src={call} />
        </Container>
    );
};
