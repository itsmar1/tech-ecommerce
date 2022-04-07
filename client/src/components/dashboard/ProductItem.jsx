import React from "react";
import { Link } from "react-router-dom";
import { HiChevronDoubleRight } from 'react-icons/hi'

import { formatPrice } from "../../utils/helpers";

const ProductItem = ({ product, update }) => {
  return (
    <div className="flex space-x-6 border border-white rounded-lg shadow-lg p-4">
      <div>
        <img
          className="w-[300px] h-[200px] object-contain rounded"
          src={product.thumbnail}
          alt={product.name}
        />
      </div>
      <div className="flex flex-col">
        <h2 className="font-semibold text-lg tracking-widest my-4">
          {product.name}
        </h2>
        <span className="block text-secondary-100 font-bold text-sm">
          {formatPrice(product.price)}
        </span>
        <p className="text-gray-500 mt-6">
          {product.description.substring(0, 150)}...
        </p>
        {update && (
          <Link
            className="ml-auto mt-auto bg-secondary-100 text-white px-4 py-1 rounded-md shadow-md"
            to={`/admin/dashboard/updateproducts/${product.id}`}
            state={{ product }}
          >
            Update
            <span className="inline-block ml-2">{<HiChevronDoubleRight />}</span>
          </Link>
        )}
      </div>
    </div>
  );
};

export default ProductItem;
