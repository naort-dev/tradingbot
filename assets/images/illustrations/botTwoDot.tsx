import React from 'react';
import styled from 'styled-components';
import { useSection } from 'hooks/useSection';
import { Animator } from './animations';
import { useDelay } from 'hooks';

const Svg = styled.svg<{ seen?: boolean; delay: number }>`
    ${Animator.Animate('> g')
        .Delay(0.01)
        .Render()}
    ${Animator.Animate('> g > g > g.bg')
        .TranslateX(-25)
        .Delay(0.1)
        .Render()}
    ${Animator.Animate('> g > g.bot')
        .TranslateY(25)
        .Delay(0.4)
        .Render()}
`;

export default () => {
    const { seen } = useSection();
    const { delay } = useDelay();
    return (
        <Svg width="100%" height="100%" viewBox="0 0 150 150" seen={seen} delay={delay || 0}>
            <defs>
                <circle id="a" cx="75" cy="75" r="75" />
            </defs>
            <g fill="none" fillRule="evenodd">
                <g>
                    <mask id="b" fill="#fff">
                        <use xlinkHref="#a" />
                    </mask>
                    <use fill="#E5F7FB" xlinkHref="#a" />
                    <g className="bg">
                        <path
                            stroke="#00B3D8"
                            strokeLinecap="round"
                            strokeWidth="2.5"
                            d="M16 22.55h23.756M100 51.55h23.756M100 59.55h10M16 30.55h40.756"
                            mask="url(#b)"
                            opacity=".2"
                        />
                        <rect width="13" height="13" x="81.5" y="18.5" stroke="#B7E9F3" strokeWidth="3" mask="url(#b)" rx="3" />
                        <rect width="11" height="11" x="22.5" y="50.5" stroke="#B7E9F3" strokeWidth="3" mask="url(#b)" rx="3" />
                        <rect width="15" height="15" x="133.5" y="92.5" stroke="#B7E9F3" strokeWidth="3" mask="url(#b)" rx="3" />
                        <path
                            stroke="#00B3D8"
                            strokeLinecap="round"
                            strokeWidth="2.5"
                            d="M16 87.55h40.756M16 79.55h10.756"
                            mask="url(#b)"
                            opacity=".2"
                        />
                    </g>
                </g>
                <g mask="url(#b)" className="bot">
                    <g fillRule="nonzero" mask="url(#b)">
                        <g transform="translate(29 110)">
                            <rect width="92" height="51" fill="#FFF" rx="10" />
                            <path fill="#E5F7FB" d="M59.463 0h21.415c5.523 0 10 4.477 10 10v31c0 5.523-4.477 10-10 10H59.463V0z" />
                            <rect width="89.5" height="48.5" x="1.25" y="1.25" stroke="#00B3D8" strokeWidth="2.5" rx="10" />
                        </g>
                    </g>
                    <g fillRule="nonzero" transform="translate(45 47)">
                        <rect width="60" height="41" y="17" fill="#FFF" rx="10" />
                        <path fill="#E5F7FB" d="M38.644 17h10.34c5.522 0 10 4.477 10 10v21c0 5.523-4.478 10-10 10h-10.34V17z" />
                        <rect width="57.5" height="38.5" x="1.25" y="18.25" stroke="#00B3D8" strokeWidth="2.5" rx="10" />
                        <circle cx="20.508" cy="6" r="5" fill="#FFF" />
                        <path fill="#E5F7FB" d="M20.508 12c3.093 0 4-2.096 4-5.778 0-3.682-.907-6.222-4-6.222v12z" />
                        <circle cx="20.508" cy="6" r="4.75" stroke="#00B3D8" strokeWidth="2.5" />
                        <circle cx="40.508" cy="6" r="5" fill="#FFF" />
                        <path fill="#E5F7FB" d="M40.508 12c3.093 0 4-2.096 4-5.778 0-3.682-.907-6.222-4-6.222v12z" />
                        <circle cx="40.508" cy="6" r="4.75" stroke="#00B3D8" strokeWidth="2.5" />
                        <ellipse cx="20.339" cy="35" fill="#00B3D8" rx="4.068" ry="4" />
                        <ellipse cx="38.644" cy="35" fill="#00B3D8" rx="4.068" ry="4" />
                    </g>
                </g>
            </g>
        </Svg>
    );
};
