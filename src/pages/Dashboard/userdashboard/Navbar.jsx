import React from "react";
import { BsBook } from 'react-icons/bs';

const Navbar = () => {
    return (
        <React.Fragment>
            <section>
                <div className='bg-blue-800 h-20 w-full flex items-center pl-10 space-x-4'>
                    <div>
                        <BsBook className='text-white text-4xl' />
                    </div>
                    <div>
                        <p className='text-white text-3xl'>User</p>
                    </div>
                </div>
            </section>
        </React.Fragment>
    );
};

export default Navbar;
