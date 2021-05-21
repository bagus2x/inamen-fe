import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        participants: {
            paddingTop: theme.spacing(2)
        },
        header: {
            display: 'flex',
            justifyContent: 'space-between'
        },
        participantsList: {
            paddingTop: theme.spacing(2)
        },
        btnCreate: {}
    })
);

export default useStyles;
