import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';
import HostLayout from '~components/layouts/Host';
import TourCard from '~components/views/TourCard';
import useStyles from '~styles/host-style';

function Host() {
    const classes = useStyles();

    return (
        <div className={classes.host}>
            <Container maxWidth="lg">
                <Typography variant="h1">My Tournaments</Typography>
                <div className={classes.tourCardWrapper}>
                    <TourCard title="Turnamen Berantem" href="/host/1" image="/assets/game-logo/apex.jpg" />
                    <TourCard title="Turnamen Damai" href="/host/1" image="/assets/game-logo/apex.jpg" />
                    <TourCard title="Turnamen Sprotif" href="/host/1" image="/assets/game-logo/apex.jpg" />
                    <TourCard title="Turnamen RT" href="/host/1" image="/assets/game-logo/apex.jpg" />
                    <TourCard title="Turnamen RW" href="/host/1" image="/assets/game-logo/apex.jpg" />
                    <TourCard title="Turnamen Kecamatan" href="/host/1" image="/assets/game-logo/apex.jpg" />
                </div>
            </Container>
        </div>
    );
}

Host.XLayout = HostLayout;

export default Host;
