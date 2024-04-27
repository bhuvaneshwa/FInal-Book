import React from "react";
import { Routes, Route } from "react-router-dom";
import Angular from './pages/Angular';
import Git from './pages/Git';
import Home from './pages/Home'

const NavPage = () => {
    return (
        <React.Fragment>
            <section>
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/git" element={<Git />} />
                    <Route path="/angular" element={<Angular />} />
                </Routes>
            </section>
        </React.Fragment>
    );
};

export default NavPage;
