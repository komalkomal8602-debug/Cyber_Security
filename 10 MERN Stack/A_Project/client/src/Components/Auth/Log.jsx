import React, { useState } from "react";

export default function Login() {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    console.log(formData);

    alert("Login Successful 🚀");
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-slate-100 px-4">
      
      <div className="w-full max-w-5xl bg-white rounded-3xl shadow-2xl overflow-hidden grid md:grid-cols-2">
        
        {/* Left Side Image */}
        <div className="hidden md:block">
          <img
            src="https://images.unsplash.com/photo-1498050108023-c5249f4df085"
            alt="login"
            className="w-full h-full object-cover"
          />
        </div>

        {/* Right Side Form */}
        <div className="p-8 md:p-12 flex flex-col justify-center">
          
          <h1 className="text-4xl font-bold text-slate-800 mb-2">
            Welcome Back 👋
          </h1>

          <p className="text-slate-500 mb-8">
            Login to your account
          </p>

          <form onSubmit={handleSubmit} className="space-y-5">
            
            {/* Email */}
            <div>
              <label className="block mb-2 text-sm font-medium text-slate-700">
                Email
              </label>

              <input
                type="email"
                name="email"
                placeholder="Enter your email"
                value={formData.email}
                onChange={handleChange}
                className="w-full px-4 py-3 border rounded-xl outline-none focus:ring-2 focus:ring-slate-400"
                required
              />
            </div>

            {/* Password */}
            <div>
              <label className="block mb-2 text-sm font-medium text-slate-700">
                Password
              </label>

              <input
                type="password"
                name="password"
                placeholder="Enter your password"
                value={formData.password}
                onChange={handleChange}
                className="w-full px-4 py-3 border rounded-xl outline-none focus:ring-2 focus:ring-slate-400"
                required
              />
            </div>

            {/* Forgot Password */}
            <div className="flex justify-end">
              <a
                href="#"
                className="text-sm text-slate-600 hover:text-slate-900"
              >
                Forgot Password?
              </a>
            </div>

            {/* Button */}
            <button
              type="submit"
              className="w-full bg-slate-800 text-white py-3 rounded-xl hover:bg-slate-700 transition"
            >
              Login
            </button>
          </form>

          {/* Signup Link */}
          <p className="text-center text-sm text-slate-500 mt-6">
            Don’t have an account?{" "}
            <span className="text-slate-800 font-semibold cursor-pointer hover:underline">
              Sign Up
            </span>
          </p>
        </div>
      </div>
    </div>
  );
}