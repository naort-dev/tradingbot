import React from 'react';
import styled from 'styled-components';
import { GDPR, Navigation, Footer } from '../components';
import { Section, LayoutDivided, Content, LayoutCentered } from '../theme';
import PropTypes from 'prop-types';
import Link from 'next/link'

import * as image from '../assets/images/jobs@2x.png';
import * as arrow from '../assets/images/arrow-down.svg';

import * as ic1 from '../assets/images/leisureicon1.svg';
import * as ic2 from '../assets/images/leisureicon2.svg';
import * as ic3 from '../assets/images/colleagues.svg';

const Header = styled.h1`
    font-weight: normal;
    font-size: 42px;
    text-align: left;
    margin-bottom: 100px;
    margin-top: 100px;
    @media (max-width: 768px) {
        text-align: center;
        margin-top: 100px;
        margin-bottom: 80px;
    }
`

const WhyContainer = styled.div`
    display: flex;
    margin-bottom: 100px;
    flex-wrap: wrap;
`;

const JobContainer = styled.div`
    display: flex;
    margin-bottom: 100px;
    flex-wrap: wrap;
`;

const Job = styled.div`
    width: 40%;
    padding-right: 120px;
    margin-bottom: 55px;
    & > h5 {
        color: #fff;
        font-size: 20px;
        margin-bottom: 15px;
        font-weight: normal;
        text-align: left;
    }
    & > div {
        text-align: left;
        margin-bottom: 15px;
    }
    & > a {
        text-align: left;
        color: #00b3d8;
        cursor: pointer;
        display: block;
        margin-top: 25px;
        transition: 0.3s all;
        & > img {
            transition: 0.4s all;
            transform: rotate(-90deg);
            margin-left: 10px;
        }
    }
    & > a:hover {
        margin-left: 20px;
        opacity: 0.9;
        & > img {
            transform: rotate(0deg);
            margin-left: 10px;
        }
    }

    @media (max-width: 1024px) {
        width: 50%;
    }

    @media (max-width: 768px) {
        width: 100%;
        padding-right: 25px;
        padding-left: 25px;
        font-size: 14px;
    }

`;

const Why = styled.div`
    width: 33%;
    padding-right: 80px;
    margin-bottom: 55px;
    text-align: left;
    & > img {
        height: 30px;
        margin-bottom: 20px;
    }
    & > h5 {
        color: #0c1014;
        font-size: 20px;
        margin-bottom: 15px;
        font-weight: normal;
        text-align: left;
        min-height: 55px;
        margin-top: 10px;
    }
    & > div {
        text-align: left;
        margin-bottom: 15px;
    }
    @media (max-width: 1024px) {
        width: 50%;
    }

    @media (max-width: 768px) {
        width: 100%;
        padding-right: 25px;
        padding-left: 25px;
        text-align: center;
        font-size: 14px;
        & > h5 {
            text-align: center;
        }
    }
`

const Img = styled.img`
    height: 45vh;
    margin-right: 50px;
    position: absolute;
    left: 0%;
    @media (max-width: 768px) {
        display: none;
    }
`; 

const Description = styled.div`
    margin-bottom: 100px;
    @media (max-width: 768px) {
        width: 100%;
        padding-right: 25px;
        padding-left: 25px;
        text-align: center;
        font-size: 14px;
    }
    & > span {
        color: #00b3d8 !important;
    }
`;

class Component extends React.Component {

    componentDidMount() {
        this.context.mixpanel.track(`openedJobs`)
    }

    get left() {
        return (
            <Content header={"we're hiring"}>
                <div>would you like to help us revolutionize crypto trading by enabling everyone to profit from algorithmic trading? We are a small but very diverse teamand we would love to hear from you!</div>
            </Content>
        );
    }

    get right() {
        return (
            <React.Fragment>
                <Img src={image} alt="Jobs"/>
            </React.Fragment>
        );
    }

    renderHead() {
        return <LayoutDivided left={this.left} right={this.right} hideRight={true} rjustify="flex-end" content="left" />;
    }

    renderWhy() {
        return (
            <LayoutCentered>
                <div>
                    <Header>why join us</Header>
                    <WhyContainer>
                        <Why>
                            <img src={ic1}/>
                            <h5>small team, large responsibilty</h5>
                            <div>we are currently a team of only 5 and if you’re the right person for job, you’re basically in charge of it.</div>
                        </Why>
                        <Why>
                            <img src={ic2}/>
                            <h5>competitive remuneration</h5>
                            <div>we want the best for the job and pay accordingly! We are also open to negotiating equity-based compensation..</div>
                        </Why>
                        <Why>
                            <img src={ic3}/>
                            <h5>flexibility</h5>
                            <div>we understand that people are different. Want to work remotely? Fine. Wanna join us in our offices? Perfect as well.</div>
                        </Why>
                    </WhyContainer>
                </div>
            </LayoutCentered>
        )
    }

    renderOpen() {
        return (
            <LayoutCentered>
                <div>
                    <Header>Open Positions</Header>
                    <JobContainer>
                        <Job>
                            <h5>Senior/Junior Backend Developer</h5>
                            <div>build state-of-the-art systems that empower the complex trading-bots running on our platform!.</div>
                            <Link replace href="/jobs_backend"><a>Interested<img src={arrow}/></a></Link>
                        </Job>
                        <Job>
                            <h5>Senior/Junior Frontend Developer</h5>
                            <div>use cutting edge UI frameworks (mostly ReactJS) in order to raise the bar for state-of-the-art UI and UX!</div>
                            <Link replace href="/jobs_frontend"><a>Interested<img src={arrow}/></a></Link>
                        </Job>
                    </JobContainer>
                </div>
            </LayoutCentered>
        )
    } //<GDPR />

    renderYourRole() {
        return (
            <LayoutCentered>
                <div>
                    <Header>Your Role not on the List?</Header>
                    <Description>
                    We probably have a position for you if you are a great fit! Simply drop us an email including a CV and a 1-page cover letter including a brief description of your desired role at trality
                    to <span>jobs [at] trality dot com</span> 
                    </Description>
                </div>
            </LayoutCentered>
        )
    } //<GDPR />

    render() {
        return (
            <React.Fragment>
                <Navigation dark={false} />
                <Section first id="head">
                    { this.renderHead() }
                </Section>
                <Section id="why" clearHeight>
                    { this.renderWhy() }
                </Section>
                <Section id="open" dark darkbg clearHeight>
                    { this.renderOpen() }
                </Section>
                <Section id="role" dark darkbg clearHeight>
                    { this.renderYourRole() }
                </Section>
                <Section dark clearHeight darkbg>
                    <Footer />
                </Section>
            </React.Fragment>
        )
    }

}

Component.contextTypes = {
    mixpanel: PropTypes.object.isRequired,
};

export default Component;
