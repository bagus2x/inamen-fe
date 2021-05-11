import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        banner: {
            display: 'flex',
            flexDirection: 'row'
        },
        bannerContainer: {
            paddingTop: theme.spacing(2),
            paddingBottom: theme.spacing(2),
            display: 'flex',
            flexDirection: 'row',
            gap: theme.spacing(2),
            [theme.breakpoints.down('xs')]: {
                alignItems: 'flex-start',
                flexDirection: 'column'
            }
        },
        infoContainer: {
            flex: 1,
            display: 'flex',
            alignItems: 'flex-start',
            flexDirection: 'column'
        },
        info: {
            padding: theme.spacing(1, 0),
            flex: 1
        },
        imageWrapper: {
            display: 'grid',
            placeItems: 'center',
            [theme.breakpoints.down('xs')]: {
                alignSelf: 'center'
            }
        },
        image: {
            boxShadow: theme.shadows[10],
            borderRadius: theme.spacing(1),
            overflow: 'hidden'
        },
        platform: {
            display: 'flex',
            gap: theme.spacing(1)
        }
    })
);

export default useStyles;
