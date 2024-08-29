


// export default LoginForm;
import React, { useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function LoginForm() {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });

  const [errors, setErrors] = useState({});
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [showPassword, setShowPassword] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const validateForm = () => {
    const { email, password } = formData;
    let newErrors = {};

    if (!email) {
      newErrors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(email)) {
      newErrors.email = 'Email is invalid';
    }

    if (!password) {
      newErrors.password = 'Password is required';
    } else if (password.length < 6) {
      newErrors.password = 'Password must be at least 6 characters';
    }

    return newErrors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validateForm();
    setErrors(validationErrors);
    
    if (Object.keys(validationErrors).length === 0) {
      setIsSubmitted(true);
      // Handle form submission (e.g., API call)
      console.log('Form submitted:', formData);
      toast.success('Login successful!');
      // Reset form data and submission state after successful submission
      setFormData({ email: '', password: '' });
      setIsSubmitted(false);
    } else {
      setIsSubmitted(false);
      toast.error('Please fix the errors in the form.');
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-black p-8 rounded-xl shadow-xl w-full max-w-md">
        <h2 className="text-white text-3xl font-bold mb-6 text-center">Log In</h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label className="block text-gray-400 text-sm font-medium mb-2" htmlFor="email">
              Username or Email Address
            </label>
            <input
              className={`w-full px-4 py-3 bg-gray-700 text-white rounded-full focus:outline-none focus:ring-2 ${
                errors.email ? 'focus:ring-red-500' : 'focus:ring-orange-500'
              }`}
              id="email"
              name="email"
              type="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="furnitureapp24@gmail.com"
            />
            {errors.email && (
              <p className="text-red-500 text-sm mt-2">{errors.email}</p>
            )}
          </div>
          <div className="mb-6">
            <label className="block text-gray-400 text-sm font-medium mb-2" htmlFor="password">
              Password
            </label>
            <div className="relative">
              <input
                className={`w-full px-4 py-3 bg-gray-700 text-white rounded-full focus:outline-none focus:ring-2 ${
                  errors.password ? 'focus:ring-red-500' : 'focus:ring-orange-500'
                }`}
                id="password"
                name="password"
                type={showPassword ? 'text' : 'password'}
                value={formData.password}
                onChange={handleChange}
                placeholder="********"
              />
              <button
                type="button"
                className="absolute inset-y-0 right-3 flex items-center text-gray-500 hover:text-white"
                onClick={() => setShowPassword(!showPassword)}
              >
                {showPassword ? '🙈' : '👁️'}
              </button>
            </div>
            {errors.password && (
              <p className="text-red-500 text-sm mt-2">{errors.password}</p>
            )}
          </div>
          <div className="flex items-center justify-center">
            <button
              className="w-full bg-orange-500 hover:bg-orange-600 text-white font-bold py-3 px-4 rounded-full focus:outline-none focus:ring-2 focus:ring-orange-500"
              type="submit"
            >
              Log In
            </button>
          </div>
          <div className="text-center mt-6">
            <a
              className="inline-block align-baseline font-bold text-sm text-orange-500 hover:text-orange-600"
              href="#"
            >
              Lost your password?
            </a>
          </div>
        </form>
      </div>
      <ToastContainer />
    </div>
  );
}

export default LoginForm;

/////

