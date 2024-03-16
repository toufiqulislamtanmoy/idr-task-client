import Image from "next/image";
import { CiHome } from "react-icons/ci";
import { FaHandHoldingHeart, FaRegComments } from "react-icons/fa";
import { PiCirclesFour } from "react-icons/pi";
import { IoBulbOutline } from "react-icons/io5";
import { CiBookmark } from "react-icons/ci";
import { RiMedicineBottleLine } from "react-icons/ri";
import { HiOutlineBookOpen } from "react-icons/hi2";
import dua from '@/assets/images/dua.png'
import Link from "next/link";
const Sidebar = () => {
    return (
        <div className='h-[95vh] bg-white rounded-3xl flex flex-col items-center justify-between py-10'>
            <div>
                <Link href={"/"}>
                    <Image src={dua} alt="dua" className="w-[73px] h-[73]" />
                </Link>
            </div>
            <div className="flex flex-col gap-5">
                <Link className="text-2xl inline-block rounded-full bg-[#E8F0F5] text-[#868686] p-3" href={"/"}><CiHome /></Link>
                <Link className="text-2xl inline-block rounded-full bg-[#E8F0F5] text-[#868686] p-3" href={"/"}><PiCirclesFour /></Link>
                <Link className="text-2xl inline-block rounded-full bg-[#E8F0F5] text-[#868686] p-3" href={"/"}><IoBulbOutline /></Link>
                <Link className="text-2xl inline-block rounded-full bg-[#E8F0F5] text-[#868686] p-3" href={"/"}><CiBookmark /></Link>
                <Link className="text-2xl inline-block rounded-full bg-[#E8F0F5] text-[#868686] p-3" href={"/"}><RiMedicineBottleLine /></Link>
                <Link className="text-2xl inline-block rounded-full bg-[#E8F0F5] text-[#868686] p-3" href={"/"}><FaRegComments /></Link>
                <Link className="text-2xl inline-block rounded-full bg-[#E8F0F5] text-[#868686] p-3" href={"/"}><HiOutlineBookOpen /></Link>
            </div>
            <div>
                <Link className="bg-[#1FA45B] px-[28px] py-[28px] rounded-xl text-white text-xl inline-block" href={"/"}>
                    <FaHandHoldingHeart />
                </Link>
            </div>
        </div>
    );
};

export default Sidebar;