import React, { useCallback, useState, useEffect, useRef } from 'react';
import styled from 'styled-components';
import { ThemeColors, Paddings } from 'theme';
import { Waypoint } from 'react-waypoint';
import { SectionCtx } from 'hooks/useSection';
import { useDark } from 'hooks/dark';
import { Misc } from '@util';

interface SectionProps {
    fullHeight?: boolean;
    themeColor?: ThemeColors;
    id: string;
    noPadding?: boolean;
    dark?: boolean;
    noBgChange?: boolean;
    minimumPadding?: boolean;
    defaultDark?: boolean;
    collapseMobile?: boolean;
}

const SectionWrapper = styled.section<SectionProps>`
    display: flex;
    justify-content: center;
    position: relative;
    padding: ${Paddings.VeryLarge} 0px;
    @media (max-width: 768px) {
        padding: ${Paddings.Large} 0px;
    }
    ${(props) =>
        props.fullHeight &&
        `
        min-height: 80vh;
    `}
    ${(props) =>
        props.themeColor &&
        `
        background-color: ${props.theme[props.themeColor]};
    `}
    ${(props) =>
        props.noPadding &&
        `
        padding: 0px 0px;
    `}
    ${(props) =>
        props.minimumPadding &&
        `
        padding: ${Paddings.Large} 0px;

    `}
    ${(props) =>
        props.collapseMobile &&
        `
        min-height: auto;
    `}
`;

const EnterDelay = 0;
const LeaveDelay = 0;

export const Section: React.FC<SectionProps> = ({ children, dark, defaultDark, ...props }) => {
    const [entered, setEntered] = useState(false);
    const [seen, setSeen] = useState(false);
    const darkHook = useDark();
    const ref = useRef<HTMLDivElement>(null);

    const handleWaypointEnter = useCallback(() => {
        setEntered(true);
        if (!seen) {
            setSeen(true);
        }
    }, [seen]);

    const handleWaypointLeave = useCallback(() => {
        setTimeout(() => {
            setEntered(false);
        }, LeaveDelay);
    }, []);

    useEffect(() => {
        // Footer never changes dark theme
        if (entered && props.id !== 'footer' && !props.noBgChange) {
            if (dark === undefined) {
                darkHook.setDark(false);
            } else {
                darkHook.setDark(dark);
            }
        } else if (props.id === 'footer' && defaultDark) {
            darkHook.setDark(true);
        }
    }, [entered]);

    useEffect(() => {
        if (!Misc.IsServer() && ref.current) {
            const { top, bottom } = ref.current.getBoundingClientRect();
            if (window.scrollY + window.innerHeight / 2 > top + (bottom - top) / 4) {
                if (!seen) {
                    setSeen(true);
                }
            }
        }
    }, [seen, ref.current]);

    return (
        <SectionCtx.Provider value={{ entered, seen }}>
            <Waypoint onEnter={handleWaypointEnter} onLeave={handleWaypointLeave} bottomOffset="35%" topOffset="35%">
                <SectionWrapper {...props} ref={ref}>
                    {children}
                </SectionWrapper>
            </Waypoint>
        </SectionCtx.Provider>
    );
};