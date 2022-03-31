import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useParams } from 'react-router-dom';

import ProductImages from '../components/productDetail/ProductImages';
import Stars from '../components/productDetail/Stars';
import PageHero from '../layout/PageHero';
import { getProductDetails } from '../store/actions/products-actions';



const ProductDetail = () => {
    const { productId } = useParams();
    const dispatch = useDispatch();
    
    useEffect(() => {
        dispatch(getProductDetails(productId));
    }, [dispatch, productId]);
    
    const product = useSelector((state) => state.products.productDetails);
    const {
        name,
        description,
        price,
        brand,
        sku,
        images
    } = product;

    return (
        <div className='mb-48'>
            <PageHero title={name} product />
            <div className='mt-16 space-y-16 w-[80vw] mx-auto'>
                <Link to='/products' className='uppercase bg-primary px-4 py-2 rounded text-white font-semibold shadow-lg'>
                    back to products
                </Link>
                <div className='grid grid-cols-1 lg:grid-cols-2 gap-16'>
                    <ProductImages images={images} />
                    <div>
                        <h2 className='font-bold text-5xl tracking-wide'>{name}</h2>
                        <Stars />
                        <h4>{price}</h4>
                        <p className='max-w-3xl leading-loose'>{description}</p>
                        <p className='capitalize w-80 grid grid-cols-4 text-lg'>
                            <span className='block col-span-1'>Available : </span>
                            <span className='block col-span-3 col-start-3'>In Stock</span>
                        </p>
                        <p>
                            <span>SKU : </span>
                            {sku}
                        </p>
                        <p>
                            <span>Brand : </span>
                            {brand}
                        </p>
                        <hr />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProductDetail;