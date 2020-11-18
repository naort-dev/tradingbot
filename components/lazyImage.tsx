import { useIntersection } from 'hooks/useIntersection';
import { useRef } from 'react';
import styled from 'styled-components';

type ImageProps = React.DetailedHTMLProps<React.ImgHTMLAttributes<HTMLImageElement>, HTMLImageElement>;

const StyledImage = styled.img`
`;

export const LazyImage: React.FunctionComponent<ImageProps> = (props) => {
    let imgRef = useRef<any>(null);
    const isVisible = useIntersection(imgRef);

    if (isVisible) {
        return <StyledImage {...props} ref={null}/>;
    }
    return <StyledImage ref={imgRef} src="" alt={props.alt} data-src={props.src}/>;
};
