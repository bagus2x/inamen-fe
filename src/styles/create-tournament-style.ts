import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        create: {
            padding: theme.spacing(2, 0)
        },
        header: {
            display: 'flex',
            justifyContent: 'space-between'
        },
        stepper: {
            background: 'transparent'
        },
        stepContent: {
            display: 'flex',
            flexDirection: 'column',
            gap: theme.spacing(2)
        },
        btnAction: {
            paddingTop: theme.spacing(3),
            display: 'flex',
            gap: theme.spacing(2)
        },
        radioInput: {
            ...theme.typography.caption
        },
        datePickerWrapper: {
            display: 'grid',
            gridTemplateColumns: '1fr 1fr',
            [theme.breakpoints.down('xs')]: {
                gridTemplateColumns: '1fr'
            }
        },
        form: {
            paddingTop: theme.spacing(2)
        }
    })
);

export default useStyles;
