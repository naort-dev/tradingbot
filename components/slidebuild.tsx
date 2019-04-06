import * as React from 'react';
import { observer } from 'mobx-react';
import styled from 'styled-components';
import { Content, LayoutDivided, KnowMore } from '../theme';

import * as icon from '../assets/images/buildbotsicon.svg';
import * as image from '../assets/images/dashboardscreen1.png';
import * as bg from '../assets/images/right-bg.svg';
import * as dots from '../assets/images/dots.svg';

const Img = styled.img`
    height: 55vh;
    margin-right: 50px;
    position: relative;
    left: -50%;
    top: 0;

    @media (max-width: 1240px) {
        left: -70%;
    }

    @media (max-width: 1020px) {
        left: -90%;
        height: 55vh;
    }

    @media (max-width: 900px) {
        left: -90%;
        height: 50vh;
    }

    @media (max-width: 768px) {
        margin-right: 0;
        left: -40%;
    }
`;

const Bg = styled.img`
    position: absolute;
    height: 100%;
    left: 50%;
    top: 0;
`;

const Dots = styled.img`
    position: absolute;
    height: 20%;
    left: 45%;
    top: 10px;
`;

@observer
export class SlideBuild extends React.Component {
    get right() {
        return (
            <React.Fragment>
                <Bg src={bg} />
                <Content header="build bots." icon={icon}>
                    <div>
                        Some traders just love to build custom trading bots. They are wizards with technical analysis and they want to maintain and
                        improve their bots constantly
                    </div>
                    <KnowMore>scroll down for more information</KnowMore>
                </Content>
            </React.Fragment>
        );
    }

    get left() {
        return (
            <React.Fragment>
                <Img src={image} alt="Trality Dashboard Overview"/>
                <Dots src={dots} />
            </React.Fragment>
        );
    }

    render() {
        return <LayoutDivided dark left={this.left} right={this.right} content="right" />;
    }
}
