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
            padding: theme.spacing(2, 2, 5),
            color: theme.palette.common.white,
            '& a': {
                color: theme.palette.secondary.main,
                cursor: 'pointer'
            }
        }
    })
);

export default useStyles;
