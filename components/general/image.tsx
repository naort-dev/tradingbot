import React from 'react';

/*<img src="image-src.png" srcset="image-1x.png 1x, image-2x.png 2x,
                                 image-3x.png 3x, image-4x.png 4x">*/

interface ImageProps {
    url: string;
    suffix: string;
}

export const Image: React.FunctionComponent<ImageProps> = (props) => {
    const base = import(/* webpackMode: "eager" */ `${props.url}.${props.suffix}`);
    return <img src={base} />;
};
