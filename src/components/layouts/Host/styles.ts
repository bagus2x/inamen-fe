import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        root: {
            display: 'flex',
            flexDirection: 'column'
        },
        toolbarLeft: {
            flexGrow: 1,
            display: 'flex',
            justifyContent: 'flex-start',
            gap: theme.spacing(3)
        },
        toolbarRight: {
            flexGrow: 1,
            display: 'flex',
            justifyContent: 'flex-end',
            gap: theme.spacing(3),
            [theme.breakpoints.down('sm')]: {
                gap: theme.spacing(2)
            }
        },
        content: {
            marginTop: 48,
            transition: theme.transitions.create('margin', {
                duration: theme.transitions.duration.short,
                easing: theme.transitions.easing.easeIn
            })
        },
        grow: {
            flexGrow: 1
        },
        list: {
            width: 240
        }
    })
);

export default useStyles;
