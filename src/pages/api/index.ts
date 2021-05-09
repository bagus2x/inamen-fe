import type { NextApiRequest, NextApiResponse } from 'next';

function Index(req: NextApiRequest, res: NextApiResponse) {
    res.status(200).json({ success: true, data: 'hello world' });
}

export default Index;
