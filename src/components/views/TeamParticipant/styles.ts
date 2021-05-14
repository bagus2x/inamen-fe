import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        team: {
            display: 'flex',
            gap: theme.spacing(1),
            alignItems: 'center',
            borderBottom: `1px solid ${theme.palette.grey[500]}`,
            borderRadius: theme.spacing(0.5),
            [theme.breakpoints.up('md')]: {
                '&:hover': {
                    background: theme.palette.action.hover
                },
                '& > *:last-child': {
                    display: 'none'
                },
                '&:hover > *:last-child': {
                    display: 'block'
                }
            }
        },
        teamName: {
            height: '100%',
            flexGrow: 1,
            display: 'flex',
            alignItems: 'center'
        },
        avatar: {}
    })
);

export default useStyles;
