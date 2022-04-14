import React from "react";
import { Link } from "react-router-dom";
import { HERO_URL } from '../../utils/constants';
// import { Link } from 'react-router-dom';

const Hero = () => {
    return (
        <div>
            <div className="absolute top-1/4 -left-8 w-40 h-40 xl:w-72 xl:h-60 bg-secondary-200 rounded-2xl transform-gpu -rotate-12 z-[-1]"></div>
            <div className='w-full h-screen flex flex-col justify-between px-8 py-12 z-10'>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                    <div className="flex flex-col mt-16">
                        <h1 className="text-4xl md:text-5xl lg-text-7xl 2xl:text-8xl font-bold">
                            Best Tech Deals
                            <br />
                            On Best Prices
                            <svg
                                className="svg-underline stroke-[#ffb81c] relative z-10 w-64 md:w-1/2 lg:w-3/4"
                                strokeLinejoin="round"
                                strokeLinecap="round"
                                strokeWidth={5}
                                viewBox="0 0 422 12"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                                >
                                <path
                                    d="M3 9C118.957 4.47226 364.497 -1.86658 419 9"
                                />
                            </svg>
                        </h1>
                        <p className="text-lg py-6">
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. 
                            Quisquam exercitationem tempore animi odio similique porro atque eveniet, 
                            soluta sapiente, laboriosam, assumenda accusantium.
                        </p>
                        <div>
                            <Link className="px-4 py-2 font-bold bg-white border-4 border-primary rounded-full shadow-md" to='/products'>Shop now</Link>
                        </div>
                    </div>
                    <div className="block mx-auto">
                        <img className="h-[75%]" src={HERO_URL} alt="" />
                    </div>
                </div>
            </div>
        </div>
        //     {/* <div className="absolute z-0 -left-20 top-0 w-40 h-40 bg-secondary-200 rounded-2xl transform-gpu -rotate-12 lg:-left-40 lg:-top-8 xl:w-80 xl:h-80"></div> */}
    );
};

export default Hero;