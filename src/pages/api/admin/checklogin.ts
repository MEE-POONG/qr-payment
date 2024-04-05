// pages/api/admin/index.ts

import { PrismaClient } from "@prisma/client";
import type { NextApiRequest, NextApiResponse } from 'next';
import bcrypt from 'bcryptjs';

const prisma = new PrismaClient();

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    const { method } = req;

    switch (method) {
        // Existing cases: GET and POST

        case 'POST':
            // Add a condition to differentiate between creating an admin and logging in
            if (req.body.type === 'login') {
                // Login logic
                try {
                    const { username, password } = req.body;

                    const admin = await prisma.admin.findUnique({
                        where: {
                            username,
                        },
                    });

                    if (!admin) {
                        return res.status(404).json({ message: "User not found" });
                    }

                    const isMatch = bcrypt.compareSync(password, admin.password);
                    if (isMatch) {
                        // Successfully authenticated
                        // For security reasons, don't send back the password
                        const { password, ...adminWithoutPassword } = admin;
                        return res.status(200).json(adminWithoutPassword);
                    } else {
                        return res.status(401).json({ message: "Invalid credentials" });
                    }
                } catch (error) {
                    return res.status(500).json({ error: "An error occurred during the login process" });
                }
            } else {
                // Existing code for creating an admin
            }
            break;

        // Handle other methods like GET, PUT, DELETE as before
    }
}
