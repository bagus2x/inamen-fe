import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        settings: {
            paddingTop: theme.spacing(2)
        },
        header: {
            display: 'flex',
            justifyContent: 'space-between'
        },
        settingsList: {
            paddingTop: theme.spacing(2)
        },
        btnCreate: {}
    })
);

export default useStyles;
