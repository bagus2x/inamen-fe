import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        chat: {
            paddingTop: theme.spacing(2),
            height: '100%'
        },
        chatt: {
            display: 'flex',
            flexDirection: 'column',
            gap: theme.spacing(1),
            height: '100%',
            userSelect: 'none'
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
            flexGrow: 1,
            display: 'flex',
            flexDirection: 'column',
            gap: theme.spacing(1),
            overflowY: 'auto'
        },
        message: {
            display: 'block',
            width: '95%',
            '& *': {
                wordWrap: 'break-word'
            }
        },
        messageWrapper: {
            textAlign: 'justify',
            padding: theme.spacing(1),
            borderRadius: theme.spacing(1),
            userSelect: 'text'
        },
        messageInfo: {
            display: 'flex',
            gap: theme.spacing(1),
            width: '100%'
        },
        sender: {
            alignSelf: 'flex-end',
            '& > :last-child': {
                background: theme.palette.secondary.light
            }
        },
        receiver: {
            alignSelf: 'flex-start',
            '& > :last-child': {
                background: theme.palette.grey[100]
            }
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
