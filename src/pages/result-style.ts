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
            alignItems: 'center',
            justifyContent: 'center',
            textAlign: 'center',
            gap: theme.spacing(4),
            [theme.breakpoints.down('xs')]: {
                flexDirection: 'column',
                gap: 0
            }
        },
        tournamentDescription: {},
        listItem: {
            textDecoration: 'none !important',
            color: theme.palette.text.primary,
            paddingRight: `${theme.spacing(7)}px !important`
        },
        participantsCount: {
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            flexDirection: 'column'
        }
    })
);

export default useStyles;
