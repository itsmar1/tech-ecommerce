import React from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

import { FaSearch } from 'react-icons/fa';
import { formatPrice } from '../../utils/helpers';


const FeaturedProducts = () => {
    const products = useSelector((state) => state.products.filteredProducts);


    return (
        <div className='w-[80vw] mx-auto]'>
            <div>
                <h2>Featured Products</h2>
                <div></div>
            </div>
            <div className='grid grid-cols-3 gap-8'>
                {products.slice(0, 3).map((product) => (
                    <div key={product.id}>
                        <div className='relative rounded-md'>
                            <Link to={`/products/${product.id}`} className='flex items-center justify-center absolute bg-[#222] w-full h-[175px] rounded-md opacity-0 hover:opacity-70 transition-all duration-300'>
                                <span className='flex items-center justify-center bg-secondary-100 w-10 h-10 rounded-full'>
                                    <FaSearch />
                                </span>
                            </Link>
                            <img className='w-full h-[175px] block object-contain rounded' src={product.thumbnail} alt={product.name} />
                        </div>
                        <footer className='flex mt-4 justify-between items-center'>
                            <h4 className='mb-0 font-normal'>{product.name}</h4>
                            <p className='mb-0 font-normal text-secondary-100 tracking-widest'>{formatPrice(product.price)}</p>
                        </footer>
                    </div>
                ))}
            </div>
            <Link to='/products' className='uppercase'>
                    all products
            </Link>
        </div>
    );
};


export default FeaturedProducts;