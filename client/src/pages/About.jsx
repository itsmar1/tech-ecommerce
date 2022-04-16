import React from 'react';
import { motion } from 'framer-motion';

import PageHero from '../layout/PageHero';
import { ABOUT_IMG_URL } from '../utils/constants';


const About = () => {

    const underlineAnimate = {
        hidden: {
          opacity: 0,
          pathLength: 0,
        },
        visible: {
          opacity: 1,
          pathLength: 1,
          transition: {
            delay: 1,
            duration: .8,
          },
        },
    };

    return (
        <main>
            <PageHero title="about" />
            <div className='w-full py-32'>
                <div className='w-[85vw] flex mx-auto'>
                    <div className='grid sm:grid-cols-1 md:grid-cols-2 gap-8'>
                        <div>
                            <img src={ABOUT_IMG_URL} alt="" />
                        </div>
                        <div>
                            <motion.h2 className='text-4xl lg:text-6xl font-bold capitalize tracking-wider'
                                initial={{ opacity: 0, y: 60 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: .5 }}
                            >
                                Our Story
                                <svg
                                    className="svg-underline stroke-[#ffb81c] relative z-10 w-1/2"
                                    strokeLinejoin="round"
                                    strokeLinecap="round"
                                    strokeWidth={7}
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
                            </motion.h2>
                            <motion.p className='leading-10 text-gray-600 py-8 text-lg'
                                initial={{ opacity: 0, y: 60 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: .5, duration: .8 }}
                            >
                                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Fugiat
                                accusantium sapiente tempora sed dolore esse deserunt eaque
                                excepturi, delectus error accusamus vel eligendi, omnis beatae.
                                Quisquam, dicta. Eos quod quisquam esse recusandae vitae neque
                                dolore, obcaecati incidunt sequi blanditiis est exercitationem
                                molestiae delectus saepe odio eligendi modi porro eaque in libero
                                minus unde sapiente consectetur architecto. Ullam rerum, nemo iste
                                ex, eaque perspiciatis nisi, eum totam velit saepe sed quos
                                similique amet. Ex, voluptate accusamus nesciunt totam vitae esse
                                iste.
                            </motion.p>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    );
};

export default About;