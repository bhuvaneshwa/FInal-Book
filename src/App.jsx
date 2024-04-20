import React, { Suspense } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Footer from "./Footer";


// Lazy import your pages
const LazyNavbar = React.lazy(() => import("./pages/Navbar"));
const LazyTopNavbar = React.lazy(() => import("./pages/TopNavbar"));
const LazySecondNavbar = React.lazy(() => import("./pages/SecondNavbar"));
const LazyHomeSection = React.lazy(() => import("./pages/HomeSection"));
const LazyAbout = React.lazy(() => import("./pages/About"));
const LazyContact = React.lazy(() => import("./pages/Contact"));
const LazyTracking = React.lazy(() => import("./pages/Tracking"));
const LazyBlog = React.lazy(() => import("./pages/Blog"));
const LazyRegisterForm = React.lazy(() => import("./RegisterForm"));
const LazyLogin = React.lazy(() => import("./Login"));
const LazyGeneralbook = React.lazy(() => import("./pages/Books/General"));
const LazyPremiumbook = React.lazy(() => import("./pages/Books/perminum"));
const LazyNewumbook = React.lazy(() => import("./pages/Books/NewBooks"));
const LazyMembership = React.lazy(() => import("./pages/Membership"));

// Loading component for Suspense fallback
const LoadingAnimation = () => {
  return (
    <div className="flex justify-center items-center h-screen">
      <div className="loader">Loading...</div>
    </div>
  );
};

export default function App() {
  return (
    <div>
      <Router>
        <Suspense fallback={<LoadingAnimation />}>
          <LazyTopNavbar />
          <LazySecondNavbar />
          <Routes>
            <Route path="/" element={<LazyNavbar />} />
            <Route path="/about" element={<LazyAbout />} />
            <Route path="/contact" element={<LazyContact />} />
            <Route path="/track" element={<LazyTracking />} />
            <Route path="/blog" element={<LazyBlog />} />
            <Route path="/generalview" element={<LazyGeneralbook />} />
            <Route path="/premiumbooks" element={<LazyPremiumbook />} />
            <Route path="/newbookview" element={<LazyNewumbook />} />
            <Route path="/register" element={<LazyRegisterForm />} />
            <Route path="/register/login" element={<LazyLogin />} />
            <Route path="/membership" element={<LazyMembership />} />
            {/* Add more routes here */}
          </Routes>
          <LazyHomeSection />
        </Suspense>
      </Router>
      <Footer />
    </div>
  );
}
