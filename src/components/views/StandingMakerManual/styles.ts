import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        title: {
            ...theme.typography.h2
        },
        container: {
            display: 'grid',
            gridTemplateColumns: '200px 1fr',
            height: '100%'
        },
        toolbar: {
            display: 'flex',
            flexDirection: 'column',
            height: '100%',
            paddingRight: theme.spacing(1),
            borderRight: `1px solid ${theme.palette.grey[400]}`,
            gap: theme.spacing(1)
        },
        table: {}
    })
);

export default useStyles;
