import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import Dialog from '@material-ui/core/Dialog';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import { useForm } from 'react-hook-form';
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';
import AddIcon from '@material-ui/icons/Add';
import HostLayout from '~components/layouts/Host';
import TourCard from '~components/views/TourCard';
import useStyles from '~styles/host-style';

function Host() {
    const classes = useStyles();
    const [newTournamentDialog, setNewTournamentDialog] = useState(false);
    const router = useRouter();
    const {
        handleSubmit,
        register,
        reset,
        formState: { errors }
    } = useForm<{ title: string }>();

    useEffect(() => {
        console.log(errors.title?.message);
    }, [errors]);

    const handleOpenNewTournamentDialog = () => {
        setNewTournamentDialog(true);
    };

    const handleCloseNewTournamentDialog = () => {
        setNewTournamentDialog(false);
        reset();
    };

    const handleNewTournament = handleSubmit((data) => {
        router.push({ pathname: '/host/create', query: { new_title: encodeURIComponent(data.title) } });
    });

    return (
        <div className={classes.host}>
            <Container className={classes.header}>
                <Typography variant="h1">My Tournaments</Typography>
                <Button
                    startIcon={<AddIcon />}
                    variant="contained"
                    color="default"
                    disableElevation
                    className={classes.btnCreate}
                    onClick={handleOpenNewTournamentDialog}
                >
                    Create
                </Button>
            </Container>
            <Container className={classes.tourCardWrapper}>
                <TourCard
                    title="aTurnamen Berantfefefefeffedwdwwdwdwdwdwdwdwdwdwem"
                    href="/host/1"
                    image="/assets/game-logo/apex.jpg"
                />
                <TourCard title="Turnamen Damai" href="/host/1" image="/assets/game-logo/apex.jpg" />
                <TourCard title="Turnamen Sprotif" href="/host/1" image="/assets/game-logo/apex.jpg" />
                <TourCard title="Turnamen RT" href="/host/1" image="/assets/game-logo/apex.jpg" />
                <TourCard title="Turnamen RW" href="/host/1" image="/assets/game-logo/apex.jpg" />
                <TourCard title="Turnamen Kecamatan" href="/host/1" image="/assets/game-logo/apex.jpg" />
            </Container>
            <Dialog maxWidth="xs" fullWidth open={newTournamentDialog} onClose={handleCloseNewTournamentDialog}>
                <form onSubmit={handleNewTournament}>
                    <DialogContent>
                        <DialogContentText>How people call your tournament?</DialogContentText>
                        <TextField
                            label="Title"
                            fullWidth
                            autoComplete="off"
                            helperText={errors.title?.message || ' '}
                            error={!!errors.title}
                            {...register('title', {
                                required: { value: true, message: 'Title cannot be empty' },
                                minLength: { value: 5, message: 'Title must be at least 5 characters' }
                            })}
                        />
                    </DialogContent>
                    <DialogActions>
                        <Button color="primary" size="small" onClick={handleCloseNewTournamentDialog}>
                            Cancel
                        </Button>
                        <Button type="submit" disabled={!!errors.title} color="primary" size="small">
                            Next
                        </Button>
                    </DialogActions>
                </form>
            </Dialog>
        </div>
    );
}

Host.XLayout = HostLayout;

export default Host;
