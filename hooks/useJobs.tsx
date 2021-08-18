import React, { useEffect } from 'react';
import convert from 'xml-js';

interface Desc {
    headline: string;
    data: string;
}

export interface Position {
    id: string;
    title: string;
    desc: Desc[];
    category: string;
}

const processDesc = (data: any): Desc[] => {
    const array = data.map((item: any) => {
        return {
            headline: item.name._text,
            data: item.value._cdata,
        };
    });

    return array;
};

const processDataSorting = (data: any): Position[] => {
    const positionsArray = data['workzag-jobs'].position as any[];
    const positions = positionsArray
        .map((item) => {
            const position: Position = {
                id: item.id._text,
                title: item.name._text,
                desc: item.jobDescriptions.jobDescription[0].value._cdata.replace(/<[^>]*>?/gm, '').trim(),
                category: item.department ? item.department._text : 'Z',
            };
            return position;
        })
        .sort(function (a, b) {
            var textA = a.category.toUpperCase();
            var textB = b.category.toUpperCase();
            return textA < textB ? -1 : textA > textB ? 1 : 0;
        });
    return positions;
};

const processData = (data: any, id: string): Position => {
    let positionToReturn: Position = { id: 'id', title: 'none', desc: [], category: 'none' };
    const positionsArray = data['workzag-jobs'].position as any[];
    positionsArray.forEach((item) => {
        if (item.id._text !== id) {
            return;
        }
        const position: Position = {
            id: item.id._text,
            title: item.name._text,
            desc: processDesc(item.jobDescriptions.jobDescription),
            category: item.department ? item.department._text : 'Z',
        };
        positionToReturn = position;
    });
    return positionToReturn;
};

export const useJobs = (id?: string) => {
    const [data, setData] = React.useState<Position | null>(null);

    const [dataFull, setDataFull] = React.useState<Position[] | null>(null);

    useEffect(() => {
        fetch('https://trality.jobs.personio.de/xml?language=en')
            .then((response) => response.text())
            .then((str) => convert.xml2json(str, { compact: true, spaces: 4 }))
            .then((data) => (id ? setData(processData(JSON.parse(data), id)) : setDataFull(processDataSorting(JSON.parse(data)))));
    }, []);

    if (id) {
        return data;
    }
    return dataFull;
};
