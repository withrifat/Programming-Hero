import React, { useContext, useState } from 'react';
import { NavLink, useLocation, useNavigate } from 'react-router';
import { AuthContext } from '../Contexts/AuthContext';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { FcGoogle } from 'react-icons/fc';
import { FaEye, FaEyeSlash } from 'react-icons/fa';
import AOS from 'aos';
import 'aos/dist/aos.css';

const Login = () => {
  const { loginUser, setUser, googleSignIn } = useContext(AuthContext);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  React.useEffect(() => {
    document.title = 'ToyTopia | Login';
    AOS.init({ duration: 800, once: true });
  }, []);

  const handleLogin = (e) => {
    e.preventDefault();
    loginUser(email, password)
      .then((result) => {
        setUser(result.user);
        toast.success('Login successful!');
        navigate(location.state?.from?.pathname || '/', { replace: true });
      })
      .catch((error) => toast.error(error.message));
  };

  const handleGoogleSignIn = async () => {
    try {
      const result = await googleSignIn();
      toast.success(`Welcome ${result.user.displayName || result.user.email}`);
      navigate(location.state?.from?.pathname || '/', { replace: true });
    } catch (error) {
      toast.error(error.message);
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center p-4">
      <ToastContainer position="top-right" autoClose={3000} />
      <div className="bg-white rounded-2xl shadow-xl p-8 w-full max-w-md" data-aos="fade-up">
        <h2 className="text-3xl font-bold text-center text-primary mb-6">Login to ToyTopia</h2>
        <form onSubmit={handleLogin} className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Email</label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
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
          <div className="flex justify-between items-center text-sm">
            <NavLink to="/auth/passwordreset" className="text-primary hover:underline" state={{ email }}>
              Forgot password?
            </NavLink>
            <p>
              No account?{' '}
              <NavLink to="/auth/register" className="text-primary hover:underline">
                Register
              </NavLink>
            </p>
          </div>
          <button
            type="submit"
            className="w-full bg-primary text-white py-3 rounded-lg font-semibold hover:bg-primary/90 transition-transform duration-300 transform hover:scale-105"
          >
            Login
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

export default Login;