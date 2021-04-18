import NextLink, { LinkProps as DefaultNextLinkProps } from 'next/link';
import MuiLink, { LinkProps as DefaultMuiLinkProps } from '@material-ui/core/Link';

interface LinkProps {
    NextLinkProps?: React.PropsWithChildren<DefaultNextLinkProps>;
    MuiLinkProps?: DefaultMuiLinkProps;
    href: string;
}

const Link: React.FC<LinkProps> = ({ children, href, NextLinkProps, MuiLinkProps }) => {
    return (
        <NextLink {...NextLinkProps} href={href}>
            <MuiLink {...MuiLinkProps}>{children}</MuiLink>
        </NextLink>
    );
};

export default Link;
