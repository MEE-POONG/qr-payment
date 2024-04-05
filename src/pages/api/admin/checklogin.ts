// pages/api/admin/checklogin.ts

import { PrismaClient } from "@prisma/client";
import type { NextApiRequest, NextApiResponse } from 'next';
import bcrypt from 'bcryptjs';

const prisma = new PrismaClient();

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    const { method } = req;

    switch (method) {
        case 'POST':
            const { username, password } = req.body;

            try {
                const admin = await prisma.admin.findUnique({
                    where: {
                        username,
                    },
                });

                if (!admin) {
                    return res.status(404).json({ message: 'User not found' });
                }
                if (admin.password === password) {
                    return res.status(200).json({ message: 'Login successful' });
                } else {
                    return res.status(400).json({ message: 'Invalid credentials' });
                }
            } catch (error) {
                return res.status(500).json({ message: 'Server error', error });
            }
        default:
            return res.status(405).end(`Method ${method} Not Allowed`);
    }
}
