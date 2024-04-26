// Login.js
import { useState } from "react";
import { Redirect } from "react-router-dom";


function Login() {
  const [isLoggedIn, setIsLoggedIn] = useState(false); // State to track login status
  const [role, setRole] = useState(""); // State to track user role

  // Function to handle form submission (authentication)
  const handleLogin = (selectedRole) => {
    // Perform authentication logic here (e.g., validate credentials)

    // For demonstration purposes, let's assume authentication is successful
    setIsLoggedIn(true);
    // Set user role based on the selectedRole parameter
    setRole(selectedRole);
  };

  // If user is already logged in, redirect them to the appropriate dashboard
  if (isLoggedIn) {
    if (role === "admin") {
      return <Redirect to="/dashboard/admin" />;
    } else if (role === "user") {
      return <Redirect to="/dashboard/user" />;
    }
  }

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
              onClick={() => handleLogin("admin")} // Call handleLogin function with "admin" role
              className="w-full px-8 py-3 font-semibold rounded-md bg-blue-500 text-white hover:bg-blue-600"
              onClick={handleLogin}
            >
              Sign in as Admin
            </button>
          </div>
          <div className="flex justify-center mt-4">
            <button
              type="button"
              onClick={() => handleLogin("user")} // Call handleLogin function with "user" role
              className="w-full px-8 py-3 font-semibold rounded-md bg-blue-500 text-white hover:bg-blue-600"
            >
              Sign in as User
            </button>
          </div>
        </form>
        <p className="text-sm text-gray-600">
          Already not have an account{" "}
          <Link to="/register">
            <span className="text-blue-400 hover:underline"> Register Now</span>
          </Link>
        </p>
      </div>
    </div>
  );
}

export default Login;
