import React from 'react';

import PageHero from '../layout/PageHero';
import Filters from '../components/products/Filters';
import Sort from '../components/products/Sort'
import ProductsList from '../components/products/ProductsList';
import { useSelector } from 'react-redux';
import { motion } from 'framer-motion';


const containerVariants = {
    hidden: {
      opacity: 0
    },
    visible: {
      opacity: 1,
      transition: { duration: .3 }
    },
    exit: {
      x: '-100vw',
      transition: { ease: 'easeInOut' }
    }
}


const Products = () => {
    const filters = useSelector((state) => state.products.filters);

    return (
        <motion.main
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
        >
            <PageHero title="products" />
            <div className='flex w-[85vw] my-16 mx-auto'>
                <div className='grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-x-12 gap-y-12'>
                    <div className='sticky lg:col-span-1'>
                        <Filters filters={filters} />
                    </div>
                    <div className='mb-[20rem] md:col-span-2 lg:col-span-4'>
                        <div className='w-full flex flex-col'>
                            <Sort />
                            <ProductsList />
                        </div>
                    </div>
                </div>
            </div>
        </motion.main>
    );
};

export default Products;