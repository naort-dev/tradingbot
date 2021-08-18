import React, { useState } from 'react';
import { useOpen } from './hooks/useOpen';
import styled from 'styled-components';
import { Button, Link, ButtonProps } from '@components';
import { useHover } from 'hooks/useHover';
import { useOnClickOutside } from 'hooks/useOnClickOutside';
import { useIsMobile } from 'hooks/useIsMobile';
import { EventType } from '@trality/web-tracking';
import { LazyImage } from 'components/lazyImage';
import { Padding, PaddingSizes, TextLink, lightTheme } from '@trality/web-ui-components';

interface LinkItemProps {
    target: string;
    name: string;
}

const SimpleLink = styled.a``;

const Item = styled.div<{ open?: boolean; num: number; selected?: boolean }>`
    font-size: 21px;
    font-weight: normal;
    font-style: normal;
    font-stretch: normal;
    letter-spacing: normal;
    cursor: pointer;
    position: relative;
    & > a {
        text-decoration: none;
        transition: 0.3s all;
        ${(props) =>
            props.selected &&
            `
             color: ${props.theme.main};
        `}
    }
    &:hover {
        & > a {
            color: ${(props) => props.theme.main};
        }
    }
    @media (max-width: 1024px) {
        margin: 0;
        font-size: 12px;
    }
    @media (max-width: 768px) {
        display: none;
        opacity: 0;
        font-size: 15px;
        margin-left: 0px;
        transition: 0.3s all;
        transition-delay: ${(props) => 0.3 + props.num * 0.1}s;
        width: 100%;
        margin: 0;
        ${(props) =>
            props.open &&
            `
            display: block;
            color: #fff;
            font-size: 24px;
            opacity: 1.0;
            & > a {
                color: white;
            }
        `}
        > a {
            padding: 11px 22px;
            display: flex;
            align-items: center;
        }
    }
`;

export const LinkEntry = styled.a`
    padding: 10px 16px;
    color: ${(props) => props.theme.font};
`;

export const LinkItem: React.FC<LinkItemProps> = ({ target, name }) => {
    const { open } = useOpen();
    return (
        <Item open={open} num={1} selected={false}>
            <Link href={target}>
                <LinkEntry>{name}</LinkEntry>
            </Link>
        </Item>
    );
};

interface ButtonItemProps extends LinkItemProps, ButtonProps<EventType> {
    hollow?: boolean;
}

const ButtonItemWrapper = styled(Item)`
    @media (max-width: 768px) {
        width: auto;
        > a {
            padding: 0px;
            display: inline-block;
        }
    }
`;

export const ButtonItem: React.FC<ButtonItemProps> = ({ target, name, hollow, ...props }) => {
    const { open } = useOpen();
    const isMobile = useIsMobile();
    return (
        <ButtonItemWrapper open={open} num={1} selected={false}>
            <a href={target}>
                <Button small={!isMobile} hollow={hollow} border to={target} {...props}>
                    {name}
                </Button>
            </a>
        </ButtonItemWrapper>
    );
};

interface DropdownItemProps extends LinkItemProps {
    items: LinkItemProps[];
}

const DropdownItemContainer = styled(Item)``;

const DropdownButton = styled.div`
    svg {
        margin-left: 7px;
    }
`;

const DropdownMenu = styled.div<{ visible?: boolean }>`
    position: absolute;
    box-sizing: border-box;
    flex-direction: column;
    align-items: flex-start;
    white-space: nowrap;
    z-index: 1003;
    padding: 10px 0px;
    display: none;
    border-radius: 5px;
    box-shadow: 0 15px 60px 0 ${(props) => props.theme.shadowColor};
    background-color: ${(props) => props.theme.background};

    min-width: 100%;
    ${(props) =>
        props.visible &&
        `
        display: flex;
    `}
    @media (max-width: 768px) {
        position: relative;
        margin: 0px 22px;
        background-color: ${lightTheme.colors.white.darker};
        box-shadow: none;
        color: ${lightTheme.colors.black.lighter};
        a {
            color: ${lightTheme.colors.black.lighter} !important;
        }
    }
`;

