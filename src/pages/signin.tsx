import Typography from '@material-ui/core/Typography';
import use100vh from '~libs/hooks/100vh';
import useStyles from '~pages/signin-style';
import SignInBox from '~components/views/SignInBox';
import Link from '~components/common/Link';

function SignIn() {
    const height = use100vh();
    const classes = useStyles();

    return (
        <div style={{ height }} className={classes.sigInPage}>
            <div className={classes.signUp}>
                <Typography variant="body2">New to inamen?&nbsp;</Typography>
                <Link href="/signup">Create an accounta</Link>
            </div>
            <SignInBox />
        </div>
    );
}

export default SignIn;
