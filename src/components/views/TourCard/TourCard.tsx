import Image from 'next/image';
import Fade from '@material-ui/core/Fade';
import Link from '~components/common/Link';
import useStyles from '~components/views/TourCard/styles';

interface TourCardProps {
    image: string;
    title: string;
    href: string;
    delay?: string;
}

const TourCard = ({ image, title, href, delay }: TourCardProps) => {
    const classes = useStyles();

    return (
        <Fade in={true} style={{ transitionDelay: delay }}>
            <div className={classes.tourCard}>
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
            </div>
        </Fade>
    );
};

export default TourCard;
