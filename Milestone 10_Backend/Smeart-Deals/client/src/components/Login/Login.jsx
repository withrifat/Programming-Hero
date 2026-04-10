import React, { useContext } from 'react';
import { Link, useNavigate } from 'react-router';
import { FcGoogle } from 'react-icons/fc'; 
import { AuthContext } from '../../context/AuthContex';

const Login = () => {
    const { signInUser, signInWithGoogle } = useContext(AuthContext);
    const navigate = useNavigate();

    const handleLogin = (e) => {
        e.preventDefault();
        const email = e.target.email.value;
        const password = e.target.password.value;

        signInUser(email, password)
            .then(result => {
                console.log(result.user);
                navigate('/');
            })
            .catch(error => console.error(error));
    };

    const handleGoogleSignIn = () => {
        signInWithGoogle()
            .then(result => {
                console.log(result.user);
                navigate('/');
            })
            .catch(error => console.error(error));
    };

    return (
        <div className="min-h-screen  flex items-center justify-center bg-white p-4">
            <div className="w-full max-w-[440px] text-center">
                {/* Title Section */}
                <h2 className="text-[32px] font-bold text-[#0b132a] mb-2">Login</h2>
                <p className="text-sm text-gray-500 mb-8">
                    Don't have an account? <Link to="/register" className="text-[#8b5cf6] font-medium hover:underline">Register Now</Link>
                </p>

                {/* Login Form */}
                <form onSubmit={handleLogin} className="text-left shadow-2xl">
                    <div className="form-control w-full mb-6">
                        <label className="label pt-0">
                            <span className="label-text font-bold text-[#374151]">Email</span>
                        </label>
                        <input 
                            type="email" 
                            name="email" 
                            placeholder="smsowkothasan@gmail.com" 
                            className="input input-ghost w-full p-0 border-t-0 border-x-0 border-b border-gray-200 rounded-none focus:border-[#8b5cf6] focus:bg-transparent text-gray-600 transition-colors"
                            required 
                        />
                    </div>

                    <div className="form-control w-full mb-6">
                        <label className="label pt-0">
                            <span className="label-text font-bold text-[#374151]">Password</span>
                        </label>
                        <input 
                            type="password" 
                            name="password" 
                            placeholder="*************" 
                            className="input input-ghost w-full p-0 border-t-0 border-x-0 border-b border-gray-200 rounded-none focus:border-[#8b5cf6] focus:bg-transparent text-gray-600 transition-colors"
                            required 
                        />
                        <label className="label p-0 mt-2">
                            <a href="#" className="label-text-alt text-gray-400 hover:text-gray-600 transition-colors">Forgot password?</a>
                        </label>
                    </div>

                    {/* Sign In Button */}
                    <button type="submit" className="btn w-full bg-[#8b5cf6] hover:bg-[#7c3aed] text-white border-none normal-case text-base font-semibold h-[52px] rounded-lg shadow-lg shadow-purple-200 transition-all hover:-translate-y-1">
                        Sign In
                    </button>
                </form>

                {/* Divider */}
                <div className="divider my-8 text-sm font-bold text-black opacity-80">OR</div>

                {/* Google Sign In Button */}
                <button 
                    onClick={handleGoogleSignIn} 
                    className="btn w-full bg-white hover:bg-gray-50 text-[#374151] border border-gray-100 rounded-lg normal-case text-base font-semibold h-[52px] shadow-sm transition-all"
                >
                    <FcGoogle className="text-2xl mr-2" />
                    Sign In With Google
                </button>
            </div>
        </div>
    );
};

export default Login;