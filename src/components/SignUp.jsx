import React, { useState } from "react";
import { GoogleOAuthProvider } from "@react-oauth/google";
import { toast } from "react-toastify";
import axios from "axios";
import logo from "../assets/images/image1bg.jpg";

const SignUp = ({ onClose, onLoginClick }) => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSignup = async (e) => {
    e.preventDefault();

    if (!username || !email || !password || !confirmPassword) {
      toast.error("Please fill in all fields");
      return;
    }

    if (password !== confirmPassword) {
      toast.error("Passwords do not match");
      return;
    }

    if (password.length < 6) {
      toast.error("Password must be at least 6 characters");
      return;
    }

    setLoading(true);

    try {
      await axios.post("https://partydecorhub.com/api/signup", {
        username,
        email,
        password,
      });

      toast.success("Signup successful! Redirecting to login...");
      setTimeout(() => {
        onClose();
        onLoginClick();
      }, 1000);
    } catch (error) {
      toast.error(error.response?.data?.error || "Signup failed");
    } finally {
      setLoading(false);
    }
  };

  return (
    <GoogleOAuthProvider clientId="YOUR_GOOGLE_CLIENT_ID">
      <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 p-4">
        <div className="bg-white rounded-xl shadow-lg overflow-hidden max-w-md md:max-w-3xl w-full mx-4 md:mx-8 lg:mx-auto">
          {/* Responsive Layout */}
          <div className="flex flex-col md:flex-row">
            {/* Logo & Info Section */}
            <div className="w-full md:w-2/5 bg-blue-100 p-8 flex flex-col items-center justify-center text-center rounded-t-lg md:rounded-l-lg md:rounded-tr-none shadow-md">
              <img
                className="w-24 h-24 mb-5 rounded-full shadow-lg"
                src={logo}
                alt="Party Decor Hub"
              />
              <h2 className="text-2xl font-bold text-gray-800 mb-2">
                Party Decor Hub
              </h2>
              <p className="text-sm text-gray-700 max-w-xs">
                Bringing Your Celebration to Life, One Décor at a Time!
              </p>
            </div>

            {/* Form Section */}
            <div className="w-full md:w-3/5 p-6 relative">
            <button className="absolute top-3 right-3 text-gray-600 hover:text-gray-900 text-2xl font-bold" onClick={onClose}>
  ×
</button>

              <h2 className="text-lg font-semibold text-center text-gray-800">
                Create an Account
              </h2>
              <form onSubmit={handleSignup} className="mt-4">
                <label className="block text-sm font-medium text-gray-700">
                  Username
                </label>
                <input
                  type="text"
                  className="w-full p-2 border rounded"
                  placeholder="Enter your username"
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                  required
                />

                <label className="block mt-2 text-sm font-medium text-gray-700">
                  Email
                </label>
                <input
                  type="email"
                  className="w-full p-2 border rounded"
                  placeholder="Enter your email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />

                <label className="block mt-2 text-sm font-medium text-gray-700">
                  Password
                </label>
                <input
                  type="password"
                  className="w-full p-2 border rounded"
                  placeholder="Enter your password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                />

                <label className="block mt-2 text-sm font-medium text-gray-700">
                  Confirm Password
                </label>
                <input
                  type="password"
                  className="w-full p-2 border rounded"
                  placeholder="Confirm your password"
                  value={confirmPassword}
                  onChange={(e) => setConfirmPassword(e.target.value)}
                  required
                />

                <button
                  type="submit"
                  className="mt-4 w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700"
                  disabled={loading}
                >
                  {loading ? "Signing Up..." : "Sign Up"}
                </button>

                <p className="text-sm text-center mt-2">
                  Already have an account?{" "}
                  <span
                    className="text-blue-500 cursor-pointer"
                    onClick={onLoginClick}
                  >
                    Login here
                  </span>
                </p>
              </form>
            </div>
          </div>
        </div>
      </div>
    </GoogleOAuthProvider>
  );
};

export default SignUp;
