import { useEffect, useRef, useState } from 'react';
import Router from 'next/router';
import { useDispatch } from 'react-redux';
import { useForm } from 'react-hook-form';
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import InputAdornment from '@material-ui/core/InputAdornment';
import VisibilityIcon from '@material-ui/icons/Visibility';
import VisibilityOffIcon from '@material-ui/icons/VisibilityOff';
import useUser from '~libs/hooks/use-user';
import useStyles from '~components/views/SignInBox/styles';
import Link from '~components/common/Link';
import { signIn } from '~redux/user/actions';
import Rules from '~libs/signin-rules';

interface SignInField {
    username: string;
    password: string;
}

const SignInBox = () => {
    const classes = useStyles();
    const [showPassword, setShowPassword] = useState(false);
    const dispatch = useDispatch();
    const {
        register,
        handleSubmit,
        watch,
        formState: { errors, isValid },
        setError
    } = useForm<SignInField>({ mode: 'onChange' });
    const password = useRef<string | undefined>('');
    const { data, loading, error, isAuthenticated } = useUser();

    password.current = watch('password', '');
    const disabled = !!data || loading || !isValid || isAuthenticated;

    useEffect(() => {
        if (isAuthenticated) Router.replace('/welcome');
    }, [isAuthenticated]);

    useEffect(() => {
        if (error?.message.includes('Username or email does not exist')) {
            setError('username', { message: 'Username or email does not exist' });
            return;
        }
        if (error?.message.includes('Password does not match')) {
            setError('password', { message: 'Password does not match' });
            return;
        }
    }, [error]);

    const handleMouseDownPassword = (ev: React.MouseEvent<HTMLButtonElement>) => {
        ev.preventDefault();
    };

    const handleClickShowPassword = () => {
        setShowPassword(!showPassword);
    };

    const handleSignIn = handleSubmit((req) => {
        dispatch(signIn(req));
    });

    return (
        <Container maxWidth="sm" className={classes.container}>
            <Typography variant="h1">Sign in to Inamen</Typography>
            <form className={classes.form} onSubmit={handleSignIn}>
                <TextField
                    InputProps={{ disableUnderline: true }}
                    size="small"
                    label="Username or email"
                    fullWidth
                    variant="filled"
                    error={!!errors.username}
                    helperText={errors.username?.message || ' '}
                    {...register('username', Rules.username)}
                />
                <div className={classes.passwordField}>
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
                        error={!!errors.password}
                        helperText={errors.password?.message || ' '}
                        {...register('password', Rules.password)}
                    />
                    <Link href="/reset">Forgot password?</Link>
                </div>
                <div className={classes.submitButton}>
                    <Button type="submit" disabled={disabled} variant="contained" color="secondary" disableElevation>
                        Sign in
                    </Button>
                </div>
            </form>
        </Container>
    );
};

export default SignInBox;
