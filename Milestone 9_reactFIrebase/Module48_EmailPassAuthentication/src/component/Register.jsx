import { createUserWithEmailAndPassword } from 'firebase/auth';
import React, { useState } from 'react';
import { auth } from '../Firebase/Firebase.init';
import { FaEye, FaEyeSlash } from 'react-icons/fa';
import { Link } from 'react-router';

const Register = () => {
  const [error, setError] = useState('');
  const [success, setSuccess] = useState(false);
  const [showPassword, setShowPassword] = useState(false);

  const handleRegister = (event) => {
    event.preventDefault();
    const email = event.target.email.value;
    const password = event.target.password.value;
    const terms = event.target.terms.checked;
    console.log(terms);
    
    const passwordPattern = /^.{6,}$/;
    if (!passwordPattern.test(password)) {
      setError('Password must be at least 6 characters long.');
      setSuccess(false);
      return;
    }

    setError('');
    setSuccess(false);

    if(!terms){
        setError('please accept our terms and condition ')
        return ;
    }
    createUserWithEmailAndPassword(auth, email, password)
      .then((result) => {
        console.log('User created:', result.user);
        setSuccess(true);
        event.target.reset();
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
          <h1 className="text-5xl font-bold text-gray-800">Create Your Account</h1>
          <p className="py-6 text-gray-600">Join us and start your journey today. It's quick, easy, and secure.</p>
        </div>

        <div className="card bg-base-100 w-full max-w-sm shadow-2xl">
          <div className="card-body">
            <form onSubmit={handleRegister}>
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
                <input  name='terms'  type="checkbox" defaultChecked className="checkbox" />

                <button type="submit" className="btn btn-neutral w-full mt-4">
                  Register
                </button>
              </fieldset>
            </form>
            <div className="">
            {error && (
              <p className="text-sm text-red-600 bg-red-50 border border-red-200 rounded-md p-2 mt-3">{error}</p>
            )}
            {success && (
              <p className="text-sm text-green-600 bg-green-50 border border-green-200 rounded-md p-2 mt-3">
                Registration successful!
              </p>
            )}
            </div>
            <p>Already have an account? <Link className='ml-2 font-bold text-blue-400' to={"/login"}>Login</Link> </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
