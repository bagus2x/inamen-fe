import { useState } from 'react';
import Image from 'next/image';
import Typography from '@material-ui/core/Typography';
import InfoRoundedIcon from '@material-ui/icons/InfoRounded';
import IconButton from '@material-ui/core/IconButton';
import useStyles from '~components/views/TeamParticipant/styles';
import TeamParticipantDialog from '~components/views/TeamParticipantDialog/TeamParticipantDialog';

const TeamParticipant = () => {
    const classes = useStyles();
    const [openDialog, setOpenDialog] = useState(false);

    const handleCloseDialog = () => {
        setOpenDialog(false);
    };

    const handleOpenDialog = () => {
        setOpenDialog(true);
    };

    return (
        <>
            <div className={classes.team}>
                <Image className={classes.avatar} src="/assets/team-default-logo/team.png" height={50} width={50} />
                <div className={classes.teamName}>
                    <Typography variant="h3">Team Esport</Typography>
                </div>
                <IconButton size="small" color="primary" onClick={handleOpenDialog}>
                    <InfoRoundedIcon />
                </IconButton>
            </div>
            <TeamParticipantDialog onClose={handleCloseDialog} open={openDialog} title="Team Esport" />
        </>
    );
};

export default TeamParticipant;
