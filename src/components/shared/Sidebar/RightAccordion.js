"use client"
import Link from "next/link";
import { useState } from "react";
import { IoLanguageOutline } from "react-icons/io5";
import { BsCollection } from "react-icons/bs";
import { PiCirclesFour } from "react-icons/pi";
import { LiaToggleOffSolid } from "react-icons/lia";
export const RightAccordion = () => {
    const [isOpen, setIsOpen] = useState(null);
    const accordionsData = [
        { title: "Language Settings", coloredText: "other properties", icon: <IoLanguageOutline /> },
        { title: "General Settings", coloredText: "other properties", icon: <PiCirclesFour /> },
        { title: "Font Settings", coloredText: "other properties", icon: <BsCollection /> },
        { title: "Appearance Settings", coloredText: "other properties", icon: <PiCirclesFour /> },
    ];
    const handleToggle = (idx) => setIsOpen((prevIdx) => (prevIdx === idx ? null : idx));

    return (
        <div className="rounded-lg mt-10  mx-3">
            {/* Wrap all accordion elements within a single parent div */}
            {accordionsData.map((data, idx) => (
                <div key={idx} className="bg-[#F7F8FA] mt-5 rounded-lg">
                    {/* Accordion title part */}
                    <div
                        onClick={() => handleToggle(idx)}
                        className={`${idx === accordionsData.length - 1 ? "border-none" : "border-b border-gray-400/10"
                            } py-2 px-6 flex items-center gap-4`}
                    >

                        <div className={`duration-300 ease-in-out ${isOpen === idx ? "-rotate-180 text-green-400" : 'text-[#868686]'}`}>
                            <Link className="text-2xl inline-block rounded-full bg-[#E8F0F5]  p-3" href={"/"}>{data?.icon}</Link>
                        </div>
                        <div className="">
                            <p className={`text-sm ${isOpen === idx ? "text-green-400" : null}`}>{data?.title}</p>
                        </div>
                    </div>

                    {/* Accordion content */}
                    <div
                        className={`grid overflow-hidden transition-all duration-300 ease-in-out  ${isOpen === idx ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
                            }`}
                    >
                        <div className="overflow-hidden">
                            <div className=" p-6 bg-white shadow-2xl z-10 border border-1 flex justify-between items-center">
                                <h1>Night Mode</h1>
                                <p className="text-2xl"><LiaToggleOffSolid /></p>
                            </div>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    );
};
