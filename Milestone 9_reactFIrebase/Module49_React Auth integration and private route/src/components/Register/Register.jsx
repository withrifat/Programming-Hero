import React from "react";
import { Link } from "react-router";
import Login from "../Login/Login";

const Register = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-base-200">
      <div className="card bg-base-100 w-full max-w-sm shadow-2xl">
        <div className="card-body">
          <h1 className="text-3xl font-bold text-center mb-4">Please Register</h1>
          <form>
          <fieldset className="fieldset space-y-2">
            {/* email field */}
            <label className="label">Email</label>
            <input type="email" name="email" className="input input-bordered w-full" placeholder="Email" />
            {/* password field */}
            <label className="label">Password</label>
            <input type="password" name="password" className="input input-bordered w-full" placeholder="Password" />
            <div className="text-right">
              <a href="#" className="link link-hover text-sm">Forgot password?</a>
            </div>
            <button className="btn btn-neutral w-full mt-4">Register</button>
          </fieldset>
          </form>
          <p>Already have an Account? please <Link to="/login" className="text-blue-500 underline" >Login</Link> </p>
        </div>
      </div>
    </div>
  );
};

export default Register;
