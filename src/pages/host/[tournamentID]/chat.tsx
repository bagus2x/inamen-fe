import { ReactEventHandler, useEffect, useRef, useState } from 'react';
import { useRouter } from 'next/router';
import Indicator from '@material-ui/icons/FiberManualRecordRounded';
import ArrowBackIcon from '@material-ui/icons/ArrowBackRounded';
import SwipeableDrawer from '@material-ui/core/SwipeableDrawer';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import SendIcon from '@material-ui/icons/SendRounded';
import InputBase from '@material-ui/core/InputBase';
import Tooltip from '@material-ui/core/Tooltip';
import Divider from '@material-ui/core/Divider';
import { useForm } from 'react-hook-form';
import moment from 'moment';
import clsx from 'clsx';
import useStyles from '~styles/host-chat-styles';
import dateToFromNowDaily from '~libs/date-daily';
import { GO_WS_SERVICE } from '~libs/global-var';
import HostLayout from '~components/layouts/Host';
import { Container } from '@material-ui/core';

interface Message {
    _id: string;
    sender: string;
    body: string;
    createdAt: number;
}

const Chat = () => {
    const classes = useStyles();
    const [connected, setConnected] = useState(false);
    const router = useRouter();
    const { tournamentID } = router.query;
    const [messages, setMessages] = useState<Array<Message>>([]);
    const [id, setID] = useState('');
    const ws = useRef<WebSocket>();
    const messageContainer = useRef<HTMLDivElement>(null);

    const {
        register,
        handleSubmit,
        reset,
        formState: { errors, isValid }
    } = useForm<{ message: string }>();

    const connect = () => {
        const id = Math.random();
        setID(id.toString());
        const conn = new WebSocket(`${GO_WS_SERVICE}/ws/${tournamentID}/${id}`);

        conn.onopen = () => {
            ws.current = conn;
            setConnected(true);
        };

        conn.onerror = () => {
            setConnected(false);
            conn.close();
            // setTimeout(connect, 1000);
        };

        conn.onclose = () => {
            setConnected(false);
        };

        conn.onmessage = (ev: MessageEvent) => {
            setMessages((prevMessages) => [...prevMessages, JSON.parse(ev.data)]);
        };
    };

    useEffect(() => {
        if (messageContainer.current) {
            messageContainer.current.scroll({
                top: messageContainer.current.scrollHeight,
                left: 0
            });
        }
    }, [messageContainer, messages]);

    useEffect(() => {
        if (tournamentID) connect();
        return () => ws.current?.close();
    }, [tournamentID]);

    const sendMessage = (message: string) => {
        ws.current?.send(message);
    };

    const handleSendMessage = handleSubmit((data) => {
        sendMessage(data.message);
        reset();
    });

    const getTime = (epoch: number) => {
        const dateFromNow = dateToFromNowDaily(epoch);
        if (dateFromNow === 'Today') return `${dateFromNow}, ${moment.unix(epoch).format('hh:mma')}`;
        return dateFromNow;
    };

    return (
        <div className={classes.chat}>
            <Container style={{ display: 'flex', flexDirection: 'column', height: '100%' }}>
                <div className={classes.header}>
                    <Typography variant="h3">Live Chat</Typography>
                    <Tooltip
                        arrow
                        leaveDelay={1500}
                        title={connected ? 'Connected' : 'Attempting to connect to the server'}
                    >
                        <Indicator fontSize="small" className={connected ? classes.connected : classes.disconnected} />
                    </Tooltip>
                </div>
                <div className={classes.messagesContainer} ref={messageContainer}>
                    <Divider />
                    <div className={clsx(classes.message, classes.receiver)}>
                        <span className={classes.messageInfo}>
                            <Typography variant="caption">BOT#INAMEN</Typography>
                        </span>
                        <div className={classes.messageWrapper}>
                            <Typography variant="body2">Welcome to the chat room</Typography>
                        </div>
                    </div>
                    {messages.map((message, index) => (
                        <div
                            key={index}
                            className={clsx(classes.message, message.sender !== id ? classes.receiver : classes.sender)}
                        >
                            <span className={classes.messageInfo}>
                                <Typography variant="caption">{message.sender}</Typography>
                                <Typography variant="caption" color="textSecondary">
                                    {getTime(message.createdAt)}
                                </Typography>
                            </span>
                            <div className={classes.messageWrapper}>
                                <Typography variant="body2">{message.body}</Typography>
                            </div>
                        </div>
                    ))}
                </div>
                <form className={classes.chatInput} onSubmit={handleSendMessage}>
                    <InputBase
                        fullWidth
                        autoComplete="off"
                        placeholder="Send a message"
                        disabled={!connected}
                        {...register('message', { required: true })}
                    />
                    <IconButton disabled={!connected} type="submit" color="primary" size="small" edge="end">
                        <SendIcon />
                    </IconButton>
                </form>
            </Container>
        </div>
    );
};

Chat.XLayout = HostLayout;

export default Chat;
