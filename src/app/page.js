import AccordionCategory from '@/components/AccordianCategory/AccordionCategory';
import axios from 'axios';
import React from 'react';
import { IoMdSearch } from 'react-icons/io';

const HomePage = async () => {

  const response = await axios.get('http://localhost:3001/api/category');
  console.log(response.data)
  return (
    <div className='flex gap-5 h-[85vh] '>
      <div className="fixed overflow-hidden w-[350px] mt-14 bg-white">
        <div>
          <p className='bg-[#1FA45B] py-3 text-center rounded-t-lg text-white'>Categories</p>
        </div>
        <div className="mx-3 pt-4">
          <label className="relative block w-full">
            <span className="absolute inset-y-0 left-0 flex items-center pl-4">

              <button className="stroke-mute-grey"><IoMdSearch /></button>
            </span>
            <input

              className="h-12   placeholder:text-mute-grey placeholder:text-sm border-[1px] block bg-white w-full rounded-md pl-12 shadow-sm focus:outline-none focus:border-primary focus:ring-primary focus:ring-1  
      sm:text-sm dark:bg-dark-bg-dark dark:border-none dark:placeholder:text-[#96a2b4]"
              placeholder="Search Categories"
              type="text"
              name="search"
            />
          </label>
        </div>
        <div
          className='h-[68vh] overflow-y-scroll'
        >
          <div className="mt-4">
            <div className="space-y-4">
              <AccordionCategory category={response?.data} />
            </div>
          </div>
        </div>
      </div>


      <div className='flex-1 '>
        {/* main content */}
      </div>
    </div>

  );
};

export default HomePage;