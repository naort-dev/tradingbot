import * as React from 'react';
import styled from 'styled-components';
import { LayoutTop, Page } from '../theme';
import Link from 'next/link';
import * as arrow from '../assets/images/arrow-down.svg';
import { useMixpanel } from '../hooks/mixpanel';
import { useDark } from '../hooks/dark';

const Header = styled.h1`
    font-weight: normal;
    font-size: 42px;
    text-align: left;
    @media (max-width: 768px) {
        text-align: center;
    }
`;
const Subheader = styled.h2`
    font-weight: normal;
    font-size: 15px;
    text-align: left;
    margin-bottom: 50px;
    margin-top: 10px;
    @media (max-width: 768px) {
        text-align: center;
    }
`;

const Container = styled.div`
    margin-bottom: 50px;
    justify-content: left;
    text-align: left;
    ul {
        text-align: left;
    }
    font-size: 13px;
    @media (max-width: 768px) {
        width: 100%;
        padding-right: 25px;
        padding-left: 25px;
        text-align: center;
        font-size: 13px;
    }
    & > span {
        color: #00b3d8 !important;
    }
    > p {
        display: block;
        margin-top: 15px;
    }
`;

const Top = styled.div`
    display: flex;
    justify-content: space-between;
`;

const Section = styled.div<{ center?: boolean }>`
    margin-top: 15px;
    width: 100%;
    ${(props) =>
        props.center &&
        `
        text-align: center;
        margin-bottom: 40px;
    `}
`;

const Component: React.FunctionComponent<{}> = () => {
    const mixpanel = useMixpanel();
    let { dark, setDark } = useDark();
    React.useCallback(() => {
        mixpanel.track(`imprint`);
    }, []);

    React.useEffect(() => {
        setDark(false);
    }, [dark]);

    React.useEffect(() => {
        if (typeof window !== 'undefined') {
            mixpanel.pageview('imprint');
        }
    }, []);

    return (
        <Page>
            <LayoutTop>
                <div>
                    <Header>Terms Of Service</Header>
                    <Subheader>(information in accordance with Article 13 GDPR)</Subheader>
                    <Container>
                        <Top>
                            <div>
                                <b>Controller of all processing activities is:</b>
                                <p>TRALITY GmbH</p>
                                <p>Novaragasse 19/9 AT-1020 Wien</p>
                                <p>Email: legal@trality.com</p>
                                <p>UID: ATU73931338</p>
                                <p>Company Register: 504493b, Commercial Court Vienna</p>
                                <p>Member of the Austrian Economic Chambers</p>
                            </div>
                            <div>
                                <b>Date: 18 July 2019</b>
                            </div>
                        </Top>
                        <Section center>
                            For all inquiries concerning the protection of your personal data please contact TRALITY GmbH legal@trality.com
                        </Section>
                        <Section>
                            <h2>1.Who We Are and What this Policy Is</h2>
                            <div>
                                Welcome to https://www.trality.com, the website of TRALITY GmbH, Novaragasse 19/9, 1020 Wien, Austria (FN 504493 b)
                                (“TRALITY,” “we,” “us” and “our” etc.). We are a software and online services provider firm. For additional
                                information, please visit https://www.trality.com. We respect the privacy of the users of our website and our services
                                (“you”, “your”) and are committed to protecting your personal data and information according to the applicable law.
                                For this reason, your data will be used exclusively on the basis of the applicable legal provisions, in particular the
                                National Data Protection Act (DSG), the General Data Protection Regulation (GDPR) as well as the Federal Act enacting
                                the Telecommunications Act (TKG 2003). This privacy policy (“Policy”) explains how, to what extent and for what
                                purposes we are collecting and subsequently processing personal data and information through our website. TRALITY is
                                the responsible entity ("controller") for the processing of your personal data and information on this website.
                            </div>
                        </Section>
                        <Section>
                            <h2>2.Definitions</h2>
                            <div>
                                “Personal Information” means any information that either (a) personally identifies a natural person; or (b) pertains
                                to an identifiable natural person, i.e. someone who can be identified, directly or indirectly, in particular, by
                                reference to an identifier such as a name, an identification number, location data, an online identifier or to one or
                                more factors specific to his or her physical, physiological, genetic, mental, economic, cultural or social identity,
                                or (c) constitutes individually identifiable information about an individual consumer collected by us online through
                                this website and that we maintain in an accessible form, or that (d) we are otherwise required to protect under
                                applicable data privacy laws (including, but not limited to, national, international and supranational data protection
                                and privacy laws, directives, regulations and comparable legal acts). Examples of Personal Information include your
                                contact details such as your name, email address, birthday or phone number as well as information about your
                                professional education and experience, skills, preferences, membership in professional organizations, etc.;
                                “Processing” means any operation or set of operations which is performed on Personal Information or on sets of
                                Personal Information, whether or not by automated means, such as the collection, recording, organization, structuring,
                                storage, adaptation or alteration, retrieval, consultation, use, disclosure by transmission, dissemination or
                                otherwise making available, alignment or combination, blocking, restriction, erasure or destruction; “Sensitive
                                Personal Information” means Personal Information revealing racial or ethnic origin, political opinions, religious or
                                philosophical beliefs, or trade union membership, and the Processing of genetic data, biometric data for the purpose
                                of uniquely identifying a natural person, data concerning health or data concerning a natural person's sex life or
                                sexual orientation; “Site” means / and all web pages hosted at that domain.
                            </div>
                        </Section>
                        <Section>
                            <h2>3.Processing of Your Personal Information</h2>
                            <div>
                                We process personal data
                                <ul>
                                    <li>
                                        {' '}
                                        for the purposes of the performance of our (pre-) contractual duties (art 6 para 1 point b GDPR; eg in case we
                                        provide any information to you upon your request) according to our contractual relationship with you or
                                    </li>
                                    <li>
                                        {' '}
                                        for the purposes of our legitimate interests (eg, operation, analysis and improvement of our website,
                                        cookies). You have the right to object to the processing of your personal data based on our legitimate
                                        interests with effect for future processing activities (see under Section 5 "Your rights")
                                    </li>
                                </ul>
                                Depending on your interaction with https://app.trality.com, https://app.beta.trality.com, the iOS and Android mobile
                                apps and/or https://www.trality.com, the following Personal Information may be processed by us for the purposes as set
                                out in the following:
                            </div>
                        </Section>
                    </Container>
                </div>
            </LayoutTop>
        </Page>
    );
};

export default Component;
