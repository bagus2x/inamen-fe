import { ReactEventHandler, FC } from 'react';
import IconButton from '@material-ui/core/IconButton';
import InputBase from '@material-ui/core/InputBase';
import SendIcon from '@material-ui/icons/SendRounded';
import ArrowBackIcon from '@material-ui/icons/ArrowBackRounded';
import SwipeableDrawer from '@material-ui/core/SwipeableDrawer';
import Typography from '@material-ui/core/Typography';
import clsx from 'clsx';
import useStyles from '~components/views/ChatBox/styles';

interface ChatBoxProps {
    onClose: ReactEventHandler<{}>;
    onOpen: ReactEventHandler<{}>;
    open: boolean;
}

const ChatBox: FC<ChatBoxProps> = ({ onClose, onOpen, open }) => {
    const classes = useStyles();

    return (
        <SwipeableDrawer keepMounted open={open} onClose={onClose} onOpen={onOpen} anchor="right">
            <div className={classes.chatBox}>
                <div className={classes.header}>
                    <IconButton color="primary" size="small" edge="start" className={classes.btnBack} onClick={onClose}>
                        <ArrowBackIcon />
                    </IconButton>
                    <Typography variant="h3">Live Chat</Typography>
                </div>
                <div className={classes.messagesContainer}>
                    <div className={clsx(classes.message, true ? classes.receiver : classes.sender)}>
                        <span className={classes.messageInfo}>
                            <Typography variant="caption">Bagus</Typography>
                            <Typography variant="caption" color="textSecondary">
                                07:19am
                            </Typography>
                        </span>
                        <div className={classes.messageWrapper}>
                            <Typography variant="body2">
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis possimus, assumenda
                                obcaecati error, beatae hic quo ab nihil provident officiis consectetur nisi voluptatum
                                odit quisquam quas temporibus explicabo porro perferendis atque voluptatem dicta iste
                                voluptas. Laboriosam sint, laudantium, tempora, in voluptas non laborum possimus
                                exercitationem impedit nihil distinctio similique voluptatibus?
                            </Typography>
                        </div>
                    </div>
                    <div className={clsx(classes.message, false ? classes.receiver : classes.sender)}>
                        <span className={classes.messageInfo}>
                            <Typography variant="caption">Andi</Typography>
                            <Typography variant="caption" color="textSecondary">
                                07:23am
                            </Typography>
                        </span>
                        <div className={classes.messageWrapper}>
                            <Typography variant="body2">
                                iste voluptas. Laboriosam sint, laudantium, tempora, in voluptas non laborum possimus
                                exercitationem impedit nihil distinctio similique voluptatibus?
                            </Typography>
                        </div>
                    </div>
                </div>
                <div className={classes.chatInput}>
                    <InputBase fullWidth placeholder="Send a message" />
                    <IconButton color="primary" size="small" edge="end">
                        <SendIcon />
                    </IconButton>
                </div>
            </div>
        </SwipeableDrawer>
    );
};

export default ChatBox;
