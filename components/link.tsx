import { default as L, LinkProps } from 'next/link';

export const Link: React.FC<LinkProps> = (props) => {
    return <L {...props} />;
};
