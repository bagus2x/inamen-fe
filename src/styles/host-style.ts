import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        host: {
            paddingTop: theme.spacing(2)
        },
        tourCardWrapper: {
            margin: theme.spacing(2, 0),
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fill, minmax(180px, 1fr))',
            gap: theme.spacing(2),
            [theme.breakpoints.down('xs')]: {
                gridTemplateColumns: 'repeat(auto-fill, minmax(120px, 1fr))'
            }
        }
    })
);

export default useStyles;
