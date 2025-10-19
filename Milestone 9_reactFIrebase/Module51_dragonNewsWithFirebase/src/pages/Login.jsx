import React, { useContext } from 'react';
import { NavLink } from 'react-router';
import { AuthContext } from '../Contexts/AuthContext';
import { toast, ToastContainer } from 'react-toastify';

const Login = () => {
    const {loginUer, setUser} = useContext(AuthContext)
  const handleLogin = e => {
    e.preventDefault();
    const f = e.target;
    const email = f.email.value;
    const password = f.password.value;

    loginUer(email, password)
    .then((result)=>{
        const user = result.user;
        setUser(user)
        console.log(result)
        toast.success('Login successful!');
    })
    .catch((res)=>{
        console.log(res);
        toast.error(res.message);
    })
  };

  return (
    <div className="flex justify-center min-h-screen items-center">
        <ToastContainer position="top-right" autoClose={3000} />
      <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl py-5">
        <h2 className="font-semibold text-2xl text-center">Login your account</h2>
        <form onSubmit={handleLogin} className="card-body">
          <fieldset className="fieldset">
            <label className="label">Email</label>
            <input name="email" type="email" className="input" placeholder="Email" required />
            <label className="label">Password</label>
            <input name="password" type="password" className="input" placeholder="Password" required />
            <div><NavLink to="/auth/passwordreset" className="link link-hover">Forgot password?</NavLink></div>
            <p>Don't have an account?<NavLink className="text-red-500 ml-2 hover:underline" to="/auth/register">Register</NavLink></p>
            <button type="submit" className="btn btn-neutral mt-4">Login</button>
          </fieldset>
        </form>
      </div>
    </div>
  );
};

export default Login;
