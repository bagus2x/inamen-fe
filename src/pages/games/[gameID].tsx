import React, { useEffect, useState } from 'react';
import { GetStaticPaths, GetStaticProps } from 'next';
import AppLayout from '~components/layouts/App';
import games from '~libs/dummy/games';
import useStyles from '~styles/game-detail-style';
import Button from '@material-ui/core/Button';
import Container from '@material-ui/core/Container';
import { Theme } from '@material-ui/core/styles';
import FavoriteIcon from '@material-ui/icons/FavoriteBorder';
import Box from '@material-ui/core/Box';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import FlagIcon from '@material-ui/icons/Flag';
import Typography from '@material-ui/core/Typography';
import Hidden from '@material-ui/core/Hidden';
import abbreviateNumber from '~libs/abbreviate-number';
import truncateWords from '~libs/truncate-words';
import ListTournaments from '~components/views/ListTournaments';
import Tag from '~components/common/Tag';

interface Game {
    id: number;
    image: string;
    background: string;
    title: string;
    description: string;
    numberOfParticipants: number;
    genres: Array<string>;
}

interface GameDetailProps {
    game: Game;
}

function GameDetail({ game }: GameDetailProps) {
    const classes = useStyles({ background: game.background });
    const [truncate, setTruncate] = useState(false);
    const isSmallDown = useMediaQuery((theme: Theme) => theme.breakpoints.down('sm'));

    const description = truncate ? truncateWords(game.description, 200) : game.description;

    useEffect(() => {
        if (isSmallDown) setTruncate(true);
        else setTruncate(false);
    }, [isSmallDown]);

    const handleTruncate = () => {
        setTruncate(!truncate);
    };

    return (
        <div>
            <div className={classes.banner}>
                <div className={classes.bannerBackground} />
                <Container maxWidth="lg" className={classes.bannerContainer}>
                    <Typography variant="h1">{game.title}</Typography>
                    <div className={classes.partiGenre}>
                        <span>
                            <FlagIcon color="primary" fontSize="small" />
                            <Typography variant="caption">
                                {abbreviateNumber(game.numberOfParticipants)} Participants
                            </Typography>
                        </span>
                        <span>
                            {game.genres.map((genre, key) => (
                                <Tag disableElevation key={key} size="small" variant="outlined" color="primary">
                                    {genre}
                                </Tag>
                            ))}
                        </span>
                    </div>
                    <span className={classes.description}>
                        <Typography variant="body2" color="textSecondary">
                            {description}
                        </Typography>
                        <Hidden mdUp>
                            <Typography
                                color="secondary"
                                variant="body2"
                                onClick={handleTruncate}
                                className={classes.btnTruncate}
                            >
                                {truncate ? 'More' : 'Less'}
                            </Typography>
                        </Hidden>
                    </span>
                    <Box mt={2}>
                        <Button
                            startIcon={<FavoriteIcon />}
                            variant="contained"
                            size="small"
                            color="secondary"
                            disableElevation
                        >
                            Follow
                        </Button>
                    </Box>
                </Container>
            </div>
            <Container maxWidth="lg">
                <Typography variant="h3">Recomended Tournaments</Typography>
                <ListTournaments />
            </Container>
        </div>
    );
}

GameDetail.XLayout = AppLayout;

export const getStaticProps: GetStaticProps = async (req) => {
    const game = games.find((game) => game.id === parseInt(req.params?.gameID as string));
    return {
        props: { game: game },
        revalidate: 60 * 60
    };
};

export const getStaticPaths: GetStaticPaths = async () => {
    const paths = games.map((game: any) => ({ params: { gameID: game.id.toString() } }));
    return {
        paths,
        fallback: false
    };
};

export default GameDetail;
