import { useIntersection } from 'hooks/useIntersection';
import { useRef } from 'react';
import styled from 'styled-components';

type VideoProps = React.DetailedHTMLProps<React.VideoHTMLAttributes<HTMLVideoElement>, HTMLVideoElement>;

export const StyledVideo = styled.video`
    width: 100%;
    border-radius: 8px;
`;

export const LazyVideo: React.FunctionComponent<VideoProps> = (props) => {
    let videoRef = useRef<any>(null);
    const isVisible = useIntersection(videoRef);

    if (isVisible) {
        return <StyledVideo {...props} ref={null} />;
    }
    return <StyledVideo ref={videoRef} src="" data-src={props.src} />;
};
