import React, { useState } from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
// import Dropzone from "react-dropzone";
// import { useDropzone } from 'react-dropzone';

import { FaDollarSign } from "react-icons/fa";
import { IoMdAddCircle } from "react-icons/io";
import { useDispatch, useSelector } from "react-redux";
import { addProduct } from "../../store/actions/products-actions";

const AddProduct = () => {
  const dispatch = useDispatch();
  const token = useSelector((state) => state.auth.token);
  const [tnail, setTnail] = useState("");
  const [pImages, setPImages] = useState("");

  const thumbnailHandler = (file) => {
    console.log('thumbnail: ', file);
    setTnail(file);
  };


  const imagesHandler = (event) => {
    const imageArray = [];
    for (let i=0; i < event.target.files.length; i++) {
      imageArray.push(event.target.files[i]);
    }
    setPImages(imageArray);

  };

  const formik = useFormik({
    initialValues: {
      name: "",
      description: "",
      price: "",
      category: "",
      brand: "",
      shipping: false,
      sku: "BlkjdfKj23jrdfkj1",
    },
    validationSchema: Yup.object({
      name: Yup.string().required("Required"),
      description: Yup.string().required("Required"),
      price: Yup.number().required("Required"),
      category: Yup.string().required("Required"),
      brand: Yup.string().required("Required"),
    }),
    onSubmit: (values) => {
      const formData = new FormData();
      formData.append('thumbnail', tnail);

      for (let i=0; i < pImages.length; i++) {
        formData.append('images[]', pImages[i]);
      } 

      formData.append('name', values.name);
      formData.append('description', values.description);
      formData.append('price', values.price);
      formData.append('category', values.category);
      formData.append('brand', values.brand);
      formData.append('sku', formik.values.sku);
      const shippingValue = formik.values.shipping ? 1 : 0;
      formData.append('shipping', shippingValue);

      const payload = {
        product: formData,
        token
      };
      console.log(payload);
      dispatch(addProduct(payload));
    },
  });

  // const onDrop = useCallback((acceptedFiles) => {
  //   if (acceptedFiles.length !== 4) {
  //     return;
  //   }
  //   formik.setFieldValue("images", formik.values.images.concat(acceptedFiles))
  // }, [formik])

  // const {getRootProps, getInputProps, isDragActive} = useDropzone({onDrop});

  return (
    <div>
      <div className="flex items-center mx-4 my-8 p-8 bg-white shadow-2xl drop-shadow-md">
        <span className="text-4xl text-primary mr-6">
          <IoMdAddCircle />
        </span>
        <h2 className="uppercase text-4xl tracking-widest font-semibold">
          Add product
        </h2>
      </div>
      <div className="flex m-4 p-8 bg-white shadow-lg">
        <div className="w-3/4">
          <form onSubmit={formik.handleSubmit}>
            {/* name input */}
            <div className="flex flex-col space-y-1 mb-8">
              <label htmlFor="name" className="tracking-wider">
                Product name:
              </label>
              <input
                type="text"
                name="name"
                id="name"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.name}
                className="form-input rounded w-full bg-gray-100"
                placeholder="Enter product name"
              />
              {formik.touched.name && formik.errors.name && (
                <p className="text-xs font-semibold text-red-500">
                  {formik.errors.name}
                </p>
              )}
            </div>
            {/* description input */}
            <div className="flex flex-col space-y-1 mb-8">
              <label htmlFor="description" className="tracking-wider">
                Description:
              </label>
              <textarea
                name="description"
                id="description"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.description}
                className="form-textarea w-full h-52 bg-gray-100 rounded-md"
                placeholder="Product description"
              ></textarea>
              {formik.touched.description && formik.errors.description && (
                <p className="text-xs font-semibold text-red-500">
                  {formik.errors.description}
                </p>
              )}
            </div>
            {/* price input */}
            <div className="flex flex-col space-y-1 mb-8">
              <label htmlFor="price" className="tracking-wider">
                Price:
              </label>
              <div className="flex">
                <span className="flex items-center justify-center border border-gray-300 border-r-0 py-2 px-3 bg-gray-300 text-black">
                  <FaDollarSign />
                </span>
                <input
                  type="number"
                  name="price"
                  id="price"
                  step="any"
                  min="0"
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  value={formik.values.price}
                  className="form-input rounded-r w-full bg-gray-100"
                  placeholder="Product price"
                />
              </div>
              {formik.touched.price && formik.errors.price && (
                <p className="text-xs font-semibold text-red-500">
                  {formik.errors.price}
                </p>
              )}
            </div>
            {/* category input */}
            <div className="flex flex-col space-y-1 mb-8">
              <label htmlFor="category" className="tracking-wider">
                Category:
              </label>
              <select
                name="category"
                id="category"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.category}
                className="form-select bg-gray-100"
              >
                <option value=""></option>
                <option value="desktop">Desktop</option>
                <option value="laptop">Laptop</option>
                <option value="printer">Printer</option>
                <option value="scanner">Scanner</option>
                <option value="tablet">Tablet</option>
                <option value="monitor">Monitor</option>
              </select>
              {formik.touched.category && formik.errors.category && (
                <p className="text-xs font-semibold text-red-500">
                  {formik.errors.category}
                </p>
              )}
            </div>
            {/* brand input */}
            <div className="flex flex-col space-y-1 mb-8">
              <label htmlFor="brand" className="tracking-wider mb-3">
                Brand:
              </label>
              <div className="flex justify-between items-center">
                <div className="flex items-center space-x-2">
                  <input
                    type="radio"
                    name="brand"
                    id="apple"
                    value="apple"
                    onChange={formik.getFieldProps("brand").onChange}
                    className="form-radio"
                  />
                  <label htmlFor="apple" className="tracking-widest">
                    Apple
                  </label>
                </div>
                <div className="flex items-center space-x-2">
                  <input
                    type="radio"
                    name="brand"
                    id="dell"
                    value="dell"
                    onChange={formik.getFieldProps("brand").onChange}
                    className="form-radio"
                  />
                  <label htmlFor="dell" className="tracking-widest">
                    Dell
                  </label>
                </div>
                <div className="flex items-center space-x-2">
                  <input
                    type="radio"
                    name="brand"
                    id="hp"
                    value="hp"
                    onChange={formik.getFieldProps("brand").onChange}
                    className="form-radio"
                  />
                  <label htmlFor="hp" className="tracking-widest">
                    HP
                  </label>
                </div>
                <div className="flex items-center space-x-2">
                  <input
                    type="radio"
                    name="brand"
                    id="samsung"
                    value="samsung"
                    onChange={formik.getFieldProps("brand").onChange}
                    className="form-radio"
                  />
                  <label htmlFor="samsung" className="tracking-widest">
                    Samsung
                  </label>
                </div>
              </div>
              {formik.touched.brand && formik.errors.brand && (
                <p className="text-xs font-semibold text-red-500">
                  {formik.errors.brand}
                </p>
              )}
            </div>
            {/* shipping input */}
            <div className="flex items-center space-x-3 mb-8">
              <input
                type="checkbox"
                name="shipping"
                id="shipping"
                onChange={() => formik.setFieldValue('shipping', !formik.values.shipping)}
                value={formik.values.shipping}
                className="form-checkbox"
              />
              <label htmlFor="shipping" className="tracking-wider">
                Free shipping
              </label>
            </div>
            {/* thumbnail input */}
            <div className="flex flex-col space-y-1 mb-8">
              <label htmlFor="thumbnail" className="tracking-wider">
                Thumbnail:
              </label>
              <input
                type="file"
                name="thumbnail"
                id="thumbnail"
                // onChange={(event) => {
                //   formik.setFieldValue("thumbnail", () => {
                //     const fd = new FormData();
                //     fd.append('thumbnail', event.currentTarget.files[0]);
                //     return fd;
                //   });
                // }}
                // onChange={(event) => {
                //   formik.setFieldValue('thumbnail', event.target.files[0]);
                // }}
                onChange={(e) => thumbnailHandler(e.target.files[0])}
                className="w-full"
              />
              {formik.touched.thumbnail && formik.errors.thumbnail && (
                <p className="text-xs font-semibold text-red-500">
                  {formik.errors.thumbnail}
                </p>
              )}
            </div>
            {/* images input */}
            <div className="flex flex-col space-y-1 mb-8">
              <label htmlFor="images" className="tracking-wider">
                Product Images:
              </label>
              <input
                type="file"
                name="images[]"
                id="images"
                // onChange={(event) => {
                //   // formik.setFieldValue("images", event.currentTarget.files)
                //   formik.setFieldValue("images", () => {
                //     const fd = new FormData();
                //     fd.append('images', event.target.files);
                //     return fd;
                //   })
                // }}
                onChange={imagesHandler}
                multiple
              />
              {/* <div className="w-full h-auto bg-gray-500" {...getRootProps()} >
                <input {...getInputProps()} />
                {
                  isDragActive ?
                  <p>Drop the images here ...</p> :
                  <p>Drag 'n' Drop 4 images here, or click the select images</p>
                }
              </div> */}
              {/* <Dropzone className="w-full h-auto rounded" accept="image/*" onDrop={(acceptedFiles) => {
                    if (acceptedFiles.length === 0) {
                        return;
                    }
                    formik.setFieldValue('images', formik.values.images.concat(acceptedFiles))
                }}>
                    {() => {
                        if (formik.values.images.length === 0) {
                            return <p>Upload 4 product images</p>
                        }
                    }}
                </Dropzone> */}
              {/* {formik.touched.thumbnail && formik.errors.thumbnail && (
                <p className="text-xs font-semibold text-red-500">
                  {formik.errors.thumbnail}
                </p>
              )} */}
            </div>
            <hr />
            <button
              type="submit"
              className="px-4 py-2 block mt-3 ml-auto text-primary border border-primary hover:text-white hover:bg-primary rounded-md"
            >
              Create Product
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default AddProduct;
