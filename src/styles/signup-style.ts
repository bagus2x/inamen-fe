import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        sigInPage: {
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            background: theme.palette.primary.main
        },
        signIn: {
            display: 'flex',
            justifyContent: 'flex-end',
            alignItems: 'center',
            width: '100%',
            padding: theme.spacing(2, 2, 5),
            color: 'theme.palette.common.white',
            '& a': {
                color: theme.palette.secondary.main,
                cursor: 'pointer'
            }
        },
        container: {
            borderRadius: theme.spacing(1),
            paddingTop: theme.spacing(2),
            paddingBottom: theme.spacing(2),
            background: 'theme.palette.common.white',
            '& h1': {
                fontSize: '1.5rem',
                fontWeight: '500'
            }
        },
        form: {
            marginTop: theme.spacing(4),
            marginBottom: theme.spacing(4),
            '& > *': {
                marginBottom: theme.spacing(2)
            }
        },

        submitButton: {
            display: 'flex',
            justifyContent: 'flex-end'
        }
    })
);

export default useStyles;
