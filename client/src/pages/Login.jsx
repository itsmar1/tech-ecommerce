import React from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import { motion } from 'framer-motion';

import { MdEmail } from "react-icons/md";
import { FiLogIn } from 'react-icons/fi'
import { RiLockPasswordFill } from "react-icons/ri";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from 'react-redux';
import { login } from '../store/actions/auth-actions';
import TheSpinner from "../layout/TheSpinner";



const containerVariants = {
  hidden: {
    opacity: 0
  },
  visible: {
    opacity: 1,
    transition: { duration: .3 }
  },
  exit: {
    x: '-100vw',
    transition: { ease: 'easeInOut' }
  }
};




const Login = () => {
  const dispatch = useDispatch();
  const loading = useSelector((state) => state.ui.loginLoading);

  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    validationSchema: Yup.object({
      email: Yup.string().email("Invalid email address").required("Required"),
      password: Yup.string().required("Required"),
    }),
    onSubmit: async (values) => {

      try {
        await dispatch(login(values));
      } catch (error) {
        console.log(error);
      }
      
    },
  });

  return (
    <motion.div className="w-[80%] mx-auto mt-40 mb-52"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      exit="exit"
    >
      <div className="w-[320px] sm:w-[400px] rounded shadow-xl border-2 border-solid px-4 sm:px-8 py-20 mx-auto">
        <h2 className="text-3xl uppercase tracking-wider font-bold text-center mb-12 select-none">
          <span className="text-primary">tech</span>
          <span className="text-secondary-200">shop</span>
        </h2>
        {loading ? <TheSpinner /> : 
        <form onSubmit={formik.handleSubmit}>
          <div className="flex flex-col space-y-1 mb-4">
            <label htmlFor="email" className="font-semibold tracking-wider">
              Email
            </label>
            <div className="flex py-1">
              <span className="flex items-center justify-center border border-gray-300 border-r-0 py-2 px-3 bg-gray-300  text-black">
                <MdEmail />
              </span>
              <input
                type="email"
                name="email"
                id="email"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.email}
                className="form-input rounded-r w-full"
                placeholder="example@domain.com"
              />
            </div>
            {formik.touched.email && formik.errors.email && (
              <p className="text-xs font-semibold text-red-600">
                {formik.errors.email}
              </p>
            )}
          </div>
          <div className="flex flex-col space-y-1 mb-4">
            <label htmlFor="password" className="font-semibold tracking-wider">
              Password
            </label>
            <div className="flex py-1">
              <span className="flex items-center justify-center border border-gray-300 border-r-0 py-2 px-3 bg-gray-300  text-black">
                <RiLockPasswordFill />
              </span>
              <input
                type="password"
                name="password"
                id="password"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.password}
                className="form-input rounded-r w-full"
                placeholder="********"
              />
            </div>
            {formik.touched.password && formik.errors.password && (
              <p className="text-xs text-red-600">{formik.errors.password}</p>
            )}
          </div>
          <hr />
            <button
              type="submit"
              className="px-4 py-2 block mt-3 ml-auto text-primary border border-primary hover:text-white hover:bg-primary rounded-md"
            >
              <span className="inline-flex justify-items-center mr-1"><FiLogIn /> </span>
              Login
            </button>
        </form>
        }
        <p className="text-center mt-6">Not registered? <Link to='/register' className="text-primary">Create an account</Link> </p>
      </div>
    </motion.div>
  );
};

export default Login;
