import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        title: {
            display: 'flex',
            alignItems: 'center',
            userSelect: 'none',
            cursor: 'pointer',
            '& > span': {
                fontSize: theme.typography.h5.fontSize,
                marginRight: theme.spacing(2)
            }
        }
    })
);

export default useStyles;
