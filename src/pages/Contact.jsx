import { useState } from "react";
import {useForm} from "react-hook-form"

const Contact = () => {

  const {
    register,
    handleSubmit,
    formState: {errors},
  } = useForm();

  const onSubmit = (data) => {
    console.log(data);
    alert("submitted successfully");
  };

  return (
    <div className="max-w-md mx-auto p-6 bg-white rounded-md mt-10">
      <h2 className="text-2xl font-bold text-center bg-emerald-800 mb-6 text-amber-50">Contact Us</h2>
      <form className="space-y-4" onSubmit={handleSubmit(onSubmit)}>
        <div>
          <label className="block text-sm font-medium text-gray-700">First Name:</label>
          <input
            {...register("firstname",{required:"first name is required"})}
            placeholder="Enter your first name"
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-emerald-700"
          />
          {errors.firstname && <p className="text-red-500 text-sm mt-1">{errors.firstname.message}</p>}
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700">Last Name:</label>
          <input
            {...register("lastname",{required:"last name is required"})}
            placeholder="Enter your last name"
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-700"
          />
          {errors.lastname && <p className="text-red-500 text-sm mt-1">{errors.lastname.message}</p>}
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700">Email:</label>
          <input
            {...register("email",{required:"email required", pattern:{
              value:/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
              message:"Invaild Email"
            }})}
            placeholder="Enter your email"
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-700"
          />
          {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email.message}</p>}
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700">Phone Number:</label>
          <input
            {...register("pnum",{required:"phone number is required", pattern:{
              value:/^[0-9]+$/,
              message:"phone number must contain only digits",
            },})}
            placeholder="Enter your phone number"
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-700"
          />
          {errors.pnum && <p className="text-red-500 text mt-1">{errors.pnum.message}</p>}
        </div>

        <button
          type="submit"
          className="w-full bg-emerald-800 text-white py-2 px-4 rounded-md transition duration-300"
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default Contact;
