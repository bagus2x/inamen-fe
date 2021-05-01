import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        container: {
            display: 'flex',
            paddingTop: theme.spacing(2),
            flexDirection: 'column'
        },
        filter: {
            display: 'flex'
        }
    })
);

export default useStyles;
