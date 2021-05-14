import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        teamDialog: {
            maxWidth: '100%',
            width: 960,
            minHeight: 300
        },
        title: {
            boxSizing: 'border-box',
            padding: theme.spacing(1.5)
        },
        linkPlayer: {}
    })
);

export default useStyles;
