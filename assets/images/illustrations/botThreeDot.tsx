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

const BotThreeDot = () => {
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
                    <path
                        stroke="#00B3D8"
                        strokeLinecap="round"
                        strokeWidth="2.5"
                        d="M16 22.55h23.756M100 51.55h33.756M100 43.55h13.756"
                        mask="url(#b)"
                        opacity=".2"
                    />
                    <g className="bg">
                        <path stroke="#00B3D8" strokeLinecap="round" strokeWidth="2.5" d="M103 15.55h23.756" mask="url(#b)" opacity=".4" />
                        <path stroke="#00B3D8" strokeLinecap="round" strokeWidth="2.5" d="M100 59.55h10" mask="url(#b)" opacity=".2" />
                        <path stroke="#00B3D8" strokeLinecap="round" strokeWidth="2.5" d="M103 20.55h10" mask="url(#b)" opacity=".4" />
                        <path stroke="#00B3D8" strokeLinecap="round" strokeWidth="2.5" d="M16 30.55h40.756" mask="url(#b)" opacity=".2" />
                        <path stroke="#00B3D8" strokeLinecap="round" strokeWidth="2.5" d="M31 6.55h31.756" mask="url(#b)" opacity=".4" />
                        <rect width="13" height="13" x="84.5" y="11.5" stroke="#00B3D8" strokeWidth="3" mask="url(#b)" opacity=".4" rx="3" />
                        <rect width="11" height="11" x="26.5" y="50.5" stroke="#B7E9F3" strokeWidth="3" mask="url(#b)" rx="3" />
                        <rect width="11" height="11" x="9.5" y="50.5" stroke="#00B3D8" strokeWidth="3" mask="url(#b)" opacity=".4" rx="3" />
                        <rect width="11" height="11" x="-7.5" y="50.5" stroke="#B7E9F3" strokeWidth="3" mask="url(#b)" rx="3" />
                        <rect width="15" height="15" x="133.5" y="92.5" stroke="#B7E9F3" strokeWidth="3" mask="url(#b)" rx="3" />
                        <rect width="9" height="9" x="121.5" y="77.5" stroke="#00B3D8" strokeWidth="3" mask="url(#b)" opacity=".4" rx="3" />
                        <path stroke="#00B3D8" strokeLinecap="round" strokeWidth="2.5" d="M16 87.55h40.756" mask="url(#b)" opacity=".2" />
                        <path stroke="#00B3D8" strokeLinecap="round" strokeWidth="2.5" d="M16 79.55h10.756" mask="url(#b)" opacity=".4" />
                    </g>
                </g>
                <g mask="url(#b)" className="bot">
                    <g fillRule="nonzero" mask="url(#b)">
                        <g transform="translate(21 100)">
                            <rect width="108" height="61" fill="#FFF" rx="10" />
                            <path fill="#E5F7FB" d="M69.805 0h26.878c5.523 0 10 4.477 10 10v41c0 5.523-4.477 10-10 10H69.805V0z" />
                            <rect width="105.5" height="58.5" x="1.25" y="1.25" stroke="#00B3D8" strokeWidth="2.5" rx="10" />
                            <rect width="25.5" height="8.5" x="21.25" y="11.25" stroke="#00B3D8" strokeWidth="2.5" rx="4.25" />
                            <rect width="25.5" height="8.5" x="61.25" y="11.25" stroke="#00B3D8" strokeWidth="2.5" rx="4.25" />
                        </g>
                    </g>
                    <g fillRule="nonzero" transform="translate(39 37)">
                        <rect width="60" height="41" x="6" y="17" fill="#FFF" rx="10" />
                        <path fill="#E5F7FB" d="M44.644 17h10.34c5.522 0 10 4.477 10 10v21c0 5.523-4.478 10-10 10h-10.34V17z" />
                        <rect width="57.5" height="38.5" x="7.25" y="18.25" stroke="#00B3D8" strokeWidth="2.5" rx="10" />
                        <path
                            stroke="#00B3D8"
                            strokeWidth="2.5"
                            d="M6.75 46.75v-18.5H5A3.75 3.75 0 0 0 1.25 32v11A3.75 3.75 0 0 0 5 46.75h1.75zM65.25 28.25v18.5H67A3.75 3.75 0 0 0 70.75 43V32A3.75 3.75 0 0 0 67 28.25h-1.75z"
                        />
                        <g transform="translate(14.508)">
                            <circle cx="6" cy="6" r="5" fill="#FFF" />
                            <path fill="#E5F7FB" d="M6 12c3.093 0 4-2.096 4-5.778C10 2.54 9.093 0 6 0v12z" />
                            <circle cx="6" cy="6" r="4.75" stroke="#00B3D8" strokeWidth="2.5" />
                        </g>
                        <g transform="translate(45)">
                            <circle cx="6" cy="6" r="5" fill="#FFF" />
                            <path fill="#E5F7FB" d="M6 12c3.093 0 4-2.096 4-5.778C10 2.54 9.093 0 6 0v12z" />
                            <circle cx="6" cy="6" r="4.75" stroke="#00B3D8" strokeWidth="2.5" />
                        </g>
                        <g transform="translate(30)">
                            <circle cx="6" cy="6" r="5" fill="#FFF" />
                            <path fill="#E5F7FB" d="M6 12c3.093 0 4-2.096 4-5.778C10 2.54 9.093 0 6 0v12z" />
                            <circle cx="6" cy="6" r="4.75" stroke="#00B3D8" strokeWidth="2.5" />
                        </g>
                        <ellipse cx="26.339" cy="35" fill="#00B3D8" rx="4.068" ry="4" />
                        <ellipse cx="44.644" cy="35" fill="#00B3D8" rx="4.068" ry="4" />
                    </g>
                </g>
            </g>
        </Svg>
    );
};

export default BotThreeDot;
