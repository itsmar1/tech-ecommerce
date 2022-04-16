import React from "react";
import { Link } from "react-router-dom";
import { HERO_URL } from '../../utils/constants';
// import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

const Hero = () => {




    const underlineAnimate = {
        hidden: {
          opacity: 0,
          pathLength: 0,
        },
        visible: {
          opacity: 1,
          pathLength: 1,
          transition: {
            delay: 0.8,
            duration: .6,
          },
        },
    };

    const headerAnimate = {
        hidden: {
          opacity: 0,
          y: 25,
        },
        visible: {
          opacity: 1,
          y: 0,
          transition: {
            duration: 0.8
          }
        },
      };

      const textAnimate = {
        hidden: {
          opacity: 0,
          y: 25,
        },
        visible: {
          opacity: 1,
          y: 0,
          transition: {
            duration: 0.8,
            delay: 0.3
          }
        },
      };

      const linksAnimate = {
        hidden: {
          opacity: 0,
          x: '-100vw',
        },
        visible: {
          opacity: 1,
          x: 0,
          transition: {
            duration: 1,
            delay: 0.5,
            type: 'spring',
            stiffness: 120
          }
        },
      };

      const buttonVariants = {
        hover: {
          scale: 1.1,
          textShadow: "0px 0px 2px #ffffff",
          boxShadow: "0px 0px 4px #243E8B",
          transition: {
            duration: 0.3,
          },
        },
      };


    return (
        <div>
            <div className="absolute top-1/4 -left-8 w-40 h-40 xl:w-72 xl:h-60 bg-secondary-200 rounded-2xl transform-gpu -rotate-12 z-[-1]"></div>
            <div className='w-full h-screen flex flex-col justify-between px-8 py-12 z-10'>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                    <div className="flex flex-col mt-16">
                        <motion.h1 className="text-4xl md:text-5xl lg-text-7xl 2xl:text-8xl font-bold"
                            variants={headerAnimate}
                            initial="hidden"
                            animate="visible"
                        >
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
                                <motion.path
                                    d="M3 9C118.957 4.47226 364.497 -1.86658 419 9"
                                    variants={underlineAnimate}
                                    initial="hidden"
                                    animate="visible"
                                />
                            </svg>
                        </motion.h1>
                        <motion.p className="text-lg py-6"
                            variants={textAnimate}
                            initial="hidden"
                            animate="visible"
                        >
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. 
                            Quisquam exercitationem tempore animi odio similique porro atque eveniet, 
                            soluta sapiente, laboriosam, assumenda accusantium.
                        </motion.p>
                        <motion.div
                            variants={linksAnimate}
                            initial="hidden"
                            animate="visible"
                        >
                            <Link to='/products'>
                                <motion.button className="px-4 py-2 font-bold bg-white border-4 border-primary rounded-full shadow-md"
                                    variants={buttonVariants}
                                    whileHover="hover"
                                >
                                    Shop now
                                </motion.button>
                            </Link>
                        </motion.div>
                    </div>
                    <motion.div className="block mx-auto"
                        initial={{ opacity: 0, y: 100 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: .4 }}
                    >
                        <img className="h-[75%]" src={HERO_URL} alt="" />
                    </motion.div>
                </div>
            </div>
        </div>
        //     {/* <div className="absolute z-0 -left-20 top-0 w-40 h-40 bg-secondary-200 rounded-2xl transform-gpu -rotate-12 lg:-left-40 lg:-top-8 xl:w-80 xl:h-80"></div> */}
    );
};

export default Hero;