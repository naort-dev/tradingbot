import React, { useState } from 'react';
import { useInterval } from '@hooks';

interface Props {
    words: string[];
    timeout?: number;
}

export const WordAnimation: React.FC<Props> = ({ words, timeout }) => {
    const Timeout = timeout || 2500;
    const [currentWordIndex, setSurrentWordIndex] = useState(0);
    const [wordDirection, setWordDirection] = useState(0);
    const [currentWord, setCurrentWord] = useState(words[0]);

    const runAnimation = () => {
        let l = currentWord.length;
        let n = (currentWordIndex + 1) % words.length;
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
            let w = words[currentWordIndex];
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

    return <>{currentWord}</>;
};
