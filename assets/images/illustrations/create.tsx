import React from 'react';
import styled from 'styled-components';
import { useSection } from 'hooks/useSection';
import { Animator } from './animations';
import { useDelay } from 'hooks';

const Svg = styled.svg<{ seen?: boolean; delay: number }>`
    ${Animator.Animate('> g > g.left')
        .TranslateX(25)
        .Render()}
    ${Animator.Animate('> g > g.right')
        .TranslateX(-25)
        .Delay(0.4)
        .Render()}
    ${Animator.Animate('> g > g.left > rect:nth-child(3)', 1)
        .ScaleX(0.001)
        .Delay(0.45)
        .Render()}
    ${Animator.Animate('> g > g.left > rect:nth-child(4)', 1)
        .ScaleX(0.001)
        .Delay(0.5)
        .Render()}
        ${Animator.Animate('> g > g.left > rect:nth-child(5)', 1)
            .ScaleX(0.001)
            .Delay(0.55)
            .Render()}
        ${Animator.Animate('> g > g.left > rect:nth-child(6)', 1)
            .ScaleX(0.001)
            .Delay(0.6)
            .Render()}
        ${Animator.Animate('> g > g.left > rect:nth-child(7)', 1)
            .ScaleX(0.001)
            .Delay(0.65)
            .Render()}
        ${Animator.Animate('> g > g.left > rect:nth-child(8)', 1)
            .ScaleX(0.001)
            .Delay(0.7)
            .Render()}
`;

export default () => {
    const { seen } = useSection();
    const { delay } = useDelay();
    return (
        <Svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%" viewBox="0 0 88 64" seen={seen} delay={delay || 0}>
            <g fill="none" fillRule="evenodd">
                <g className="left" fillRule="nonzero">
                    <path fill="#9D9DBF" d="M43 0h14.477a4 4 0 014 4v55.183a4 4 0 01-4 4H43a4 4 0 01-4-4V4a4 4 0 014-4z" opacity=".1" />
                    <rect className="r" width="60.172" height="60.75" x="2.116" y="1.125" stroke="#9D9DBF" strokeWidth="2.25" rx="8" />
                    <rect width="22" height="2.5" x="11" y="11" fill="#9D9DBF" rx="1.25" />
                    <rect width="12" height="2.5" x="11" y="19" fill="#9D9DBF" rx="1.25" />
                    <rect width="12" height="2.5" x="11" y="51" fill="#9D9DBF" rx="1.25" />
                    <rect width="17" height="2.5" x="11" y="27" fill="#9D9DBF" rx="1.25" />
                    <rect width="31" height="2.5" x="11" y="35" fill="#9D9DBF" rx="1.25" />
                    <rect width="10" height="2.5" x="11" y="43" fill="#9D9DBF" rx="1.25" />
                </g>
                <g className="right" fillRule="nonzero">
                    <rect
                        className="b"
                        width="36.26"
                        height="37.75"
                        x="50.125"
                        y="24.125"
                        fill="#FFF"
                        fillRule="nonzero"
                        stroke="#00B3D8"
                        strokeWidth="2.25"
                        rx="8"
                    />
                    <path
                        className="c"
                        fill="#00B3D8"
                        d="M73.723 38.424L79 42.904l-5.277 4.479-1.121-1.083 4.02-3.397-4.02-3.396 1.12-1.083zm-9.325 1.353l-3.964 3.15 3.992 3.373-1.149 1.083L58 42.879l5.305-4.21 1.093 1.108zM68.238 50l-1.624-.208L68.794 36l1.625.208L68.239 50z"
                    />
                    <path
                        className="d"
                        fill="#00B3D8"
                        fillRule="nonzero"
                        d="M78 23h1.867a6 6 0 016 6v28a6 6 0 01-6 6H78a6 6 0 01-6-6V29a6 6 0 016-6z"
                        opacity=".05"
                    />
                </g>
            </g>
        </Svg>
    );
};
