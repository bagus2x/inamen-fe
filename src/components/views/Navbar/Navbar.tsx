import { useState } from 'react';
import NextLink from 'next/link';
import AppBar from '@material-ui/core/AppBar';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import Box from '@material-ui/core/Box';
import DenseToolbar from '~components/common/DenseToolbar';
import SignInBox from '~components/views/SignInBox';
import useStyles from '~components/views/Navbar/styles';
import NavbarTitle from '~components/views/NavbarTitle/NavbarTitle';
import  Hidden  from '@material-ui/core/Hidden';

const Navbar = () => {
    const classes = useStyles();
    const [openSignInBox, setOpenSignInBox] = useState(false);

    return (
        <>
            <AppBar color="inherit" elevation={1}>
                <DenseToolbar>
                    <Hidden smDown>
                        <NavbarTitle />
                    </Hidden>
                    <NextLink href="/browse">
                        <Button component="a" variant="text">
                            Browse
                        </Button>
                    </NextLink>
                    <Box flexGrow={1} />
                    <Dialog open={openSignInBox} onClose={() => setOpenSignInBox(false)} fullWidth>
                        <SignInBox />
                    </Dialog>
                    <Button variant="text" onClick={() => setOpenSignInBox(true)}>
                        Sign in
                    </Button>
                    <NextLink href="/signup">
                        <Button component="a" variant="text">
                            Sign up
                        </Button>
                    </NextLink>
                </DenseToolbar>
            </AppBar>
            <div className={classes.mixinDenseToolbar} />
        </>
    );
};

export default Navbar;
