import { Typography } from '@material-ui/core';
import Container from '@material-ui/core/Container';
import App from '~components/layouts/App';
import useStyles from '~pages/browse-style';

function Browse() {
    const classes = useStyles();
    return (
        <div>
            <Container maxWidth="lg" className={classes.container}>
                <Typography variant="h1">Browse</Typography>
                <div>
                    <span>BATTLE ROYALE</span>
                    <span>FPS</span>
                    <span>MOBA</span>
                    <span>SPORT</span>
                </div>
                <Typography variant="inherit">Recomended Games</Typography>
                <Typography variant="inherit">Recomended Tournaments</Typography>
            </Container>
        </div>
    );
}

Browse.XLayout = App;

export default Browse;
