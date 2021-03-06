import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        root: {
            display: 'flex',
            flexDirection: 'column'
        },
        content: {
            height: '100%',
            overflow: 'auto',
            transition: theme.transitions.create('margin', {
                duration: theme.transitions.duration.short,
                easing: theme.transitions.easing.easeIn
            }),
            [theme.breakpoints.up('md')]: {
                marginLeft: 240
            }
        },
        grow: {
            flexGrow: 1
        },
        list: {
            width: 240,
            height: '100%',
            display: 'flex',
            flexDirection: 'column',
            background: theme.palette.primary.main,
            '& *': {
                color: theme.palette.common.white
            }
        },
        title: {
            width: '100%',
            display: 'flex',
            justifyContent: 'center'
        },
        signOutButton: {
            display: 'flex',
            width: '100%',
            justifyContent: 'center'
        },
        btnFab: {
            position: 'fixed',
            right: theme.spacing(2),
            bottom: theme.spacing(2)
        }
    })
);

export default useStyles;
