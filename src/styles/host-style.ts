import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        host: {
            paddingTop: theme.spacing(2)
        },
        tourCardWrapper: {
            margin: theme.spacing(2, 0),
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fill, minmax(150px, 1fr))',
            gap: theme.spacing(4),
            [theme.breakpoints.down('xs')]: {
                gridTemplateColumns: 'repeat(auto-fill, minmax(120px, 1fr))'
            }
        },
        header: {
            display: 'flex',
            justifyContent: 'space-between'
        },
        btnCreate: {
            background: theme.palette.success.main,
            color: theme.palette.common.white,
            '&:active, &:hover': {
                background: theme.palette.success.dark
            }
        },
        dialogTitle: {
            ...theme.typography.h2
        }
    })
);

export default useStyles;
