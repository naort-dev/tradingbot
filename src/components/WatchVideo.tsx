import { Lightbox, Button } from '@trality/web-ui-components';
import React from 'react';

interface Props {
    srcYtb: string;
}

export const WatchVideo: React.FunctionComponent<Props> = ({ srcYtb }) => {
    const [show, setShow] = React.useState(false);

    return (
        <>
            {show && (
                <Lightbox onClose={() => setShow(false)}>
                    <iframe
                        width="560"
                        height="315"
                        src={srcYtb}
                        title="YouTube video player"
                        frameBorder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen
                    ></iframe>
                </Lightbox>
            )}
            <Button variant="outlined" fullWidth onClick={() => setShow(true)}>
                Watch video 3
            </Button>
        </>
    );
};
