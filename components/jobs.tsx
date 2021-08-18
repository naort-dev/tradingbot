import { KnowMore } from '@components';
import { Layout } from '@containers';
import { Cell, Headline, Padding, PaddingSizes, Row, SubHeadline, Text, TextLink } from '@trality/web-ui-components';
import { Position, useJobs } from 'hooks/useJobs';
import React from 'react';
import { useEffect } from 'react';
import styled from 'styled-components';
import convert from 'xml-js';
import * as LoaderGif from '../assets/images/misc/trality-bot-animation.gif';

const LoaderPosition = styled.div`
    text-align: center;
    margin: 0 auto;
`;
const Loader = styled.img`
    max-width: 150px;
`;

export const JobsContainer = () => {
    const data = useJobs() as Position[] | null;
    if (!data) {
        return (
            <LoaderPosition>
                <Loader src={LoaderGif} />
                <p>We're loading open positions</p>
            </LoaderPosition>
        );
    }
    return (
        <Row>
            {data.map((item) => {
                return (
                    <Cell size={4} mobileSize={12}>
                        <Padding
                            size={{
                                top: PaddingSizes.Zero,
                                bottom: PaddingSizes.SixtyFour,
                                left: PaddingSizes.Twenty,
                                right: PaddingSizes.Twenty,
                            }}
                            mobileSize={{
                                top: PaddingSizes.Zero,
                                bottom: PaddingSizes.ThirtySix,
                                left: PaddingSizes.Sixteen,
                                right: PaddingSizes.Sixteen,
                            }}
                        >
                            <SubHeadline subheadlineType="SubHeadline2">{item.title}</SubHeadline>
                            <Padding
                                size={{
                                    top: PaddingSizes.TwentyFour,
                                    bottom: PaddingSizes.TwentyFour,
                                    left: PaddingSizes.Zero,
                                    right: PaddingSizes.Zero,
                                }}
                                mobileSize={{
                                    top: PaddingSizes.TwentyFour,
                                    bottom: PaddingSizes.TwentyFour,
                                    left: PaddingSizes.Zero,
                                    right: PaddingSizes.Zero,
                                }}
                            >
                                <Text bodyType="Body3">{item.desc.length > 250 ? item.desc.slice(0, 250) + '...' : item.desc}</Text>
                            </Padding>
                            <TextLink href={`/job?id=${item.id}`} withArrow>
                                Know more
                            </TextLink>
                        </Padding>
                    </Cell>
                );
            })}
        </Row>
    );
};