export const DropdownItem: React.FC<DropdownItemProps> = ({ name, items }) => {
    const { open } = useOpen();
    const [ref, hovering] = useHover<HTMLDivElement>();
    const [menuOpen, setMenuOpen] = useState(false);

    useOnClickOutside(ref, () => {
        if (menuOpen) {
            setMenuOpen(false);
        }
    });

    const isMobile = useIsMobile();

    return (
        <DropdownItemContainer open={open} num={1} selected={false} ref={ref} onClick={() => setMenuOpen(!menuOpen)}>
            <DropdownButton>
                <Padding
                    size={{
                        top: PaddingSizes.Sixteen,
                        bottom: PaddingSizes.Sixteen,
                        left: PaddingSizes.Sixteen,
                        right: PaddingSizes.Sixteen,
                    }}
                    mobileSize={{
                        top: PaddingSizes.Zero,
                        bottom: PaddingSizes.Zero,
                        left: PaddingSizes.Zero,
                        right: PaddingSizes.Zero,
                    }}
                >
                    <TextLink href="#">
                        {name}
                        <svg width="8" height="7" viewBox="0 0 8 7">
                            <path
                                fill="#575772"
                                fillRule="nonzero"
                                d="M2.874 5.994L.121 1.842A.8.8 0 0 1 .788.6h5.506a.8.8 0 0 1 .666 1.242L4.208 5.994a.8.8 0 0 1-1.334 0z"
                            />
                        </svg>
                    </TextLink>
                </Padding>
            </DropdownButton>
            <DropdownMenu visible={(hovering && !isMobile) || menuOpen}>
                {items.map(({ target, name }) => {
                    const isRemote = target.startsWith('http');
                    if (isRemote) {
                        return (
                            <Padding
                                size={{
                                    top: PaddingSizes.Eight,
                                    bottom: PaddingSizes.Eight,
                                    left: PaddingSizes.Sixteen,
                                    right: PaddingSizes.Sixteen,
                                }}
                                mobileSize={{
                                    top: PaddingSizes.Zero,
                                    bottom: PaddingSizes.Zero,
                                    left: PaddingSizes.Sixteen,
                                    right: PaddingSizes.Sixteen,
                                }}
                            >
                                <TextLink key={target} href={target} target="_blank">
                                    {name}
                                </TextLink>
                            </Padding>
                        );
                    } else {
                        return (
                            <Padding
                                size={{
                                    top: PaddingSizes.Eight,
                                    bottom: PaddingSizes.Eight,
                                    left: PaddingSizes.Sixteen,
                                    right: PaddingSizes.Sixteen,
                                }}
                                mobileSize={{
                                    top: PaddingSizes.Zero,
                                    bottom: PaddingSizes.Zero,
                                    left: PaddingSizes.Sixteen,
                                    right: PaddingSizes.Sixteen,
                                }}
                            >
                                <TextLink href={target} key={target}>
                                    {name}
                                </TextLink>
                            </Padding>
                        );
                    }
                })}
            </DropdownMenu>
        </DropdownItemContainer>
    );
};

const ContactItemButton = styled((props) => <Button {...props} />)<{ open?: boolean }>`
    border: none;
    padding: 0;
    min-width: 35px;
    &:hover {
        border: none;
    }
    @media (max-width: 1200px) {
        display: none;
    }
    @media (max-width: 768px) {
        > a {
            padding: 0px;
            display: inline-block;
        }
        ${(props) =>
            props.open &&
            `
            display: block;
            margin-top: 15px;
            `}
    }
`;

interface ContactItemProps extends LinkItemProps {
    source: any;
}

const Img = styled.img`
    height: 20px;
`;

export const ContactItem: React.FC<ContactItemProps> = ({ source, target }) => {
    const { open } = useOpen();
    return (
        <ContactItemButton type="button" hollow small open={open} to={target}>
            <LazyImage src={source} />
        </ContactItemButton>
    );
};

export const ItemGroupWrapper = styled.div`
    display: flex;
    > div {
        margin-left: 7px;
    }
    > div:first-child {
        margin-left: 0px;
    }
    margin-left: 16px;
    @media (max-width: 768px) {
        margin-right: 16px;
        margin-left: 22px !important;
        margin-top: 25px !important;
        width: 100%;
    }
`;

export const ItemGroup: React.FC = ({ children }) => {
    return <ItemGroupWrapper>{children}</ItemGroupWrapper>;
};
