import { Link } from "react-router-dom";

export default function SecondBanner() {
  return (
    <section className="mx-2 mt-10 p-2 dark:bg-gray-100 dark:text-gray-800">
      <h1 className="text-center text-3xl mb-5 font-bold">Top Collection List</h1>
      <div className="container px-4">
        <div className="flex flex-wrap items-stretch -mx-4">


        <div className="flex w-full mb-8 sm:px-4 md:w-1/2 lg:w-1/3 lg:mb-0">
  <div className="card-container relative w-full bg-white dark:bg-gray-700 dark:text-gray-200 rounded-lg shadow-md overflow-hidden">
    <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: `url('/books/08.jpg')` }}></div>
    <div className="card-content relative z-10 p-6">
      <h4 className="text-2xl font-bold mb-3">General Books</h4>
      <p className="mb-4 leading-relaxed dark:text-gray-400">
        Etiam ac convallis enim, eget euismod dolor.
      </p>
      
      <Link to="/general-books">
        <button
          type="button"
          className="inline-block px-5 py-3 font-semibold tracking-wider text-center rounded bg-violet-600 text-gray-50 hover:bg-violet-700 transition duration-300"
        >
          View All
        </button>
      </Link>
    </div>
  </div>
</div>

<div className="flex w-full mb-8 sm:px-4 md:w-1/2 lg:w-1/3 lg:mb-0">
  <div className="card-container relative w-full bg-white dark:bg-gray-700 dark:text-gray-200 rounded-lg shadow-md overflow-hidden">
    <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: `url('/books/08.jpg')` }}></div>
    <div className="card-content relative z-10 p-6">
      <h4 className="text-2xl font-bold mb-3">General Books</h4>
      <p className="mb-4 leading-relaxed dark:text-gray-400">
        Etiam ac convallis enim, eget euismod dolor.
      </p>
      
      <Link to="/general-books">
        <button
          type="button"
          className="inline-block px-5 py-3 font-semibold tracking-wider text-center rounded bg-violet-600 text-gray-50 hover:bg-violet-700 transition duration-300"
        >
          View All
        </button>
      </Link>
    </div>
  </div>
</div>

<div className="flex w-full mb-8 sm:px-4 xl:lg:h-[20rem] md:w-1/2 lg:w-1/3 lg:mb-0">
  <div className="card-container relative w-full bg-white dark:bg-gray-700 dark:text-gray-200 rounded-lg shadow-md overflow-hidden">
    <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: `url('/books/08.jpg')` }}></div>
    <div className="card-content relative z-10 p-6">
      <h4 className="text-2xl font-bold mb-3">General Books</h4>
      <p className="mb-4 leading-relaxed dark:text-gray-400">
        Etiam ac convallis enim, eget euismod dolor.
      </p>
      
      <Link to="/general-books">
        <button
          type="button"
          className="inline-block px-5 py-3 font-semibold tracking-wider text-center rounded bg-violet-600 text-gray-50 hover:bg-violet-700 transition duration-300"
        >
          View All
        </button>
      </Link>
    </div>
  </div>
</div>



        
        </div>
      </div>
    </section>
  );
}
