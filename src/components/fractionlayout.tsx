import React, { ReactNode } from 'react';
import styled from 'styled-components';

type FractionProps = {
    up: string | ReactNode;
    down: string | ReactNode;
};

const Fraction = styled.span`
    display: inline-block;
    text-align: center;
    vertical-align: middle;
`;

const UpFractionTd = styled.sup`
    display: block;
    padding: 0 0.3em;
    border-bottom: 0.08em solid;
`;

const Invisible = styled.span`
    display: none;
`;

const DownFractionTd = styled.sub`
    display: block;
    padding: 0 0.3em;
`;

const FractionLayout = ({ up, down }: FractionProps) => {
    return (
        <Fraction>
                    <UpFractionTd>{up}</UpFractionTd>
                    <Invisible>&frasl;</Invisible>
                    <DownFractionTd>{down}</DownFractionTd>
        </Fraction>
    );
};

export default FractionLayout;
