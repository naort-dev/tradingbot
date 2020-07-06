import React from 'react';
import { PopupComponent } from '../types';
import { PopupLayout, Button } from '@components';

import * as Image from './popupcompetition.png';
import { ConstUrl } from '@constants';

export const PopupTradingSkills: PopupComponent = ({ id, onClose }) => {
    return (
        <>
            <PopupLayout.Left>
                <PopupLayout.Emoji>🙌</PopupLayout.Emoji>
                <h1>
                    Show your trading skills for a chance to win <b>2000€</b>
                </h1>
                <h2>
                    Sign up to Trality and submit your winning trading bot before <b>20/07/2020</b> and let it compete in a virtual trading
                    competition
                </h2>
                <Button onClick={() => onClose(ConstUrl.Signup)}>Compete now for free!</Button>
            </PopupLayout.Left>
            <PopupLayout.Right>
                <img src={Image} />
            </PopupLayout.Right>
        </>
    );
};
