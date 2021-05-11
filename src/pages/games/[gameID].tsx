import React, { useState } from 'react';
import Image from 'next/image';
import axios from 'axios';
import { GetStaticPaths, GetStaticProps } from 'next';
import App from '~components/layouts/App';
import games from '~libs/dummy/games';
import useStyles from '~styles/game-detail-style';
import { Button, Container, Typography } from '@material-ui/core';
import abbreviateNumber from '~libs/abbreviate-number';
import truncateWords from '~libs/truncate-words';
import ListTournaments from '~components/views/ListTournaments';

interface Game {
    id: number;
    image: string;
    title: string;
    description: string;
    numberOfParticipants: number;
    genres: Array<string>;
}

interface GameDetailProps {
    game: Game;
}

function GameDetail({ game }: GameDetailProps) {
    const classes = useStyles();
    const [truncate, setTruncate] = useState(false);

    const description = truncate ? truncateWords(game.description, 200) : game.description;

    const handleTruncate = () => {
        setTruncate(!truncate);
    };

    return (
        <div>
            <div className={classes.header}>
                <Container maxWidth="lg" className={classes.headerContainer}>
                    <Typography variant="h1">{game.title}</Typography>
                    <div className={classes.partiGenre}>
                        <Typography variant="h3">{abbreviateNumber(game.numberOfParticipants)} Participants</Typography>
                        <span>
                            {game.genres.map((genre, key) => (
                                <Button disableElevation key={key} size="small" variant="contained" color="inherit">
                                    {genre}
                                </Button>
                            ))}
                        </span>
                    </div>
                    <span className={classes.description}>
                        <Typography variant="body2" color="textSecondary">
                            {description}
                        </Typography>
                        <Typography color="secondary" variant="body2" onClick={handleTruncate}>
                            {truncate ? 'More' : 'Less'}
                        </Typography>
                    </span>
                </Container>
                <Container maxWidth="lg">
                    <Typography variant="h3">Recomended Tournaments</Typography>
                    <ListTournaments />
                </Container>
            </div>
        </div>
    );
}

GameDetail.XLayout = App;

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
