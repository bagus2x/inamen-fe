import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        tourParticipants: {},
        participantsWrapper: {
            display: 'grid',
            flexWrap: 'wrap',
            gap: theme.spacing(2),
            gridTemplateColumns: '1fr 1fr',
            [theme.breakpoints.down('sm')]: {
                gridTemplateColumns: '1fr'
            }
        }
    })
);

export default useStyles;
