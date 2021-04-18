import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        sigInPage: {
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            background: theme.palette.primary.main
        },
        signUp: {
            display: 'flex',
            justifyContent: 'flex-end',
            alignItems: 'center',
            width: '100%',
            padding: `${theme.spacing(2)}px ${theme.spacing(2)}px ${theme.spacing(5)}px`,
            color: '#fff',
            '& a': {
                color: theme.palette.secondary.main,
                textDecoration: 'none !important',
                cursor: 'pointer'
            }
        }
    })
);

export default useStyles;
