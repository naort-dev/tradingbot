import useFetch from 'hooks/useFetch';
import React from 'react';
import styled from 'styled-components';
import { Loader } from './loader';
import * as Participants from '../assets/images/icons/participants.svg';
import * as StatusClosed from '../assets/images/icons/status-closed.svg';
import * as HoursGlassStart from '../assets/images/icons/hourglass-start.svg';
import * as HoursGlassEnd from '../assets/images/icons/hourglass-end.svg';


type callResponse = {
    startDate: string;
    endDate: string;
    participants: number;
    status: number;
}

const getCompetitionStatus = (status: number) => {
    switch (status) {
        case 1:
            return "Scheduled";
        case 0:
            return "Running";
        case -1:
            return "Closed"
        default:
            return "Closed";
    }
}

const CompetitionBoxes = () => {
    const [data, error] = useFetch<callResponse>("testingurl", {});
    if (data !== null) {
    return <BoxesContainer>
            <Box>
                <BoxHeadline><img src={HoursGlassStart} height={19}/>Start</BoxHeadline>
                <BoxData>{data.startDate}</BoxData>
            </Box>
            <Box>
                <BoxHeadline><img src={HoursGlassEnd} height={19}/>End</BoxHeadline>
                <BoxData>{data.endDate}</BoxData>
            </Box>
            <Box>
                <BoxHeadline><img src={Participants} height={19}/>Participants</BoxHeadline> 
                <BoxData>{data.participants}</BoxData>
            </Box>
            <Box>
                <BoxHeadline><img src={StatusClosed} height={19}/>Status</BoxHeadline> 
                <BoxData>{getCompetitionStatus(data.status)}</BoxData>
            </Box>
        </BoxesContainer>
    }
    return <LoaderPosition><Loader show={true} /></LoaderPosition>
};

const BoxHeadline = styled.div`
    color: #a5a5b0;
    text-transform: uppercase;
    font-size: 12px;
    img {
        position:relative;
        top: 5px;
        margin-right: 5px;
    }
`;

const BoxData = styled.div`
    font-size: 28px;
    color: #646482;
    font-weight: bold;
    margin-top: 23px;
`;

const LoaderPosition = styled.div`
    position:relative;
    margin-left:50%;
`;

const BoxesContainer = styled.div`
    display:flex;
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