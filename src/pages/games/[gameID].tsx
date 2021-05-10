import axios from 'axios';
import { GetStaticPaths, GetStaticProps } from 'next';
import React from 'react';
import App from '~components/layouts/App';
import games from '~libs/dummy/games';

interface Game {
    id: number;
    image: string;
    title: string;
    participantsNumber: number;
    genres: Array<string>;
}

interface GameDetailProps {
    game: Game;
}

function GameDetail({ game }: GameDetailProps) {
    return (
        <div>
            <div>{JSON.stringify(game)}</div>
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
