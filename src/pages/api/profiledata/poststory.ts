import { PrismaClient } from "@prisma/client";
import type { NextApiRequest, NextApiResponse } from 'next';

const prisma = new PrismaClient();

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    const { method } = req;

    switch (method) {
        case 'POST':
            try {
                // Assuming req.body is structured correctly for nested creation
                const { name, caption, facebook, instagram, galleryTemplate, checkPrice, imageDatas, payment } = req.body;

                const profile = await prisma.profileData.create({
                    data: {
                        name,
                        caption,
                        facebook,
                        instagram,
                        galleryTemplate,
                        checkPrice,
                        ImageData: {
                            create: imageDatas,
                        },
                        Payment: {
                            create: payment,
                        },
                    },
                });

                res.status(201).json(profile);
            } catch (error) {
                console.error("Failed to create profile with nested data:", error);
                res.status(500).json({ error: "An error occurred while creating the profile with nested data" });
            }
            break;
        default:
            res.setHeader('Allow', ['GET', 'POST']);
            res.status(405).end(`Method ${method} Not Allowed`);
    }
}
