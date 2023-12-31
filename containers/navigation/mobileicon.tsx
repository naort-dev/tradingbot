import React from 'react';
import styled from 'styled-components';
import { useDark } from '@hooks';
import { useOpen } from './hooks/useOpen';

const Menu = styled.div<{ open?: boolean }>`
    display: none;
    height: 25px;
    width: 25px;
    align-items: center;
    justify-content: flex-end;
    cursor: pointer;
    margin-top: 6px;
    position: absolute;
    top: 12px;
    right: 25px;
    @media (max-width: 768px) {
        display: flex;
    }
    & > div {
        background-color: #000;
    }
`;

const MenuBar = styled.div<{ id: string; open?: boolean }>`
    width: 20px;
    height: 2px;
    position: absolute;
    top: 5px;
    right: 0;
    transition: 0.3s all;
    ${(props) =>
        props.id == '1' &&
        `
        top: 5px;
        ${
            props.open &&
            `
            transform: rotate(-45deg);
            transform-origin: 100% 100%;
        `
        }
    `}
    ${(props) =>
        props.id == '2' &&
        `
        top: 12px;
        ${
            props.open &&
            `
            transform: rotate(45deg) translate(2px);
            transform-origin: 55% 22%;
        `
        }
    `}
    ${(props) =>
        props.id == '3' &&
        `
        top: 19px;
        width: 16px;
        ${
            props.open &&
            `
            opacity: 0.0;
        `
        }
    `}
`;

export const MobileIcon = () => {
    const { open, setOpen } = useOpen();
    return (
        <Menu onClick={() => setOpen(!open)} open={open}>
            <MenuBar id="1" open={open} />
            <MenuBar id="2" open={open} />
            <MenuBar id="3" open={open} />
        </Menu>
    );
};
