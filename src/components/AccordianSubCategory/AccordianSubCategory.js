import Link from 'next/link';


const AccordianSubCategory = () => {
    return (
        <>
            <div className="relative flex flex-col items-start w-full pt-5">
                <div className="absolute left-1.5 top-0 w-0.5 h-full bg-[#1FA45B] "></div>
                <div className="relative z-10 grid h-4 w-4  place-items-center rounded-full bg-[#1FA45B] font-bold  ring-0 transition-all duration-300 mb-8">
                    <div className="absolute left-5 transform  w-max text-center text-xs">
                        <Link href="#id" className="block text-inherit">
                            Dua
                        </Link>

                    </div>
                </div>
            </div>
        </>
    );
};

export default AccordianSubCategory;