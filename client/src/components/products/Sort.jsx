import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { BsFillGridFill, BsList } from 'react-icons/bs';
import { productsActions } from '../../store/products-slice';

import { uiActions } from '../../store/ui-slice';

const Sort = () => {
    const dispatch = useDispatch();
    const totalProducts = useSelector((state) => state.products.totalProducts);
    const sort = useSelector((state) => state.products.sort);

    const toggleHandler = () => {
        dispatch(uiActions.toggleView());
    };

    const sortProducts = (e) => {
        const value = e.target.value;
        dispatch(productsActions.sortProducts(value));
    };



    return (
        <div className='grid grid-cols-7 gap-2 items-center mb-8'>
            <div className='col-start-1 col-span-2 space-x-1'>
                <button className='border-2 border-black rounded-md p-1 inline-block' onClick={toggleHandler}>
                    <BsFillGridFill />
                </button>
                <button className='border-2 border-black rounded-md p-1 inline-block'onClick={toggleHandler} >
                    <BsList />
                </button>
                <p className='text-sm inline-block capitalize'>{totalProducts} products found</p>
            </div>
            <hr className='col-start-3 col-span-3' />
            <form className='col-start-6 col-span-2'>
                <label htmlFor="sort" className='capitalize'>sort by</label>
                <select name="sort" id="sort" value={sort} className='capitalize cursor-pointer' onChange={sortProducts}>
                    <option value="price-lowest">price (lowest)</option>
                    <option value="price-highest">price (highest)</option>
                    <option value="name-a">name (a - z)</option>
                    <option value="name-z">name (z - a)</option>
                </select>
            </form>
        </div>
    );
};


export default Sort;