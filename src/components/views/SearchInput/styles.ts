import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        search: {
            margin: '0 auto',
            display: 'flex',
            justifyContent: 'center',
            width: '100%',
            maxWidth: 500,
            position: 'relative',
            padding: theme.spacing(0, 1, 0, 1)
        },
        mobileSearch: {
            position: 'absolute',
            left: 0,
            top: 7
        },
        autoComplete: {
            display: 'none',
            top: -8,
            minHeight: 60,
            zIndex: 996,
            width: '100%',
            position: 'absolute',
            background: theme.palette.background.paper,
            borderRadius: theme.spacing(1),
            boxShadow: theme.shadows[4]
        },
        autoCompleteVisible: {
            display: 'flex !important'
        },
        inputRoot: {
            color: 'inherit'
        },
        inputInput: {
            position: 'relative',
            zIndex: 997,
            width: '100%',
            padding: theme.spacing(1, 2, 1, 2),
            background: theme.palette.grey[200],
            borderRadius: theme.spacing(1, 0, 0, 1),
            marginRight: 2
        },
        inputFocus: {
            background: theme.palette.background.paper,
            border: `2px solid ${theme.palette.secondary.main}`,
            padding: `6px 14px 6px 14px`
        },
        searchIcon: {
            position: 'relative',
            zIndex: 997,
            display: 'grid',
            placeItems: 'center',
            background: theme.palette.grey[100],
            padding: theme.spacing(0, 1),
            borderRadius: theme.spacing(0, 1, 1, 0),
            color: theme.palette.grey[400]
        },
        searchIconActive: {
            cursor: 'pointer'
        },
        autoCompleteResult: {
            padding: theme.spacing(0, 1, 1),
            width: '100%',
            marginTop: 50,
            display: 'flex',
            flexDirection: 'column',
            '&>*:not(:last-child)': {
                marginBottom: theme.spacing(1)
            }
        },
        autoItemResult: {
            display: 'flex',
            alignItems: 'center',
            padding: theme.spacing(1, 0.5),
            borderRadius: theme.spacing(1),
            textDecoration: 'none !important',
            width: '100%',
            '&:hover': {
                background: theme.palette.grey[100]
            }
        },
        autoItemHistory: {
            display: 'flex',
            alignItems: 'center',
            padding: theme.spacing(1, 0.5),
            borderRadius: theme.spacing(1),
            width: '100%',
            textDecoration: 'none !important',
            cursor: 'pointer',
            '&:hover': {
                background: theme.palette.grey[100]
            },
            '& > *:nth-child(2)': {
                flexGrow: 1,
                padding: theme.spacing(0, 1)
            }
        }
    })
);

export default useStyles;
