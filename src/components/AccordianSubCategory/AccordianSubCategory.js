"use client"
import axios from 'axios';
import Link from 'next/link';
import { useEffect, useState } from 'react';


const AccordianSubCategory = ({ cat_id }) => {
    const [subCategory, setSubCategory] = useState(null);
    useEffect(() => {
        async function fetchData() {

            const response = await axios.get(`http://localhost:3001/api/sub-category/${cat_id}`);

            setSubCategory(response?.data)
        }
        fetchData();
    }, [cat_id])

    return (
        <div className="w-full ">
            {subCategory?.length > 0 ?
                subCategory?.map((sbc, ind) =>
                    <div key={ind} className="relative flex flex-col items-start w-full pt-5">
                        <div className="absolute left-1.5 top-0 w-0.5 h-full bg-[#1FA45B] "></div>
                        <div className="relative z-10 grid h-4 w-4  place-items-center rounded-full bg-[#1FA45B] font-bold  ring-0 transition-all duration-300 mb-8">
                            <div className="absolute left-5 transform  w-max text-center text-xs">
                                <Link href="#id1" className="block text-inherit">
                                    {sbc?.subcat_name_en}
                                </Link>
                            </div>
                        </div>
                    </div>
                )
                :
                <p>Loading..................</p>
            }

        </div>
    );
};

export default AccordianSubCategory;