import React from 'react';
import styled from 'styled-components';
import { useSection } from 'hooks/useSection';
import { Animator } from './animations';
import { useDelay } from 'hooks';

const Svg = styled.svg<{ seen?: boolean; delay: number }>`
    ${Animator.Animate('g > g:nth-child(1)')
        .TranslateX(25)
        .Delay(0)
        .Render()}
    ${Animator.Animate('g > g:nth-child(2)')
        .TranslateX(-25)
        .Delay(0.3)
        .Render()}
`;

const Security = () => {
    const { seen } = useSection();
    const { delay } = useDelay();
    return (
        <Svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 75 77" width="100%" height="100%" seen={seen} delay={delay}>
            <g fill="none" fillRule="evenodd">
                <g>
                    <path
                        fill="#FFF"
                        fillRule="nonzero"
                        d="M18.525 30.8h17.756a3 3 0 012.32 1.097l10.41 12.687a26.16 26.16 0 015.603 20.769A13.858 13.858 0 0140.934 77H13.92A13.768 13.768 0 01.317 65.353a26.52 26.52 0 015.614-20.8L16.196 31.91a3 3 0 012.33-1.109z"
                    />
                    <path
                        fill="#F5F5F8"
                        fillRule="nonzero"
                        d="M29.917 30.8h6.364a3 3 0 012.32 1.097l10.41 12.687a26.16 26.16 0 015.603 20.769A13.858 13.858 0 0140.934 77h-.852c-7.01 0-12.717-5.639-12.8-12.65l-.364-30.514a3 3 0 013-3.036z"
                    />
                    <path
                        stroke="#9D9DBF"
                        strokeWidth="2.5"
                        d="M18.525 32.05a1.75 1.75 0 00-1.358.647L6.9 45.341a25.27 25.27 0 00-5.35 19.82A12.518 12.518 0 0013.92 75.75h27.013c6.186 0 11.46-4.49 12.446-10.597a24.91 24.91 0 00-5.334-19.776L37.634 32.69a1.75 1.75 0 00-1.353-.64H18.525z"
                    />
                    <path
                        fill="#9D9DBF"
                        fillRule="nonzero"
                        d="M28.775 65.266h-2.77v-2.577c-3.395-.554-4.936-3.059-5.105-5.034l3.323-.746c.12 1.396 1.084 2.649 3.155 2.649 1.205 0 2.072-.578 2.072-1.517 0-.699-.53-1.156-1.494-1.373l-2.143-.506c-2.697-.65-4.36-2.288-4.36-4.576 0-2.697 2.024-4.552 4.553-4.985V44h2.77v2.673c2.648.578 3.853 2.48 4.19 4.118l-3.348.892c-.144-.747-.554-2-2.456-2-1.349 0-2.023.795-2.023 1.566 0 .65.481 1.156 1.42 1.373l2.096.457c3.227.723 4.503 2.601 4.503 4.769 0 2.216-1.59 4.287-4.383 4.792v2.626z"
                    />
                    <path stroke="#9D9DBF" strokeLinecap="round" strokeWidth="2.5" d="M17.844 26.456H36.6" />
                    <path fill="#FFF" fillRule="nonzero" d="M21.17 0h11.425a5 5 0 014.743 6.581L34.032 16.5h-14.3l-3.306-9.919A5 5 0 0121.169 0z" />
                    <path fill="#F5F5F8" fillRule="nonzero" d="M26.881 1.1l4.415.82a5 5 0 014.02 5.733L34.031 15.4H27.15l-.27-14.3z" />
                    <path
                        stroke="#9D9DBF"
                        strokeWidth="2.5"
                        d="M20.633 15.25h12.498l3.022-9.064a3.75 3.75 0 00-3.558-4.936H21.169a3.75 3.75 0 00-3.557 4.936l3.021 9.064z"
                    />
                    <path stroke="#9D9DBF" strokeLinecap="round" strokeWidth="2.5" d="M17.844 21.45H36.6" />
                </g>
                <g>
                    <path
                        fill="#FFF"
                        fillRule="nonzero"
                        d="M36.769 36.204l16.18-7.28a5 5 0 014.103 0l16.18 7.28A3 3 0 0175 38.94V49.5c0 7.98-3.28 15.609-9.073 21.098l-2.013 1.907c-5.024 4.76-12.896 4.75-17.908-.022l-1.954-1.862A29.167 29.167 0 0135 49.5V38.94a3 3 0 011.769-2.736z"
                    />
                    <path
                        fill="#E5F7FB"
                        fillRule="nonzero"
                        d="M55 28l18.231 8.204A3 3 0 0175 38.94V49.5c0 7.957-3.376 15.54-9.289 20.865l-2.583 2.326-8.179 2.59L55 28z"
                    />
                    <path
                        stroke="#00B3D8"
                        strokeWidth="2.5"
                        d="M37.282 37.344a1.75 1.75 0 00-1.032 1.596V49.5c0 7.64 3.131 14.946 8.664 20.216l1.955 1.861a11.75 11.75 0 0016.185.02l2.013-1.906A27.816 27.816 0 0073.75 49.5V38.94a1.75 1.75 0 00-1.032-1.596l-16.18-7.28a3.75 3.75 0 00-3.077 0l-16.18 7.28z"
                    />
                    <path fill="#00B3D8" d="M55 36l13 5.982V53H55zm0 33a16.103 16.103 0 01-13-15.801V53h13v16z" />
                </g>
            </g>
        </Svg>
    );
};

export default Security;
