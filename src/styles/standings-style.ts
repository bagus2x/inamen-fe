import { blue } from '@material-ui/core/colors';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        standings: {
            paddingTop: theme.spacing(2)
        },
        header: {
            display: 'flex',
            justifyContent: 'space-between'
        },
        standingsList: {
            paddingTop: theme.spacing(2)
        }
    })
);

export default useStyles;
