import { useIntersection } from '@hooks';
import { useRef } from 'react';
import styled from 'styled-components';

interface Props {
    borders?: boolean;
    rounded?: boolean;
    maxWidth?: number;
    ensureFullContainerWidth?: boolean;
}

type ImageProps = React.DetailedHTMLProps<React.ImgHTMLAttributes<HTMLImageElement>, HTMLImageElement> & Props;

export const StyledImage = styled.img<ImageProps>`
    ${(props) => {
        if (props.width) {
            return ``;
        }
        if (props.maxWidth) {
            return `max-width: ${props.maxWidth}px;`;
        }
        return `max-width: 100%;`;
    }}

    ${(props) => {
        if (props.ensureFullContainerWidth) {
            return `width: 100%`;
        }
        return ``;
    }}
    ${(props) => {
        if (props.borders) {
            return `border-radius: 8px;`;
        }
        if (props.rounded) {
            return `border-radius: 1000px;`;
        }
        return ``;
    }}
`;

export const LazyImage: React.FunctionComponent<ImageProps> = (props) => {
    let imgRef = useRef<any>(null);
    const isVisible = useIntersection(imgRef);
    if (isVisible) {
        return <StyledImage {...props} ref={null} />;
    }
    return <StyledImage ref={imgRef} src="" alt={props.alt} data-src={props.src} />;
};
