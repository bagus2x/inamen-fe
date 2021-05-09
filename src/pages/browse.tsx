import { useState } from 'react';
import { GetStaticProps } from 'next';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import Button from '@material-ui/core/Button';
import App from '~components/layouts/App';
import useStyles from '~pages/browse-style';
import GameCard from '~components/views/GameCard';

interface Game {
    image: string;
    title: string;
    participantsNumber: number;
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
                                    image={game.image}
                                    title={game.title}
                                    key={key}
                                    participantsNumber={game.participantsNumber}
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
                                    image={game.image}
                                    title={game.title}
                                    key={key}
                                    participantsNumber={game.participantsNumber}
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
    const games = [
        {
            image: '/assets/game-cover/apex.jpg',
            title: 'Apex Legends',
            participantsNumber: 201122,
            genres: ['BATTLE ROYALE', 'FPS']
        },
        {
            image: '/assets/game-cover/pubgm.jpg',
            title: 'PUBGM',
            participantsNumber: 192983,
            genres: ['BATTLE ROYALE']
        },
        {
            image: '/assets/game-cover/fortnite.jpg',
            title: 'Fortnite',
            participantsNumber: 283722,
            genres: ['BATTLE ROYALE']
        },
        {
            image: '/assets/game-cover/dota2.jpg',
            title: 'Dota 2',
            participantsNumber: 3212121,
            genres: ['MOBA']
        },
        {
            image: '/assets/game-cover/hago.jpg',
            title: 'Hago',
            participantsNumber: 121212,
            genres: ['SPORT']
        },
        {
            image: '/assets/game-cover/fifa21.jpg',
            title: 'FIFA 21',
            participantsNumber: 1212,
            genres: ['SPORT']
        },
        {
            image: '/assets/game-cover/lol.jpg',
            title: 'League of Legends',
            participantsNumber: 919219,
            genres: ['MOBA']
        }
    ];
    return {
        props: { games },
        revalidate: 60 * 60
    };
};

Browse.XLayout = App;

export default Browse;
