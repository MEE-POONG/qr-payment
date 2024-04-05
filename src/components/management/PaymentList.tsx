import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";
import axios from "axios";

interface ImageData {
    id: string;
    number: string;
    src: string;
    createdAt: string;
    updatedAt: string;
    postProfileID: string;
}

interface Payment {
    id: string;
    amount: number;
    status: string;
    createdAt: string;
    updatedAt: string;
    postProfileID: string;
}

interface Profile {
    id: string;
    name: string;
    caption: string;
    facebook: string;
    instagram: string;
    line: string;
    galleryTemplate: number;
    createdAt: string;
    updatedAt: string;
    deletedAt: null | string;
    deletedBy: null | string;
    ImageData: ImageData[];
    Payment: Payment[];
}

const PaymentList: React.FC = () => {
    const router = useRouter();
    const [profiles, setProfiles] = useState<Profile[]>([]);

    useEffect(() => {
        async function fetchProfiles() {
            try {
                const response = await axios.get("/api/profiledata/poststory");
                setProfiles(response.data);
            } catch (error) {
                console.error("Error fetching profiles:", error);
            }
        }

        fetchProfiles();
    }, []);

    const deleteProfile = async (id: string) => {
        try {
            await axios.delete(`/api/profiledata/poststory/${id}`);
            router.replace(`/dashboard`);
        } catch (error) {
            console.error("Error deleting profile:", error);
        }
    };

    return (
        <div className="overflow-x-auto">
            <table className="w-full my-0 bg-white rounded-lg overflow-hidden">
                <thead>
                    <tr className="bg-purple-500 text-gray-50">
                        <th className="py-3 px-4 text-left">No.</th>
                        <th className="py-3 px-4 text-left">Caption</th>
                        <th className="py-3 px-4 text-left">Name</th>
                        <th className="py-3 px-4 text-left">Facebook</th>
                        <th className="py-3 px-4 text-left">Instagram</th>
                        <th className="py-3 px-4 text-left">Line</th>
                        <th className="py-3 px-4 text-left">Status</th>
                        <th className="py-3 px-4 text-left">Manager</th>
                    </tr>
                </thead>
                <tbody>
                    {profiles.map((profile, index) => (
                        <tr key={profile.id} className="border-b border-blue-gray-200 hover:bg-purple-50">
                            <td className="py-3 px-4">{index + 1}</td>
                            <td className="py-3 px-4">{profile.caption}</td>
                            <td className="py-3 px-4">{profile.name}</td>
                            <td className="py-3 px-4">{profile.facebook}</td>
                            <td className="py-3 px-4">{profile.instagram}</td>
                            <td className="py-3 px-4">{profile.line}</td>
                            <td className="py-3 px-4 text-green-500">
                                {profile?.Payment[0]?.status}
                            </td>
                            <td className="py-3 px-4">
                                <a
                                    href={`/dashboard/${profile.id}`}
                                    className="mr-2 bg-yellow-500 hover:bg-yellow-700 text-white font-bold py-2 px-4 rounded"
                                // onClick={() => deleteProfile(profile.id)}
                                >
                                    ดูข้อมูลตัวอย่าง
                                </a>
                                <button
                                    className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded"
                                    onClick={() => deleteProfile(profile.id)}
                                >
                                    ลบข้อมูล
                                </button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default PaymentList;
