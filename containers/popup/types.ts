import { PopupSignupBonus } from './impl/popupsignupbonus';
import { PopupTradingSkills } from './impl/popuptradingskills';

export enum Popups {
    LaunchSignupBonus = 'd708ae3a-d275-4e60-817e-fad42c98d9b2',
    LaunchTradingSkills = '3548b87a-2d12-4106-8fa0-93a416c63bf0',
}

interface PopupProps {
    id: string;
    onClose: (link?: string) => void;
}

export type PopupComponent = React.FC<PopupProps>;

export interface PopupOptions {
    Component: PopupComponent;
    timeout?: number;
    utmCampaign?: string;
    default?: boolean;
}

export const PopupComponents: { [key: string]: PopupOptions } = {
    [Popups.LaunchSignupBonus]: { Component: PopupSignupBonus, utmCampaign: 'EUENGGeneral_Promo' },
    [Popups.LaunchTradingSkills]: { Component: PopupTradingSkills, utmCampaign: 'EUENGPython_Comp' },
};
