import React, { useEffect } from "react";
import { productsActions } from "../../store/products-slice";
import { useDispatch, useSelector } from "react-redux";

import { BRANDS, CATEGORIES } from "../../utils/constants";
import { formatPrice } from '../../utils/helpers';

// const initialFilters = {
//   search: '',
//   category: 'all',
//   company: 'all',
//   price: 0,
//   shipping: false
// };

const Filters = ({ filters }) => {
  const dispatch = useDispatch();
  const minPrice = useSelector(state => state.products.minPrice);
  const maxPrice = useSelector((state) => state.products.maxPrice);
  // const [filters, setFilters] = useState({
  //   ...initialFilters,
  //   'price': maxPrice
  // });

  // const [filters, setFilters] = useState(props.filters);

  const updateFilters = (e) => {
    let name = e.target.name;
    let value = e.target.value;
    if(name === 'category') {
      value = e.target.textContent;
    }
    if (name === 'company') {
      value = e.target.value.toLowerCase()
    }
    if (name === 'price') {
      value = Number(value);
    }
    if (name === 'shipping') {
      value = e.target.checked;
    }
    // setFilters({
    //   ...filters,
    //   [e.target.name]: value
    // });
    dispatch(productsActions.setFilters({
      ...filters,
      [e.target.name]: value
    }));
  };


  const clearFilters = () => {
    dispatch(productsActions.clearFilter());
  };

  useEffect(() => {
    dispatch(productsActions.filterProducts(filters));
  }, [dispatch, filters]);



  return (
    <div className="sticky top-0">
      <form>
        {/* search input */}
        <div className="mb-4">
          <input
            type="text"
            name="search"
            value={filters.text}
            placeholder="search"
            onChange={updateFilters}
            className="form-input rounded-lg bg-gray-200 border-0 pr-0"
          />
        </div>
        {/* category */}
        <div className="mb-6">
          <h4 className="mb-1 font-bold capitalize text-lg">category</h4>
          {CATEGORIES.map((c, index) => {
            return (
              <button
                key={index}
                type="button"
                name="category"
                onClick={updateFilters}
                // className="block py-1 capitalize text-gray-600"
                className={`block py-1 capitalize text-gray-600 ${filters.category === c ? 'border-b-2 border-primary' : ''}`}
              >
                {c}
              </button>
            );
          })}
        </div>
        {/* company */}
        <div className="mb-6">
          <h4 className="mb-2 font-bold capitalize text-lg">company</h4>
          <select name="company" className="form-select rounded cursor-pointer bg-gray-200 border-0 py-1" onChange={updateFilters} >
            {BRANDS.map((c, index) => {
              return (
                <option key={index} value={c} >
                  {c}
                </option>
              );
            })}
          </select>
        </div>
        {/* price */}
        <div className="mb-6">
          <h4 className="mb-1 font-bold capitalize text-lg">price</h4>
          <p className="italic">{formatPrice(filters.price)}</p>
          <input
            type="range"
            name="price"
            id="price"
            onChange={updateFilters}
            min={minPrice}
            max={maxPrice}
            value={filters.price}
            className="form-range"
          />
        </div>
        {/* shipping */}
        <div className="mb-6">
          <label htmlFor="">Free Shipping</label>
          <input
            type="checkbox"
            name="shipping"
            id="shipping"
            checked={filters.shipping}
            onChange={updateFilters}
            className="form-checkbox cursor-pointer ml-2"
          />
        </div>
      </form>
      <button
        type="button"
        className="bg-primary text-white px-2 py-1 rounded-md font-semibold shadow-md"
        onClick={clearFilters}
      >
        Clear Filters
      </button>
    </div>
  );
};

export default Filters;
