import { PrismaClient } from "@prisma/client";
import type { NextApiRequest, NextApiResponse } from 'next';

const prisma = new PrismaClient();

// Define an interface for the image object structure
interface Image {
    number: number;
    src: string;
}

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    const { method } = req;

    switch (method) {
        case 'GET':
            try {
                // Fetch all profiles including their related ImageData and Payment records
                const profiles = await prisma.profileData.findMany({
                    include: {
                        ImageData: true, // Include all related ImageData records
                        Payment: true, // Include all related Payment records
                    },
                    where: {
                        Payment: {
                            some: {
                                status: 'Completed'
                            }
                        }
                    },
                });

                if (!profiles) {
                    return res.status(404).json({ error: "Profiles not found" });
                }

                res.status(200).json(profiles);
            } catch (error) {
                console.error("Failed to retrieve profiles:", error);
                res.status(500).json({ error: "An error occurred while fetching the profiles" });
            }
            break;
        default:
            res.setHeader('Allow', ['GET', 'POST']);
            res.status(405).end(`Method ${method} Not Allowed`);
    }
}
