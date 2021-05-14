import Dialog from '@material-ui/core/Dialog';
import Typography from '@material-ui/core/Typography';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import useSyles from '~components/views/TeamParticipantDialog/styles';
import Link from '~components/common/Link';

interface TeamParticipantDialogProps {
    title: string;
    open: boolean;
    onClose: () => void;
}

const TeamParticipantDialog = ({ title, open, onClose }: TeamParticipantDialogProps) => {
    const classes = useSyles();

    return (
        <Dialog open={open} onClose={onClose}>
            <div className={classes.teamDialog}>
                <div className={classes.title}>
                    <Typography variant="h3">{title}</Typography>
                </div>
                <div>
                    <List component="nav">
                        <ListItem button component={Link} href="/user/1" passHref className={classes.linkPlayer}>
                            <ListItemText primary="Joko" />
                        </ListItem>
                    </List>
                </div>
            </div>
        </Dialog>
    );
};

export default TeamParticipantDialog;
