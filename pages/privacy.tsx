import * as React from 'react';
import styled from 'styled-components';
import { Layout } from '@containers';
import { Header } from '@components';

import { MetaTags, Page } from '../util/metaTags';
import { MainContainer, Padding, PaddingSizes } from '@trality/web-ui-components';

const Container = styled.div`
    margin-bottom: 50px;
    justify-content: left;
    text-align: left;
    ul {
        text-align: left;
    }
    font-size: 15px;
    @media (max-width: 768px) {
        width: 100%;
        padding-right: 25px;
        padding-left: 25px;
        text-align: center;
        font-size: 13px;
    }
    & > span {
        color: #00b8e6 !important;
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
    text-align: justify;
    width: 100%;
    line-height: 170%;
    ${(props) =>
        props.center &&
        `
        text-align: center;
        margin-bottom: 40px;
    `}
`;

const Privacy = () => {
    return (
        <Layout.Page title="privacy">
            <MetaTags page={Page.Privacy} />
            <Layout.Section fullHeight noPadding id="policy">
                <MainContainer>
                    <Padding
                        size={{
                            top: PaddingSizes.NinetySix,
                            bottom: PaddingSizes.NinetySix,
                            left: PaddingSizes.Zero,
                            right: PaddingSizes.Zero,
                        }}
                        mobileSize={{
                            top: PaddingSizes.FiftySix,
                            bottom: PaddingSizes.FiftySix,
                            left: PaddingSizes.Zero,
                            right: PaddingSizes.Zero,
                        }}
                    >
                        <Layout.Center>
                            <Header
                                title="Privacy Policy for Website Users"
                                subtitle="(information in accordance with Article 13 GDPR, 18 July 2019)"
                            >
                                <Container>
                                    <Top>
                                        <div>
                                            <b>Controller of all processing activities is:</b>
                                            <p>TRALITY GmbH</p>
                                            <p>Novaragasse 19/9 AT-1020 Wien</p>
                                            <p>Email: hello@trality.com</p>
                                            <p>UID: ATU73931338</p>
                                            <p>Company Register: 504493b, Commercial Court Vienna</p>
                                            <p>Member of the Austrian Economic Chambers</p>
                                        </div>
                                        <div>
                                            <b>Date: 18 July 2019</b>
                                        </div>
                                    </Top>
                                    <Section>
                                        <div>
                                            <b>
                                                For all inquiries concerning the protection of your personal data please contact:
                                                <br /> TRALITY GmbH
                                                <br /> legal@trality.com
                                            </b>
                                        </div>
                                    </Section>
                                    <Section>
                                        <h2>1.Who We Are and What this Policy Is</h2>
                                        <div>
                                            Welcome to <a href="https://www.trality.com">https://www.trality.com</a>, the website of TRALITY GmbH,
                                            Novaragasse 19/9, 1020 Wien, Austria (FN 504493 b) (“TRALITY,” “we,” “us” and “our” etc.). We are a
                                            software and online services provider firm. For additional information, please visit{' '}
                                            <a href="https://www.trality.com">https://www.trality.com</a>. <p /> We respect the privacy of the users
                                            of our website and our services (“you”, “your”) and are committed to protecting your personal data and
                                            information according to the applicable law. For this reason, your data will be used exclusively on the
                                            basis of the applicable legal provisions, in particular the National Data Protection Act (DSG), the
                                            General Data Protection Regulation (GDPR) as well as the Federal Act enacting the Telecommunications Act
                                            (TKG 2003). This privacy policy (“Policy”) explains how, to what extent and for what purposes we are
                                            collecting and subsequently processing personal data and information through our website. TRALITY is the
                                            responsible entity ("controller") for the processing of your personal data and information on this
                                            website.
                                        </div>
                                    </Section>
                                    <Section>
                                        <h2>2.Definitions</h2>
                                        <div>
                                            <b>“Personal Information”</b> means any information that either (a) personally identifies a natural
                                            person; or (b) pertains to an identifiable natural person, i.e. someone who can be identified, directly or
                                            indirectly, in particular, by reference to an identifier such as a name, an identification number,
                                            location data, an online identifier or to one or more factors specific to his or her physical,
                                            physiological, genetic, mental, economic, cultural or social identity, or (c) constitutes individually
                                            identifiable information about an individual consumer collected by us online through this website and that
                                            we maintain in an accessible form, or that (d) we are otherwise required to protect under applicable data
                                            privacy laws (including, but not limited to, national, international and supranational data protection and
                                            privacy laws, directives, regulations and comparable legal acts). Examples of Personal Information include
                                            your contact details such as your name, email address, birthday or phone number as well as information
                                            about your professional education and experience, skills, preferences, membership in professional
                                            organizations, etc.;
                                            <p />
                                            <b>“Processing”</b> means any operation or set of operations which is performed on Personal Information or
                                            on sets of Personal Information, whether or not by automated means, such as the collection, recording,
                                            organization, structuring, storage, adaptation or alteration, retrieval, consultation, use, disclosure by
                                            transmission, dissemination or otherwise making available, alignment or combination, blocking,
                                            restriction, erasure or destruction;
                                            <p />
                                            <b>“Sensitive Personal Information”</b> means Personal Information revealing racial or ethnic origin,
                                            political opinions, religious or philosophical beliefs, or trade union membership, and the Processing of
                                            genetic data, biometric data for the purpose of uniquely identifying a natural person, data concerning
                                            health or data concerning a natural person's sex life or sexual orientation; “Site” means / and all web
                                            pages hosted at that domain.
                                        </div>
                                    </Section>
                                    <Section>
                                        <h2>3.Processing of Your Personal Information</h2>
                                        <div>
                                            We process personal data
                                            <ul>
                                                <li>
                                                    {' '}
                                                    for the purposes of the performance of our (pre-) contractual duties (art 6 para 1 point b GDPR;
                                                    eg in case we provide any information to you upon your request) according to our contractual
                                                    relationship with you or
                                                </li>
                                                <li>
                                                    {' '}
                                                    for the purposes of our legitimate interests (eg, operation, analysis and improvement of our
                                                    website, cookies). You have the right to object to the processing of your personal data based on
                                                    our legitimate interests with effect for future processing activities (see under Section 5 "Your
                                                    rights")
                                                </li>
                                            </ul>
                                            Depending on your interaction with <a href="https://app.trality.com">https://app.trality.com</a>,{' '}
                                            <a href="https://app.trality.com">https://app.trality.com</a>, the iOS and Android mobile apps and/or{' '}
                                            <a href="https://www.trality.com">https://www.trality.com</a>, the following Personal Information may be
                                            processed by us for the purposes as set out in the following:
                                        </div>
                                    </Section>
                                    <Section>
                                        <h3>3.1. Marketing activities</h3>
                                        <div>
                                            Our website provides you with the possibility to submit information regarding you and your company to us.
                                            We will process your personal data (name, address, e-mail-address, in order to provide you with alerts and
                                            information about news and developments as well as articles from experts and invitations to events of
                                            TRALITY, in case you have expressed your interest in such information.
                                        </div>
                                    </Section>
                                    <Section>
                                        <h3>3.2. Cookies</h3>
                                        <div>
                                            Our Site makes use of cookies. Cookies are small text files or other storage technologies downloaded by
                                            your Internet browser and stored on the device you use to access the Site (e.g., your desktop computer,
                                            tablet or smartphone). Depending on their purpose, cookies log specific user-related information such as
                                            your user preferences, authentication information, security parameters, data concerning the device you
                                            access the Site with, location data, IP address and statistical information regarding your use of the
                                            Site. Where necessary during your visit of the Site or when revisiting the Site, your Internet browser
                                            transmits the cookies including the contained information back to the servers they were initially
                                            downloaded from. The analysis and Processing of such information allows us to ensure the functionality of
                                            the Site, improve your online experience and optimize the structure and content of the Site. The cookies
                                            we use can be categorized as follows:
                                            <p>
                                                <b>Session Cookies</b>
                                                These are cookies that allow our Site to collect information about what you do during a browsing
                                                session each time you visit the Site. When connecting to our server, your device will be allocated a
                                                session ID, which enables our server to identify your device during the session and facilitates Site
                                                usability. These cookies are temporary and are set to be deleted when you leave the Site;
                                            </p>
                                            <p>
                                                <b>Persistent Cookies</b>
                                                These are cookies that are stored by your Internet browser for more than a session and are set to
                                                expire within a defined time period. Persistent cookies enable us to remember your settings and
                                                information, so you do not have to keep re-entering them whenever you visit our Site. They also
                                                measure how you use and interact with the Site and enable us to personalize the Site. For example,
                                                they may allow us to alter the rotation of images on the Site so that different images will be
                                                displayed on your next visit;
                                            </p>
                                            <p>
                                                <b>First-Party Cookies</b>
                                                These are cookies that we store and access on your device in our capacity as controller of your
                                                Personal Information when you visit our Site. They might include cookies related to third-party
                                                service providers, provided that we control and determine the purposes and means of the Processing of
                                                your Personal Information logged by such cookies. As a result, first-party cookies might log
                                                user-related Personal Information accessible to and Processed by third parties on our behalf and
                                                subject to our instructions.
                                            </p>
                                            <p>
                                                <b>Third-Party Cookies</b>
                                                These are cookies that are stored and accessed on your device by third parties determining the
                                                purposes and means of the Processing of your Personal Information logged by such cookies. You may
                                                influence the scope and extent to which we use cookies when you visit our Site. In particular, you may
                                                prevent cookies from being stored on your device by adjusting the respective settings on your Internet
                                                browser. For more information on how to do so in the settings of your particular Internet browser,
                                                please see the following information:
                                            </p>
                                            <p>
                                                <b>Chrome:</b>{' '}
                                                <a href="https://www.google.com/intl/en/chrome/browser/privacy/">
                                                    https://www.google.com/intl/en/chrome/browser/privacy/
                                                </a>
                                            </p>
                                            <p>
                                                <b>Firefox:</b>{' '}
                                                <a href="https://support.mozilla.org/en-US/products/firefox/protect-your-privacy">
                                                    https://support.mozilla.org/en-US/products/firefox/protect-your-privacy
                                                </a>
                                            </p>
                                            <p>
                                                <b>Safari:</b>{' '}
                                                <a href="http://www.apple.com/privacy/manage-your-privacy/">
                                                    http://www.apple.com/privacy/manage-your-privacy/
                                                </a>
                                            </p>
                                            <p>
                                                However, please be aware that this might render certain functions of our Site inoperable or more
                                                difficult to use. Depending on the Internet browser you use, you might also be able to specifically
                                                reject third-party cookies. In this context, please note, however, that third parties might still have
                                                access to your Personal Information to the extent that such information is logged by first-party
                                                cookies. For additional information on first-party and third-party cookies used on our Site in the
                                                context of third-party services and for information on how you might stop such cookies from being
                                                stored on your device, please see “Third-Party Services” below.
                                            </p>
                                        </div>
                                    </Section>
                                    <Section>
                                        <h3>3.3. Third-Party Services</h3>
                                        <div>
                                            On our Site, we might or will use the following services provided by third parties:
                                            <p>
                                                <b>Google Analytics</b>
                                            </p>
                                            We use Google Analytics on our website. This is a web analytics service provided by Google Inc., Gordon
                                            House, Barrow Street, Dublin 4, Ireland ("Google"). Our legitimate interest in using Google lies in the
                                            analysis, optimization, and economic operation of our site.
                                            <p>
                                                Through certification according to the EU-US Privacy Shield:{' '}
                                                <a href="https://www.privacyshield.gov/participant?id=a2zt000000001L5AAI&status=Active">
                                                    https://www.privacyshield.gov/participant?id=a2zt000000001L5AAI&status=Active
                                                </a>{' '}
                                                Google guarantees that it will follow the EU's data protection regulations when processing data in the
                                                United States.
                                            </p>
                                            <p>
                                                The Google Analytics service is used to analyse how our website is used. The legal basis is Art. 6
                                                Para. 1 lit. f) GDPR. Our legitimate interest lies in the analysis, optimization, and economic
                                                operation of our site.
                                            </p>
                                            <p>
                                                Usage and user-related information, such as IP address, place, time, or frequency of your visits to
                                                our website will be transmitted to a Google server in the United States and stored there. However, we
                                                use Google Analytics with the so-called anonymization function, whereby Google truncates the IP
                                                address within the EU or the EEA before it is transmitted to the US. The data collected in this way is
                                                in turn used by Google to provide us with an evaluation of visits to our website and what visitors do
                                                once there. This data can also be used to provide other services related to the use of our website and
                                                of the internet in general. Google states that it will not connect your IP address to other data. In
                                                addition, Google provides further information with regard to its data protection practices at{' '}
                                                <a href="https://www.google.com/intl/de/policies/privacy/partners">
                                                    https://www.google.com/intl/de/policies/privacy/partners
                                                </a>
                                                , including options you can exercise to prevent such use of your data.
                                            </p>
                                            <p>
                                                In addition, Google offers an opt-out add-on at{' '}
                                                <a href="https://tools.google.com/dlpage/gaoptout?hl=en">
                                                    https://tools.google.com/dlpage/gaoptout?hl=en
                                                </a>{' '}
                                                in addition with further information. This add-on can be installed on the most popular browsers and
                                                offers you further control over the data that Google collects when you visit our website. The add-on
                                                informs Google Analytics' JavaScript (ga.js) that no information about the website visit should be
                                                transmitted to Google Analytics. However, this does not prevent information from being transmitted to
                                                us or to other web analytics services we may use as detailed herein.
                                            </p>
                                            <p>
                                                <b>CloudFlare</b>
                                            </p>
                                            To secure our website and to optimize loading times, we use the CloudFlare CDN (content delivery network).
                                            This is a service of Cloudflare Inc., 101 Townsend Street, San Francisco, California 94107, USA
                                            ("CloudFlare"). Through certification according to the EU-US Privacy Shield (
                                            <a href="https://www.privacyshield.gov/participant?id=a2zt0000000GnZKAA0&status=Active">
                                                https://www.privacyshield.gov/participant?id=a2zt0000000GnZKAA0&status=Active
                                            </a>
                                            ) CloudFlare guarantees that it will follow the EU's data protection regulations when processing data in
                                            the United States. The legal basis for collecting and processing this information is Art. 6 Para. 1 lit.
                                            f) GDPR. Our legitimate interest lies in the secure operation of our website and in its optimization. If
                                            you access our website, your queries are forwarded to CloudFlare servers. Statistical access data about
                                            your visit to our website is collected and CloudFlare stores a cookie on your terminal device via your
                                            browser. Access data includes:
                                            <br />
                                            - your IP address;
                                            <br />
                                            - the page(s) on our site that you access;
                                            <br />
                                            - type and version of internet browser you are using;
                                            <br />
                                            - your operating system;
                                            <br />
                                            - the website from which you came prior to visiting our website (referrer URL);
                                            <br />
                                            - your length of stay on our site; and
                                            <br />
                                            - the frequency with which our pages are accessed.
                                            <br />
                                            The data is used by CloudFlare for statistical evaluations of the accesses as well as for the security and
                                            optimization of the offer. If you do not agree to this processing, you have the option of preventing the
                                            installation of cookies by making the appropriate settings in your browser. Further details can be found
                                            in the section about cookies above. CloudFlare offers further information about its data collection and
                                            processing as well your rights and your options for protecting your privacy at this link:{' '}
                                            <a href="https://www.cloudflare.com/privacypolicy/">https://www.cloudflare.com/privacypolicy/</a>.
                                            <p>
                                                <b>Mixpanel</b>
                                            </p>
                                            Our websites regularly uses content from the online marketing services of the provider Mixpanel Inc., 405
                                            Howard Street, Floor 2, San Francisco, CA 94105 ("Mixpanel"). Our legitimate interest in using Mixpanel
                                            lies in the analysis, optimization, and economic operation of our site.
                                            <p>
                                                Mixpanel's services allow us to evaluate user interactions on our website in a more targeted manner.
                                                For these purposes, a code of Mixpanel will be executed when calling up our and other websites on
                                                which Mixpanel is active and it will be integrated into the website so-called (re)marketing tags
                                                (invisible graphics or code, also called "web beacons"). With their help, an individual cookie, i.e. a
                                                small file, is stored on the user's device (comparable technologies can also be used instead of
                                                cookies). In this file it is noted which websites the user visits, which contents he is interested in
                                                and which offers he has clicked, as well as technical information on the browser and operating system,
                                                referring websites, visiting time and other information on the use of the online offer. Mixpanel may
                                                also link the aforementioned information to such information from other sources.
                                            </p>
                                            <p>
                                                Further information as well as possible objections to the registration by Mixpanel can be found in the
                                                data protection regulations of Mixpanel:{' '}
                                                <a href="https://mixpanel.com/legal/privacy-policy/">https://mixpanel.com/legal/privacy-policy/</a>.
                                                In addition, Mixpanel offers an opt-out add-on at{' '}
                                                <a href="https://mixpanel.com/optout/">https://mixpanel.com/optout/</a>.
                                            </p>
                                            <p>
                                                <b>Hotjar</b>
                                            </p>
                                            We use Hotjar on our website. This is a web analytics service provided by Hotjar Ltd, Level 2, St Julians
                                            Business Centre, 3, Elia Zammit Street, St Julians STJ 1000, Malta, Europe ("Hotjar").
                                            <p>
                                                Hotjar is used to analyze how our website is used. Our legitimate interest lies in the analysis,
                                                optimization, and economic operation of our site. Hotjar allows us to monitor your usage behaviour on
                                                our website, such as logging and evaluating your mouse movements or mouse clicks. However, your visit
                                                to our website will be anonymized. In addition, information about your operating system, your internet
                                                browser, incoming or outgoing links, the geographical origin of your access, and the type and
                                                resolution of the device you are using are evaluated by Hotjar and processed for statistical purposes.
                                                Hotjar can also obtain direct feedback from you. Hotjar offers further information about its data
                                                protection practices at <a href="https://www.hotjar.com/privacy">https://www.hotjar.com/privacy</a>.
                                            </p>
                                            <p>
                                                In addition, you have the option of terminating the analysis of your usage behavior by opting out. By
                                                confirming the link
                                                <a href="https://www.hotjar.com/opt-out">https://www.hotjar.com/opt-out</a> a cookie is stored on your
                                                device via your browser to prevent any further analysis. Please note, however, that you must click the
                                                above link again if you delete the cookies stored on your end device.
                                            </p>
                                            <p>
                                                <b>Typeform </b>
                                            </p>
                                            We use the Typeform service (TYPEFORM S.L., Passatge de la Pau 10 Bis, 1-2, Spain) ("Typeform"). Typeform
                                            is a website integration used to embed forms (such as surveys, polls and quizzes) on the Trality platform.
                                            Users are free to complete these forms. If they do, the users answers are being sent to Trality as well as
                                            the typeform platform. You can find out more about TYPEFORM's privacy policy here:{' '}
                                            <a href="https://admin.typeform.com/to/dwk6gt">https://admin.typeform.com/to/dwk6gt</a>.
                                            <p>
                                                <b>Sentry </b>
                                            </p>
                                            WWe use the services of Sentry (Functional Software, Inc. dba Sentry, 132 Hawthorne Street, San Francisco,
                                            CA 94107) ("Sentry"). Sentry is an open-source error tracking software that helps developers monitor and
                                            fix crashes in real time. It documents bugs and error reports for our front end services, which includes
                                            error parameters as well as user and session information. The user data (which might also be personal
                                            data), such as information on the device or time of error, are collected anonymously and are not used for
                                            personal purposes and are subsequently deleted. Further information on this can be found in Sentry's data
                                            protection declaration: <a href="https://sentry.io/privacy/">https://sentry.io/privacy/</a>.
                                        </div>
                                    </Section>
                                    <Section>
                                        <h2>4. Data Security and Transfer of Data</h2>
                                        <div>
                                            We transfer personal data to third parties such as:
                                            <ul>
                                                <li> Host providers: Amazon Web Services und Google Cloud Services.</li>
                                                <li> Newsletter mailing: Mailchimp (certified under the EU-US Privacy Shield Agreement).</li>
                                                <li> Tracking providers: Mixpanel, Hotjar, Google, Sentry, CloudFlare.</li>
                                                <li> Feedback tools: Hotjar, Typeform.</li>
                                            </ul>
                                            <p>
                                                We therefore comply with the provisions of Article 32 DSGVO in order to guarantee the confidentiality
                                                and security of your personal data and take appropriate technical and organisational security
                                                measures.
                                            </p>
                                            <p>
                                                Notwithstanding efforts to maintain a consistently high level of due diligence, the possibility cannot
                                                be excluded that information that you provide to us via the Internet may be viewed and used by others.
                                                Please note that we therefore accept no liability whatsoever for the disclosure of information due to
                                                errors in data transmission and/or unauthorized access by third parties not caused by us (e.g. hacker
                                                attack on email accounts or telephone, interception of faxes).
                                            </p>
                                        </div>
                                    </Section>
                                    <Section>
                                        <h2>5. Your Rights</h2>
                                        <div>
                                            <p>
                                                <b>Right to information </b>
                                            </p>
                                            As long as we process your Personal Information, you have the right to information about the purposes of
                                            Processing, the categories of personal data, the origin and the recipients of your personal data, the
                                            duration of storage. Your right to information might be subject to our professional duty of
                                            confidentiality.
                                            <p>
                                                <b>Rectification and erasure of data</b>
                                            </p>
                                            If we process inaccurate or incomplete Personal Information, you have the right to rectification of such
                                            data. If your Personal Information is processed unlawfully, you may also request us to erase your Personal
                                            Information. You may also request the erasure of your Personal Information if your data is processed
                                            unlawfully, subject to legal obligations preventing the erasure of your personal data.
                                            <p>
                                                <b>Limitation of processing</b>
                                            </p>
                                            You may request us to limit the processing of your Personal Information in certain cases.
                                            <p>
                                                <b>Data portability</b>
                                            </p>
                                            You have the right to receive the Personal Information, which you have provided to us, in a structured,
                                            commonly used and machine-readable format. You have the right to direct transmission of those data to
                                            another controller as far as this is technically feasible.
                                            <p>
                                                <b>Right to object</b>
                                            </p>
                                            You have the right to object, on grounds relating to your particular situation, at any time to processing
                                            of Personal Information concerning you which is based on our legitimate interests according to art 6 para
                                            1 point f GDPR. If you object to processing of your Personal Information we shall cease to process this
                                            data unless our legitimate interests to processing your Personal Information prevail. Where Personal
                                            Information are processed for direct marketing purposes, you shall have the right to object at any time to
                                            processing of Personal Information concerning you. In this case we will cease the processing or your
                                            Personal Information for marketing purposes immediately.
                                            <p>
                                                <b>Complaint</b>
                                            </p>
                                            You have the right to lodge a complaint with the Austrian Data Protection Authority (Österreichische
                                            Datenschutzbehörde), Wickenburggasse 8, 1080 Wien, +43 1 531 15-202525, E-Mail: dsb@dsb.gv.at if you
                                            believe that your rights to protection of your personal data have been infringed.
                                        </div>
                                    </Section>
                                    <Section>
                                        <h2>6. Changes to this Privacy Policy</h2>
                                        <div>
                                            Due to ongoing further development, this Privacy Policy will continue to be adapted. Changes will be
                                            announced on this website in due time. Therefore, you should regularly access this Privacy Policy in order
                                            to inform yourself about the current version.
                                        </div>
                                    </Section>
                                </Container>
                            </Header>
                        </Layout.Center>
                    </Padding>
                </MainContainer>
            </Layout.Section>
        </Layout.Page>
    );
};

export default Privacy;
