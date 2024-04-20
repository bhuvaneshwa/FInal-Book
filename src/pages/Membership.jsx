import { Card } from "flowbite-react";

export function Membership() {
    return (
        <div className="w-full">
            <div className="border-cyan-500 bg-gray-50 w-full p-5 flex flex-col space-y-5">
                <h1 className="text-3xl font-bold text-center text-cyan-500 mb-8">Membership</h1>

                <div className="flex flex-row">
                    <Card className=' w-full border-2 border-cyan-400 m-2 dark:bg-slate-50'>
                        <h5 className="mb-4 text-xl font-medium text-gray-500 dark:text-gray-400">Trial plan</h5>
                        <div className="flex items-baseline text-gray-900 dark:text-white">
                            <span className="text-3xl font-semibold text-black">$</span>
                            <span className="text-5xl font-extrabold tracking-tight text-black">899</span>
                            <span className="ml-1 text-xl font-normal text-gray-500 dark:text-gray-400">/month</span>
                        </div>
                        <ul className="my-7 space-y-5">
                            <li className="flex space-x-3">
                                <svg
                                    className="h-5 w-5 shrink-0 text-cyan-600 dark:text-cyan-500"
                                    fill="currentColor"
                                    viewBox="0 0 20 20"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <path
                                        fillRule="evenodd"
                                        d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                                        clipRule="evenodd"
                                    />
                                </svg>
                                <span className="text-base font-normal leading-tight text-gray-500 dark:text-gray-400">5 - 10 Books delivered</span>
                            </li>
                            <li className="flex space-x-3">
                                <svg
                                    className="h-5 w-5 shrink-0 text-cyan-600 dark:text-cyan-500"
                                    fill="currentColor"
                                    viewBox="0 0 20 20"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <path
                                        fillRule="evenodd"
                                        d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                                        clipRule="evenodd"
                                    />
                                </svg>
                                <span className="text-base font-normal leading-tight text-gray-500 dark:text-gray-400">
                                    Books worth 1000Rs
                                </span>
                            </li>
                            <li className="flex space-x-3">
                                <svg
                                    className="h-5 w-5 shrink-0 text-cyan-600 dark:text-cyan-500"
                                    fill="currentColor"
                                    viewBox="0 0 20 20"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <path
                                        fillRule="evenodd"
                                        d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                                        clipRule="evenodd"
                                    />
                                </svg>
                                <span className="text-base font-normal leading-tight text-gray-500 dark:text-gray-400">Integration help</span>
                            </li>
                            <li className="flex space-x-3">
                                <svg
                                    className="h-5 w-5 shrink-0 text-cyan-600 dark:text-cyan-500"
                                    fill="currentColor"
                                    viewBox="0 0 20 20"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <path
                                        fillRule="evenodd"
                                        d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                                        clipRule="evenodd"
                                    />
                                </svg>
                                <span className="text-base font-normal leading-tight text-gray-500 dark:text-gray-400">Email Support</span>
                            </li>
                        </ul>
                        <button
                            className="w-full px-6 py-3 text-lg font-semibold text-white transition-colors duration-200 transform bg-cyan-500 rounded-md hover:bg-cyan-600 hover:shadow-lg focus:outline-none focus:ring focus:ring-cyan-300"
                            type="button"
                        >
                            Choose Standard
                        </button>
                    </Card>


                    <Card className=' w-full border-2 border-cyan-400 m-2 dark:bg-slate-50'>
                        <h5 className="mb-4 text-xl font-medium text-gray-500 dark:text-gray-400">Trial plan</h5>
                        <div className="flex items-baseline text-gray-900 dark:text-white">
                            <span className="text-3xl font-semibold text-black">$</span>
                            <span className="text-5xl font-extrabold tracking-tight text-black">899</span>
                            <span className="ml-1 text-xl font-normal text-gray-500 dark:text-gray-400">/month</span>
                        </div>
                        <ul className="my-7 space-y-5">
                            <li className="flex space-x-3">
                                <svg
                                    className="h-5 w-5 shrink-0 text-cyan-600 dark:text-cyan-500"
                                    fill="currentColor"
                                    viewBox="0 0 20 20"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <path
                                        fillRule="evenodd"
                                        d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                                        clipRule="evenodd"
                                    />
                                </svg>
                                <span className="text-base font-normal leading-tight text-gray-500 dark:text-gray-400">5 - 10 Books delivered</span>
                            </li>
                            <li className="flex space-x-3">
                                <svg
                                    className="h-5 w-5 shrink-0 text-cyan-600 dark:text-cyan-500"
                                    fill="currentColor"
                                    viewBox="0 0 20 20"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <path
                                        fillRule="evenodd"
                                        d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                                        clipRule="evenodd"
                                    />
                                </svg>
                                <span className="text-base font-normal leading-tight text-gray-500 dark:text-gray-400">
                                    Books worth 1000Rs
                                </span>
                            </li>
                            <li className="flex space-x-3">
                                <svg
                                    className="h-5 w-5 shrink-0 text-cyan-600 dark:text-cyan-500"
                                    fill="currentColor"
                                    viewBox="0 0 20 20"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <path
                                        fillRule="evenodd"
                                        d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                                        clipRule="evenodd"
                                    />
                                </svg>
                                <span className="text-base font-normal leading-tight text-gray-500 dark:text-gray-400">Integration help</span>
                            </li>
                            <li className="flex space-x-3">
                                <svg
                                    className="h-5 w-5 shrink-0 text-cyan-600 dark:text-cyan-500"
                                    fill="currentColor"
                                    viewBox="0 0 20 20"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <path
                                        fillRule="evenodd"
                                        d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                                        clipRule="evenodd"
                                    />
                                </svg>
                                <span className="text-base font-normal leading-tight text-gray-500 dark:text-gray-400">Email Support</span>
                            </li>
                        </ul>
                        <button
                            className="w-full px-6 py-3 text-lg font-semibold text-white transition-colors duration-200 transform bg-cyan-500 rounded-md hover:bg-cyan-600 hover:shadow-lg focus:outline-none focus:ring focus:ring-cyan-300"
                            type="button"
                        >
                            Choose Standard
                        </button>
                    </Card>


                    <Card className=' w-full border-2 border-cyan-400 m-2 dark:bg-slate-50'>
                        <h5 className="mb-4 text-xl font-medium text-gray-500 dark:text-gray-400">Trial plan</h5>
                        <div className="flex items-baseline text-gray-900 dark:text-white">
                            <span className="text-3xl font-semibold text-black">$</span>
                            <span className="text-5xl font-extrabold tracking-tight text-black">899</span>
                            <span className="ml-1 text-xl font-normal text-gray-500 dark:text-gray-400">/month</span>
                        </div>
                        <ul className="my-7 space-y-5">
                            <li className="flex space-x-3">
                                <svg
                                    className="h-5 w-5 shrink-0 text-cyan-600 dark:text-cyan-500"
                                    fill="currentColor"
                                    viewBox="0 0 20 20"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <path
                                        fillRule="evenodd"
                                        d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                                        clipRule="evenodd"
                                    />
                                </svg>
                                <span className="text-base font-normal leading-tight text-gray-500 dark:text-gray-400">5 - 10 Books delivered</span>
                            </li>
                            <li className="flex space-x-3">
                                <svg
                                    className="h-5 w-5 shrink-0 text-cyan-600 dark:text-cyan-500"
                                    fill="currentColor"
                                    viewBox="0 0 20 20"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <path
                                        fillRule="evenodd"
                                        d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                                        clipRule="evenodd"
                                    />
                                </svg>
                                <span className="text-base font-normal leading-tight text-gray-500 dark:text-gray-400">
                                    Books worth 1000Rs
                                </span>
                            </li>
                            <li className="flex space-x-3">
                                <svg
                                    className="h-5 w-5 shrink-0 text-cyan-600 dark:text-cyan-500"
                                    fill="currentColor"
                                    viewBox="0 0 20 20"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <path
                                        fillRule="evenodd"
                                        d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                                        clipRule="evenodd"
                                    />
                                </svg>
                                <span className="text-base font-normal leading-tight text-gray-500 dark:text-gray-400">Integration help</span>
                            </li>
                            <li className="flex space-x-3">
                                <svg
                                    className="h-5 w-5 shrink-0 text-cyan-600 dark:text-cyan-500"
                                    fill="currentColor"
                                    viewBox="0 0 20 20"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <path
                                        fillRule="evenodd"
                                        d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                                        clipRule="evenodd"
                                    />
                                </svg>
                                <span className="text-base font-normal leading-tight text-gray-500 dark:text-gray-400">Email Support</span>
                            </li>
                        </ul>
                        <button
                            className="w-full px-6 py-3 text-lg font-semibold text-white transition-colors duration-200 transform bg-cyan-500 rounded-md hover:bg-cyan-600 hover:shadow-lg focus:outline-none focus:ring focus:ring-cyan-300"
                            type="button"
                        >
                            Choose Standard
                        </button>
                    </Card>
                </div>
            </div>
        </div>
    );
}
