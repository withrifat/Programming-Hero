import React, { useState, useContext } from 'react';
import { AuthContext } from '../Contexts/AuthContext';
import { NavLink } from 'react-router';

const PassWordReset = () => {
  const { passWordReset } = useContext(AuthContext);
  const [email, setEmail] = useState("");

  const handleReset = (e) => {
    e.preventDefault();
    if (!email) return;

    passWordReset(email)
      .then(() => {
        console.log("Password reset email sent to:", email);
        setEmail(""); // clear input
      })
      .catch((error) => {
        console.error("Error sending password reset email:", error.message);
      });
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-base-200">
      <div className="card w-96 shadow-xl bg-base-100">
        <div className="card-body">
          <h2 className="text-center text-2xl font-semibold mb-4">Reset Password</h2>
          <form onSubmit={handleReset}>
            <label className="label">
              <span className="label-text">Email</span>
            </label>
            <input
              type="email"
              name="email"
              placeholder="Enter your email"
              className="input input-bordered w-full mb-4"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <button type="submit" className="btn btn-primary w-full">
              Send Reset Link
            </button>
          </form>
          <div className="text-center mt-4">
            <p>
              Remember your password?{" "}
              <NavLink to="/auth/login" className="text-blue-600">
                Login
              </NavLink>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PassWordReset;
