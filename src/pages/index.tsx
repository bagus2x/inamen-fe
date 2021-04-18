import Image from 'next/image';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import Container from '@material-ui/core/Container';
import useStyles from '~pages/index-style';
import Navbar from '~components/views/Navbar';

function LandingPage() {
    const classes = useStyles();

    return (
        <div className={classes.landingPage}>
            <Navbar />
            <main className={classes.mainHero}>
                <Container className={classes.container}>
                    <div className={classes.content}>
                        <Typography variant="h1">
                            The Esports Technology to Engage Your Players with Competitions{' '}
                        </Typography>
                        <Button variant="contained" color="secondary">
                            Get Started
                        </Button>
                    </div>
                    <div className={classes.image}>
                        <Image src="/console.svg" height={500} width={500} />
                    </div>
                </Container>
            </main>
            <section>
                <Container>
                    <Typography align="center" variant="h3">
                        Why Inamen?
                    </Typography>
                    <Typography align="center" variant="body1">
                        Organize, manage & share your competitions with Inamen
                    </Typography>
                </Container>
            </section>
        </div>
    );
}

export default LandingPage;
