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
`;

export default () => {
    const { seen } = useSection();
    const { delay } = useDelay();
    return (
        <Svg xmlns="http://www.w3.org/2000/svg" width="105" height="70" seen={seen} delay={delay || 0}>
            <g fill="none" fillRule="evenodd">
                <g className="left">
                    <g fillRule="nonzero">
                        <rect width="88" height="69" fill="#FFF" rx="4" />
                        <rect width="31.222" height="69" x="55.282" fill="#F5F5F8" rx="4" />
                        <rect width="85.5" height="66.5" x="1.25" y="1.25" stroke="#9D9DBF" strokeWidth="2.5" rx="4" />
                    </g>
                    <rect width="12" height="12.667" x="10" y="10" fill="#9D9DBF" fillRule="nonzero" rx="3" />
                    <path
                        stroke="#9D9DBF"
                        strokeLinecap="round"
                        strokeWidth="2.5"
                        d="M30 14.55h33.756M30 32.55h19.756M30 18.55h13.756M30 36.55h26.756M30 50.55h13.756M30 54.55h33.756"
                    />
                    <rect width="9.5" height="10.167" x="11.25" y="47.25" stroke="#9D9DBF" strokeWidth="2.5" rx="3" />
                    <rect width="12" height="12.667" x="10" y="28" fill="#9D9DBF" fillRule="nonzero" rx="3" />
                    <path stroke="#FFF" strokeWidth="2" d="M13 34.09l1.82 1.988 4.18-4m-6-16.067L14.82 18 19 14" />
                </g>
                <g className="right">
                    <path
                        fill="#FFF"
                        fillRule="nonzero"
                        d="M74.887 30.947h16.226a5 5 0 014.33 2.5l8.114 14.053a5 5 0 010 5l-8.114 14.053a5 5 0 01-4.33 2.5H74.887a5 5 0 01-4.33-2.5L62.443 52.5a5 5 0 010-5l8.114-14.053a5 5 0 014.33-2.5z"
                    />
                    <path
                        fill="#E5F7FB"
                        fillRule="nonzero"
                        d="M86.504 31.947l6.744.603 9.883 14.674a5 5 0 01.016 5.562l-9.899 14.885-6.744.382V31.947z"
                    />
                    <path
                        stroke="#00B3D8"
                        strokeWidth="2.5"
                        d="M74.887 32.197a3.75 3.75 0 00-3.248 1.875l-8.113 14.053a3.75 3.75 0 000 3.75l8.113 14.053a3.75 3.75 0 003.248 1.875h16.226a3.75 3.75 0 003.248-1.875l8.113-14.053a3.75 3.75 0 000-3.75l-8.113-14.053a3.75 3.75 0 00-3.248-1.875H74.887z"
                    />
                    <circle cx="83" cy="50" r="5.75" stroke="#00B3D8" strokeWidth="2.5" />
                </g>
            </g>
        </Svg>
    );
};
