import axios from 'axios';
import { GetStaticPaths, GetStaticProps } from 'next';
import React from 'react';
import App from '~components/layouts/App';
import { FE_HOST } from '~libs/global-var';

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
    const res = await axios.get(`${FE_HOST}/api/games/${req.params?.gameID}`);
    return {
        props: { game: res.data.data },
        revalidate: 60 * 60
    };
};

export const getStaticPaths: GetStaticPaths = async () => {
    const res = await axios.get(`${FE_HOST}/api/games`);
    const paths = res.data.data.map((game: any) => ({ params: { gameID: game.id.toString() } }));
    return {
        paths,
        fallback: false
    };
};

export default GameDetail;
