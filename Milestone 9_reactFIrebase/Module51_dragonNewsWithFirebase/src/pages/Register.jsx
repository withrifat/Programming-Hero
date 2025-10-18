import React, {  useContext } from 'react';
import { NavLink } from 'react-router';
import { AuthContext } from '../Contexts/AuthContext';

const Register = () => {
  const { createUser, setUser } = useContext(AuthContext);

  const handleRegister = (event) => {
    event.preventDefault();
    const form = event.target;
    // const name = form.name.value;
    // const photoURL = form.photoURL.value;
    const email = form.email.value;
    const password = form.password.value;

    createUser(email, password)
      .then((userCredential) => {
        const user = userCredential.user;
        setUser(user);

      })
      .catch((error) => {
        console.log(error.code, error.message);
      });
  };

  return (
    <div className="flex justify-center min-h-screen items-center">
      <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl py-5">
        <h2 className="font-semibold text-2xl text-center">Register your account</h2>
        <form onSubmit={handleRegister} className="card-body">
          <fieldset className="fieldset">
            <label className="label">Name</label>
            <input name="name" type="text" className="input" placeholder="Enter Your Name" />
            <label className="label">Photo URL</label>
            <input name="photoURL" type="text" className="input" placeholder="Enter your photo URL" />
            <label className="label">Email</label>
            <input name="email" type="email" className="input" placeholder="Email" />
            <label className="label">Password</label>
            <input name="password" type="password" className="input" placeholder="Password" />
            <p>
              Already Have Account?
              <NavLink className="text-red-500 ml-2 hover:underline" to="/auth/login">
                Login
              </NavLink>
            </p>
            <button type="submit" className="btn btn-neutral mt-4">
              Register
            </button>
          </fieldset>
        </form>
      </div>
    </div>
  );
};

export default Register;
