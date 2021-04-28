import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        root: {
            display: 'flex',
            flexDirection: 'column'
        },
        denseToolbar: {
            paddingLeft: theme.spacing(6),
            paddingRight: theme.spacing(6),
            [theme.breakpoints.down('sm')]: {
                paddingLeft: theme.spacing(1.5),
                paddingRight: theme.spacing(1.5)
            }
        },
        sideNavbar: {
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            paddingTop: theme.spacing(1),
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
            background: theme.palette.grey[50],
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
        },
        iconMenuWrapper: {
            display: 'flex',
            '& > *:not(:last-child)': {
                marginRight: theme.spacing(3)
            },
            [theme.breakpoints.down('sm')]: {
                '& > *:not(:last-child)': {
                    marginRight: theme.spacing(2)
                }
            }
        }
    })
);

export default useStyles;
