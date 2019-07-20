import * as React from 'react';
import { observer } from 'mobx-react';
import styled from 'styled-components';
import { observable } from 'mobx';
import { Content, LayoutDivided } from '../../theme';
import { Subscribe } from '../subscribe';

import * as phone from '../../assets/images/phone@3x.png';
import * as call from '../../assets/images/actioncall_beta.svg';
import { SignupCta } from '../signupcta';

const Img = styled.img`
    height: 60vh;
    margin-right: 50px;
    @media (max-width: 930px) {
        margin-right: 0px;
    }
    @media (max-width: 768px) {
        margin-right: 0px;
        height: 55vh;
    }
`;

const Call = styled.img`
    margin-left: 25px;
    margin-top: 15px;
`;

const Highlight = styled.span`
    background-color: ${(props) => props.theme.main};
    color: white;
`;

const Cursor = styled.span`
    font-weight: normal;
    color: #2e3d48;
    animation: 1s blink step-end infinite;
    margin-right: 8px;
    font-size: 1.1em;
`;

interface SideHeadProps {
    side?: 'left' | 'right';
}

@observer
export class Slide0 extends React.Component<SideHeadProps> {
    @observable
    endings = '                ';

    words = ['algorithmic', 'automated', 'convenient', 'profitable', 'bot', 'easy'];

    @observable
    currentWordIndex = 0;

    @observable
    currentWord = 'algorithmic';

    @observable
    wordDirection = 0;

    @observable
    isOpen = true;

    get side() {
        return this.props.side;
    }

    get color() {
        return '#006EED';
    }

    get maxLength() {
        return this.words.reduce((prev, cur) => Math.max(prev, cur.length), 0);
    }

    @observable
    point = { a: 550, b: 800 };

    runAnimation() {
        let l = this.currentWord.length;
        let n = (this.currentWordIndex + 1) % this.words.length;
        let delay;
        let nextWord = this.currentWord;
        if (this.wordDirection == 0) {
            if (l == 0) {
                this.currentWordIndex = n;
                nextWord = '';
                this.wordDirection = 1;
                delay = 100 + Math.random() * 10;
            } else {
                nextWord = this.currentWord.substring(0, this.currentWord.length - 1);
                delay = 80 + Math.random() * 20;
            }
        } else {
            let w = this.words[this.currentWordIndex];
            if (l == w.length) {
                this.wordDirection = 0;
                delay = 2500 + Math.random() * 2500;
            } else {
                nextWord = w.substring(0, this.currentWord.length + 1);
                delay = 60 + Math.random() * 20;
            }
        }
        this.currentWord = nextWord;
        setTimeout(() => this.runAnimation(), delay);
    }

    get fullWord() {
        let l = this.currentWord.length;
        return (
            this.currentWord +
            Array(this.maxLength - l)
                .fill(' ')
                .join('')
        );
    }

    get remainingWord() {
        let l = this.currentWord.length;
        return Array(this.maxLength - l)
            .fill(' ')
            .join();
    }

    componentDidMount() {
        setTimeout(() => this.runAnimation(), 2500 + Math.random() * 2500);
    }

    get header() {
        return (
            <div>
                Makes <br />
                <Highlight>{this.currentWord}</Highlight>
                <Cursor>|</Cursor>
                <br />
                trading your reality.
            </div>
        );
    }

    get left() {
        return (
            <Content header={this.header}>
                <div>We make the tools of Wall Street available to everyone - with trading bots for all levels of experience.</div>
                <SignupCta />
            </Content>
        );
    }

    get right() {
        return <Img src={phone} alt="Trality Phone Screenshot" />;
    }

    render() {
        return <LayoutDivided left={this.left} right={this.right} rjustify="flex-end" content="left" />;
    }
}
