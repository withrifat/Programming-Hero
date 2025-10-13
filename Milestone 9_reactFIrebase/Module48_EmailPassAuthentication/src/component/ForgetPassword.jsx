import React, { useState } from 'react';
import { sendPasswordResetEmail } from 'firebase/auth';
import { auth } from '../Firebase/Firebase.init';
import { Link } from 'react-router';

const ForgetPassword = () => {
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [error, setError] = useState('');

  const handleResetPassword = async (event) => {
    event.preventDefault();
    setMessage('');
    setError('');

    if (!email) {
      setError('Please enter your email address.');
      return;
    }

    try {
      await sendPasswordResetEmail(auth, email);
      setMessage('Password reset email sent! Please check your inbox.');
      setEmail('');
    } catch (err) {
      setError(err.message);
    }
  };

  return (
    <div className="hero bg-base-200 min-h-screen">
      <div className="hero-content flex-col">
        <div className="card bg-base-100 w-full max-w-sm shadow-2xl">
          <div className="card-body">
            <h1 className="text-3xl font-bold text-center mb-4">Reset Password</h1>
            <p className="text-sm text-gray-600 text-center mb-4">
              Enter your email address to receive a password reset link.
            </p>

            <form onSubmit={handleResetPassword}>
              <fieldset className="space-y-2">
                <label className="label">
                  <span className="label-text font-medium">Email</span>
                </label>
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter your email"
                  className="input input-bordered w-full"
                  required
                />

                <button type="submit" className="btn btn-neutral w-full mt-4">
                  Send Reset Link
                </button>
              </fieldset>
            </form>

            {error && (
              <p className="text-sm text-red-600 bg-red-50 border border-red-200 rounded-md p-2 mt-3">{error}</p>
            )}
            {message && (
              <p className="text-sm text-green-600 bg-green-50 border border-green-200 rounded-md p-2 mt-3">
                {message}
              </p>
            )}

            <p className="mt-4 text-center">
              <Link to="/login" className="text-blue-500 hover:underline">
                Back to Login
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ForgetPassword;
