import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        landingPage: {
            '& > section': {
                marginTop: theme.spacing(4)
            }
        },
        title: {
            flexGrow: 1,
            display: 'flex',
            userSelect: 'none',
            '& > span': {
                fontSize: theme.typography.h5.fontSize,
                marginLeft: theme.spacing(2)
            }
        },
        mixinDenseToolbar: {
            minHeight: 48
        },
        mainHero: {
            background: `linear-gradient(180deg, ${theme.palette.primary.main} 80%, #fff 20%)`,
            userSelect: 'none',
            padding: theme.spacing(4),
            [theme.breakpoints.down('sm')]: {
                padding: `${theme.spacing(4)}px 0`,
                background: theme.palette.primary.main
            }
        },
        container: {
            display: 'flex',
            [theme.breakpoints.down('sm')]: {
                flexDirection: 'column-reverse'
            }
        },
        content: {
            flex: 1,
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            flexDirection: 'column',
            '& > h1': {
                ...theme.typography.h4,
                color: '#fff',
                [theme.breakpoints.down('sm')]: {
                    ...theme.typography.h5,
                    textAlign: 'center'
                },
                [theme.breakpoints.down('xs')]: {
                    fontSize: '1rem',
                    textAlign: 'center'
                }
            },
            '& > button': {
                marginTop: theme.spacing(2),
                alignSelf: 'flex-start',
                [theme.breakpoints.down('sm')]: {
                    alignSelf: 'center'
                },
                [theme.breakpoints.down('xs')]: {
                    width: '100%'
                }
            }
        },
        image: {
            display: 'grid',
            placeItems: 'center',
            pointerEvents: 'none',
            flex: 1,
            '& img': {
                animation: '$shake 2s alternate infinite'
            }
        },
        '@keyframes shake': {
            '0%': {
                transform: 'rotate(-1deg) scale(95%)'
            },
            '100%': {
                transform: 'rotate(1deg) scale(92%)'
            }
        }
    })
);

export default useStyles;
