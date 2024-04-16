

export default function SecondNavbar() {
  return (
    <div className="bg-gray-50 dark:bg-gray-200 dark:text-gray-200">
      <div className="container mx-auto px-5 py-4 flex justify-between items-center">
        <ul className="flex space-x-6 text-sm">
          <li className="">
            <a className="font-semibold text-gray-700 transition-colors duration-400 hover:text-blue-400">
              Track Order 1
            </a>
          </li>
          <li>
            <a className="font-semibold text-gray-700 transition-colors duration-400 hover:text-blue-400">
              About Us
            </a>
          </li>
          <li>
            <a className="font-semibold text-gray-700 transition-colors duration-400 hover:text-blue-400">
              Blog
            </a>
          </li>
          <li>
            <a className="font-semibold text-gray-700 transition-colors duration-400 hover:text-blue-400">
              Contact Us
            </a>
          </li>
          <li>
            <a className="font-semibold text-gray-700 transition-colors duration-400 hover:text-blue-400">
              FAQ
            </a>
          </li>
        </ul>
      </div>
      <hr className=' border-blue-400'></hr>
    </div>
  )
}
