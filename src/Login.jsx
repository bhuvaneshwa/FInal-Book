import React, { useState } from "react";
import { Link } from "react-router-dom";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = () => {
    // Perform your authentication logic here
    // For demonstration, let's assume the correct email and password for admin and user
    const adminCredentials = { email: 'doodledream@gmail.com', password: 'doodle' };
    const userCredentials = { email: 'user@example.com', password: 'userpassword' };

    if ((email === adminCredentials.email && password === adminCredentials.password) ||
      (email === userCredentials.email && password === userCredentials.password)) {
      // If the email and password are correct, navigate to the respective dashboard
      if (email === adminCredentials.email) {
        window.location.href = "/admin/dashboard"; // Navigate to admin dashboard
      } else {
        window.location.href = "/user/dashboard"; // Navigate to user dashboard
      }
    } else {
      // Handle incorrect credentials
      alert("Incorrect email or password");
    }
  };

  return (
    <div className="flex justify-center items-center h-screen">
      <div className="w-full max-w-md p-6 rounded-md shadow-lg bg-white">
        <div className="mb-8 text-center">
          <h1 className="my-3 text-4xl font-bold">Sign in</h1>
          <p className="text-sm text-gray-600">Sign in to access your account</p>
        </div>
        <form noValidate="" className="space-y-6 mb-3">
          <div className="space-y-4">
            <div>
              <label htmlFor="email" className="block mb-2 text-sm">
                Email address
              </label>
              <input
                type="email"
                name="email"
                id="email"
                placeholder="leroy@jenkins.com"
                className="w-full px-3 py-2 border rounded-md"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div>
              <div className="flex justify-between mb-2">
                <label htmlFor="password" className="text-sm">
                  Password
                </label>
                <a
                  rel="noopener noreferrer"
                  href="#"
                  className="text-xs hover:underline text-gray-600"
                >
                  Forgot password?
                </a>
              </div>
              <input
                type="password"
                name="password"
                id="password"
                placeholder="*****"
                className="w-full px-3 py-2 border rounded-md"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
          </div>
          <div className="flex justify-center">
            <button
              type="button"
              className="w-full px-8 py-3 font-semibold rounded-md bg-blue-500 text-white hover:bg-blue-600"
              onClick={handleLogin}
            >
              Sign in
            </button>
          </div>
        </form>
        <p className="text-sm text-gray-600">
          Don't have an account yet?{" "}
          <Link to="/register">
            <span className="text-blue-400 hover:underline">Register Now</span>
          </Link>
        </p>
      </div>
    </div>
  );
}
