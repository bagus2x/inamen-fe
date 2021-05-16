import Image from 'next/image';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import TextField from '@material-ui/core/TextField';
import useStyles from '~styles/reset-style';
import Navbar from '~components/views/Navbar';

function reset() {
    const classes = useStyles();

    return (
        <div className={classes.resetPage}>
            <Navbar />
            <Container maxWidth="sm" className={classes.container}>
                <div className={classes.title}>
                    <Image src="/logo/logo_main.svg" width={100} height={100} />
                    <Typography variant="h1">Reset your password</Typography>
                </div>
                <form className={classes.form}>
                    <Typography>
                        Enter your user account's verified email address and we will send you a password reset link.
                    </Typography>
                    <TextField
                        fullWidth
                        variant="filled"
                        size="small"
                        label="Username or email"
                        InputProps={{ disableUnderline: true }}
                    />
                    <Button fullWidth variant="contained" disableElevation color="secondary">
                        Send a password reset link
                    </Button>
                </form>
            </Container>
        </div>
    );
}

export default reset;
