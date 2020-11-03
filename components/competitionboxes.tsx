import useFetch from 'hooks/useFetch';
import React, { Fragment } from 'react';
import styled from 'styled-components';
import * as Participants from '../assets/images/icons/participants.svg';
import * as StatusClosed from '../assets/images/icons/status-closed.svg';
import * as HoursGlassStart from '../assets/images/icons/hourglass-start.svg';
import * as HoursGlassEnd from '../assets/images/icons/hourglass-end.svg';
import * as LoaderGif from '../assets/images/misc/trality-bot-animation.gif';

type callResponse = {
    start: number;
    end: number;
    participants: number;
    name: string;
};

const url = process.env.NEXT_PUBLIC_APP_COMPETITION_URL ? process.env.NEXT_PUBLIC_APP_COMPETITION_URL : null;

const getCompetitionStatus = (start: number, end: number) => {
    const now = Date.now();
    if (now < start) {
        return 'Scheduled';
    }
    if (end > now) {
        return 'Closed';
    }
    return 'Running';
};

const getReadableDataFormat = (timestamp: number) => {
    const date = new Date(timestamp);
    return `${date.getDate()}.${date.getMonthFormatted()}.${date.getFullYear()}-${date.getHoursFormatted()}:${date.getMinutesFormatted()}:${date.getSecondsFormatted()}`;
};

const CompetitionBoxes = () => {
    if(url == null) {
        return null;
    }
    const [data, error] = useFetch<callResponse>(url, {});
    if (data !== null) {
        return (
            <BoxesContainer>
                <Box key='start'>
                    <BoxHeadline>
                        <img src={HoursGlassStart} height={19} />
                        Start
                    </BoxHeadline>
                    <BoxData>
                        {getReadableDataFormat(data.start)
                            .split('-')
                            .map((item, i) => {
                                return (
                                    <Fragment key={`${item}-${i}`}>
                                        {item}
                                        <br />
                                    </Fragment>
                                );
                            })}
                    </BoxData>
                </Box>
                <Box key='end'>
                    <BoxHeadline>
                        <img src={HoursGlassEnd} height={19} />
                        End
                    </BoxHeadline>
                    <BoxData>
                        {getReadableDataFormat(data.end)
                            .split('-')
                            .map((item, i) => {
                                return (
                                    <Fragment key={`${item}-${i}`}>
                                        {item}
                                        <br />
                                    </Fragment>
                                );
                            })}
                    </BoxData>
                </Box>
                <Box key='participants'>
                    <BoxHeadline>
                        <img src={Participants} height={19} />
                        Participants
                    </BoxHeadline>
                    <BoxData>{data.participants}</BoxData>
                </Box>
                <Box key='status'>
                    <BoxHeadline>
                        <img src={StatusClosed} height={19} />
                        Status
                    </BoxHeadline>
                    <BoxData>{getCompetitionStatus(data.start, data.end)}</BoxData>
                </Box>
            </BoxesContainer>
        );
    }
    return (
        <LoaderPosition>
            <Loader src={LoaderGif} />
            <p>We're loading competition info...</p>
        </LoaderPosition>
    );
};

const Loader = styled.img`
    max-width: 150px;
`;

const BoxHeadline = styled.div`
    color: ${(props) => props.theme.onDark};
    text-transform: uppercase;
    font-size: 12px;
    img {
        position: relative;
        top: 5px;
        margin-right: 5px;
    }
`;

const BoxData = styled.div`
    font-size: 28px;
    color: ${(props) => props.theme.onLight};
    font-weight: bold;
    margin-top: 23px;
`;

const LoaderPosition = styled.div`
    text-align: center;
    margin: 0 auto;
`;

const BoxesContainer = styled.div`
    display: flex;
    width: 100%;
    flex-flow: row;
    flex-wrap: wrap;
    column-gap: 36px;
    row-gap: 12px;
`;

const Box = styled.div`
    background-color: #fcfdff;
    box-shadow: rgba(13, 21, 67, 0.05) 0px 5px 30px 0px;
    min-height: 151px;
    flex-basis: 100%;
    width: 100%;
    padding: 36px;

    @media only screen and (min-width: 768px) {
        flex-basis: 47%;
    }

    @media only screen and (min-width: 1375px) {
        flex-basis: 22.5%;
    }
`;

export default CompetitionBoxes;
