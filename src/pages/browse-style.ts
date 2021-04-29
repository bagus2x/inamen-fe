import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        container: {
            paddingTop: theme.spacing(2)
        },
        filter: {
            display: 'flex'
        }
    })
);

export default useStyles;
