import * as A from './images/patterns/patternA.svg';
import * as B from './images/patterns/patternB.svg';
import * as C from './images/patterns/patternC.svg';

export const Patterns = {
    A,
    B,
    C,
};

export type PatternType = keyof typeof Patterns;
