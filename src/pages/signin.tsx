import Head from 'next/head';
import Typography from '@material-ui/core/Typography';
import use100vh from '~libs/hooks/100vh';
import useStyles from '~styles/signin-style';
import SignInBox from '~components/views/SignInBox';
import Link from '~components/common/Link';

function SignIn() {
    const height = use100vh();
    const classes = useStyles();

    return (
        <div style={{ height }} className={classes.sigInPage}>
            <Head>
                <title>Sign In to Inamen | Inamen</title>
            </Head>
            <div className={classes.signUp}>
                <Typography variant="body2">New to inamen?&nbsp;</Typography>
                <Link href="/signup">Create an accounta</Link>
            </div>
            <SignInBox />
        </div>
    );
}

export default SignIn;
