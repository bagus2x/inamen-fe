import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        matches: {
            paddingTop: theme.spacing(2)
        },
        header: {
            display: 'flex',
            justifyContent: 'space-between'
        },
        matchesList: {
            paddingTop: theme.spacing(2)
        },
        btnCreate: {}
    })
);

export default useStyles;
