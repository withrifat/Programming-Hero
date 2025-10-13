import { signInWithEmailAndPassword } from 'firebase/auth';
import React, { useState } from 'react';
import { auth } from '../Firebase/Firebase.init';
import { FaEye, FaEyeSlash } from 'react-icons/fa';
import { Link, NavLink } from 'react-router';
import ForgetPassword from './ForgetPassword';

const Login = () => {
  const [error, setError] = useState('');
  const [success, setSuccess] = useState(false);
  const [showPassword, setShowPassword] = useState(false);

  const handleLogin = (event) => {
    event.preventDefault();
    const email = event.target.email.value;
    const password = event.target.password.value;

    setError('');
    setSuccess(false);

    if (!email || !password) {
      setError('Please enter both email and password.');
      return;
    }

    signInWithEmailAndPassword(auth, email, password)
      .then((result) => {
        console.log('User logged in:', result.user);
        setSuccess(true);
        event.target.reset();
        if (!result.user.emailVerified) {
          alert('please verify your email address');
        }
      })
      .catch((error) => {
        console.log(error.message);
        setError(error.message);
      });
  };

  return (
    <div className="hero bg-base-200 min-h-screen">
      <div className="hero-content flex-col lg:flex-row-reverse">
        <div className="text-center lg:text-left max-w-md">
          <h1 className="text-5xl font-bold text-gray-800">Login Now</h1>
          <p className="py-6 text-gray-600">
            Enter your credentials to access your account. It's fast, easy, and secure.
          </p>
        </div>

        <div className="card bg-base-100 w-full max-w-sm shadow-2xl">
          <div className="card-body">
            <form onSubmit={handleLogin}>
              <fieldset className="space-y-2">
                <label className="label">
                  <span className="label-text font-medium">Email</span>
                </label>
                <input
                  name="email"
                  type="email"
                  placeholder="Enter your email"
                  className="input input-bordered w-full"
                  required
                />

                <label className="label mt-2">
                  <span className="label-text font-medium">Password</span>
                </label>
                <div className="relative">
                  <input
                    name="password"
                    type={showPassword ? 'text' : 'password'}
                    placeholder="Enter your password"
                    className="input input-bordered w-full pr-12"
                    required
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="btn btn-xs btn-outline absolute top-2 right-2"
                  >
                    {showPassword ? <FaEyeSlash /> : <FaEye />}
                  </button>
                </div>
                <div className="mt-2">
                  <NavLink to="/forgetpassword" className="link link-hover text-sm">
                    Forgot password?
                  </NavLink>
                </div>

                <button type="submit" className="btn btn-neutral w-full mt-4">
                  Login
                </button>
              </fieldset>
            </form>

            <div className="">
              {error && (
                <p className="text-sm text-red-600 bg-red-50 border border-red-200 rounded-md p-2 mt-3">{error}</p>
              )}
              {success && (
                <p className="text-sm text-green-600 bg-green-50 border border-green-200 rounded-md p-2 mt-3">
                  Login successful!
                </p>
              )}
            </div>

            <p className="mt-3">
              New to Our Website?{' '}
              <Link className="ml-2 font-bold text-blue-400" to="/register">
                Register
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
