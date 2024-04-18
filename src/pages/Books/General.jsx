import { Link } from "react-router-dom";

export default function General() {
    return (
        <div className="mt-14 mb-12">
            <div className="flex flex-row justify-between">
                <h1 className="text-3xl font-bold aos-init aos-animate mt-10">General books</h1>
                <Link to="/premiumbooks"> <button className="text-center mt-10 cursor-pointer  bg-primary text-white py-1 px-5 rounded-md">
                    View All Books
                </button></Link>
            </div>
            <div className="container mt-10">
                <div className="grid grid-cols-1 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 place-items-center gap-5 -mr-32">


                    <div data-aos="fade-up" data-aos-delay="0" className="space-y-3 aos-init aos-animate ">
                        <img src="https://images-us.bookshop.org/ingram/9780062963505.jpg?height=500&v=v2-314a5e611f125ea779c71f17189016c2" alt="" className="h-[220px] w-[150px] object-cover rounded-md" />
                        <div>
                            <h3 className="font-semibold">The Adventures of Amina Al-Sirafi, by Shannon Chakraborty</h3>
                            <p className="text-sm text-gray-600 mb-5">₹500</p>


                        </div>
                        <a href="#" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 mt-28 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Buy Now</a>
                    </div>


                    <div data-aos="fade-up" data-aos-delay="0" className="space-y-3 aos-init aos-animate ">
                        <img src="https://images-us.bookshop.org/ingram/9780062963505.jpg?height=500&v=v2-314a5e611f125ea779c71f17189016c2" alt="" className="h-[220px] w-[150px] object-cover rounded-md" />
                        <div>
                            <h3 className="font-semibold">The Adventures of Amina Al-Sirafi, by Shannon Chakraborty</h3>
                            <p className="text-sm text-gray-600 mb-5">₹500</p>

                        </div>
                        <a href="#" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 mt-28 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Buy Now</a>
                    </div>


                    <div data-aos="fade-up" data-aos-delay="0" className="space-y-3 aos-init aos-animate ">
                        <img src="https://images-us.bookshop.org/ingram/9780062963505.jpg?height=500&v=v2-314a5e611f125ea779c71f17189016c2" alt="" className="h-[220px] w-[150px] object-cover rounded-md" />
                        <div>
                            <h3 className="font-semibold">The Adventures of Amina Al-Sirafi, by Shannon Chakraborty</h3>
                            <p className="text-sm text-gray-600 mb-5">₹500</p>


                        </div>
                        <a href="#" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 mt-28 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Buy Now</a>
                    </div>



                    <div data-aos="fade-up" data-aos-delay="0" className="space-y-3 aos-init aos-animate ">
                        <img src="https://images-us.bookshop.org/ingram/9780062963505.jpg?height=500&v=v2-314a5e611f125ea779c71f17189016c2" alt="" className="h-[220px] w-[150px] object-cover rounded-md" />
                        <div>
                            <h3 className="font-semibold">The Adventures of Amina Al-Sirafi, by Shannon Chakraborty</h3>
                            <p className="text-sm text-gray-600 mb-5">₹500</p>


                        </div>
                        <a href="#" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 mt-28 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Buy Now</a>
                    </div>


                    <div data-aos="fade-up" data-aos-delay="0" className="space-y-3 aos-init aos-animate ">
                        <img src="https://images-us.bookshop.org/ingram/9780062963505.jpg?height=500&v=v2-314a5e611f125ea779c71f17189016c2" alt="" className="h-[220px] w-[150px] object-cover rounded-md" />
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
