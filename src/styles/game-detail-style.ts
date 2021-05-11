import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        header: {
            width: '100%',
            '& > *': {
                marginBottom: theme.spacing(3)
            }
        },
        headerContainer: {
            paddingTop: theme.spacing(2),
            display: 'flex',
            flexDirection: 'column'
        },
        partiGenre: {
            display: 'flex',
            gap: theme.spacing(2),
            margin: theme.spacing(0, 0, 1),
            '& > *:last-child': {
                display: 'flex',
                gap: theme.spacing(0.5),
                '& > button': {
                    padding: theme.spacing(0, 1)
                }
            },
            [theme.breakpoints.down('sm')]: {
                flexDirection: 'column'
            }
        },
        description: {
            '& > *': {
                fontSize: '.85em',
                display: 'inline',
                textAlign: 'justify'
            },
            '& > :last-child': {
                cursor: 'pointer'
            }
        }
    })
);

export default useStyles;
