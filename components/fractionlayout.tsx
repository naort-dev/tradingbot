import React, { ReactNode } from 'react';
import styled from 'styled-components';

type FractionProps = {
    up: string | ReactNode;
    down: string | ReactNode;
};

const FractionTable = styled.table`
    position: relative;
    bottom: 1px;
    display: inline-table;
    font-size: 100%;
    border-collapse: collapse;
    vertical-align: middle;
`;

const UpFractionTd = styled.td`
    padding: 0px;
    border-bottom: solid 1px;
    width: 8px;
    text-align: center;
`;

const DownFractionTd = styled.td`
    padding: 0px;
    text-align: center;
`;

const FractionLayout = ({ up, down }: FractionProps) => {
    return (
        <FractionTable>
            <tbody>
                <tr>
                    <UpFractionTd>{up}</UpFractionTd>
                </tr>
                <tr>
                    <DownFractionTd>{down}</DownFractionTd>
                </tr>
            </tbody>
        </FractionTable>
    );
};

export default FractionLayout;
