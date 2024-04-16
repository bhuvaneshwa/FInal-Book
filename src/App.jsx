import React, { Suspense } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Footer from "./Footer";


// Lazy import your pages
const LazyNavbar = React.lazy(() => import("./pages/Navbar"));

const Topnavbar = React.lazy(() =>import("./pages/TopNavbar"))
const Secondnavbar = React.lazy(() =>import("./pages/SecondNavbar"))


// Loading component for Suspense fallback
const LoadingAnimation = () => {
  return (
    <div className="flex justify-center items-center h-screen">
      <div className="loader">sdsdsd</div>
    </div>
  );
};

export default function App() {
  return (
    <div>
      <Topnavbar />
      <Secondnavbar />
      <Router>
        <Suspense fallback={<LoadingAnimation />}>
          <Routes>
            <Route path="/" element={<LazyNavbar />} />
            {/* Add more routes here */}
          </Routes>
        </Suspense>
      </Router>
      <Footer />
    </div>
  );
}
