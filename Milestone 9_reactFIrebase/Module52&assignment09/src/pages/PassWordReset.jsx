import React, { useState, useContext } from 'react';
import { AuthContext } from '../Contexts/AuthContext';
import { NavLink, useLocation } from 'react-router-dom';
import { toast } from 'react-toastify';
const PassWordReset = () => {
  const { passWordReset } = useContext(AuthContext);
  const location = useLocation();
  const [email, setEmail] = useState(location.state?.email || '');
  const [isEmailSent, setIsEmailSent] = useState(false);
  const handleReset = (e) => {
    e.preventDefault();
    if (!email) {
      toast.error('Please enter an email address');
      return;
    }
    passWordReset(email)
      .then(() => {
        setIsEmailSent(true);
        setEmail('');
        toast.success('Password reset link sent!');
      })
      .catch((error) => toast.error(error.message));
  };
  return (
    <div className="flex items-center justify-center min-h-screen bg-base-200">
      <div className="card w-96 shadow-xl bg-base-100">
        <div className="card-body">
          <h2 className="font-playful text-center text-2xl font-semibold mb-4">Reset Password</h2>
          {isEmailSent ? (
            <div className="text-center text-green-600 mb-4">Email sent successfully! Check your inbox.</div>
          ) : (
            <form onSubmit={handleReset}>
              <label className="label"><span className="label-text">Email</span></label>
              <input type="email" name="email" placeholder="Enter your email" className="input input-bordered w-full mb-4" value={email} onChange={(e) => setEmail(e.target.value)} />
              <button type="submit" className="btn btn-primary w-full">Send Reset Link</button>
            </form>
          )}
          <div className="text-center mt-4">
            <p>Remember your password? <NavLink to="/auth/login" className="text-blue-600">Login</NavLink></p>
          </div>
        </div>
      </div>
    </div>
  );
};
export default PassWordReset;