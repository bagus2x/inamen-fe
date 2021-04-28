import Router from 'next/router';
import Image from 'next/image';
import Typography from '@material-ui/core/Typography';
import useStyles from '~components/views/NavbarTitle/styles';

const NavbarTitle = () => {
    const classes = useStyles();

    return (
        <div className={classes.title} onClick={() => Router.push('/')}>
            <Image src="/logo.svg" alt="Inamen" width={30} height={30} />
            <Typography variant="inherit">Inamen</Typography>
        </div>
    );
};

export default NavbarTitle;
