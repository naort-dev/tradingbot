import React from 'react';
import styled from 'styled-components';
import { useSection } from 'hooks/useSection';
import { Animator } from './animations';
import { useDelay } from 'hooks';

const Svg = styled.svg<{ seen?: boolean; delay: number }>`
    ${Animator.Animate('> g > g:nth-child(1)')
        .TranslateX(25)
        .Delay(0)
        .Render()}
    ${Animator.Animate('> g > g:nth-child(2)')
        .TranslateX(-25)
        .Delay(0.25)
        .Render()}
`;

export default () => {
    const { seen } = useSection();
    const { delay } = useDelay();
    return (
        <Svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 97 69" width="100%" height="100%" seen={seen} delay={delay}>
            <g fill="none" fillRule="evenodd">
                <g>
                    <rect width="78" height="69" fill="#FFF" fillRule="nonzero" rx="4" />
                    <rect width="27.674" height="69" x="49" fill="#F5F5F8" fillRule="nonzero" rx="4" />
                    <rect width="75.5" height="66.5" x="1.25" y="1.25" stroke="#9D9DBF" strokeWidth="2.5" rx="4" />
                    <path
                        stroke="#9D9DBF"
                        strokeLinecap="round"
                        strokeWidth="2.5"
                        d="M15 12.55h23.756M15 20.55h40.756M15 36.55h26.756M15 52.55h21.756M15 44.55h10m-4-16h12.756M15 28.55h1"
                    />
                </g>
                <g>
                    <rect width="21" height="36" x="67" y="21" stroke="#FFF" strokeWidth="4.5" rx="10.5" />
                    <rect width="26.5" height="39.5" x="64.25" y="18.25" stroke="#00B3D8" strokeWidth="2.5" rx="13.25" />
                    <rect width="14.5" height="23.5" x="70.25" y="24.25" stroke="#00B3D8" strokeWidth="2.5" rx="7.25" />
                    <rect width="39" height="32" x="58" y="37" fill="#FFF" fillRule="nonzero" rx="5" />
                    <path fill="#E5F7FB" fillRule="nonzero" d="M77 37h15a5 5 0 015 5v22a5 5 0 01-5 5H77V37z" />
                    <rect width="36.5" height="29.5" x="59.25" y="38.25" stroke="#00B3D8" strokeWidth="2.5" rx="5" />
                    <path fill="#00B3D8" fillRule="nonzero" d="M80.124 58.206l-1-4.605a3.5 3.5 0 10-3.299-.027c0 .027-1 4.632-1 4.632h5.299z" />
                </g>
            </g>
        </Svg>
    );
};
