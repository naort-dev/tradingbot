import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { useInterval } from 'hooks/useInterval';

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

const Container = styled.h1``;

const HeaderWords = ['algorithmic', 'automated', 'python-based', 'rule-based', 'bot', 'easy', 'professional', 'one-click'];
const Timeout = 2500;

export const HeaderText = () => {
    const [currentWordIndex, setSurrentWordIndex] = useState(0);
    const [wordDirection, setWordDirection] = useState(0);
    const [currentWord, setCurrentWord] = useState('algorithmic');

    const runAnimation = () => {
        let l = currentWord.length;
        let n = (currentWordIndex + 1) % HeaderWords.length;
        let delay;
        let nextWord = currentWord;
        if (wordDirection == 0) {
            if (l == 0) {
                setSurrentWordIndex(n);
                nextWord = '';
                setWordDirection(1);
                delay = 100 + Math.random() * 10;
            } else {
                nextWord = currentWord.substring(0, currentWord.length - 1);
                delay = 80 + Math.random() * 20;
            }
        } else {
            let w = HeaderWords[currentWordIndex];
            if (l == w.length) {
                setWordDirection(0);
                delay = Timeout + Math.random() * Timeout;
            } else {
                nextWord = w.substring(0, currentWord.length + 1);
                delay = 60 + Math.random() * 20;
            }
        }
        setCurrentWord(nextWord);
        return delay;
    };

    useInterval(runAnimation, Timeout);

    return (
        <Container>
            #Enter <br />
            <Highlight>{currentWord}</Highlight>
            <Cursor>|</Cursor>
            <br />
            crypto trading.
        </Container>
    );
};
