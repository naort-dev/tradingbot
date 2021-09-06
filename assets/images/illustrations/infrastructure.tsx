import React from 'react';
import styled from 'styled-components';
import { useSection } from '@hooks';
import { Animator } from './animations';
import { useDelay } from '@hooks';

const Svg = styled.svg<{ seen?: boolean; delay: number }>`
    ${Animator.Animate('> g > g:nth-child(1)').TranslateX(25).Delay(0).Render()}
    ${Animator.Animate('> g > g:nth-child(2)').TranslateX(-25).Delay(0.3).Render()}
`;

const Infrastructure = () => {
    const { seen } = useSection();
    const { delay } = useDelay();
    return (
        <Svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 65" width="100%" height="100%" seen={seen} delay={delay}>
            <g fill="none">
                <g>
                    <g transform="translate(0 46)">
                        <rect width="68" height="19" fill="#FFF" rx="3" />
                        <rect width="29" height="19" x="39" fill="#F5F5F8" rx="3" />
                        <rect width="65.5" height="16.5" x="1.25" y="1.25" stroke="#9D9DBF" strokeWidth="2.5" rx="4" />
                        <circle cx="12.5" cy="9.5" r="2.5" fill="#9D9DBF" />
                    </g>
                    <g transform="translate(0 23)">
                        <rect width="68" height="19" fill="#FFF" rx="3" />
                        <rect width="29" height="19" x="39" fill="#F5F5F8" rx="3" />
                        <rect width="65.5" height="16.5" x="1.25" y="1.25" stroke="#9D9DBF" strokeWidth="2.5" rx="4" />
                        <circle cx="12.5" cy="9.5" r="2.5" fill="#9D9DBF" />
                    </g>
                    <rect width="68" height="19" fill="#FFF" rx="3" />
                    <rect width="29" height="19" x="39" fill="#F5F5F8" rx="3" />
                    <rect width="65.5" height="16.5" x="1.25" y="1.25" stroke="#9D9DBF" strokeWidth="2.5" rx="4" />
                    <circle cx="12.5" cy="9.5" r="2.5" fill="#9D9DBF" />
                </g>
                <g>
                    <g transform="translate(45 9)">
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
            </g>
        </Svg>
    );
};

export default Infrastructure;
