import React, { useEffect, useRef, useState } from 'react';
import Router from 'next/router';
import Head from 'next/head';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import InputAdornment from '@material-ui/core/InputAdornment';
import VisibilityIcon from '@material-ui/icons/Visibility';
import VisibilityOffIcon from '@material-ui/icons/VisibilityOff';
import { useForm } from 'react-hook-form';
import { useDispatch } from 'react-redux';
import Link from '~components/common/Link';
import use100vh from '~libs/hooks/100vh';
import useStyles from '~pages/signup-style';
import { signUp } from '~redux/user/actions';
import useUser from '~libs/hooks/use-user';
import Rules from '~libs/signup-rules';

interface SignUpField {
    username?: string;
    email?: string;
    password?: string;
    confirmPassword?: string;
}

function SignIn() {
    const height = use100vh();
    const classes = useStyles();
    const [showPassword, setShowPassword] = useState(false);
    const dispatch = useDispatch();
    const {
        register,
        handleSubmit,
        watch,
        formState: { errors, isValid },
        setError
    } = useForm<SignUpField>({ mode: 'onChange' });
    const password = useRef<string | undefined>('');
    const { data, loading, error, isAuthenticated } = useUser();

    password.current = watch('password', '');
    const disabled = !!data || loading || !isValid || isAuthenticated;

    useEffect(() => {
        if (isAuthenticated) Router.replace('/welcome');
    }, [isAuthenticated]);

    useEffect(() => {
        if (error?.message.toLowerCase().includes('email')) {
            setError('email', { message: 'Email already exists' });
            return;
        }
        if (error?.message.toLowerCase().includes('username')) {
            setError('username', { message: 'Username already exists' });
            return;
        }
    }, [error]);

    const handleMouseDownPassword = (ev: React.MouseEvent<HTMLButtonElement>) => {
        ev.preventDefault();
    };

    const handleClickShowPassword = () => {
        setShowPassword(!showPassword);
    };

    const handleSignUp = handleSubmit((req) => {
        dispatch(signUp(req));
    });

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
                <form className={classes.form} onSubmit={handleSignUp}>
                    <TextField
                        InputProps={{ disableUnderline: true }}
                        size="small"
                        label="Username"
                        fullWidth
                        variant="filled"
                        error={!!errors.username}
                        helperText={errors.username?.message || ' '}
                        {...register('username', Rules.username)}
                    />
                    <TextField
                        InputProps={{ disableUnderline: true }}
                        size="small"
                        label="Email"
                        fullWidth
                        variant="filled"
                        error={!!errors.email}
                        helperText={errors.email?.message || ' '}
                        {...register('email', Rules.email)}
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
                        error={!!errors.password}
                        helperText={errors.password?.message || ' '}
                        {...register('password', Rules.password)}
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
                        error={!!errors.confirmPassword}
                        helperText={errors.confirmPassword?.message || ' '}
                        {...register('confirmPassword', {
                            validate: (value) => value === password.current || 'The passwords do not match'
                        })}
                    />
                    <div className={classes.submitButton}>
                        <Button
                            disabled={disabled}
                            type="submit"
                            variant="contained"
                            color="secondary"
                            disableElevation
                        >
                            Sign up
                        </Button>
                    </div>
                </form>
            </Container>
        </div>
    );
}

export default SignIn;
