import { Link } from "react-router-dom";

export default function General() {
  return (
    <div className="mt-6 mb-14 xl:mx-10 lg:mx-10   xs:mx-5">
      <div className="flex flex-row justify-between">
        <h1 className="text-3xl font-bold aos-init aos-animate mt-4 mx-4">
        GENERAL BOOKS
        </h1>
        <Link to="/generalview">
          {" "}
          <button className="text-center mt-4 mx-4 cursor-pointer  text-white bg-blue-950 py-1 px-5 rounded-md">
            View All Books
          </button>
        </Link>
      </div>
      <div className="container">
        <div className="grid mb-5 xs:grid-cols-2 sm:grid-cols-3 md:grid-cols-3 lg:grid-cols-4 place-items-center gap-5 ">
          <div className="mt-4 mb-4 w-80 transform overflow-hidden rounded-lg bg-white dark:bg-slate-200 shadow-md duration-300 hover:scale-105 hover:shadow-lg">
            <img
              className="h-48 w-full object-cover object-center"
              src="https://hips.hearstapps.com/vader-prod.s3.amazonaws.com/1663778488-51vYL46dfL._SL500_.jpg?crop=1xw:1xh;center,top&resize=980:*"
              alt="Book Cover"
            />
            <div className="p-4">
              <h2 className="mb-2 text-lg font-medium dark:text-black text-gray-900">
                Book Title
              </h2>
              <p className="mb-1 text-base dark:text-black text-gray-700">
                By <span className="font-semibold">Author Name</span>
              </p>
              <p className="mb-2 text-sm dark:text-black text-gray-600">
                Published Date:{" "}
                <span className="font-semibold">January 1, 2022</span>
              </p>
              <p className="mb-2 text-sm dark:text-black text-gray-600">
                Genre: <span className="font-semibold">Fiction</span>
              </p>
              <div className="flex items-center mb-2">
                <p className="mr-2 text-lg font-semibold text-black ">
                  $20.00
                </p>
                <p className="text-base font-medium text-gray-500 line-through dark:text-gray-300">
                  $25.00
                </p>
                <p className="ml-auto text-base font-medium text-green-500">
                  20% off
                </p>
              </div>
              <button className="bg-blue-950 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50">
                Add to Cart
              </button>
            </div>
          </div>

          <div className="mt-4 mb-4 w-80 transform overflow-hidden rounded-lg bg-white dark:bg-slate-200 shadow-md duration-300 hover:scale-105 hover:shadow-lg">
            <img
              className="h-48 w-full object-cover object-center"
              src="https://hips.hearstapps.com/vader-prod.s3.amazonaws.com/1663778488-51vYL46dfL._SL500_.jpg?crop=1xw:1xh;center,top&resize=980:*"
              alt="Book Cover"
            />
            <div className="p-4">
              <h2 className="mb-2 text-lg font-medium dark:text-black text-gray-900">
                Book Title
              </h2>
              <p className="mb-1 text-base dark:text-black text-gray-700">
                By <span className="font-semibold">Author Name</span>
              </p>
              <p className="mb-2 text-sm dark:text-black text-gray-600">
                Published Date:{" "}
                <span className="font-semibold">January 1, 2022</span>
              </p>
              <p className="mb-2 text-sm dark:text-black text-gray-600">
                Genre: <span className="font-semibold">Fiction</span>
              </p>
              <div className="flex items-center mb-2">
                <p className="mr-2 text-lg font-semibold text-black ">
                  $20.00
                </p>
                <p className="text-base font-medium text-gray-500 line-through dark:text-gray-300">
                  $25.00
                </p>
                <p className="ml-auto text-base font-medium text-green-500">
                  20% off
                </p>
              </div>
              <button className="bg-blue-950 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50">
                Add to Cart
              </button>
            </div>
          </div>


          <div className="mt-4 mb-4 w-80 transform overflow-hidden rounded-lg bg-white dark:bg-slate-200 shadow-md duration-300 hover:scale-105 hover:shadow-lg">
            <img
              className="h-48 w-full object-cover object-center"
              src="https://hips.hearstapps.com/vader-prod.s3.amazonaws.com/1663778488-51vYL46dfL._SL500_.jpg?crop=1xw:1xh;center,top&resize=980:*"
              alt="Book Cover"
            />
            <div className="p-4">
              <h2 className="mb-2 text-lg font-medium dark:text-black text-gray-900">
                Book Title
              </h2>
              <p className="mb-1 text-base dark:text-black text-gray-700">
                By <span className="font-semibold">Author Name</span>
              </p>
              <p className="mb-2 text-sm dark:text-black text-gray-600">
                Published Date:{" "}
                <span className="font-semibold">January 1, 2022</span>
              </p>
              <p className="mb-2 text-sm dark:text-black text-gray-600">
                Genre: <span className="font-semibold">Fiction</span>
              </p>
              <div className="flex items-center mb-2">
                <p className="mr-2 text-lg font-semibold text-black ">
                  $20.00
                </p>
                <p className="text-base font-medium text-gray-500 line-through dark:text-gray-300">
                  $25.00
                </p>
                <p className="ml-auto text-base font-medium text-green-500">
                  20% off
                </p>
              </div>
              <button className="bg-blue-950 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50">
                Add to Cart
              </button>
            </div>
          </div>


          <div className="mt-4 mb-4 w-80 transform overflow-hidden rounded-lg bg-white dark:bg-slate-200 shadow-md duration-300 hover:scale-105 hover:shadow-lg">
            <img
              className="h-48 w-full object-cover object-center"
              src="https://hips.hearstapps.com/vader-prod.s3.amazonaws.com/1663778488-51vYL46dfL._SL500_.jpg?crop=1xw:1xh;center,top&resize=980:*"
              alt="Book Cover"
            />
            <div className="p-4">
              <h2 className="mb-2 text-lg font-medium dark:text-black text-gray-900">
                Book Title
              </h2>
              <p className="mb-1 text-base dark:text-black text-gray-700">
                By <span className="font-semibold">Author Name</span>
              </p>
              <p className="mb-2 text-sm dark:text-black text-gray-600">
                Published Date:{" "}
                <span className="font-semibold">January 1, 2022</span>
              </p>
              <p className="mb-2 text-sm dark:text-black text-gray-600">
                Genre: <span className="font-semibold">Fiction</span>
              </p>
              <div className="flex items-center mb-2">
                <p className="mr-2 text-lg font-semibold text-black ">
                  $20.00
                </p>
                <p className="text-base font-medium text-gray-500 line-through dark:text-gray-300">
                  $25.00
                </p>
                <p className="ml-auto text-base font-medium text-green-500">
                  20% off
                </p>
              </div>
              <button className="bg-blue-950 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50">
                Add to Cart
              </button>
            </div>
          </div>


          <div className="mt-4 mb-4 w-80 transform overflow-hidden rounded-lg bg-white dark:bg-slate-200 shadow-md duration-300 hover:scale-105 hover:shadow-lg">
            <img
              className="h-48 w-full object-cover object-center"
              src="https://hips.hearstapps.com/vader-prod.s3.amazonaws.com/1663778488-51vYL46dfL._SL500_.jpg?crop=1xw:1xh;center,top&resize=980:*"
              alt="Book Cover"
            />
            <div className="p-4">
              <h2 className="mb-2 text-lg font-medium dark:text-black text-gray-900">
                Book Title
              </h2>
              <p className="mb-1 text-base dark:text-black text-gray-700">
                By <span className="font-semibold">Author Name</span>
              </p>
              <p className="mb-2 text-sm dark:text-black text-gray-600">
                Published Date:{" "}
                <span className="font-semibold">January 1, 2022</span>
              </p>
              <p className="mb-2 text-sm dark:text-black text-gray-600">
                Genre: <span className="font-semibold">Fiction</span>
              </p>
              <div className="flex items-center mb-2">
                <p className="mr-2 text-lg font-semibold text-black ">
                  $20.00
                </p>
                <p className="text-base font-medium text-gray-500 line-through dark:text-gray-300">
                  $25.00
                </p>
                <p className="ml-auto text-base font-medium text-green-500">
                  20% off
                </p>
              </div>
              <button className="bg-blue-950 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50">
                Add to Cart
              </button>
            </div>
          </div>


          <div className="mt-4 mb-4 w-80 transform overflow-hidden rounded-lg bg-white dark:bg-slate-200 shadow-md duration-300 hover:scale-105 hover:shadow-lg">
            <img
              className="h-48 w-full object-cover object-center"
              src="https://hips.hearstapps.com/vader-prod.s3.amazonaws.com/1663778488-51vYL46dfL._SL500_.jpg?crop=1xw:1xh;center,top&resize=980:*"
              alt="Book Cover"
            />
            <div className="p-4">
              <h2 className="mb-2 text-lg font-medium dark:text-black text-gray-900">
                Book Title
              </h2>
              <p className="mb-1 text-base dark:text-black text-gray-700">
                By <span className="font-semibold">Author Name</span>
              </p>
              <p className="mb-2 text-sm dark:text-black text-gray-600">
                Published Date:{" "}
                <span className="font-semibold">January 1, 2022</span>
              </p>
              <p className="mb-2 text-sm dark:text-black text-gray-600">
                Genre: <span className="font-semibold">Fiction</span>
              </p>
              <div className="flex items-center mb-2">
                <p className="mr-2 text-lg font-semibold text-black ">
                  $20.00
                </p>
                <p className="text-base font-medium text-gray-500 line-through dark:text-gray-300">
                  $25.00
                </p>
                <p className="ml-auto text-base font-medium text-green-500">
                  20% off
                </p>
              </div>
              <button className="bg-blue-950 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50">
                Add to Cart
              </button>
            </div>
          </div>


          <div className="mt-4 mb-4 w-80 transform overflow-hidden rounded-lg bg-white dark:bg-slate-200 shadow-md duration-300 hover:scale-105 hover:shadow-lg">
            <img
              className="h-48 w-full object-cover object-center"
              src="https://hips.hearstapps.com/vader-prod.s3.amazonaws.com/1663778488-51vYL46dfL._SL500_.jpg?crop=1xw:1xh;center,top&resize=980:*"
              alt="Book Cover"
            />
            <div className="p-4">
              <h2 className="mb-2 text-lg font-medium dark:text-black text-gray-900">
                Book Title
              </h2>
              <p className="mb-1 text-base dark:text-black text-gray-700">
                By <span className="font-semibold">Author Name</span>
              </p>
              <p className="mb-2 text-sm dark:text-black text-gray-600">
                Published Date:{" "}
                <span className="font-semibold">January 1, 2022</span>
              </p>
              <p className="mb-2 text-sm dark:text-black text-gray-600">
                Genre: <span className="font-semibold">Fiction</span>
              </p>
              <div className="flex items-center mb-2">
                <p className="mr-2 text-lg font-semibold text-black ">
                  $20.00
                </p>
                <p className="text-base font-medium text-gray-500 line-through dark:text-gray-300">
                  $25.00
                </p>
                <p className="ml-auto text-base font-medium text-green-500">
                  20% off
                </p>
              </div>
              <button className="bg-blue-950 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50">
                Add to Cart
              </button>
            </div>
          </div>


          <div className="mt-4 mb-4 w-80 transform overflow-hidden rounded-lg bg-white dark:bg-slate-200 shadow-md duration-300 hover:scale-105 hover:shadow-lg">
            <img
              className="h-48 w-full object-cover object-center"
              src="https://hips.hearstapps.com/vader-prod.s3.amazonaws.com/1663778488-51vYL46dfL._SL500_.jpg?crop=1xw:1xh;center,top&resize=980:*"
              alt="Book Cover"
            />
            <div className="p-4">
              <h2 className="mb-2 text-lg font-medium dark:text-black text-gray-900">
                Book Title
              </h2>
              <p className="mb-1 text-base dark:text-black text-gray-700">
                By <span className="font-semibold">Author Name</span>
              </p>
              <p className="mb-2 text-sm dark:text-black text-gray-600">
                Published Date:{" "}
                <span className="font-semibold">January 1, 2022</span>
              </p>
              <p className="mb-2 text-sm dark:text-black text-gray-600">
                Genre: <span className="font-semibold">Fiction</span>
              </p>
              <div className="flex items-center mb-2">
                <p className="mr-2 text-lg font-semibold text-black ">
                  $20.00
                </p>
                <p className="text-base font-medium text-gray-500 line-through dark:text-gray-300">
                  $25.00
                </p>
                <p className="ml-auto text-base font-medium text-green-500">
                  20% off
                </p>
              </div>
              <button className="bg-blue-950 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50">
                Add to Cart
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
