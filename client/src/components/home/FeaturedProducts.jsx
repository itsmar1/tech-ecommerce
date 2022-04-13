import React from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

import { FaSearch } from 'react-icons/fa';
import { formatPrice } from '../../utils/helpers';


const FeaturedProducts = () => {
    const products = useSelector((state) => state.products.filteredProducts);


    return (
        <div className='w-[80vw] mx-auto py-40 text-center'>
            <div className='text-center'>
                <h2 className='text-4xl capitalize tracking-widest mb-3 font-bold leading-none'>Featured Products</h2>
                <div className='w-24 h-1 bg-secondary-200 mx-auto'></div>
            </div>
            <div className='grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8 my-16'>
                {products.slice(0, 3).map((product) => (
                    <div key={product.id}>
                        <div className='relative rounded-md'>
                            <Link to={`/products/${product.id}`} className='flex items-center justify-center absolute bg-[#222] w-full h-[225px] rounded-md opacity-0 hover:opacity-70 transition-all duration-300'>
                                <span className='flex items-center justify-center bg-secondary-100 w-10 h-10 rounded-full'>
                                    <FaSearch />
                                </span>
                            </Link>
                            <img className='w-full h-[225px] block object-contain rounded' src={product.thumbnail} alt={product.name} />
                        </div>
                        <footer className='flex mt-4 justify-between items-center'>
                            <h4 className='mb-0 font-normal'>{product.name}</h4>
                            <p className='mb-0 font-semibold italic text-secondary-100 tracking-widest'>{formatPrice(product.price)}</p>
                        </footer>
                    </div>
                ))}
            </div>
            <Link className='inline-block mx-auto uppercase text-center px-6 py-3 mt-4 bg-secondary-200 text-white font-semibold shadow-lg rounded hover:bg-primary transition-all duration-300' to='/products'>
                    all products
            </Link>
        </div>
    );
};


export default FeaturedProducts;