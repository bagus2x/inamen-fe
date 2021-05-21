import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import Typography from '@material-ui/core/Typography';
import ListItemText from '@material-ui/core/ListItemText';
import IconButton from '@material-ui/core/IconButton';
import Container from '@material-ui/core/Container';
import DeleteIcon from '@material-ui/icons/Delete';
import Divider from '@material-ui/core/Divider';
import EditIcon from '@material-ui/icons/Edit';
import AddIcon from '@material-ui/icons/Add';
import Button from '@material-ui/core/Button';
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction';
import HostLayout from '~components/layouts/Host';
import useStyles from '~styles/matches-style';

function Matches() {
    const classes = useStyles();

    return (
        <div className={classes.matches}>
            <Container className={classes.header}>
                <Typography variant="h1">Matches</Typography>
                <Button startIcon={<AddIcon />} color="secondary" variant="contained" size="small" disableElevation>
                    Create
                </Button>
            </Container>
            <Container className={classes.matchesList}>
                <List>
                    <ListItem button>
                        <ListItemText primary="Babak 16 Besar" />
                    </ListItem>
                    <Divider />
                    <ListItem button>
                        <ListItemText primary="Babak 8 Besar" />
                    </ListItem>
                    <Divider />
                    <ListItem button>
                        <ListItemText primary="Babak 4 Besar" />
                    </ListItem>
                    <Divider />
                    <ListItem button>
                        <ListItemText primary="Babak Final" />
                    </ListItem>
                </List>
            </Container>
        </div>
    );
}

Matches.XLayout = HostLayout;

export default Matches;
