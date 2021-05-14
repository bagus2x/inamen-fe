import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        gameCard: {
            display: 'flex',
            flexDirection: 'column',
            overflow: 'hidden',
            borderRadius: theme.spacing(0.5),
            paddingBottom: theme.spacing(1)
        },
        imageLink: {
            cursor: 'pointer',
            borderRadius: theme.spacing(1),
            transition: theme.transitions.create('all', { duration: 100 }),
            userSelect: 'none',
            '&:hover, &:active': {
                boxShadow: `-5px 5px ${theme.palette.secondary.main}`,
                transform: 'translate(5px,-5px)'
            }
        },
        image: {
            borderRadius: theme.spacing(1),
            pointerEvents: 'none'
        },
        title: {
            marginTop: theme.spacing(1),
            color: 'inherit',
            fontWeight: 500,
            textOverflow: 'elipsis',
            overflow: 'hidden',
            whiteSpace: 'nowrap',
            '&:hover': {
                color: theme.palette.secondary.main
            }
        },
        numberOfParticipants: {
            display: 'flex',
            alignItems: 'center',
            color: theme.palette.success.light
        }
    })
);

export default useStyles;
