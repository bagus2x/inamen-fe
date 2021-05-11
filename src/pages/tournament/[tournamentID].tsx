import Image from 'next/image';
import { useRouter } from 'next/router';
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';
import App from '~components/layouts/App';
import useStyles from '~styles/tournament-style';
import Tag from '~components/common/Tag';
import { Button } from '@material-ui/core';

function TournamentDetail() {
    const router = useRouter();
    const classes = useStyles();

    return (
        <div>
            <div className={classes.banner}>
                <Container maxWidth="lg" className={classes.bannerContainer}>
                    <div className={classes.imageWrapper}>
                        <img className={classes.image} src="/assets/game-logo/apex.jpg" width={180} height={180} />
                    </div>
                    <div className={classes.infoContainer}>
                        <Typography variant="h1">Apex Trios Killrace</Typography>
                        <div className={classes.platform}>
                            <Tag variant="outlined" color="primary">
                                PC
                            </Tag>
                            <Tag variant="outlined" color="primary">
                                PS5
                            </Tag>
                        </div>
                        <div className={classes.info}>
                            <Typography variant="caption">Bagus</Typography>
                            <Typography variant="body2">15 Januari 2021 - 20 Agustus 2021</Typography>
                            <Typography variant="body2">Online</Typography>
                        </div>
                        <Button size="small" disableElevation variant="contained" color="secondary">
                            Register
                        </Button>
                    </div>
                </Container>
            </div>
        </div>
    );
}

TournamentDetail.XLayout = App;

export default TournamentDetail;
