import Router from 'next/router';
import Image from 'next/image';
import Typography from '@material-ui/core/Typography';
import useStyles from '~components/views/NavbarTitle/styles';

interface NavbarTitleProps {
    variant?: 'light' | 'main' | 'dark' | 'white';
}

const NavbarTitle = ({ variant }: NavbarTitleProps) => {
    const classes = useStyles();

    return (
        <div className={classes.title} onClick={() => Router.push('/')}>
            <Image
                src={`/assets/logo/logo_${variant || 'main'}.svg`}
                alt="Inamen"
                width={30}
                height={30}
                priority={true}
            />
            <Typography variant="h1">INAMEN</Typography>
        </div>
    );
};

export default NavbarTitle;
