import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
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
