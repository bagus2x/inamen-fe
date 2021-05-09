import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        title: {
            display: 'flex',
            alignItems: 'center',
            userSelect: 'none',
            cursor: 'pointer',
            '& > h1': {
                fontSize: '1.5em !important',
                fontWeight: 400,
                marginRight: theme.spacing(2)
            }
        }
    })
);

export default useStyles;
