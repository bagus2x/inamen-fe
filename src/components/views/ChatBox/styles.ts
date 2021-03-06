import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        chatBox: {
            paddingTop: theme.spacing(1.5),
            display: 'flex',
            flexDirection: 'column',
            gap: theme.spacing(1),
            userSelect: 'none',
            width: 360,
            height: '100%',
            [theme.breakpoints.down('xs')]: {
                width: '100vw'
            }
        },
        header: {
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            padding: theme.spacing(0, 1.5)
        },
        connected: {
            color: theme.palette.success.main
        },
        disconnected: {
            color: theme.palette.error.main
        },
        messagesContainer: {
            padding: theme.spacing(0, 1.5),
            display: 'flex',
            flexDirection: 'column',
            flexGrow: 1,
            overflowY: 'auto',
            borderRadius: theme.spacing(1)
        },
        chatInput: {
            padding: theme.spacing(1, 1.5),
            display: 'flex',
            gap: theme.spacing(0.5),
            alignItems: 'center',
            borderTop: `1px solid ${theme.palette.grey[500]}`
        }
    })
);

export default useStyles;
