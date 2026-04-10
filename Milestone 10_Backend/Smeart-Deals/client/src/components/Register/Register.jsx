import React, { useContext } from 'react';
import { Link, useNavigate } from 'react-router';
import { FcGoogle } from 'react-icons/fc'; 
import { AuthContext } from '../../context/AuthContex';

const Register = () => {
    const { createUser, signInWithGoogle } = useContext(AuthContext);
    const navigate = useNavigate();

    const handleRegister = (e) => {
        e.preventDefault();
        // const name = e.target.name.value;
        const email = e.target.email.value;
        // const image = e.target.image.value;
        const password = e.target.password.value;

        // Firebase logic for user registration
        createUser(email, password)
            .then(result => {
                console.log('User created:', result.user);
                
                navigate('/'); 
            })
            .catch(error => {
                console.error('Registration error:', error.message);
            });
        };
        
        const handleGoogleSignIn = () => {
            signInWithGoogle()
            .then(result => {
                console.log(result.user);
                const newUser = {
                    name: result.user.displayName,
                    email: result.user.email,
                    image: result.user.photoURL
                }
                // create user into database
                fetch('http://localhost:3000/users',{
                    method: 'POST',
                    headers: {
                        'content-type': 'application/json'
                    },
                    body: JSON.stringify(newUser)
                })
                .then(res => res.json())
                .then(data =>{
                    console.log("data after user saved", data);
                })
                navigate('/');
            })
            .catch(error => console.error(error));
    };

    return (
        <div className="min-h-screen flex items-center justify-center bg-white p-4">
            <div className="w-full max-w-[440px] text-center">
                {/* Title Section */}
                <h2 className="text-[32px] font-bold text-[#0b132a] mb-2">Register Now!</h2>
                <p className="text-sm text-gray-500 mb-8">
                    Already have an account? <Link to="/login" className="text-[#8b5cf6] font-medium hover:underline">Login Now</Link>
                </p>

                {/* Registration Form */}
                <form onSubmit={handleRegister} className="text-left shadow-2xl">
                    {/* Name Field */}
                    <div className="form-control w-full mb-6">
                        <label className="label pt-0">
                            <span className="label-text font-bold text-[#374151]">Name</span>
                        </label>
                        <input 
                            type="text" 
                            name="name" 
                            placeholder="Mariam Swarna" 
                            className="input input-ghost w-full p-0 border-t-0 border-x-0 border-b border-gray-200 rounded-none focus:border-[#8b5cf6] focus:bg-transparent text-gray-600 transition-colors"
                            required 
                        />
                    </div>

                    {/* Email Field */}
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

                    {/* Image URL Field */}
                    <div className="form-control w-full mb-6">
                        <label className="label pt-0">
                            <span className="label-text font-bold text-[#374151]">Image-URL</span>
                        </label>
                        <input 
                            type="text" 
                            name="image" 
                            placeholder="https://example.com/photo.jpg" 
                            className="input input-ghost w-full p-0 border-t-0 border-x-0 border-b border-gray-200 rounded-none focus:border-[#8b5cf6] focus:bg-transparent text-gray-600 transition-colors"
                            required 
                        />
                    </div>

                    {/* Password Field */}
                    <div className="form-control w-full mb-8">
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
                    </div>

                    {/* Register Button */}
                    <button type="submit" className="btn w-full bg-[#8b5cf6] hover:bg-[#7c3aed] text-white border-none normal-case text-base font-semibold h-[52px] rounded-lg shadow-lg shadow-purple-200 transition-all hover:-translate-y-1">
                        Register
                    </button>
                </form>

                {/* Divider */}
                <div className="divider my-8 text-sm font-bold text-black opacity-80">OR</div>

                {/* Google Sign Up Button */}
                <button 
                    onClick={handleGoogleSignIn} 
                    className="btn w-full bg-white hover:bg-gray-50 text-[#374151] border border-gray-100 rounded-lg normal-case text-base font-semibold h-[52px] shadow-sm transition-all"
                >
                    <FcGoogle className="text-2xl mr-2" />
                    Sign Up With Google
                </button>
            </div>
        </div>
    );
};

export default Register;