import React, { useState } from 'react';


const ProductImages = ({ images = [[]] }) => {
    const [main, setMain] = useState(images[0]);
    // console.log(main.image);
    return (
        <div>
            <img src={main.image} alt="" className='h-[600px] w-full block rounded object-contain' />
            <div className='mt-8 grid grid-cols-5 gap-x-4'>
                {images.map((image, index) => {
                    return (
                        <img 
                            src={image.image} 
                            alt="" 
                            key={index}
                            onClick={() => setMain(images[index])}
                            className={`h-12 lg:h-20 w-full block rounded object-contain cursor-pointer ${main.image === image.image ? 'border-2 border-solid border-secondary-200' : '' }`}
                        />
                    )
                })}
            </div>
        </div>
    );
};


export default ProductImages;