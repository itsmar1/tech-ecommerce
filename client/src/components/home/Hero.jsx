import React from "react";
import { HERO_URL } from '../../utils/constants';
// import { Link } from 'react-router-dom';

const Hero = () => {
    return (
        <div className='w-full h-screen flex flex-col justify-between px-8 py-12'>
            <div className="grid md:grid-cols-2 gap-12">
                <div className="flex flex-col mt-16">
                    <h1 className="text-4xl md:text-5xl lg-text-7xl 2xl:text-8xl font-bold">
                        Tech Shop
                        <br />
                        Ecommerce
                    </h1>
                    <p className="text-lg py-6 w-3/4">
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. 
                        Quisquam exercitationem tempore animi odio similique porro atque eveniet, 
                        soluta sapiente, laboriosam, assumenda accusantium.
                    </p>
                    <div>
                        <button className="px-4 py-2 font-bold bg-white border-4 border-primary rounded-full">Shop now</button>
                    </div>
                </div>
                <div className="hidden md:block mx-auto">
                    <img className="h-[75%]" src={HERO_URL} alt="" />
                </div>
            </div>
        </div>
        //     {/* <div className="absolute z-0 -left-20 top-0 w-40 h-40 bg-secondary-200 rounded-2xl transform-gpu -rotate-12 lg:-left-40 lg:-top-8 xl:w-80 xl:h-80"></div> */}
    );
};

export default Hero;