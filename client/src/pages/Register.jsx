import React from "react";
import { useFormik } from "formik";
import * as Yup from "yup";

import { FaUserAlt } from "react-icons/fa";
import { FiLogIn } from "react-icons/fi";
import { RiLockPasswordFill } from "react-icons/ri";
import { MdEmail } from "react-icons/md";
import { Link } from "react-router-dom";

const Register = () => {
  const formik = useFormik({
    initialValues: {
      name: "",
      email: "",
      password: "",
      passwordConfirmation: "",
    },
    validationSchema: Yup.object({
      name: Yup.string().required("Required"),
      email: Yup.string().email("Invalid email address").required("Required"),
      password: Yup.string().required("Required"),
      passwordConfirmation: Yup.string()
        .oneOf([Yup.ref("password"), null], "Passwords must much")
        .required("Required"),
    }),
    onSubmit: (values) => {
      console.log(values);
    },
  });

  return (
    <div className="w-[80%] mx-auto mt-40 mb-52">
      <div className="w-[400px] rounded shadow-xl border-2 border-solid px-8 py-20 mx-auto">
        <h2 className="text-3xl uppercase tracking-wider font-bold text-center mb-12 select-none">
          <span className="text-primary">tech</span>
          <span className="text-secondary-200">shop</span>
        </h2>
        <form onSubmit={formik.handleSubmit}>
          <div className="flex flex-col space-y-1 mb-4">
            <label htmlFor="name" className="font-semibold tracking-wider">
              Name
            </label>
            <div className="flex py-1">
              <span className="flex items-center justify-center border border-gray-300 border-r-0 py-2 px-3 bg-gray-300  text-black">
                <FaUserAlt />
              </span>
              <input
                type="text"
                name="name"
                id="name"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.name}
                className="form-input rounded-r w-full"
                placeholder="Your name"
              />
            </div>
            {formik.touched.name && formik.errors.name && (
              <p className="text-xs font-semibold text-red-600">
                {formik.errors.name}
              </p>
            )}
          </div>
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
          <div className="flex flex-col space-y-1 mb-4">
            <label
              htmlFor="passwordConfirmation"
              className="font-semibold tracking-wider"
            >
              Confirm Password
            </label>
            <div className="flex py-1">
              <span className="flex items-center justify-center border border-gray-300 border-r-0 py-2 px-3 bg-gray-300  text-black">
                <RiLockPasswordFill />
              </span>
              <input
                type="password"
                name="passwordConfirmation"
                id="passwordConfirmation"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.passwordConfirmation}
                className="form-input rounded-r w-full"
                placeholder="********"
              />
            </div>
            {formik.touched.passwordConfirmation &&
              formik.errors.passwordConfirmation && (
                <p className="text-xs text-red-600">
                  {formik.errors.passwordConfirmation}
                </p>
              )}
          </div>
          <hr />
          <button
            type="submit"
            className="px-4 py-2 block mt-3 ml-auto text-primary border border-primary hover:text-white hover:bg-primary rounded-md"
          >
            <span className="inline-flex justify-items-center mr-1">
              <FiLogIn />{" "}
            </span>
            Sign up
          </button>
        </form>
        <p className="text-center mt-6">
          Already have an account?{" "}
          <Link to="/login" className="text-primary">
            Sign in
          </Link>{" "}
        </p>
      </div>
    </div>
  );
};

export default Register;
