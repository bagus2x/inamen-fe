import { useState } from 'react';
import NextLink from 'next/link';
import { useRouter } from 'next/router';
import { useForm } from 'react-hook-form';
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';
import Stepper from '@material-ui/core/Stepper';
import Step from '@material-ui/core/Step';
import StepLabel from '@material-ui/core/StepLabel';
import StepContent from '@material-ui/core/StepContent';
import Button from '@material-ui/core/Button';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import { MuiPickersUtilsProvider, KeyboardDateTimePicker } from '@material-ui/pickers';
import MomentUtils from '@date-io/moment';
import moment from 'moment';
import FormControl from '@material-ui/core/FormControl';
import InsertPhotoIcon from '@material-ui/icons/InsertPhotoRounded';
import Select from '@material-ui/core/Select';
import clsx from 'clsx';
import HostLayout from '~components/layouts/Host';
import useStyles from '~styles/create-tournament-style';
import TextField from '@material-ui/core/TextField';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormHelperText from '@material-ui/core/FormHelperText';
import FormLabel from '@material-ui/core/FormLabel';
import BookIcon from '@material-ui/icons/Book';

interface TournamentFormField {
    banner: string;
    title: string;
    description: string;
    game: string;
    mode: string;
    numberOfParticipants: number;
    platforms: Array<string>;
    tournamentDates: TournamentDates;
}

interface TournamentDates {
    registrationStartDate: number;
    registrationLastDate: number;
    tournamentStartDate: number;
    tournamentLastDate: number;
}

