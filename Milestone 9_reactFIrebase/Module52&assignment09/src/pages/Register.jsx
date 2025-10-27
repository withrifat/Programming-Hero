import React, { useContext, useState } from 'react';
import { NavLink, useNavigate } from 'react-router';
import { AuthContext } from '../Contexts/AuthContext';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { FcGoogle } from 'react-icons/fc';
import { FaEye, FaEyeSlash } from 'react-icons/fa';
import AOS from 'aos';
import 'aos/dist/aos.css';

const Register = () => {
  const { createUser, updateUser, googleSignIn } = useContext(AuthContext);
  const navigate = useNavigate();
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);

  React.useEffect(() => {
    document.title = 'ToyTopia | Register';
    AOS.init({ duration: 800, once: true });
  }, []);

  const handleRegister = async (e) => {
    e.preventDefault();
    const form = e.target;
    const name = form.name.value;
    const photoURL = form.photoURL.value;
    const email = form.email.value;

    if (password.length < 6) {
      toast.error('Password must be at least 6 characters long');
      return;
    }
    if (!/[A-Z]/.test(password)) {
      toast.error('Password must contain at least one uppercase letter');
      return;
    }
    if (!/[a-z]/.test(password)) {
      toast.error('Password must contain at least one lowercase letter');
      return;
    }

    try {
      const userCredential = await createUser(email, password);
      const user = userCredential.user;
      await updateUser(user, { displayName: name, photoURL });
      toast.success('Registration successful!');
      navigate('/');
    } catch (error) {
      toast.error(error.message);
    }
  };

  const handleGoogleSignIn = async () => {
    try {
      const result = await googleSignIn();
      toast.success(`Welcome ${result.user.displayName || result.user.email}`);
      navigate('/');
    } catch (error) {
      toast.error(error.message);
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center p-4">
      <ToastContainer position="top-right" autoClose={3000} />
      <div className="bg-white rounded-2xl shadow-xl p-8 w-full max-w-md" data-aos="fade-up">
        <h2 className="text-3xl font-bold text-center text-primary mb-6">Register with ToyTopia</h2>
        <form onSubmit={handleRegister} className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Name</label>
            <input
              name="name"
              type="text"
              placeholder="Enter your name"
              className="w-full p-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-primary focus:border-primary outline-none transition"
              required
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Photo URL</label>
            <input
              name="photoURL"
              type="text"
              placeholder="Enter your photo URL"
              className="w-full p-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-primary focus:border-primary outline-none transition"
              required
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Email</label>
            <input
              name="email"
              type="email"
              placeholder="Enter your email"
              className="w-full p-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-primary focus:border-primary outline-none transition"
              required
            />
          </div>
          <div className="relative">
            <label className="block text-sm font-medium text-gray-700 mb-1">Password</label>
            <input
              type={showPassword ? 'text' : 'password'}
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Enter your password"
              className="w-full p-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-primary focus:border-primary outline-none transition"
              required
            />
            <button
              type="button"
              onClick={() => setShowPassword(!showPassword)}
              className="absolute right-3 top-10 text-gray-500 hover:text-primary"
            >
              {showPassword ? <FaEyeSlash size={20} /> : <FaEye size={20} />}
            </button>
          </div>
          <div className="text-sm text-center">
            Already have an account?{' '}
            <NavLink to="/auth/login" className="text-primary hover:underline">
              Login
            </NavLink>
          </div>
          <button
            type="submit"
            className="w-full bg-primary text-white py-3 rounded-lg font-semibold hover:bg-primary/90 transition-transform duration-300 transform hover:scale-105"
          >
            Register
          </button>
          <button
            type="button"
            onClick={handleGoogleSignIn}
            className="w-full flex items-center justify-center gap-2 bg-white text-gray-700 py-3 rounded-lg border border-gray-300 font-semibold hover:bg-gray-100 transition-transform duration-300 transform hover:scale-105"
          >
            <FcGoogle size={20} /> Sign in with Google
          </button>
        </form>
      </div>
    </div>
  );
};

export default Register;