import React from 'react';
import { NavLink } from 'react-router';

const Register = () => {
    return (
    <div className="flex justify-center min-h-screen items-center">
      <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl py-5">
        <h2 className="font-semibold text-2xl text-center">Register your account</h2>
        <div className="card-body">
          <fieldset className="fieldset">
            <label className="label">Name</label>
            <input name='name' type="text" className="input" placeholder="Enter Your Name" />
            <label className="label">Photo URL</label>
            <input name='photoURL' type="url" className="input" placeholder="Enter your photo URL" />
            <label className="label">Email</label>
            <input name='email' type="email" className="input" placeholder="Email" />
            <label className="label">Password</label>
            <input name='password' type="password" className="input" placeholder="Password" />
            <p>
              Already Have Account?<NavLink className='text-red-500 ml-2 hover:underline' to="/auth/login">Login</NavLink>
            </p>
            <button className="btn btn-neutral mt-4">Login</button>
          </fieldset>
        </div>
      </div>
    </div>
    );
};

export default Register;