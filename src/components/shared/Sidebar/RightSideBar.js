import { RightAccordion } from "./RightAccordion";

const RightSideBar = () => {
    return (
        <div className='h-[85vh] bg-white rounded-3xl  py-10'>
            <div>
                <h1 className="text-2xl text-center font-bold">Settings</h1>
            </div>
            <RightAccordion />
        </div>
    );
};

export default RightSideBar;