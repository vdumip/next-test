// src/pages/api/test.ts
import { NextApiRequest, NextApiResponse } from 'next';

export default function handler(req: NextApiRequest, res: NextApiResponse) {
    if (req.method === 'GET') {
        const { param1, param2 } = req.query;
        res.status(200).json({ message: 'Test GET request successful', param1, param2 });
    } else {
        res.status(405).json({ message: 'Method not allowed' });
    }
}