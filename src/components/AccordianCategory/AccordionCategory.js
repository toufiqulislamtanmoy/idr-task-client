"use client"
import Link from 'next/link';
import React, { useState } from 'react';
import { BsCollection } from 'react-icons/bs';
import { IoLanguageOutline } from 'react-icons/io5';
import { PiCirclesFour } from 'react-icons/pi';
import AccordianSubCategory from '../AccordianSubCategory/AccordianSubCategory';

const AccordionCategory = ({ category }) => {
    const [isOpen, setIsOpen] = useState(null);
    console.log(category)
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
            {category?.map((data, idx) => (
                <div key={idx} className={`${isOpen === idx ? "bg-[#F7F8FA] rounded-2xl" : null}  mt-5 `}>
                    {/* Accordion title part */}
                    <div
                        onClick={() => handleToggle(idx)}
                        className={`${idx === category?.length - 1 ? "border-none" : "border-b border-gray-400/10"
                            } py-2 px-6 flex items-center gap-4`}
                    >

                        <div className={`duration-300 ease-in-out ${isOpen === idx ? "-rotate-180 text-green-400" : 'text-[#868686]'}`}>
                            <Link className="text-2xl inline-block rounded-full bg-[#E8F0F5]  p-3" href={"/"}><IoLanguageOutline /></Link>
                        </div>
                        <div className="">
                            <p className={`text-sm  cursor-pointer ${isOpen === idx ? "text-green-400" : null}`}>{data?.cat_name_en}</p>
                        </div>
                    </div>

                    {/* Accordion content */}
                    <div
                        className={`grid bg-white overflow-hidden transition-all duration-300 ease-in-out  ${isOpen === idx ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
                            }`}
                    >
                        {/* accordion data */}
                        <div className="overflow-hidden pl-10">

                            <div className="w-full ">
                                <div className="relative ">
                                    <div className="w-full ">
                                        <AccordianSubCategory />
                                        <AccordianSubCategory />
                                        <AccordianSubCategory />
                                    </div>
                                </div>
                            </div>



                        </div>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default AccordionCategory;