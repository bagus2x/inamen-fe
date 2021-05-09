import type { NextApiRequest, NextApiResponse } from 'next';
import games from '~libs/dummy/games';

export default (req: NextApiRequest, res: NextApiResponse) => {
    res.status(200).json({ success: true, data: games });
};
