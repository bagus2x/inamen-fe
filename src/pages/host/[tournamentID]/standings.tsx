import { useState } from 'react';
import dynamic from 'next/dynamic';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import Typography from '@material-ui/core/Typography';
import ListItemText from '@material-ui/core/ListItemText';
import IconButton from '@material-ui/core/IconButton';
import Container from '@material-ui/core/Container';
import DeleteIcon from '@material-ui/icons/Delete';
import Divider from '@material-ui/core/Divider';
import EditIcon from '@material-ui/icons/Edit';
import Button from '@material-ui/core/Button';
import AddIcon from '@material-ui/icons/Add';
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction';
import HostLayout from '~components/layouts/Host';
import useStyles from '~styles/standings-style';

const StandingMaker = dynamic(() => import('~components/views/StandingMaker/StandingMaker'));

function Standings() {
    const classes = useStyles();
    const [standingMaker, setStandingMaker] = useState(false);

    const handleOpenStandingMaker = () => {
        setStandingMaker(true);
    };

    const handleCloseStandingMaker = () => {
        setStandingMaker(false);
    };

    return (
        <div className={classes.standings}>
            <Container maxWidth="lg" className={classes.header}>
                <span>
                    <Typography variant="h1">Standings</Typography>
                </span>
                <Button
                    startIcon={<AddIcon />}
                    color="secondary"
                    variant="contained"
                    size="small"
                    disableElevation
                    onClick={handleOpenStandingMaker}
                >
                    Create
                </Button>
            </Container>
            <Container maxWidth="lg">
                <List>
                    <ListItem button>
                        <ListItemText primary="Babak 1" />
                    </ListItem>
                    <Divider />
                    <ListItem button>
                        <ListItemText primary="babak 2" secondary="Description..." />
                        <ListItemSecondaryAction>
                            <IconButton size="small" color="primary">
                                <EditIcon fontSize="small" />
                            </IconButton>
                            <IconButton size="small" color="primary">
                                <DeleteIcon fontSize="small" />
                            </IconButton>
                        </ListItemSecondaryAction>
                    </ListItem>
                    <Divider />
                    <ListItem button>
                        <ListItemText primary="Babak 3" />
                    </ListItem>
                    <Divider />
                    <ListItem button>
                        <ListItemText primary="Babak 4" />
                    </ListItem>
                    <Divider />
                    <ListItem button>
                        <ListItemText primary="Babak 5" />
                    </ListItem>
                    <Divider />
                    <ListItem button>
                        <ListItemText primary="Babak 6" />
                    </ListItem>
                </List>
            </Container>
            <StandingMaker open={standingMaker} onClose={handleCloseStandingMaker} />
        </div>
    );
}

Standings.XLayout = HostLayout;

export default Standings;
