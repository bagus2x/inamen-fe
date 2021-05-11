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
    numberOfParticipants: number;
    href: string;
    delay?: string;
}

const GameCard = ({ image, title, numberOfParticipants, href, delay }: GameCardProps) => {
    const classes = useStyles();

    return (
        <Fade in={true} style={{ transitionDelay: delay }}>
            <div className={classes.gameCard}>
                <Link href={href} className={classes.imageLink} passHref>
                    <Image
                        className={classes.image}
                        layout="responsive"
                        objectFit="fill"
                        width="100%"
                        height="auto"
                        src={image}
                    />
                </Link>
                <Link href={href} className={classes.title}>
                    {title}
                </Link>
                <div className={classes.numberOfParticipants}>
                    <FlagIcon fontSize="small" />
                    <Typography variant="caption">{abbreviateNumber(numberOfParticipants)} participants</Typography>
                </div>
            </div>
        </Fade>
    );
};

export default GameCard;
