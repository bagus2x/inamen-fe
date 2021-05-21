import Typography from '@material-ui/core/Typography';
import moment from 'moment';
import React from 'react';
import useStyles from './styles';
import clsx from 'clsx';
import dateToFromNowDaily from '~libs/date-daily';

interface MessageProps {
    username: string;
    time: number;
    body: string;
    type: 'sender' | 'receiver' | 'host';
}

function Message({ username, time, body, type }: MessageProps) {
    const classes = useStyles();

    const getTime = (unixTime: number) => {
        const dateFromNow = dateToFromNowDaily(unixTime);
        if (dateFromNow === 'Today') return `${dateFromNow}, ${moment.unix(unixTime).format('hh:mma')}`;
        return dateFromNow;
    };

    return (
        <div className={clsx(classes.message, classes[type])}>
            <div className={classes.header}>
                <Typography variant="caption">{username}</Typography>
                <Typography variant="caption">{getTime(time)}</Typography>
            </div>
            <div>
                <Typography variant="body2">{body}</Typography>
            </div>
        </div>
    );
}

export default React.memo(Message);
