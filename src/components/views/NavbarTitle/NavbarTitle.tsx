import Router from 'next/router';
import Image from 'next/image';
import Typography from '@material-ui/core/Typography';
import Hidden from '@material-ui/core/Hidden';
import useStyles from '~components/views/NavbarTitle/styles';

const NavbarTitle = () => {
    const classes = useStyles();

    return (
        <Hidden smDown>
            <div className={classes.title} onClick={() => Router.push('/')}>
                <Image src="/logo.svg" alt="Inamen" width={30} height={30} />
                <Typography variant="inherit">Inamen</Typography>
            </div>
        </Hidden>
    );
};

export default NavbarTitle;
