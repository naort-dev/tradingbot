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
        .TranslateX(25)
        .Delay(0.25)
        .ScaleY(0.9)
        .Render()}
    ${Animator.Animate('> g > g:nth-child(3)')
        .TranslateX(-25)
        .Delay(0.5)
        .ScaleY(0.9)
        .Render()}
`;

export default () => {
    const { seen } = useSection();
    const { delay } = useDelay();
    return (
        <Svg width="100%" height="100%" viewBox="0 0 258 124" fill="none" xmlns="http://www.w3.org/2000/svg" seen={seen} delay={delay}>
            <g>
                <g>
                    <path
                        d="M72 83H10C4.47715 83 0 87.4772 0 93V114C0 119.523 4.47715 124 10 124H72C77.5229 124 82 119.523 82 114V93C82 87.4772 77.5229 83 72 83Z"
                        fill="white"
                    />
                    <path d="M53 83H71C76.523 83 81 87.477 81 93V114C81 119.523 76.523 124 71 124H53V83Z" fill="#E5F7FB" />
                    <path
                        d="M70.75 84.25H11.25C5.72715 84.25 1.25 88.7272 1.25 94.25V112.75C1.25 118.273 5.72715 122.75 11.25 122.75H70.75C76.2729 122.75 80.75 118.273 80.75 112.75V94.25C80.75 88.7272 76.2729 84.25 70.75 84.25Z"
                        stroke="#00B3D8"
                        strokeWidth="2.5"
                    />
                    <path
                        d="M61 37H21C15.4772 37 11 41.4772 11 47V68C11 73.5228 15.4772 78 21 78H61C66.5228 78 71 73.5228 71 68V47C71 41.4772 66.5228 37 61 37Z"
                        fill="white"
                    />
                    <path
                        d="M49.6436 37H59.9836C65.5056 37 69.9836 41.477 69.9836 47V68C69.9836 73.523 65.5056 78 59.9836 78H49.6436V37V37Z"
                        fill="#E5F7FB"
                    />
                    <path
                        d="M59.75 38.25H22.25C16.7272 38.25 12.25 42.7272 12.25 48.25V66.75C12.25 72.2728 16.7272 76.75 22.25 76.75H59.75C65.2728 76.75 69.75 72.2728 69.75 66.75V48.25C69.75 42.7272 65.2728 38.25 59.75 38.25Z"
                        stroke="#00B3D8"
                        strokeWidth="2.5"
                    />
                    <path
                        d="M41.5078 31C44.2692 31 46.5078 28.7614 46.5078 26C46.5078 23.2386 44.2692 21 41.5078 21C38.7464 21 36.5078 23.2386 36.5078 26C36.5078 28.7614 38.7464 31 41.5078 31Z"
                        fill="white"
                    />
                    <path d="M41.5078 32C44.6008 32 45.5078 29.904 45.5078 26.222C45.5078 22.54 44.6008 20 41.5078 20V32V32Z" fill="#E5F7FB" />
                    <path
                        d="M41.5078 30.75C44.1312 30.75 46.2578 28.6234 46.2578 26C46.2578 23.3766 44.1312 21.25 41.5078 21.25C38.8845 21.25 36.7578 23.3766 36.7578 26C36.7578 28.6234 38.8845 30.75 41.5078 30.75Z"
                        stroke="#00B3D8"
                        strokeWidth="2.5"
                    />
                    <path
                        d="M31.3395 59C33.5862 59 35.4075 57.2091 35.4075 55C35.4075 52.7909 33.5862 51 31.3395 51C29.0928 51 27.2715 52.7909 27.2715 55C27.2715 57.2091 29.0928 59 31.3395 59Z"
                        fill="#00B3D8"
                    />
                    <path
                        d="M49.6442 59C51.8909 59 53.7122 57.2091 53.7122 55C53.7122 52.7909 51.8909 51 49.6442 51C47.3975 51 45.5762 52.7909 45.5762 55C45.5762 57.2091 47.3975 59 49.6442 59Z"
                        fill="#00B3D8"
                    />
                </g>
                <g>
                    <path
                        d="M153 73H81C75.4772 73 71 77.4772 71 83V114C71 119.523 75.4772 124 81 124H153C158.523 124 163 119.523 163 114V83C163 77.4772 158.523 73 153 73Z"
                        fill="white"
                    />
                    <path
                        d="M130.463 73H151.878C157.401 73 161.878 77.477 161.878 83V114C161.878 119.523 157.401 124 151.878 124H130.463V73Z"
                        fill="#E5F7FB"
                    />
                    <path
                        d="M151.75 74.25H82.25C76.7272 74.25 72.25 78.7272 72.25 84.25V112.75C72.25 118.273 76.7272 122.75 82.25 122.75H151.75C157.273 122.75 161.75 118.273 161.75 112.75V84.25C161.75 78.7272 157.273 74.25 151.75 74.25Z"
                        stroke="#00B3D8"
                        strokeWidth="2.5"
                    />
                    <path
                        d="M137 27H97C91.4772 27 87 31.4772 87 37V58C87 63.5228 91.4772 68 97 68H137C142.523 68 147 63.5228 147 58V37C147 31.4772 142.523 27 137 27Z"
                        fill="white"
                    />
                    <path
                        d="M125.644 27H135.984C141.506 27 145.984 31.477 145.984 37V58C145.984 63.523 141.506 68 135.984 68H125.644V27V27Z"
                        fill="#E5F7FB"
                    />
                    <path
                        d="M135.75 28.25H98.25C92.7272 28.25 88.25 32.7272 88.25 38.25V56.75C88.25 62.2728 92.7272 66.75 98.25 66.75H135.75C141.273 66.75 145.75 62.2728 145.75 56.75V38.25C145.75 32.7272 141.273 28.25 135.75 28.25Z"
                        stroke="#00B3D8"
                        strokeWidth="2.5"
                    />
                    <path
                        d="M107.508 21C110.269 21 112.508 18.7614 112.508 16C112.508 13.2386 110.269 11 107.508 11C104.746 11 102.508 13.2386 102.508 16C102.508 18.7614 104.746 21 107.508 21Z"
                        fill="white"
                    />
                    <path d="M107.508 22C110.601 22 111.508 19.904 111.508 16.222C111.508 12.54 110.601 10 107.508 10V22Z" fill="#E5F7FB" />
                    <path
                        d="M107.508 20.75C110.131 20.75 112.258 18.6234 112.258 16C112.258 13.3766 110.131 11.25 107.508 11.25C104.884 11.25 102.758 13.3766 102.758 16C102.758 18.6234 104.884 20.75 107.508 20.75Z"
                        stroke="#00B3D8"
                        strokeWidth="2.5"
                    />
                    <path
                        d="M127.508 21C130.269 21 132.508 18.7614 132.508 16C132.508 13.2386 130.269 11 127.508 11C124.746 11 122.508 13.2386 122.508 16C122.508 18.7614 124.746 21 127.508 21Z"
                        fill="white"
                    />
                    <path d="M127.508 22C130.601 22 131.508 19.904 131.508 16.222C131.508 12.54 130.601 10 127.508 10V22Z" fill="#E5F7FB" />
                    <path
                        d="M127.508 20.75C130.131 20.75 132.258 18.6234 132.258 16C132.258 13.3766 130.131 11.25 127.508 11.25C124.884 11.25 122.758 13.3766 122.758 16C122.758 18.6234 124.884 20.75 127.508 20.75Z"
                        stroke="#00B3D8"
                        strokeWidth="2.5"
                    />
                    <path
                        d="M107.339 49C109.586 49 111.407 47.2091 111.407 45C111.407 42.7909 109.586 41 107.339 41C105.093 41 103.271 42.7909 103.271 45C103.271 47.2091 105.093 49 107.339 49Z"
                        fill="#00B3D8"
                    />
                    <path
                        d="M125.644 49C127.891 49 129.712 47.2091 129.712 45C129.712 42.7909 127.891 41 125.644 41C123.397 41 121.576 42.7909 121.576 45C121.576 47.2091 123.397 49 125.644 49Z"
                        fill="#00B3D8"
                    />
                    <path
                        d="M248 63H160C154.477 63 150 67.4772 150 73V114C150 119.523 154.477 124 160 124H248C253.523 124 258 119.523 258 114V73C258 67.4772 253.523 63 248 63Z"
                        fill="white"
                    />
                </g>
                <g>
                    <path
                        d="M219.805 63H246.683C252.206 63 256.683 67.477 256.683 73V114C256.683 119.523 252.206 124 246.683 124H219.805V63Z"
                        fill="#E5F7FB"
                    />
                    <path
                        d="M246.75 64.25H161.25C155.727 64.25 151.25 68.7272 151.25 74.25V112.75C151.25 118.273 155.727 122.75 161.25 122.75H246.75C252.273 122.75 256.75 118.273 256.75 112.75V74.25C256.75 68.7272 252.273 64.25 246.75 64.25Z"
                        stroke="#00B3D8"
                        strokeWidth="2.5"
                    />
                    <path
                        d="M192.5 74.25H175.5C173.153 74.25 171.25 76.1528 171.25 78.5C171.25 80.8472 173.153 82.75 175.5 82.75H192.5C194.847 82.75 196.75 80.8472 196.75 78.5C196.75 76.1528 194.847 74.25 192.5 74.25Z"
                        stroke="#00B3D8"
                        strokeWidth="2.5"
                    />
                    <path
                        d="M232.5 74.25H215.5C213.153 74.25 211.25 76.1528 211.25 78.5C211.25 80.8472 213.153 82.75 215.5 82.75H232.5C234.847 82.75 236.75 80.8472 236.75 78.5C236.75 76.1528 234.847 74.25 232.5 74.25Z"
                        stroke="#00B3D8"
                        strokeWidth="2.5"
                    />
                    <path
                        d="M224 17H184C178.477 17 174 21.4772 174 27V48C174 53.5228 178.477 58 184 58H224C229.523 58 234 53.5228 234 48V27C234 21.4772 229.523 17 224 17Z"
                        fill="white"
                    />
                    <path
                        d="M212.644 17H222.984C228.506 17 232.984 21.477 232.984 27V48C232.984 53.523 228.506 58 222.984 58H212.644V17V17Z"
                        fill="#E5F7FB"
                    />
                    <path
                        d="M222.75 18.25H185.25C179.727 18.25 175.25 22.7272 175.25 28.25V46.75C175.25 52.2728 179.727 56.75 185.25 56.75H222.75C228.273 56.75 232.75 52.2728 232.75 46.75V28.25C232.75 22.7272 228.273 18.25 222.75 18.25Z"
                        stroke="#00B3D8"
                        strokeWidth="2.5"
                    />
                    <path
                        d="M174.75 46.75V28.25H173C172.005 28.25 171.052 28.6451 170.348 29.3483C169.645 30.0516 169.25 31.0054 169.25 32V43C169.25 43.9946 169.645 44.9484 170.348 45.6516C171.052 46.3549 172.005 46.75 173 46.75H174.75ZM233.25 28.25V46.75H235C235.995 46.75 236.948 46.3549 237.652 45.6516C238.355 44.9484 238.75 43.9946 238.75 43V32C238.75 31.0054 238.355 30.0516 237.652 29.3483C236.948 28.6451 235.995 28.25 235 28.25H233.25Z"
                        stroke="#00B3D8"
                        strokeWidth="2.5"
                    />
                    <path
                        d="M188.508 11C191.269 11 193.508 8.76142 193.508 6C193.508 3.23858 191.269 1 188.508 1C185.746 1 183.508 3.23858 183.508 6C183.508 8.76142 185.746 11 188.508 11Z"
                        fill="white"
                    />
                    <path d="M188.508 12C191.601 12 192.508 9.904 192.508 6.222C192.508 2.54 191.601 0 188.508 0V12Z" fill="#E5F7FB" />
                    <path
                        d="M188.508 10.75C191.131 10.75 193.258 8.62335 193.258 6C193.258 3.37665 191.131 1.25 188.508 1.25C185.884 1.25 183.758 3.37665 183.758 6C183.758 8.62335 185.884 10.75 188.508 10.75Z"
                        stroke="#00B3D8"
                        strokeWidth="2.5"
                    />
                    <path
                        d="M219 11C221.761 11 224 8.76142 224 6C224 3.23858 221.761 1 219 1C216.239 1 214 3.23858 214 6C214 8.76142 216.239 11 219 11Z"
                        fill="white"
                    />
                    <path d="M219 12C222.093 12 223 9.904 223 6.222C223 2.54 222.093 0 219 0V12Z" fill="#E5F7FB" />
                    <path
                        d="M219 10.75C221.623 10.75 223.75 8.62335 223.75 6C223.75 3.37665 221.623 1.25 219 1.25C216.377 1.25 214.25 3.37665 214.25 6C214.25 8.62335 216.377 10.75 219 10.75Z"
                        stroke="#00B3D8"
                        strokeWidth="2.5"
                    />
                    <path
                        d="M204 11C206.761 11 209 8.76142 209 6C209 3.23858 206.761 1 204 1C201.239 1 199 3.23858 199 6C199 8.76142 201.239 11 204 11Z"
                        fill="white"
                    />
                    <path d="M204 12C207.093 12 208 9.904 208 6.222C208 2.54 207.093 0 204 0V12Z" fill="#E5F7FB" />
                    <path
                        d="M204 10.75C206.623 10.75 208.75 8.62335 208.75 6C208.75 3.37665 206.623 1.25 204 1.25C201.377 1.25 199.25 3.37665 199.25 6C199.25 8.62335 201.377 10.75 204 10.75Z"
                        stroke="#00B3D8"
                        strokeWidth="2.5"
                    />
                    <path
                        d="M194.339 39C196.586 39 198.407 37.2091 198.407 35C198.407 32.7909 196.586 31 194.339 31C192.093 31 190.271 32.7909 190.271 35C190.271 37.2091 192.093 39 194.339 39Z"
                        fill="#00B3D8"
                    />
                    <path
                        d="M212.644 39C214.891 39 216.712 37.2091 216.712 35C216.712 32.7909 214.891 31 212.644 31C210.397 31 208.576 32.7909 208.576 35C208.576 37.2091 210.397 39 212.644 39Z"
                        fill="#00B3D8"
                    />
                </g>
            </g>
        </Svg>
    );
};