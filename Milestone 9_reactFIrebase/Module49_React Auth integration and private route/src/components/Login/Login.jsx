import React, { useContext } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../Contexts/AuthContext/AuthContext';

const Login = () => {
  const { signInUser,  signInWithGoogle } = useContext(AuthContext);

  const location = useLocation();
  const naviGate = useNavigate();

  const handleLogin = (event) => {
    event.preventDefault();
    const email = event.target.email.value;
    const password = event.target.password.value;
    console.log(email, password);

    signInUser(email, password)
      .then((userCredential) => {
        console.log(userCredential.user);
        event.target.reset();
        naviGate(location.state || '/');
      })
      .catch((error) => {
        console.log(error.code, error.message);
      });
  };
  const handleGoogleSignIn = () =>{
    signInWithGoogle()
      .then((userCredential) => {
        console.log(userCredential.user);
        naviGate(location.state || '/');
      })
      .catch((error) => {
        console.log("error fromsignin with google: ", error);
      });
  }
  return (
    <div className="min-h-screen flex items-center justify-center bg-base-200">
      <div className="card bg-base-100 w-full max-w-sm shadow-2xl">
        <div className="card-body">
          <h1 className="text-3xl font-bold text-center mb-4">Please Login</h1>
          <form onSubmit={handleLogin}>
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
              <button className="btn btn-neutral w-full mt-4">Login</button>
            </fieldset>
          </form>
          {/* with google */}
          <button className="btn bg-white text-black border-[#e5e5e5]" onClick={handleGoogleSignIn} >
            <svg
              aria-label="Google logo"
              width="16"
              height="16"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 512 512"
            >
              <g>
                <path d="m0 0H512V512H0" fill="#fff"></path>
                <path fill="#34a853" d="M153 292c30 82 118 95 171 60h62v48A192 192 0 0190 341"></path>
                <path fill="#4285f4" d="m386 400a140 175 0 0053-179H260v74h102q-7 37-38 57"></path>
                <path fill="#fbbc02" d="m90 341a208 200 0 010-171l63 49q-12 37 0 73"></path>
                <path fill="#ea4335" d="m153 219c22-69 116-109 179-50l55-54c-78-75-230-72-297 55"></path>
              </g>
            </svg>
            Signin with Google
          </button>
          <p>
            New to our website{' '}
            <Link to="/register" className="text-blue-500 underline">
              Create Account
            </Link>{' '}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;
