import React, { useState, useEffect } from 'react';
import { Portal } from './portal';
import styled from 'styled-components';

const Background = styled.div`
    background-color: black;
    opacity: 0.4;
    transition: 0.3s all;
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
`;

const Overlay = styled.div`
    z-index: 2000;
    display: flex;
    align-items: center;
    justify-content: center;
    position: fixed;
    left: 0;
    top: 0;
    width: 100vw;
    height: 100vh;
    touch-action: none;
    overflow: hidden;
`;

const Container = styled.div`
    width: 70%;
    height: 60%;
    max-width: 900px;
    max-height: 630px;
    background-color: #181927;
    color: #fff;
    z-index: 2001;
    position: relative;
    overflow: hidden;
    border-radius: 3px;
    @media (max-width: 900px) {
        width: 80%;
    }
    @media (max-width: 768px) {
        width: 90%;
        height: 70%;
        max-height: 450px;
    }
    @media (max-height: 800px) {
        max-height: 680px;
        height: 75%;
    }
`;

const Triangle = styled.div`
    background-color: #2d2e3a;
    position: absolute;
    width: 100%;
    height: 60%;
    transform: rotateZ(45deg);
    right: -50%;
    z-index: 2002;
    opacity: 0.5;
`;

const Content = styled.div`
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    z-index: 2003;
`;

const CrossContainer = styled.div`
    z-index: 2004;
    position: absolute;
    right: 30px;
    top: 30px;
    width: 15px;
    height: 15px;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    > div:first-child {
        transform: rotateZ(45deg);
    }
    > div:last-child {
        transform: rotateZ(-45deg);
    }
    &:hover {
        opacity: 0.8;
    }
`;

const CrossBar = styled.div`
    z-index: 2004;
    width: 2px;
    height: 15px;
    background-color: #fff;
    border-radius: 2px;
    position: absolute;
`;

interface Props {
    onClose: () => void;
}

export const Popup: React.FC<Props> = ({ onClose, children }) => {
    const [ready, setReady] = useState(false);

    useEffect(() => {
        if (typeof document === 'undefined') {
            return;
        }
        const timeout = setTimeout(() => {
            setReady(true);
        }, 100);

        // prevent scrolling
        document.documentElement.style.overflow = 'hidden';

        return () => {
            clearTimeout(timeout);
            document.documentElement.style.overflow = 'scroll';
        };
    }, []);

    if (!ready) {
        return null;
    }

    return (
        <Portal>
            <Overlay>
                <Background />
                <Container>
                    <Triangle />
                    <CrossContainer onClick={onClose}>
                        <CrossBar />
                        <CrossBar />
                    </CrossContainer>
                    <Content>{children}</Content>
                </Container>
            </Overlay>
        </Portal>
    );
};

const PopupImageRight = styled.div`
    position: absolute;
    right: 0;
    top: 0;
    height: 100%;
    width: 40%;
    overflow: hidden;
    > img {
        max-height: 90%;
        top: 30px;
        position: absolute;
        right: 0;
    }
    @media (max-width: 768px) {
        display: none;
    }
`;

const PopupLeft = styled.div`
    position: absolute;
    left: 0;
    top: 0;
    height: 100%;
    width: 60%;
    padding: 70px;
    padding-right: 35px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
    > h1 {
        font-size: 45px;
        font-weight: 500;
        font-stretch: normal;
        font-style: normal;
        line-height: 1.16;
        letter-spacing: -1px;
        color: #ffffff;
        margin: 20px 0px;
        > b {
            color: #4daccf;
        }
        @media (max-width: 768px) {
            font-size: 35px;
            margin: 15px 0px;
        }
        @media (max-width: 350px) {
            font-size: 25px;
            margin: 5px 0px;
        }
    }
    > h2 {
        font-size: 20px;
        font-weight: normal;
        font-stretch: normal;
        font-style: normal;
        line-height: 1.65;
        letter-spacing: -0.4px;
        color: #ffffff;
        margin-bottom: 20px;
        > b {
            color: #4daccf;
        }
        @media (max-width: 768px) {
            font-size: 16px;
            margin-bottom: 15px;
        }
        @media (max-width: 350px) {
            font-size: 14px;
        }
    }
    > h3 {
        opacity: 0.6;
        font-size: 13px;
        color: #fff;
        margin: 15px 0px;
        @media (max-width: 350px) {
            font-size: 12px;
            margin: 8px 0px;
        }
    }
    @media (max-width: 768px) {
        width: 100%;
        padding: 15px;
        text-align: center;
        display: flex;
        align-items: center;
        > button {
            padding: 14px 20px;
        }
    }
`;

const Emoji = styled.div`
    width: 100%;
    text-align: left;
    font-size: 45px;
    @media (max-width: 768px) {
        font-size: 35px;
        text-align: center;
    }
`;

export const PopupLayout = {
    Left: PopupLeft,
    Right: PopupImageRight,
    Emoji,
};
