import React, { Suspense } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// Lazy import your pages
const LazyNavbar = React.lazy(() => import("./pages/Navbar"));

// Loading component for Suspense fallback
const LoadingAnimation = () => {
  return (
    <div className="flex justify-center items-center h-screen">
      <div className="loader"></div>
    </div>
  );
};

export default function App() {
  return (
    <div>
      <Router>
        <Suspense fallback={<LoadingAnimation />}>
          <Routes>
            <Route path="/" element={<LazyNavbar />} />
            {/* Add more routes here */}
          </Routes>
        </Suspense>
      </Router>
    </div>
  );
}
