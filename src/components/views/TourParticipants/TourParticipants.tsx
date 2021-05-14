import useStyles from '~components/views/TourParticipants/styles';
import TeamParticipant from '../TeamParticipant/TeamParticipant';

const TourInfo = () => {
    const classes = useStyles();

    return (
        <div className={classes.tourParticipants}>
            <div className={classes.participantsWrapper}>
                <TeamParticipant />
                <TeamParticipant />
                <TeamParticipant />
                <TeamParticipant />
            </div>
        </div>
    );
};

export default TourInfo;
