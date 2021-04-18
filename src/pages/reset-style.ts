import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        resetPage: {
            paddingTop: theme.spacing(10)
        },
        title: {
            display: 'flex',
            justifyContent: 'center',
            flexDirection: 'column',
            alignItems: 'center',
            marginBottom: theme.spacing(2),
            '& h1': {
                fontSize: '1.5rem',
                fontWeight: '500'
            }
        },
        container: {
            borderRadius: theme.spacing(1),
            border: `1px solid ${theme.palette.grey[400]}`,
            paddingTop: theme.spacing(3),
            paddingBottom: theme.spacing(3)
        },
        form: {
            '& > *': {
                marginBottom: theme.spacing(3)
            }
        }
    })
);

export default useStyles;
