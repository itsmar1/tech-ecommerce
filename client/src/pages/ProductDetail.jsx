import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useParams } from 'react-router-dom';

import ProductImages from '../components/productDetail/ProductImages';
import Stars from '../components/productDetail/Stars';
import PageHero from '../layout/PageHero';
import AddToCart from '../components/productDetail/AddToCart';
import { getProductDetails } from '../store/actions/products-actions';
import { formatPrice } from '../utils/helpers';
import TheSpinner from '../layout/TheSpinner';



const ProductDetail = () => {
    const { productId } = useParams();
    const dispatch = useDispatch();
    const loading = useSelector((state) => state.ui.productDetailLoading);
    
    useEffect(() => {
        dispatch(getProductDetails(productId));
    }, [dispatch, productId]);

    
    
    const product = useSelector((state) => state.products.productDetails);
    const {
        id,
        name,
        description,
        price,
        brand,
        company,
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
                {loading ? <TheSpinner /> :
                <div className='grid grid-cols-1 lg:grid-cols-2 gap-16'>
                    <ProductImages images={images} />
                    <div>
                        <h2 className='font-bold text-5xl tracking-wide mb-5'>{name}</h2>
                        <Stars />
                        <h4 className='text-xl font-extrabold text-secondary-100 tracking-widest italic my-4'>{formatPrice(price)}</h4>
                        <p className='max-w-3xl tracking-wider leading-8 text-gray-500 mb-6'>{description}</p>
                        <div className='flex flex-col w-full sm:w-3/4 lg:w-1/2 space-y-5'>
                            <div className='flex justify-between'>
                                <p className='text-lg font-semibold tracking-wider text-gray-600'>Available :</p>
                                <p>In Stock</p>
                            </div>
                            <div className='flex justify-between'>
                                <p className='text-lg font-semibold tracking-wider text-gray-600'>SKU :</p>
                                <p>{sku}</p>
                            </div>
                            <div className='flex justify-between'>
                                <p className='text-lg font-semibold tracking-wider text-gray-600'>Brand :</p>
                                <p className='uppercase'>{brand}</p>
                            </div>
                        </div>
                        <hr className='my-6' />
                        <AddToCart product={product} />
                    </div>
                </div>
                }
            </div>
        </div>
    );
};

export default ProductDetail;