import React from 'react';
import styled from 'styled-components';
import { Link } from './link';
import { Margins } from '@theme';

const Container = styled.div`
    margin: ${Margins.VeryLarge} 0px;
    width: 100%;
    display: flex;
    color: ${(props) => props.theme.bluePrimary};
    * {
        margin-left: ${Margins.Small};
    }
`;

const Crumb = styled.div``;

interface Props {
    crumbs: Array<{
        title: string;
        link?: string;
    }>;
}

export const Breadcrumb: React.FC<Props> = ({ crumbs }) => {
    return (
        <Container>
            {crumbs.map((c, idx) => {
                return (
                    <Crumb key={c.title}>
                        {c.link ? (
                            <Link to={c.link}>
                                <a>{c.title}</a>
                            </Link>
                        ) : (
                            <span>{c.title}</span>
                        )}
                        {idx !== crumbs.length - 1 && <span>|</span>}
                    </Crumb>
                );
            })}
        </Container>
    );
};
