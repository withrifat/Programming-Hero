import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../Contexts/AuthContext/AuthContext';

const Register = () => {
  const { createUser } = useContext(AuthContext);

  const handleRegister = (event) => {
    event.preventDefault();
    const email = event.target.email.value;
    const password = event.target.password.value;

    createUser(email, password)
      .then((userCredential) => {
        console.log(userCredential.user);
        event.target.reset();
      })
      .catch((error) => {
        console.log(error.code, error.message);
      });
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-base-200">
      <div className="card bg-base-100 w-full max-w-sm shadow-2xl">
        <div className="card-body">
          <h1 className="text-3xl font-bold text-center mb-4">Please Register</h1>
          <form onSubmit={handleRegister}>
            <fieldset className="fieldset space-y-2">
              {/* email field */}
              <label className="label">Email</label>
              <input type="email" name="email" className="input input-bordered w-full" placeholder="Email" />
              {/* password field */}
              <label className="label">Password</label>
              <input type="password" name="password" className="input input-bordered w-full" placeholder="Password" />
              <div className="text-right">
                <a href="#" className="link link-hover text-sm">
                  Forgot password?
                </a>
              </div>
              <button className="btn btn-neutral w-full mt-4">Register</button>
            </fieldset>
          </form>
          <p>
            Already have an Account? please{' '}
            <Link to="/login" className="text-blue-500 underline">
              Login
            </Link>{' '}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Register;
