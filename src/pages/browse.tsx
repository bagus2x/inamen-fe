import Container from '@material-ui/core/Container';
import App from '~components/layouts/App';
import useStyles from '~pages/browse-style';

function Browse() {
    const classes = useStyles();
    return (
        <div>
            <Container maxWidth="lg" className={classes.container}>
                a
            </Container>
        </div>
    );
}

Browse.XLayout = App;

export default Browse;
