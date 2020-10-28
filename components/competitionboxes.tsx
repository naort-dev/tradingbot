import useFetch from 'hooks/useFetch';
import React from 'react';
import styled from 'styled-components';
import { Loader } from './loader';

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
    console.log(data);
    if (data !== null) {
    return <BoxesContainer><Box><Headline>Start</Headline> <Data>{data.startDate}</Data></Box><Box>End: {data.endDate}</Box><Box>Participants {data.participants}</Box><Box>Status: {getCompetitionStatus(data.status)}</Box></BoxesContainer>
    }
    return <LoaderPosition><Loader show={true} /></LoaderPosition>
};

const Headline = styled.div``;

const Data = styled.div``;

const LoaderPosition = styled.div`
    position:relative;
    margin-left:50%;
`;

const BoxesContainer = styled.div`
    display:flex;
    width: 100%;
    flex-flow: row;
    > div:last-child {
        margin-right: 0px;
    }
`;

const Box = styled.div`
    background-color: #fcfdff;
    box-shadow: 0 20px 40px 0 rgba(0, 0, 0, 0.2);
    margin-right: 40px;
    min-height: 151px;
    width: 245px;
`;

export default CompetitionBoxes;