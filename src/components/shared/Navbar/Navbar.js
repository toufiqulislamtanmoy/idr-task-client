

import Image from "next/image";
import user from "@/assets/images/user.png"
import { IoMdSearch } from "react-icons/io";
const Navbar = () => {
    return (
        <div className="flex justify-between items-center ">
            <div className="w-3/5 ">
                <h1 className="text-xl font-semibold">Dua Page</h1>
            </div>
            <div className="flex gap-3 justify-between items-center p-5 w-2/5">
                <div className="">
                    <div className="relative">
                        <input className="bg-white rounded-md focus:outline-none px-5 py-3" type="text" placeholder="Search By Dua Name" />
                        <button className="text-3xl absolute bg-[#F3F4F6] right-1 top-1 p-1 rounded-lg"><IoMdSearch /></button>
                    </div>


                </div>
                <div>
                    <div className="flex items-center justify-center gap-2">
                        <Image src={user} alt="User" height={50} width={50} />

                    </div>
                </div>
            </div>
        </div >
    );
};

export default Navbar;