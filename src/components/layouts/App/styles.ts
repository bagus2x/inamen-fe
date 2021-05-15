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
            '& > *:not(:last-child)': {
                marginRight: theme.spacing(3)
            }
        },
        toolbarCenter: {
            flexGrow: 1,
            display: 'flex',
            justifyContent: 'flex-start'
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
        sideNavbar: {
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            paddingTop: theme.spacing(2),
            background: theme.palette.background.paper,
            height: `calc(100vh - 48px)`,
            width: 48,
            position: 'fixed',
            top: 48,
            left: 0,
            boxShadow: theme.shadows[2],
            transition: theme.transitions.create('left', {
                duration: theme.transitions.duration.short,
                easing: theme.transitions.easing.easeIn
            }),
            '& > *': {
                marginBottom: theme.spacing(2)
            }
        },
        content: {
            marginTop: 48,
            marginLeft: 48,
            transition: theme.transitions.create('margin', {
                duration: theme.transitions.duration.short,
                easing: theme.transitions.easing.easeIn
            })
        },
        contentExpand: {
            marginLeft: 0
        },
        sidenavShrink: {
            left: -48
        },
        grow: {
            flexGrow: 1
        }
    })
);

export default useStyles;
