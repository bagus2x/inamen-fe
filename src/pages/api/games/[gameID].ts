import type { NextApiRequest, NextApiResponse } from 'next';
import games from '~libs/dummy/games';

export default function Game(req: NextApiRequest, res: NextApiResponse) {
    res.status(200).json({
        success: true,
        data: games.filter((game) => game.id === parseInt(req.query.gameID as string))
    });
}
