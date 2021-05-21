import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';

export default makeStyles((theme: Theme) =>
    createStyles({
        message: {
            width: 'auto',
            maxWidth: '100%',
            minWidth: 'auto',
            marginBottom: theme.spacing(2),
            padding: theme.spacing(1),
            borderRadius: theme.spacing(1),
            textAlign: 'justify',
            '& > *:nth-child(2)': {
                marginTop: theme.spacing(1)
            },
            '& *': {
                wordWrap: 'break-word'
            }
        },
        header: {
            display: 'flex',
            justifyContent: 'space-between',
            gap: theme.spacing(1),
            '& > *': {
                fontSize: '.7rem'
            }
        },
        info: {
            textAlign: 'center',
            fontStyle: 'italic',
            color: theme.palette.grey[600]
        },
        sender: {
            background: theme.palette.secondary.light,
            alignSelf: 'flex-end'
        },
        receiver: {
            background: theme.palette.grey[100],
            alignSelf: 'flex-start'
        },
        host: {}
    })
);
