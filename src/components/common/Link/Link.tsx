import NextLink, { LinkProps as DefaultNextLinkProps } from 'next/link';
import MuiLink, { LinkProps as DefaultMuiLinkProps } from '@material-ui/core/Link';
import { ForwardedRef, forwardRef } from 'react';

type LinkProps = DefaultMuiLinkProps & DefaultNextLinkProps;

const Link = forwardRef(({ children, href, passHref, ...rest }: LinkProps, ref: ForwardedRef<HTMLAnchorElement>) => {
    return (
        <NextLink href={href} passHref={passHref}>
            <MuiLink ref={ref} {...rest}>
                {children}
            </MuiLink>
        </NextLink>
    );
});

export default Link;