function Create() {
    const classes = useStyles();
    const {
        handleSubmit,
        register,
        formState: { errors }
    } = useForm<TournamentFormField>();
    const [activeStep, setActiveStep] = useState(0);
    const router = useRouter();
    const [selectedDate, handleDateChange] = useState(new Date('2018-01-01T00:00:00.000Z'));

    const handleNext = () => {
        setActiveStep((prevActiveStep) => prevActiveStep + 1);
    };

    const handleBack = () => {
        setActiveStep((prevActiveStep) => prevActiveStep - 1);
    };

    const handleCreateTournament = handleSubmit((data) => {});

    return (
        <div className={classes.create}>
            <Container className={classes.header}>
                <Typography variant="h1">Create a tournament</Typography>
                <NextLink href="/host/documentation">
                    <Button color="secondary" component="a" endIcon={<BookIcon />}>
                        Doc
                    </Button>
                </NextLink>
            </Container>
            <Container component="form" onSubmit={handleCreateTournament} className={classes.form}>
                <Stepper activeStep={activeStep} orientation="vertical" className={classes.stepper}>
                    <Step>
                        <StepLabel>Profile</StepLabel>
                        <StepContent>
                            <div className={classes.stepContent}>
                                <TextField
                                    size="small"
                                    fullWidth
                                    label="Host"
                                    value="Bagus"
                                    disabled
                                    InputLabelProps={{ shrink: true }}
                                />
                                <TextField size="small" fullWidth label="Title" InputLabelProps={{ shrink: true }} />
                                <TextField
                                    size="small"
                                    fullWidth
                                    multiline
                                    label="Description"
                                    InputLabelProps={{ shrink: true }}
                                />
                                <TextField
                                    label="Banner"
                                    disabled
                                    placeholder="Custom banner is coming soon"
                                    InputProps={{ startAdornment: <InsertPhotoIcon color="primary" /> }}
                                />
                            </div>
                            <div className={classes.btnAction}>
                                <Button disableElevation size="small" disabled={activeStep === 0} onClick={handleBack}>
                                    Back
                                </Button>
                                <Button
                                    disableElevation
                                    size="small"
                                    variant="contained"
                                    color="primary"
                                    onClick={handleNext}
                                >
                                    Next
                                </Button>
                            </div>
                        </StepContent>
                    </Step>
                    <Step>
                        <StepLabel>Event Dates</StepLabel>
                        <StepContent>
                            <div className={clsx(classes.stepContent, classes.datePickerWrapper)}>
                                <MuiPickersUtilsProvider libInstance={moment} utils={MomentUtils}>
                                    <KeyboardDateTimePicker
                                        variant="inline"
                                        ampm={false}
                                        label="Registration Start Date"
                                        value={selectedDate}
                                        onChange={() => {}}
                                        onError={console.log}
                                        disablePast
                                        format="yyyy/MM/dd HH:mm"
                                    />
                                    <KeyboardDateTimePicker
                                        variant="inline"
                                        ampm={false}
                                        label="Registration Last Date"
                                        value={selectedDate}
                                        onChange={() => {}}
                                        onError={console.log}
                                        disablePast
                                        format="yyyy/MM/dd HH:mm"
                                    />
                                    <KeyboardDateTimePicker
                                        variant="inline"
                                        ampm={false}
                                        label="Tournament Start Date"
                                        value={selectedDate}
                                        onChange={() => {}}
                                        onError={console.log}
                                        disablePast
                                        format="yyyy/MM/dd HH:mm"
                                    />
                                    <KeyboardDateTimePicker
                                        variant="inline"
                                        ampm={false}
                                        label="Tournament Last Date"
                                        value={selectedDate}
                                        onChange={() => {}}
                                        onError={console.log}
                                        disablePast
                                        format="yyyy/MM/dd HH:mm"
                                    />
                                </MuiPickersUtilsProvider>
                            </div>
                            <div className={classes.btnAction}>
                                <Button disableElevation size="small" onClick={handleBack}>
                                    Back
                                </Button>
                                <Button
                                    disableElevation
                                    size="small"
                                    variant="contained"
                                    color="primary"
                                    onClick={handleNext}
                                >
                                    Next
                                </Button>
                            </div>
                        </StepContent>
                    </Step>
                    <Step>
                        <StepLabel>Settings</StepLabel>
                        <StepContent>
                            <div className={classes.stepContent}>
                                <FormControl>
                                    <InputLabel shrink id="game-option">
                                        Game
                                    </InputLabel>
                                    <Select labelId="game-option">
                                        <MenuItem value={10}>Apex</MenuItem>
                                        <MenuItem value={20}>COD</MenuItem>
                                        <MenuItem value={30}>Hago</MenuItem>
                                    </Select>
                                </FormControl>
                                <FormControl>
                                    <InputLabel shrink id="game-option">
                                        Platform
                                    </InputLabel>
                                    <Select labelId="game-option">
                                        <MenuItem value={10}>Apex</MenuItem>
                                        <MenuItem value={20}>COD</MenuItem>
                                        <MenuItem value={30}>Hago</MenuItem>
                                    </Select>
                                </FormControl>
                                <TextField
                                    size="small"
                                    fullWidth
                                    label="Number of participants"
                                    type="number"
                                    InputLabelProps={{ shrink: true }}
                                />
                                <FormControl component="fieldset">
                                    <FormLabel className={classes.radioInput} component="span">
                                        Presence
                                    </FormLabel>
                                    <RadioGroup aria-label="quiz" name="quiz">
                                        <FormControlLabel value="Online" control={<Radio />} label="Online" />
                                        <FormControlLabel value="Offline" control={<Radio />} label="Offline" />
                                    </RadioGroup>
                                    <FormHelperText> Hehe </FormHelperText>
                                </FormControl>
                            </div>
                            <div className={classes.btnAction}>
                                <Button disableElevation size="small" onClick={handleBack}>
                                    Back
                                </Button>
                                <Button
                                    disableElevation
                                    size="small"
                                    variant="contained"
                                    color="secondary"
                                    onClick={handleCreateTournament}
                                >
                                    Save
                                </Button>
                            </div>
                        </StepContent>
                    </Step>
                </Stepper>
            </Container>
        </div>
    );
}

Create.XLayout = HostLayout;

export default Create;
