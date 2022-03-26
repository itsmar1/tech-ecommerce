import React from 'react';

import PageHero from '../layout/PageHero';
import { ABOUT_IMG_URL } from '../utils/constants';


const About = () => {
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
                            <h2 className='xs:text-[3rem] sm:text-[2rem] md:text-[2.5rem] font-bold capitalize'>Our Story</h2>
                            <p className='leading-10 text-gray-600 py-8 text-lg'>
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
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    );
};

export default About;