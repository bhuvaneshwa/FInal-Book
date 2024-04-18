import { Link } from "react-router-dom";

export default function SecondBanner() {
  return (
    <section className="py-2 dark:bg-gray-100 dark:text-gray-800">
      <h1 className="text-center text-3xl mb-5 font-bold">
        Top Collection List
      </h1>
      <div className="container px-4 mx-auto">
        <div className="flex flex-wrap items-stretch -mx-4">
          <div className="flex w-full mb-8 sm:px-4 md:w-1/2 lg:w-1/3 lg:mb-0">
            <div className="card-container w-full">
              <div className="card-content">
                <h4 className="text-2xl font-bold">General Books</h4>
                <p className="mt-3 leading-relaxed dark:text-gray-600">
                  Etiam ac convallis enim, eget euismod dolor.
                </p>
                <ul className="dark:text-gray-600">
                  <li className="flex mb-2 space-x-2">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                      className="w-6 h-6 dark:text-violet-600"
                    >
                      <path
                        fillRule="evenodd"
                        d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                        clipRule="evenodd"
                      ></path>
                    </svg>
                    <span>Aenean quis</span>
                  </li>
                  <li className="flex mb-2 space-x-2">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                      className="w-6 h-6 dark:text-violet-600"
                    >
                      <path
                        fillRule="evenodd"
                        d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                        clipRule="evenodd"
                      ></path>
                    </svg>
                    <span>Morbi semper</span>
                  </li>
                  <li className="flex mb-2 space-x-2">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                      className="w-6 h-6 dark:text-violet-600"
                    >
                      <path
                        fillRule="evenodd"
                        d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                        clipRule="evenodd"
                      ></path>
                    </svg>
                    <span>Tristique enim nec</span>
                  </li>
                </ul>
                <Link to="/general-books">
                  <button
                    type="button"
                    className="inline-block px-5 py-3 font-semibold tracking-wider text-center rounded bg-violet-600 text-gray-50"
                  >
                    View All
                  </button>
                </Link>
              </div>
            </div>
          </div>
          {/* Repeat the above structure for Premier Books and New Books */}
          {/* Premier Books */}
          <div className="flex w-full mb-8 sm:px-4 md:w-1/2 lg:w-1/3 lg:mb-0">
            <div className="card-container w-full">
              <div className="card-content">
                <h4 className="text-2xl font-bold">Premier Books</h4>
                <p className="mt-3 leading-relaxed dark:text-gray-600">
                  Etiam ac convallis enim, eget euismod dolor.
                </p>
                <ul className="dark:text-gray-600">
                  {/* Premier Books List */}
                </ul>
                <button
                  type="button"
                  className="inline-block px-5 py-3 font-semibold tracking-wider text-center rounded bg-violet-600 text-gray-50"
                >
                  View All
                </button>
              </div>
            </div>
          </div>
          {/* New Books */}
          <div className="flex w-full mb-8 sm:px-4 md:w-1/2 lg:w-1/3 lg:mb-0">
            <div className="card-container w-full">
              <div className="card-content">
                <h4 className="text-2xl font-bold">New Books</h4>
                <p className="mt-3 leading-relaxed dark:text-gray-600">
                  Etiam ac convallis enim, eget euismod dolor.
                </p>
                <ul className="dark:text-gray-600">
                  {/* New Books List */}
                </ul>
                <button
                  type="button"
                  className="inline-block px-5 py-3 font-semibold tracking-wider text-center rounded bg-violet-600 text-gray-50"
                >
                  View All
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
