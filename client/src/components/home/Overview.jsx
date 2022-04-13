import React from "react";
import { Link } from "react-router-dom";


const Overview = () => {
    return (
        <div className="w-full bg-[#f1f5f8] py-32 text-center">
            <div className="px-3 lg:px-0 lg:w-[55%] mx-auto">
                <h2 className="font-extrabold text-5xl text-[#242833] capitalize mb-10 tracking-widest leading-10">Company Overview</h2>
                <p className="text-lg text-[#555] tracking-widest font-normal mb-5 leading-7">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilla. sed do eiusmod tempor incididunt ut labore et dolore.</p>
                <p className="text-lg text-[#555] tracking-widest font-normal mb-5 leading-7">Lorem, ipsum dolor.</p>
                <Link className="inline-block px-6 py-3 font-semibold tracking-wider text-white bg-primary uppercase mt-8 text-lg hover:bg-secondary-200 transition-all duration-300" to='/about'>
                    View More
                </Link>
            </div>
        </div>
    );
};


export default Overview;