import { Link as GatsbyLink, GatsbyLinkProps } from 'gatsby';

type Omit<T, K> = Pick<T, Exclude<keyof T, K>>;

export const Link: React.FC<Omit<GatsbyLinkProps<{}>, 'ref'>> = (props) => {
    return <GatsbyLink {...props} />;
};
