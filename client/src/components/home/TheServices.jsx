import React from "react";

import { GiCompass, GiDiamondHard, GiStabbedNote } from 'react-icons/gi';


const TheServices = () => {
    return (
        <div className="bg-secondary-200 px-8 py-24">
            <div className="xl:w-[85%] mx-auto">

                <div className="flex justify-between mb-12">
                    <h3 className="text-3xl text-[#453227] capitalize tracking-wide font-semibold w-1/2">explore our top products <br /> and find something new</h3>
                    <p className="w-1/2 leading-relaxed text-[#795744]">Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe dolorum debitis consectetur reprehenderit non aliquam voluptates dolore aut vero consequuntur.</p>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-8 text-center">

                    <div className="flex flex-col items-center bg-[#c5a491] py-12 px-8 rounded">
                        <span className="flex justify-center items-center w-16 h-16 mb-4 rounded-full text-3xl bg-[#eaded7]"><GiCompass /></span>
                        <h4 className="capitalize text-2xl mb-3 font-bold">mission</h4>
                        <p className="leading-relaxed text-[#5f4435]">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptates, ea. Perferendis corrupti reiciendis nesciunt rerum velit autem unde numquam nisi</p>
                    </div>

                    <div className="flex flex-col items-center bg-[#c5a491] py-12 px-8 rounded">
                        <span className="flex justify-center items-center w-16 h-16 mb-4 rounded-full text-3xl bg-[#eaded7]"><GiDiamondHard /></span>
                        <h4 className="capitalize text-2xl mb-3 font-bold">vision</h4>
                        <p className="leading-relaxed text-[#5f4435]">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptates, ea. Perferendis corrupti reiciendis nesciunt rerum velit autem unde numquam nisi</p>
                    </div>

                    <div className="flex flex-col items-center bg-[#c5a491] py-12 px-8 rounded">
                        <span className="flex justify-center items-center w-16 h-16 mb-4 rounded-full text-3xl bg-[#eaded7]"><GiStabbedNote /></span>
                        <h4 className="capitalize text-2xl mb-3 font-bold">history</h4>
                        <p className="leading-relaxed text-[#5f4435]">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptates, ea. Perferendis corrupti reiciendis nesciunt rerum velit autem unde numquam nisi</p>
                    </div>

                </div>
            </div>
        </div>
    );
};



export default TheServices;