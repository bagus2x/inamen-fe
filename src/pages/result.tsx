import Head from 'next/head';
import { useRouter } from 'next/router';
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';
import useStyles from '~pages/result-style';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Avatar from '@material-ui/core/Avatar';
import Divider from '@material-ui/core/Divider';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction';
import FilterListIcon from '@material-ui/icons/FilterList';
import App from '~components/layouts/App';
import Link from '~components/common/Link';
import { Button } from '@material-ui/core';

function Result() {
    const classes = useStyles();
    const router = useRouter();
    const { search_query } = router.query;

    return (
        <div>
            <Head>
                <title>{search_query ? decodeURIComponent(search_query as string) : 'No Result Found'} | Inamen</title>
            </Head>
            <Container maxWidth="lg" className={classes.containerFilter}>
                <Button startIcon={<FilterListIcon />}>Filter</Button>
            </Container>
            <Container maxWidth="lg" className={classes.containerList} disableGutters>
                <List className={classes.list} component="div" aria-label="search result">
                    <ListItem className={classes.listItem} button passHref component={Link} href="/tournament/1">
                        <ListItemAvatar>
                            <Avatar src="/assets/game-logo/apex.jpg" variant="rounded" />
                        </ListItemAvatar>
                        <ListItemText
                            primary="Apex Trios Killrace"
                            secondary={
                                <div className={classes.tournamentDescription}>
                                    <Typography variant="body2">Seblak Panas</Typography>
                                </div>
                            }
                        />
                        <ListItemSecondaryAction>
                            <div className={classes.tournamentInfo}>
                                <Typography variant="caption">Online</Typography>
                                <Typography variant="caption">18/20 Teams</Typography>
                            </div>
                        </ListItemSecondaryAction>
                    </ListItem>
                    <Divider />
                    <ListItem className={classes.listItem} button passHref component={Link} href="/tournament/2">
                        <ListItemAvatar>
                            <Avatar src="/assets/game-logo/valorant.jpg" variant="rounded" />
                        </ListItemAvatar>
                        <ListItemText
                            primary="Turnament Antar RW"
                            secondary={
                                <div className={classes.tournamentDescription}>
                                    <Typography variant="body2">Riot Gaming</Typography>
                                </div>
                            }
                        />
                        <ListItemSecondaryAction>
                            <div className={classes.tournamentInfo}>
                                <Typography variant="caption">Online</Typography>
                                <Typography variant="caption">16/20 Teams</Typography>
                            </div>
                        </ListItemSecondaryAction>
                    </ListItem>
                    <Divider />
                    <ListItem className={classes.listItem} button passHref component={Link} href="/tournament/2">
                        <ListItemAvatar>
                            <Avatar src="/assets/game-logo/valorant.jpg" variant="rounded" />
                        </ListItemAvatar>
                        <ListItemText
                            primary="Turnament Antar RT 2021: Edisi Musim Panas yang Sejuk"
                            secondary={
                                <div className={classes.tournamentDescription}>
                                    <Typography variant="body2">GG Gaming</Typography>
                                </div>
                            }
                        />
                        <ListItemSecondaryAction>
                            <div className={classes.tournamentInfo}>
                                <Typography variant="caption">Online</Typography>
                                <Typography variant="caption">12/20 Teams</Typography>
                            </div>
                        </ListItemSecondaryAction>
                    </ListItem>
                </List>
            </Container>
        </div>
    );
}

Result.XLayout = App;

export default Result;
