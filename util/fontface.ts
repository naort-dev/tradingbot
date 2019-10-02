import { css } from 'styled-components';

export function fontFace(name: string, src: string, fontWeight = 'normal', fontstyle = 'normal') {
    return css`
        @font-face{
            font-family: "${name}";
            src: url(/static/fonts/${src}.eot);
            src: url(/static/fonts/${src}.eot}?#iefix) format("embedded-opentype"),
                 url(/static/fonts/${src}.woff) format("woff"),
                 url(/static/fonts/${src}.ttf) format("truetype");

            font-style: ${fontstyle};
            font-weight: ${fontWeight};
        }
    `;
}
