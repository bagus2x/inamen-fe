import { useState } from 'react';
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import InputAdornment from '@material-ui/core/InputAdornment';
import VisibilityIcon from '@material-ui/icons/Visibility';
import VisibilityOffIcon from '@material-ui/icons/VisibilityOff';
import useStyles from '~components/views/SignInBox/styles';
import Link from '~components/common/Link';

const SignInBox = () => {
    const classes = useStyles();
    const [showPassword, setShowPassword] = useState(false);

    const handleMouseDownPassword = (ev: React.MouseEvent<HTMLButtonElement>) => {
        ev.preventDefault();
    };

    const handleClickShowPassword = () => {
        setShowPassword(!showPassword);
    };

    return (
        <Container maxWidth="sm" className={classes.container}>
            <Typography variant="h1">Sign in to Inamen</Typography>
            <form className={classes.form}>
                <TextField
                    InputLabelProps={{ shrink: true }}
                    InputProps={{ disableUnderline: true }}
                    size="small"
                    label="Username or email"
                    fullWidth
                    variant="filled"
                    helperText=" "
                />
                <div className={classes.passwordField}>
                    <TextField
                        InputLabelProps={{ shrink: true }}
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
                    <Link href="/reset">Forgot password?</Link>
                </div>
                <div className={classes.submitButton}>
                    <Button variant="contained" color="secondary" disableElevation>
                        Sign in
                    </Button>
                </div>
            </form>
        </Container>
    );
};

export default SignInBox;
