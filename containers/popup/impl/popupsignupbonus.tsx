import React from 'react';
import { PopupComponent } from '../types';
import { PopupLayout, Button } from '@components';

import * as Image from './popupcompetition.png';
import { ConstUrl } from '@constants';

export const PopupSignupBonus: PopupComponent = ({ id, onClose }) => {
    return (
        <>
            <PopupLayout.Left>
                <PopupLayout.Emoji>👑</PopupLayout.Emoji>
                <h1>Sign up now and save 60€!</h1>
                <h2>
                    Sign up to Trality until <b>13/07/2020</b> and we will give you one month of our Queen plan for free!
                </h2>
                <h3>
                    Experience unlimited trading volume, tick intervals as low as 1m, large number of parallel bots all while using the world’s best
                    Trading Bot Creator tools available in private trading!
                </h3>
                <Button onClick={() => onClose(ConstUrl.Signup)}>Start creating for free!</Button>
            </PopupLayout.Left>
            <PopupLayout.Right>
                <img src={Image} />
            </PopupLayout.Right>
        </>
    );
};
