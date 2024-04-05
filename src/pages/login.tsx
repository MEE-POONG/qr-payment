import { useRouter } from 'next/router';
import LayoutAdmin from "@/components/LayoutAdmin";
import Link from "next/link";
import { useState } from "react";

export default function LoginForm() {
    const router = useRouter();

    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = async () => {
        try {

            const requestBody = {
                username: username,
                password: password,
            };

            const response = await fetch('/api/admin/checklogin', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(requestBody),
            });

            if (response.ok) {
                // Redirect to the dashboard or do something on successful login
                router.push('/dashboard');
            } else {
                // Handle login failure (e.g., show an error message)
                alert('Failed to log in. Please check your credentials.');
            }
        } catch (error) {
            console.error('Error during form submission or image upload:', error);
            // Attempt to delete uploaded images
            // Handle failure (e.g., show an error message)
        }
    };
    return (
        <LayoutAdmin>
            <div className="flex justify-center md:items-center md:p-24">
                <div className="bg-white p-7 max-w-md mx-auto rounded-md relative mt-20  shadow-md " >
                    <div className="bg-white rounded-md overflow-hidden w-20 h-20 absolute -top-10 shadow-md ">
                        <img className="w-full h-full absolute" src="https://imagedelivery.net/QZ6TuL-3r02W7wQjQrv5DA/0fb05fae-8f4f-4edd-6c20-c188867ec900/700" alt="" />
                    </div>
                    <div className="mt-10">
                        <p>Username:</p>
                        <input
                            type="text"
                            value={username}
                            onChange={(e) => setUsername(e.target.value)}
                            className="text-base p-1.5 w-full focus:ring-0 border-b"
                        />                        <p className="mt-5">Password:</p>
                        <input
                            type="password" // Change type to password
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            className="text-base p-1.5 w-full focus:ring-0 border-b"
                        />
                        <button
                            type="submit"
                            onClick={handleSubmit} // Add this line
                            className="bg-purple-400 hover:bg-purple-500 w-full rounded-2xl mt-9 p-1 drop-shadow-lg"
                        >
                            Login
                        </button>
                    </div>
                </div>
            </div>
        </LayoutAdmin>
    )
}