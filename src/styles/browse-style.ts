import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        container: {
            display: 'flex',
            paddingTop: theme.spacing(2),
            flexDirection: 'column'
        },
        genresWrapper: {
            margin: theme.spacing(2, 0),
            display: 'grid',
            gap: theme.spacing(1),
            [theme.breakpoints.up('xs')]: {
                gridTemplateColumns: 'repeat(2, 1fr)'
            },
            [theme.breakpoints.up('md')]: {
                gridTemplateColumns: 'repeat(4, 1fr)'
            }
        },
        gameCardWrapper: {
            margin: theme.spacing(2, 0),
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fill, minmax(200px, 1fr))',
            gap: theme.spacing(2),
            [theme.breakpoints.down('xs')]: {
                gridTemplateColumns: 'repeat(auto-fill, minmax(120px, 1fr))'
            }
        }
    })
);

export default useStyles;
