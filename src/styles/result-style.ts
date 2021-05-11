import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        containerFilter: {
            padding: theme.spacing(2, 1.5, 0)
        },
        containerList: {
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'flex-start'
        }
    })
);

export default useStyles;
