import React from 'react';

import { BRANDS, CATEGORIES } from '../../utils/constants';

const Filters = () => {
    return (
        <div className='sticky top-0'>
            <form>
                {/* search input */}
                <div className='mb-4'>
                    <input type="text" name="search" placeholder='search' className='form-input rounded-lg' />
                </div>
                {/* category */}
                <div className='mb-6'>
                    <h4 className='mb-1 font-bold capitalize text-lg'>category</h4>
                    {CATEGORIES.map((c, index) => {
                        return (
                            <button
                                key={index}
                                type="button"
                                name="category"
                                className="block py-1 capitalize text-gray-600"
                            >
                                {c}
                            </button>
                        );
                    })}
                </div>
                {/* company */}
                <div className='mb-6'>
                    <h4 className='mb-2 font-bold capitalize text-lg'>company</h4>
                    <select name="company" className='form-select'>
                        {BRANDS.map((c, index) => {
                            return (
                                <option value={c} key={index}>
                                    {c}
                                </option>
                            );
                        })}
                    </select>
                </div>
                {/* price */}
                <div className='mb-6'>
                    <h4 className='mb-1 font-bold capitalize text-lg'>price</h4>
                    <p></p>
                    <input type="range" name="price" id='price' className='form-range' checked  />
                </div>
                {/* shipping */}
                <div className='mb-6'>
                    <label htmlFor="">Free Shipping</label>
                    <input type="checkbox" name="shipping" id="shipping" className='form-checkbox cursor-pointer ml-2' />
                </div>
            </form>
            <button type='button' className='bg-primary text-white px-2 py-1 rounded-md font-semibold shadow-md'>Clear Filters</button>
        </div>
    );
};


export default Filters;