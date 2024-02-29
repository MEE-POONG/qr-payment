import Layout from "@/components/layout";
import Link from "next/link";

export default function LoginForm() {
    return (
        <Layout>
            <div className="flex justify-center md:items-center md:p-24">
                {/* <h2 className="text-center font-black text-2xl">ระบบตรวจสอบการโอนเงิน</h2> */}
                <div className="bg-white p-7 max-w-md mx-auto rounded-md relative mt-20  shadow-md " >
                    <div className="bg-black rounded-full overflow-hidden w-20 h-20 absolute -top-10 shadow-md ">
                        <img className="w-full h-full absolute" src="w-12 h-12" alt="" />
                    </div>
                    <div className="mt-10">
                        <p>Username:</p>
                        <input type="text" className="text-base p-1.5 w-full focus:ring-0 border-b" />
                        <p className="mt-5">Password:</p>
                        <input type="text" className="text-base p-1.5 w-full focus:ring-0 border-b" />
                        <button type="submit" className="bg-purple-400 hover:bg-purple-500 w-full rounded-2xl mt-9 p-1 drop-shadow-lg">
                            <Link href='./Dashboard' className="font-bold text-purple-100">Login</Link>
                        </button>
                    </div>
                </div>
            </div>
        </Layout>
    )
}