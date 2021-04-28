import NextLink, { LinkProps as DefaultNextLinkProps } from 'next/link';
import MuiLink, { LinkProps as DefaultMuiLinkProps } from '@material-ui/core/Link';

type LinkProps = DefaultMuiLinkProps & DefaultNextLinkProps;

const Link: React.FC<LinkProps> = ({ children, href, ...rest }) => {
    return (
        <NextLink href={href}>
            <MuiLink {...rest}>{children}</MuiLink>
        </NextLink>
    );
};

export default Link;
