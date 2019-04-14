import styled from 'styled-components';
import { Waypoint } from 'react-waypoint';
import * as React from 'react';
import { useDark } from '../hooks/dark';

export interface SectionProps {
    id?: string;
    first?: boolean;
    dark?: boolean;
    clearHeight?: boolean;
    darkbg?: boolean;
    nocenter?: boolean;
}

export const S = styled.div<SectionProps>`
    width: 100%;
    display: block;
    overflow: hidden;
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;
    color: #646482;
    
    &:last-child {
        padding-bottom: 0px;
    }

    ${(props) =>
        props.first &&
        `
        min-height: calc(100vh - 113px);
        padding-bottom: 0px;
        @media (max-width: 768px) {
            margin-top: 68px;
        }
    `} & h1 {
        color: #0c1014;
    }

    transition: all 0.3s;

    min-height: 80vh;

    @media (max-width: 768px) {
        min-height: 35vh;
    }

    @media (max-width: 500px) {
        min-height: 70vh;
    }

    ${(props) =>
        props.dark &&
        `
        color: #6d7385;
        & h1 {
            color: #fff !important;
        }
    `} ${(props) =>
    props.clearHeight &&
    `
        height: unset !important;
        min-height: unset!important;
    `}
    ${(props) =>
        props.darkbg &&
        `
        background-color: #181927;
    `}
    ${(props) =>
        props.nocenter &&
        `
        align-items: flex-start;
    `}
`;

export const Section: React.FunctionComponent<SectionProps> = (props) => {
    let [entered, setEntered] = React.useState(false);
    let { setDark } = useDark();
    const handleWaypointEnter = React.useCallback(() => {
        setTimeout(() => {
            setEntered(true);
        }, 500);
        if (props.dark) {
            setDark(true);
        } else {
            setDark(false);
        }
    }, []);
    const handleWaypointLeave = React.useCallback(() => {
        setTimeout(() => {
            setEntered(false);
        }, 500);
    }, []);

    return (
        <Waypoint onEnter={handleWaypointEnter} onLeave={handleWaypointLeave} bottomOffset="50%">
            <S {...props}>{props.children}</S>
        </Waypoint>
    );
};
