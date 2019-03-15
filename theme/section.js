import styled from 'styled-components';
import Waypoint from 'react-waypoint';
import * as React from 'react';
import { observer } from 'mobx-react';
import { observable } from 'mobx';

export const S = styled.div`
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

    min-height: 70vh;

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

@observer
export class Section extends React.Component {
    @observable
    entered = false;

    _handleWaypointEnter() {
        setTimeout(() => {
            this.entered = true;
        }, 500);
    }

    _handleWaypointLeave() {
        this.entered = false;
    }

    render() {
        return (
            <Waypoint onEnter={this._handleWaypointEnter.bind(this)} onLeave={this._handleWaypointLeave.bind(this)}>
                <S {...this.props}>{this.props.children}</S>
            </Waypoint>
        );
    }
}
