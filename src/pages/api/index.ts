import type { NextApiRequest, NextApiResponse } from 'next';

function Index(_req: NextApiRequest, res: NextApiResponse) {
    res.status(200).json({ success: true, data: 'Assalamualikum Wr. Wb' });
}

export default Index;
