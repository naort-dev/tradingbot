import React from 'react';
import styled from 'styled-components';
import { useSection } from 'hooks/useSection';
import { Animator } from './animations';
import { useDelay } from 'hooks';

const Svg = styled.svg<{ seen?: boolean; delay: number }>`
    ${Animator.Animate('> g > g.left')
        .TranslateX(-50, 26)
        .Render()}
    ${Animator.Animate('> g > g.right')
        .TranslateX(25)
        .TranslateY(13, 13)
        .Delay(0.4)
        .Render()}
`;

export default () => {
    const { seen } = useSection();
    const { delay } = useDelay();
    return (
        <Svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 104 69" width="100%" height="100%" seen={seen} delay={delay || 0}>
            <g fill="none" fillRule="evenodd">
                <g transform="translate(26)" className="left">
                    <rect width="78" height="69" fill="#FFF" fillRule="nonzero" rx="4" />
                    <rect width="27.674" height="69" x="49" fill="#F5F5F8" fillRule="nonzero" rx="4" />
                    <rect width="75.5" height="66.5" x="1.25" y="1.25" stroke="#9D9DBF" strokeWidth="2.5" rx="4" />
                    <path stroke="#9D9DBF" strokeLinecap="round" strokeWidth="2.5" d="M15 12.55h10.756M15 20.55h20.756" />
                </g>
                <g fillRule="nonzero" transform="translate(0 13)" className="right">
                    <rect width="55" height="38" y="18" fill="#FFF" rx="10" />
                    <path fill="#E5F7FB" d="M36 18h8c5.523 0 10 4.477 10 10v18c0 5.523-4.477 10-10 10h-8V18z" />
                    <rect width="52.5" height="35.5" x="1.25" y="19.25" stroke="#00B3D8" strokeWidth="2.5" rx="10" />
                    <circle cx="27.5" cy="7.5" r="6.5" fill="#FFF" />
                    <path fill="#E5F7FB" d="M28 14c3.866 0 5-2.358 5-6.5 0-4.142-1.134-7-5-7V14z" />
                    <circle cx="27.5" cy="7.5" r="6.25" stroke="#00B3D8" strokeWidth="2.5" />
                    <circle cx="18.5" cy="34.5" r="3.5" fill="#00B3D8" />
                    <circle cx="35.5" cy="34.5" r="3.5" fill="#00B3D8" />
                </g>
            </g>
        </Svg>
    );
};
