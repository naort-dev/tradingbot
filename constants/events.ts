export enum Events {
    Signup = 'signup_initiated',
    Subscribed = 'subscribe_completed',
}

export enum SignupOrigins {
    HeaderCta = 'header_cta',
    NavigationBar = 'navbar',
    Footer = 'footer',
}

export const SignupAttribute = (origin: SignupOrigins) => {
    return {
        origin,
    };
};
