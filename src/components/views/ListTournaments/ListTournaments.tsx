import Typography from '@material-ui/core/Typography';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Avatar from '@material-ui/core/Avatar';
import TeamIcon from '@material-ui/icons/PeopleRounded';
import Divider from '@material-ui/core/Divider';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction';
import PlayerIcon from '@material-ui/icons/PersonRounded';
import Link from '~components/common/Link';
import useStyles from '~components/views/ListTournaments/list-tournaments-style';

function ListTournaments() {
    const classes = useStyles();

    return (
        <List className={classes.list} component="div" aria-label="search result">
            <ListItem
                classes={{ secondaryAction: classes.listItem }}
                button
                passHref
                component={Link}
                href="/tournament/1"
            >
                <ListItemAvatar>
                    <Avatar src="/assets/game-logo/apex.jpg" variant="rounded" />
                </ListItemAvatar>
                <ListItemText primary="Apex Trios Killrace" secondary="Seblak Panas" />
                <ListItemSecondaryAction>
                    <div className={classes.tournamentInfo}>
                        <Typography variant="caption">Online</Typography>
                        <span className={classes.participantsCount}>
                            <TeamIcon fontSize="small" color="primary" />
                            <Typography variant="caption">18/20</Typography>
                        </span>
                    </div>
                </ListItemSecondaryAction>
            </ListItem>
            <Divider />
            <ListItem
                classes={{ secondaryAction: classes.listItem }}
                button
                passHref
                component={Link}
                href="/tournament/2"
            >
                <ListItemAvatar>
                    <Avatar src="/assets/game-logo/valorant.jpg" variant="rounded" />
                </ListItemAvatar>
                <ListItemText primary="Turnament Antar RW" secondary="Riot Gaming" />
                <ListItemSecondaryAction>
                    <div className={classes.tournamentInfo}>
                        <Typography variant="caption">Online</Typography>
                        <span className={classes.participantsCount}>
                            <PlayerIcon fontSize="small" color="primary" />
                            <Typography variant="caption">14/20</Typography>
                        </span>
                    </div>
                </ListItemSecondaryAction>
            </ListItem>
            <Divider />
            <ListItem
                classes={{ secondaryAction: classes.listItem }}
                button
                passHref
                component={Link}
                href="/tournament/2"
            >
                <ListItemAvatar>
                    <Avatar src="/assets/game-logo/valorant.jpg" variant="rounded" />
                </ListItemAvatar>
                <ListItemText primary="Turnament Antar RT 2021: Edisi Musim Panas yang Sejuk" secondary="GG Gaming" />
                <ListItemSecondaryAction>
                    <div className={classes.tournamentInfo}>
                        <Typography variant="caption">Online</Typography>
                        <span className={classes.participantsCount}>
                            <TeamIcon fontSize="small" color="primary" />
                            <Typography variant="caption">12/20</Typography>
                        </span>
                    </div>
                </ListItemSecondaryAction>
            </ListItem>
        </List>
    );
}

export default ListTournaments;
