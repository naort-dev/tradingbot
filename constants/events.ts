export enum Events {
    Signup = 'signup_initiated',
    Subscribed = 'subscribe_completed',
    Pageview = 'pageview',
}

export enum SignupOrigins {
    HeaderCta = 'header_cta',
    NavigationBar = 'navbar',
    Footer = 'footer',
    PricingPawn = 'pricing_pawn',
    PricingRook = 'pricing_rook',
    PricingKnight = 'pricing_knight',
    PricingQueen = 'pricing_queen',
}

export const SignupAttribute = (origin: SignupOrigins) => {
    return {
        origin,
    };
};
