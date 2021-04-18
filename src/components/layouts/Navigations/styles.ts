import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        root: {
            display: 'grid',
            gridTemplateColumns: 'auto 1fr',
            gridTemplateAreas: `
                    'navbar  navbar'
                    'sidenav content'
                `,
            /*
             * ______________________________
             * ______________________________
             * | |
             * | |
             * | |         content
             * | |
             * | |
             * | |
             *
             */
            gridTemplateRows: 'auto 1fr'
        },
        navbar: {
            gridArea: 'navbar'
        },
        sideNavbar: {
            gridArea: 'sidenav',
            background: '#fff',
            minWidth: 48,
            boxShadow: theme.shadows[3]
        },
        content: {
            gridArea: 'content',
            height: '100%',
            overflow: 'auto'
        }
    })
);

export default useStyles;
