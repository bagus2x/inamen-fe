import { useState } from 'react';
import { GetStaticProps } from 'next';
import axios from 'axios';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import Button from '@material-ui/core/Button';
import App from '~components/layouts/App';
import useStyles from 'src/styles/browse-style';
import GameCard from '~components/views/GameCard';
import games from '~libs/dummy/games';

interface Game {
    id: number;
    image: string;
    title: string;
    numberOfParticipants: number;
    genres: Array<string>;
}

interface BrowseProps {
    games: Array<Game>;
}

function Browse({ games }: BrowseProps) {
    const classes = useStyles();
    const [filteredGames, setFilteredGames] = useState(games);

    const handleFilterGames = (genre: string) => () => {
        setFilteredGames(games.filter((game) => game.genres.includes(genre)));
    };

    const handleDisplayAllGames = () => {
        setFilteredGames(games);
    };

    return (
        <div>
            <Container maxWidth="lg" className={classes.container}>
                {filteredGames.length === games.length ? (
                    <>
                        <Typography variant="h1">Genres</Typography>
                        <div className={classes.genresWrapper}>
                            <Button
                                variant="contained"
                                color="secondary"
                                disableElevation
                                size="small"
                                onClick={handleFilterGames('BATTLE ROYALE')}
                            >
                                BATTLE ROYALE
                            </Button>
                            <Button
                                variant="contained"
                                color="secondary"
                                disableElevation
                                size="small"
                                onClick={handleFilterGames('FPS')}
                            >
                                FPS
                            </Button>
                            <Button
                                variant="contained"
                                color="secondary"
                                disableElevation
                                size="small"
                                onClick={handleFilterGames('MOBA')}
                            >
                                MOBA
                            </Button>
                            <Button
                                variant="contained"
                                color="secondary"
                                disableElevation
                                size="small"
                                onClick={handleFilterGames('SPORT')}
                            >
                                SPORT
                            </Button>
                        </div>
                        <Typography variant="h1">Games</Typography>
                        <div className={classes.gameCardWrapper}>
                            {games.map((game, key) => (
                                <GameCard
                                    delay={`${key * 50}ms`}
                                    image={game.image}
                                    title={game.title}
                                    key={key}
                                    numberOfParticipants={game.numberOfParticipants}
                                    href={`/games/${game.id}`}
                                />
                            ))}
                        </div>
                    </>
                ) : (
                    <>
                        <span>
                            <Button variant="outlined" size="small" color="primary" onClick={handleDisplayAllGames}>
                                Show all games
                            </Button>
                        </span>
                        <div className={classes.gameCardWrapper}>
                            {filteredGames.map((game, key) => (
                                <GameCard
                                    delay={`${key * 50}ms`}
                                    image={game.image}
                                    title={game.title}
                                    key={key}
                                    numberOfParticipants={game.numberOfParticipants}
                                    href={`/games/${game.id}`}
                                />
                            ))}
                        </div>
                    </>
                )}
            </Container>
        </div>
    );
}

export const getStaticProps: GetStaticProps = async () => {
    return {
        props: { games },
        revalidate: 60 * 60
    };
};

Browse.XLayout = App;

export default Browse;
