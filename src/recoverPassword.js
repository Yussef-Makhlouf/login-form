
import React from 'react';
import { useForm } from 'react-hook-form';
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

// Validation schema
const schema = yup.object({
  email: yup.string().email('Invalid email').required('Email is required'),
}).required();

const RecoverPassword = () => {
  const { register, handleSubmit, formState: { errors } } = useForm({
    resolver: yupResolver(schema),
  });

  const onSubmit = (data) => {
    // Handle password recovery logic (e.g., API call)
    console.log(data);
    toast.success('Password recovery email sent!');
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-900">
      <div className="w-full max-w-md bg-black p-8 rounded-lg shadow-lg">
        <h2 className="text-center text-2xl font-bold text-white mb-4">Recover Password</h2>
        <p className="text-center text-gray-400 mb-6">Enter your email to receive a password recovery link.</p>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="mb-4">
            <input
              type="email"
              className="w-full p-3 bg-gray-700 text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-500"
              placeholder="Email Id *"
              {...register('email')}
            />
            {errors.email && <p className="text-red-500 text-sm mt-2">{errors.email.message}</p>}
          </div>
          <div>
            <button
              type="submit"
              className="w-full p-3 bg-yellow-500 text-gray-900 font-bold rounded-lg hover:bg-yellow-600 focus:outline-none focus:ring-2 focus:ring-yellow-500"
            >
              Send Recovery Email
            </button>
          </div>
        </form>
        <ToastContainer />
      </div>
    </div>
  );
};

export default RecoverPassword;