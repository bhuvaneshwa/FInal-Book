/* eslint-disable react/no-unescaped-entities */
import { Card } from "flowbite-react";

export function Membership() {
  return (
    <div className="w-full">
      <center>
        <div className=" max-w-5xl border-cyan-500 bg-gray-50 w-3/4 md:w-full p-5 flex flex-col space-y-5">
          <h1 className="text-3xl font-bold text-center text-cyan-500 mb-8">
            Membership
          </h1>

          <h1 className="text-2xl md:text-3xl font-bold text-center text-gray-700 mb-8">
            Our Membership ensures the quality books delivered to you every
            month worth 1000rs to build your child's Library.
          </h1>

          <div className="flex flex-col space-y-6 md:flex-row md:space-y-0 md:space-x-6">
            <Card className="w-full md:w-1/3 border-2 border-cyan-400 dark:bg-slate-50">
              <h5 className="mb-4 text-xl font-medium text-gray-500 dark:text-gray-400">
                Trial plan
              </h5>
              <div className="flex items-baseline text-gray-900 dark:text-white">
                <span className="text-3xl font-semibold text-black">$</span>
                <span className="text-5xl font-extrabold tracking-tight text-black">
                  899
                </span>
                <span className="ml-1 text-xl font-normal text-gray-500 dark:text-gray-400">
                  /month
                </span>
              </div>
              <ul className="my-7 space-y-5">
                <FeatureListItem text="5 - 10 Books delivered" />
                <FeatureListItem text="Books worth 1000Rs" />
                <FeatureListItem text="Integration help" />
                <FeatureListItem text="Email Support" />
              </ul>
              <button
                className="w-full px-6 py-3 text-lg font-semibold text-white transition-colors duration-200 transform bg-cyan-500 rounded-md hover:bg-cyan-600 hover:shadow-lg focus:outline-none focus:ring focus:ring-cyan-300"
                type="button"
              >
                Choose Standard
              </button>
            </Card>

            <Card className="w-full md:w-1/3 border-2 border-cyan-400 dark:bg-slate-50">
              <h5 className="mb-4 text-xl font-medium text-gray-500 dark:text-gray-400">
                6 month plan
              </h5>
              <div className="flex items-baseline text-gray-900 dark:text-white">
                <span className="text-3xl font-semibold text-black">$</span>
                <span className="text-5xl font-extrabold tracking-tight text-black">
                  799
                </span>
                <span className="ml-1 text-xl font-normal text-gray-500 dark:text-gray-400">
                  /month
                </span>
              </div>
              <ul className="my-7 space-y-5">
                <FeatureListItem text="30 - 50 Books delivered" />
                <FeatureListItem text="Books worth 6000Rs" />
                <FeatureListItem text="Integration help" />
                <FeatureListItem text="Email Support" />
              </ul>
              <button
                className="w-full px-6 py-3 text-lg font-semibold text-white transition-colors duration-200 transform bg-cyan-500 rounded-md hover:bg-cyan-600 hover:shadow-lg focus:outline-none focus:ring focus:ring-cyan-300"
                type="button"
              >
                Choose Standard
              </button>
            </Card>

            <Card className="w-full md:w-1/3 border-2 border-cyan-400 dark:bg-slate-50">
              <h5 className="mb-4 text-xl font-medium text-gray-500 dark:text-gray-400">
                Trial plan
              </h5>
              <div className="flex items-baseline text-gray-900 dark:text-white">
                <span className="text-3xl font-semibold text-black">$</span>
                <span className="text-5xl font-extrabold tracking-tight text-black">
                  899
                </span>
                <span className="ml-1 text-xl font-normal text-gray-500 dark:text-gray-400">
                  /month
                </span>
              </div>
              <ul className="my-7 space-y-5">
                <FeatureListItem text="5 - 10 Books delivered" />
                <FeatureListItem text="Books worth 1000Rs" />
                <FeatureListItem text="Integration help" />
                <FeatureListItem text="Email Support" />
              </ul>
              <button
                className="w-full px-6 py-3 text-lg font-semibold text-white transition-colors duration-200 transform bg-cyan-500 rounded-md hover:bg-cyan-600 hover:shadow-lg focus:outline-none focus:ring focus:ring-cyan-300"
                type="button"
              >
                Choose Standard
              </button>
            </Card>
          </div>
          <h2 className="mb-2 text-lg font-semibold text-gray-900 text-center">
            Why Doodle Dreams?
          </h2>
          <ul className="space-y-4 text-center text-gray-800 dark:text-gray-400">
            <FeatureListItem text="Amazing Premium Collections" />
            <FeatureListItem text="Build Your Home Library" />
            <FeatureListItem text="Accept Returns" />
            <FeatureListItem text="Free Activities every month according to child age" />
            <FeatureListItem text="Workshops" />
            <FeatureListItem text="Customised according to child's age and preference" />
            <FeatureListItem text="Video call Selection (appointment basis)" />
            <FeatureListItem text="When you subscribe for our membership Plan you would be delivered books worth 1000 rs every month." />
          </ul>
        </div>
      </center>
    </div>
  );
}

const FeatureListItem = ({ text }) => (
  <li className="flex text-gray-700 items-center space-x-3 rtl:space-x-reverse">
    <svg
      className="flex-shrink-0 w-3.5 h-3.5 text-green-500 dark:text-green-400"
      aria-hidden="true"
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 16 12"
    >
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
        d="M1 5.917 5.724 10.5 15 1.5"
      />
    </svg>
    <span>{text}</span>
  </li>
);
