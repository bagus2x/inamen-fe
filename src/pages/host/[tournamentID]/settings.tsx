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
import useStyles from '~styles/host-settings-style';

function Settings() {
    const classes = useStyles();

    return (
        <div className={classes.settings}>
            <Container>
                <Typography variant="h1">Settings</Typography>
            </Container>
            <Container className={classes.settingsList}>
                <div>list</div>
            </Container>
        </div>
    );
}

Settings.XLayout = HostLayout;

export default Settings;
