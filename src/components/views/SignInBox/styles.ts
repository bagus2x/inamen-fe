import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        container: {
            borderRadius: theme.spacing(1),
            paddingTop: theme.spacing(2),
            paddingBottom: theme.spacing(2),
            background: '#fff',
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
        passwordField: {
            display: 'flex',
            flexDirection: 'column',
            '& a': {
                textDecoration: 'none !important',
                alignSelf: 'flex-end',
                fontSize: '.75rem',
                cursor: 'pointer'
            }
        },
        submitButton: {
            display: 'flex',
            justifyContent: 'flex-end'
        }
    })
);

export default useStyles;
