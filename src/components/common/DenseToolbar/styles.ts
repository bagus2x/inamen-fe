import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        denseToolbar: {
            paddingLeft: theme.spacing(6),
            paddingRight: theme.spacing(6),
            [theme.breakpoints.down('sm')]: {
                paddingLeft: theme.spacing(1.5),
                paddingRight: theme.spacing(1.5)
            }
        }
    })
);

export default useStyles;
