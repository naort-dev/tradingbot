import React from 'react';
import { Button } from '../theme';
import styled from 'styled-components';

import * as call from '../assets/images/actioncall_beta.svg';
import { useMixpanel } from '../hooks/mixpanel';

const Call = styled.img`
    margin-left:75px;
`;

const Container = styled.div`
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

export const SignupCta: React.FC = () => {
    const mixpanel = useMixpanel();

    const onClick = () => {
        mixpanel.track('clicked:signup');
        window.open('https://auth.beta.trality.com/#/signup', '_blank');
    };

    return (
        <Container>
            <Button onClick={onClick}>Join now</Button>
            <div>
              <Call src={call} />
            </div>
        </Container>
    );
};
