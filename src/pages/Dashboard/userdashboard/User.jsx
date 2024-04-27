import React, { useState } from "react";
import Navbar from "./Navbar";
import NavPage from "./NavPage";
import Sidebar from './Sidebar';

const User = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true); // Set sidebar to be always visible initially

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <React.Fragment>
      {/* heading section */}
      <section>
        <div>
          <Navbar toggleSidebar={toggleSidebar} />
        </div>
      </section>

      {/* sidebar section */}
      <section>
        <div className='grid grid-cols-12'>
          <div className={`col-span-3 bg-black h-screen pl-2 md:col-span-2 ${isSidebarOpen ? '' : 'hidden'}`}>
            <Sidebar />
          </div>

          <div className='col-span-9 bg-white h-screen pl-2 md:col-span-10'>
            <NavPage />
          </div>
        </div>
      </section>
    </React.Fragment>
  );
};

export default User;
