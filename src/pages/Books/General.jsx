import { Link } from "react-router-dom";

export default function General() {
    return (
        <div className="mt-14 mb-12  xl:mx-10 lg:mx-10   xs:mx-5">
        <div className="flex flex-row justify-between">
            <h1 className="text-3xl font-bold aos-init aos-animate mt-10">New books</h1>
            <Link to="/premium-books"> <button className="text-center mt-10 cursor-pointer  bg-primary text-white py-1 px-5 rounded-md">
                View All Books
            </button></Link>
        </div>
        <div className="container mt-10">
            <div className="grid xs:grid-cols-2 sm:grid-cols-3 md:grid-cols-3 lg:grid-cols-4 place-items-center gap-5 ">


                <div data-aos="fade-up" data-aos-delay="0" className="space-y-3 aos-init aos-animate ">
                    <img src="https://hips.hearstapps.com/vader-prod.s3.amazonaws.com/1663778488-51vYL46dfL._SL500_.jpg?crop=1xw:1xh;center,top&resize=980:*" alt="" className="h-[220px] w-[150px] object-cover rounded-md" />
                    <div>
                        <h3 className="font-semibold">The Adventures of Amina Al-Sirafi, by Shannon Chakraborty</h3>
                        <p className="text-sm text-gray-600 mb-5">₹500</p>
                        {/* <div className="flex items-center gap-1">
            <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 576 512" className="text-yellow-400" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
              <path d="M316.9 18C311.6 7 300.4 0 288.1 0s-23.4 7-28.8 18L195 150.3 51.4 171.5c-12 1.8-22 10.2-25.7 21.7s-.7 24.2 7.9 32.7L137.8 329 113.2 474.7c-2 12 3 24.2 12.9 31.3s23 8 33.8 2.3l128.3-68.5 128.3 68.5c10.8 5.7 23.9 4.9 33.8-2.3s14.9-19.3 12.9-31.3L438.5 329 542.7 225.9c8.6-8.5 11.7-21.2 7.9-32.7s-13.7-19.9-25.7-21.7L381.2 150.3 316.9 18z"></path>
            </svg>
            <span className="my-2">5</span>
          </div> */}

                    </div>
                    <a href="#" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 mt-28 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Buy Now</a>
                </div>


                {/* Repeat the above block for each product */}

                <div data-aos="fade-up" data-aos-delay="0" className="space-y-3 aos-init aos-animate ">
                    <img src="https://hips.hearstapps.com/vader-prod.s3.amazonaws.com/1663778488-51vYL46dfL._SL500_.jpg?crop=1xw:1xh;center,top&resize=980:*" alt="" className="h-[220px] w-[150px] object-cover rounded-md" />
                    <div>
                        <h3 className="font-semibold">The Adventures of Amina Al-Sirafi, by Shannon Chakraborty</h3>
                        <p className="text-sm text-gray-600 mb-5">₹500</p>
                        {/* <div className="flex items-center gap-1">
            <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 576 512" className="text-yellow-400" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
              <path d="M316.9 18C311.6 7 300.4 0 288.1 0s-23.4 7-28.8 18L195 150.3 51.4 171.5c-12 1.8-22 10.2-25.7 21.7s-.7 24.2 7.9 32.7L137.8 329 113.2 474.7c-2 12 3 24.2 12.9 31.3s23 8 33.8 2.3l128.3-68.5 128.3 68.5c10.8 5.7 23.9 4.9 33.8-2.3s14.9-19.3 12.9-31.3L438.5 329 542.7 225.9c8.6-8.5 11.7-21.2 7.9-32.7s-13.7-19.9-25.7-21.7L381.2 150.3 316.9 18z"></path>
            </svg>
            <span className="my-2">5</span>
          </div> */}

                    </div>
                    <a href="#" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 mt-28 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Buy Now</a>
                </div>


                <div data-aos="fade-up" data-aos-delay="0" className="space-y-3 aos-init aos-animate ">
                    <img src="https://hips.hearstapps.com/vader-prod.s3.amazonaws.com/1663778488-51vYL46dfL._SL500_.jpg?crop=1xw:1xh;center,top&resize=980:*" alt="" className="h-[220px] w-[150px] object-cover rounded-md" />
                    <div>
                        <h3 className="font-semibold">The Adventures of Amina Al-Sirafi, by Shannon Chakraborty</h3>
                        <p className="text-sm text-gray-600 mb-5">₹500</p>
                        {/* <div className="flex items-center gap-1">
            <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 576 512" className="text-yellow-400" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
              <path d="M316.9 18C311.6 7 300.4 0 288.1 0s-23.4 7-28.8 18L195 150.3 51.4 171.5c-12 1.8-22 10.2-25.7 21.7s-.7 24.2 7.9 32.7L137.8 329 113.2 474.7c-2 12 3 24.2 12.9 31.3s23 8 33.8 2.3l128.3-68.5 128.3 68.5c10.8 5.7 23.9 4.9 33.8-2.3s14.9-19.3 12.9-31.3L438.5 329 542.7 225.9c8.6-8.5 11.7-21.2 7.9-32.7s-13.7-19.9-25.7-21.7L381.2 150.3 316.9 18z"></path>
            </svg>
            <span className="my-2">5</span>
          </div> */}

                    </div>
                    <a href="#" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 mt-28 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Buy Now</a>
                </div>



                <div data-aos="fade-up" data-aos-delay="0" className="space-y-3 aos-init aos-animate ">
                    <img src="https://hips.hearstapps.com/vader-prod.s3.amazonaws.com/1663778488-51vYL46dfL._SL500_.jpg?crop=1xw:1xh;center,top&resize=980:*" alt="" className="h-[220px] w-[150px] object-cover rounded-md" />
                    <div>
                        <h3 className="font-semibold">The Adventures of Amina Al-Sirafi, by Shannon Chakraborty</h3>
                        <p className="text-sm text-gray-600 mb-5">₹500</p>
                        {/* <div className="flex items-center gap-1">
            <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 576 512" className="text-yellow-400" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
              <path d="M316.9 18C311.6 7 300.4 0 288.1 0s-23.4 7-28.8 18L195 150.3 51.4 171.5c-12 1.8-22 10.2-25.7 21.7s-.7 24.2 7.9 32.7L137.8 329 113.2 474.7c-2 12 3 24.2 12.9 31.3s23 8 33.8 2.3l128.3-68.5 128.3 68.5c10.8 5.7 23.9 4.9 33.8-2.3s14.9-19.3 12.9-31.3L438.5 329 542.7 225.9c8.6-8.5 11.7-21.2 7.9-32.7s-13.7-19.9-25.7-21.7L381.2 150.3 316.9 18z"></path>
            </svg>
            <span className="my-2">5</span>
          </div> */}

                    </div>
                    <a href="#" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 mt-28 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Buy Now</a>
                </div>


                <div data-aos="fade-up" data-aos-delay="0" className="space-y-3 aos-init aos-animate ">
                    <img src="https://hips.hearstapps.com/vader-prod.s3.amazonaws.com/1663778488-51vYL46dfL._SL500_.jpg?crop=1xw:1xh;center,top&resize=980:*" alt="" className="h-[220px] w-[150px] object-cover rounded-md" />
                    <div>
                        <h3 className="font-semibold">The Adventures of Amina Al-Sirafi, by Shannon Chakraborty</h3>
                        <p className="text-sm text-gray-600 mb-5">₹500</p>
                        

                    </div>
                    <a href="#" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 mt-28 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Buy Now</a>
                </div>


                <div data-aos="fade-up" data-aos-delay="0" className="space-y-3 aos-init aos-animate ">
                    <img src="https://hips.hearstapps.com/vader-prod.s3.amazonaws.com/1663778488-51vYL46dfL._SL500_.jpg?crop=1xw:1xh;center,top&resize=980:*" alt="" className="h-[220px] w-[150px] object-cover rounded-md" />
                    <div>
                        <h3 className="font-semibold">The Adventures of Amina Al-Sirafi, by Shannon Chakraborty</h3>
                        <p className="text-sm text-gray-600 mb-5">₹500</p>
                        

                    </div>
                    <a href="#" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 mt-28 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Buy Now</a>
                </div>


                <div data-aos="fade-up" data-aos-delay="0" className="space-y-3 aos-init aos-animate ">
                    <img src="https://hips.hearstapps.com/vader-prod.s3.amazonaws.com/1663778488-51vYL46dfL._SL500_.jpg?crop=1xw:1xh;center,top&resize=980:*" alt="" className="h-[220px] w-[150px] object-cover rounded-md" />
                    <div>
                        <h3 className="font-semibold">The Adventures of Amina Al-Sirafi, by Shannon Chakraborty</h3>
                        <p className="text-sm text-gray-600 mb-5">₹500</p>
                        

                    </div>
                    <a href="#" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 mt-28 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Buy Now</a>
                </div>

                <div data-aos="fade-up" data-aos-delay="0" className="space-y-3 aos-init aos-animate ">
                    <img src="https://hips.hearstapps.com/vader-prod.s3.amazonaws.com/1663778488-51vYL46dfL._SL500_.jpg?crop=1xw:1xh;center,top&resize=980:*" alt="" className="h-[220px] w-[150px] object-cover rounded-md" />
                    <div>
                        <h3 className="font-semibold">The Adventures of Amina Al-Sirafi, by Shannon Chakraborty</h3>
                        <p className="text-sm text-gray-600 mb-5">₹500</p>
                        

                    </div>
                    <a href="#" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 mt-28 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Buy Now</a>
                </div>



            </div>


        </div>
    </div>
    );
}
