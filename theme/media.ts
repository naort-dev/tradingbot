import { css, CSSObject, SimpleInterpolation, BaseThemedCssFunction } from 'styled-components';

// type SizeType = { [key: string]: number };

const sizes = {
    mobile: 768,
};

type MediaType = {
    [K in keyof typeof sizes]: BaseThemedCssFunction<any>;
};

export const media = Object.keys(sizes).reduce(
    (acc, label: string) => {
        acc[label] = (first: TemplateStringsArray | CSSObject, ...interpolations: SimpleInterpolation[]) => css`
            @media (max-width: ${(<any>sizes)[label] as number}px) {
                ${css(first, ...interpolations)};
            }
        `;
        return acc;
    },
    {} as any,
) as MediaType;
