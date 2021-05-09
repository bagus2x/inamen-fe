import Image from 'next/image';
import FlagIcon from '@material-ui/icons/Flag';
import Typography from '@material-ui/core/Typography';
import Fade from '@material-ui/core/Fade';
import Link from '~components/common/Link';
import useStyles from '~components/views/GameCard/styles';
import abbreviateNumber from '~libs/abbreviate-number';

interface GameCardProps {
    image: string;
    title: string;
    participantsNumber: number;
    delay?: string;
}

const GameCard = ({ image, title, participantsNumber, delay }: GameCardProps) => {
    const classes = useStyles();

    return (
        <Fade in={true} style={{ transitionDelay: delay }}>
            <div className={classes.gameCard}>
                <Link href="#" className={classes.imageLink} passHref>
                    <Image
                        className={classes.image}
                        layout="responsive"
                        objectFit="fill"
                        width="100%"
                        height="auto"
                        src={image}
                    />
                </Link>
                <Link href="#" className={classes.title}>
                    {title}
                </Link>
                <div className={classes.participantsNumber}>
                    <FlagIcon fontSize="small" />
                    <Typography variant="caption">{abbreviateNumber(participantsNumber)} participants</Typography>
                </div>
            </div>
        </Fade>
    );
};

export default GameCard;
