import React from 'react';
import { Link } from 'react-router-dom';


const ListView = ({ products }) => {
    return (
        <div>
            {products.map((product) => {
                const { id, name, description, price, thumbnail } = product;
                return (
                    <div key={id}>
                        <img className='w-[300px] h-[200px] object-contain mb-4 rounded' src={thumbnail} alt={name} />
                        <div>
                            <h3 className='mb-2'>{name}</h3>
                            <h4 className='mb-3 text-secondary-100'>{price}</h4>
                            <p className='max-w-2xl mb-4'>{description.substring(0, 150)}...</p>
                            <Link to={`/products/${id}`} className='text-xs py-1 px-2' >
                                Details
                            </Link>
                        </div>
                    </div>
                )
            })}
        </div>
    );
};


export default ListView;