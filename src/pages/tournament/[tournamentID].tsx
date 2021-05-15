import { ChangeEvent, useState } from 'react';
import dynamic from 'next/dynamic';
import { useRouter } from 'next/router';
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';
import { Theme } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Fab from '@material-ui/core/Fab';
import ChatIcon from '@material-ui/icons/ChatRounded';
import TabPanel from '~components/common/TabPanel/TabPanel';
import ChatBox from '~components/views/ChatBox';
import AppLayout from '~components/layouts/App';
import Tag from '~components/common/Tag';
import useStyles from '~styles/tournament-style';

const TourInfo = dynamic(() => import('~components/views/TourInfo'));
const TourParticipants = dynamic(() => import('~components/views/TourParticipants'));
const TourSchedules = dynamic(() => import('~components/views/TourSchedules'));
const TourStandings = dynamic(() => import('~components/views/TourStandings'));

function TournamentDetail() {
    const router = useRouter();
    const classes = useStyles();
    const isMdUp = useMediaQuery((theme: Theme) => theme.breakpoints.up('md'));
    const [chatBox, setChatBox] = useState(false);

    const tabValue = router.query.tab || 'informations';

    const handleChatOnOpen = () => {
        setChatBox(true);
    };

    const handleChatOnCloe = () => {
        setChatBox(false);
    };

    const handleTabChange = (_ev: ChangeEvent<{}>, v: string) => {
        // remove duplicate query string
        const pathname = router.asPath.substring(0, router.asPath.indexOf('?')) || router.asPath;
        router.push({
            pathname,
            query: { tab: v.toLocaleLowerCase() }
        });
    };

    return (
        <div className={classes.tournament}>
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
            <Container maxWidth="lg">
                <Tabs
                    value={tabValue}
                    indicatorColor="primary"
                    textColor="primary"
                    onChange={handleTabChange}
                    aria-label="tournament tabs"
                    variant={isMdUp ? 'fullWidth' : 'scrollable'}
                >
                    <Tab value="informations" wrapped disableRipple label="Informations" />
                    <Tab value="participants" wrapped disableRipple label="Participants" />
                    <Tab value="schedules" wrapped disableRipple label="Schedules" />
                    <Tab value="standings" wrapped disableRipple label="Standings" />
                    <Tab value="watch" wrapped disableRipple label="Watch" disabled />
                    <Tab value="share" wrapped disableRipple label="Share" disabled />
                </Tabs>
                <div className={classes.content}>
                    <TabPanel visible={tabValue === 'informations'}>
                        <TourInfo />
                    </TabPanel>
                    <TabPanel visible={tabValue === 'participants'}>
                        <TourParticipants />
                    </TabPanel>
                    <TabPanel visible={tabValue === 'schedules'}>
                        <TourSchedules />
                    </TabPanel>
                    <TabPanel visible={tabValue === 'standings'}>
                        <TourStandings />
                    </TabPanel>
                </div>
            </Container>
            <ChatBox onClose={handleChatOnCloe} onOpen={handleChatOnOpen} open={chatBox} />
            <Fab
                size={isMdUp ? 'medium' : 'small'}
                color="primary"
                aria-label="chat"
                className={classes.btnChat}
                onClick={() => setChatBox(true)}
            >
                <ChatIcon fontSize={isMdUp ? 'default' : 'small'} />
            </Fab>
        </div>
    );
}

TournamentDetail.XLayout = AppLayout;

export default TournamentDetail;
