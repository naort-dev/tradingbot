import React from 'react';
import styled from 'styled-components';
import * as SubmissionStart from '../../assets/images/competition/submissions-open.png';
import * as SubmissionClosed from '../../assets/images/competition/submissions-close.png';
import * as LiveSimulationStart from '../../assets/images/competition/live-simulation-starts.png';
import * as LiveSimulationEnd from '../../assets/images/competition/live-simulation-ends.png';
import * as Winners from '../../assets/images/competition/winners-icon.png';
import * as Arrow from '../../assets/images/competition/arrow.svg';

const CompetitionTimeline = () => {
    return (
        <TimelineWrapper>
            <Timeline>
                <TopTimeline>
                    <BasicEntry>
                        <Icon src={SubmissionStart} />
                    </BasicEntry>
                    <BasicEntry>
                        <Icon src={SubmissionClosed} />
                    </BasicEntry>
                    <BasicEntry>
                        <Icon src={LiveSimulationStart} />
                    </BasicEntry>
                    <BasicEntry>
                        <Icon src={LiveSimulationEnd} />
                    </BasicEntry>
                </TopTimeline>
                <Bar />
                <BottomTimeline>
                    <Entry>
                        <MainEntryData>Submissions open</MainEntryData>
                        <SecondaryEntryData>Nov 4, 2020</SecondaryEntryData>
                    </Entry>
                    <Entry>
                        <MainEntryData>Submissions close</MainEntryData>
                        <SecondaryEntryData>Dec 7, 2020</SecondaryEntryData>
                    </Entry>
                    <Entry>
                        <MainEntryData>Live simulation starts</MainEntryData>
                        <SecondaryEntryData>Dec 8, 2020</SecondaryEntryData>
                    </Entry>
                    <Entry>
                        <MainEntryData>Live simulation ends</MainEntryData>
                        <SecondaryEntryData>Jan 21, 2021</SecondaryEntryData>
                    </Entry>
                </BottomTimeline>
            </Timeline>
            <EndTimeline>
                <IconsWrapper>
                    <Icon src={Winners} />
                    <MainEntryData>Winners are announced</MainEntryData>
                    <SecondaryEntryData>Jan 22, 2021</SecondaryEntryData>
                </IconsWrapper>
            </EndTimeline>
        </TimelineWrapper>
    );
};

const IconsWrapper = styled.div`
    padding: 10px;
`;

const TimelineWrapper = styled.div`
    display: flex;
    flex-wrap: wrap;
    max-width: 850px;
    text-align: center;
    margin: 0 auto;
    row-gap: 50px;
    @media only screen and (min-width: 768px) {
        flex-wrap: nowrap;
    }
`;

const EndTimeline = styled.div`
    flex-basis: 100%;
    align-self: center;
    justify-items: center;
    text-align: center;
    @media only screen and (min-width: 768px) {
        flex-basis: 25%;
        margin-top: 40px;
    }
`;

const Icon = styled.img`
    width: 50px;
    @media only screen and (min-width: 768px) {
        width: 83px;
    }
`;

const Timeline = styled.div`
    flex-basis: 100%;
    display: flex;
    width: 50%;
    @media only screen and (min-width: 768px) {
        flex-basis: 75%;
        display: block;
    }
`;

const BasicEntry = styled.div`
    display: block;
    color: #fff;
    font-size: 12px;
    text-align: center;
    position: relative;
    text-align: right;
    margin-right: 50px;
    padding-top: 20px;
    padding-bottom: 20px;
    @media only screen and (min-width: 768px) {
        display: inline-block;
        width: 25%;
        vertical-align: top;
        text-align: center;
        margin-right: 0px;
        padding: 0px;
    }
`;

const Entry = styled(BasicEntry)`
    padding: 10px;
    text-align: left;
    height: 96px;
    padding-top: 25px;
    @media only screen and (min-width: 768px) {
        text-align: center;
        margin-left: 0px;
        height: auto;
        padding-top: 0px;
        padding-bottom: 0px;
    }
    &:before {
        content: '';
        display: block;
        width: 32px;
        border: 1px dashed ${(props) => props.theme.onLight};
        height: 1px;
        position: absolute;
        left: -33px;
        top: 42px;
        margin-left: -2px;

        @media only screen and (min-width: 768px) {
            text-align: center;
            margin-left: 0px;
            height: auto;
            left: 49%;
            top: -57px;
            width: 1px;
            height: 32px;
        }
    }
    &:after {
        content: '';
        display: block;
        background: #eee;
        width: 6px;
        height: 6px;
        border-radius: 6px;
        border: 3px solid ${(props) => props.theme.onLight};
        position: absolute;
        left: 1px;
        top: 40px;
        @media only screen and (min-width: 768px) {
            left: 50%;
            top: -27px;
        }
        margin-left: -4px;
    }
`;

const MainEntryData = styled.div`
    font-size: 13px;
    color: ${(props) => props.theme.onLight};
    @media only screen and (min-width: 850px) {
        font-size: 15px;
    }
`;

const SecondaryEntryData = styled.div`
    font-size: 13px;
    color: #171826;
    @media only screen and (min-width: 850px) {
        font-size: 14px;
    }
`;

const BottomTimeline = styled.div`
    white-space: nowrap;
    width: 50%;
    padding: 30px 0 10px 0;
    position: relative;
    @media only screen and (min-width: 768px) {
        width: 100%;
    }
`;

const TopTimeline = styled(BottomTimeline)`
    padding-bottom: 0px;
`;

const Bar = styled.div`
    height: 100%;
    display: inline-block;
    background: #6e6e8a;
    width: 1px;
    position: relative;
    top: 13px;
    left: 0;
    @media only screen and (min-width: 768px) {
        height: 1px;
        width: 100%;
    }
    &:after {
        content: '...';
        background-repeat: no-repeat;
        color: white;
        position: absolute;
        top: 99%;
        height: 10px;
        box-sizing: border-box;
        display: block;
        text-align:center;
        right: -5px;
        background-image: url(${Arrow});
        transform: rotate(90deg);
        @media only screen and (min-width: 768px) {
            bottom: auto;
            right: -10px;
            top: -5px;
            transform: rotate(0deg);
        }
    }
`;

export default CompetitionTimeline;
