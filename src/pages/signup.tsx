import { useState } from 'react';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import InputAdornment from '@material-ui/core/InputAdornment';
import VisibilityIcon from '@material-ui/icons/Visibility';
import Head from 'next/head';
import VisibilityOffIcon from '@material-ui/icons/VisibilityOff';
import Link from '~components/common/Link';
import use100vh from '~libs/hooks/100vh';
import useStyles from '~pages/signup-style';

function SignIn() {
    const height = use100vh();
    const classes = useStyles();
    const [showPassword, setShowPassword] = useState(false);

    const handleMouseDownPassword = (ev: React.MouseEvent<HTMLButtonElement>) => {
        ev.preventDefault();
    };

    const handleClickShowPassword = () => {
        setShowPassword(!showPassword);
    };

    return (
        <div style={{ height }} className={classes.sigInPage}>
            <Head>
                <title>Join Inamen | Inamen</title>
            </Head>
            <div className={classes.signIn}>
                <Typography variant="body2">Already have an account?&nbsp;</Typography>
                <Link href="/signin">Sign in</Link>
            </div>
            <Container maxWidth="sm" className={classes.container}>
                <Typography variant="h1">Create your account</Typography>
                <form className={classes.form}>
                    <TextField
                        InputProps={{ disableUnderline: true }}
                        size="small"
                        label="Username"
                        fullWidth
                        variant="filled"
                        helperText=" "
                    />
                    <TextField
                        InputProps={{ disableUnderline: true }}
                        size="small"
                        label="Email"
                        fullWidth
                        variant="filled"
                        helperText=" "
                    />
                    <TextField
                        size="small"
                        label="Password"
                        type={showPassword ? 'text' : 'password'}
                        fullWidth
                        variant="filled"
                        InputProps={{
                            disableUnderline: true,
                            endAdornment: (
                                <InputAdornment position="end">
                                    <IconButton
                                        aria-label="toggle password visibility"
                                        onClick={handleClickShowPassword}
                                        onMouseDown={handleMouseDownPassword}
                                        edge="end"
                                    >
                                        {showPassword ? <VisibilityIcon /> : <VisibilityOffIcon />}
                                    </IconButton>
                                </InputAdornment>
                            )
                        }}
                        helperText=" "
                    />
                    <TextField
                        size="small"
                        label="Confirm password"
                        type={showPassword ? 'text' : 'password'}
                        fullWidth
                        variant="filled"
                        InputProps={{
                            disableUnderline: true
                        }}
                        helperText=" "
                    />
                    <div className={classes.submitButton}>
                        <Button variant="contained" color="secondary" disableElevation>
                            Sign up
                        </Button>
                    </div>
                </form>
            </Container>
        </div>
    );
}

export default SignIn;
