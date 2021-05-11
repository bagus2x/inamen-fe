import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        banner: {
            position: 'relative',
            width: '100%',
            '& > *': {
                marginBottom: theme.spacing(3)
            }
        },
        bannerBackground: {
            position: 'absolute',
            backgroundImage: (props: { background: string }) => `url(${props.background})`,
            width: '100%',
            height: 250,
            backgroundPosition: 'right 0 center',
            zIndex: 1
        },
        bannerContainer: {
            position: 'relative',
            zIndex: 2,
            padding: theme.spacing(2),
            display: 'flex',
            flexDirection: 'column'
        },
        partiGenre: {
            display: 'flex',
            gap: theme.spacing(2),
            margin: theme.spacing(0, 0, 1),
            '& > *:first-child': {
                display: 'flex',
                justifiyContent: 'center',
                alignItems: 'center'
            },
            '& > *:last-child': {
                display: 'flex',
                gap: theme.spacing(0.5)
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
            }
        },
        btnTruncate: {
            cursor: 'pointer'
        }
    })
);

export default useStyles;
