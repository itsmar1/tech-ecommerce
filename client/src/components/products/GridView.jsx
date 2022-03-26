import React from 'react';
import { Link } from 'react-router-dom';
import { FaSearch } from 'react-icons/fa';


const GridView = ({ products }) => {
    return (
        <div>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-y-8 gap-x-6'>
            {products.map((product) => {
                return (
                    <div>
                        <div className='relative bg-[#222] rounded'>
                            <img className='w-full h-[175px] block object-cover rounded' src={product.thumbnail} alt={product.name} />
                            <Link className='absolute top-1/2 left-1/2 bg-secondary-100 flex items-start justify-center w-10 h-10 rounded-full opacity-0 hover:opacity-100' to={`/products/${product.id}`}>
                                <FaSearch />
                            </Link>
                        </div>
                        <footer className='flex mt-4 justify-between items-center'>
                            <h4 className='mb-0 font-normal'>{product.name}</h4>
                            <p className='mb-0 font-normal text-secondary-100 tracking-widest'>{product.price}</p>
                        </footer>
                    </div>
                );
            })}
            </div>
        </div>
    );
};


export default GridView;