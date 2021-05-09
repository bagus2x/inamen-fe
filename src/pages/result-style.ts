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
        },
        list: {
            width: '100%',
            paddingTop: 0
        },
        tournamentInfo: {
            display: 'flex',
            '& > *:not(:last-child)': {
                marginRight: theme.spacing(4)
            },
            [theme.breakpoints.down('xs')]: {
                flexDirection: 'column'
            }
        },
        tournamentDescription: {},
        listItem: {
            textDecoration: 'none !important',
            color: theme.palette.text.primary,
            paddingRight: 200,
            [theme.breakpoints.down('xs')]: {
                paddingRight: 100
            }
        }
    })
);

export default useStyles;
