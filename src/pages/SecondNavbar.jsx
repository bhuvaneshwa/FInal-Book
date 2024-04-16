

export default function SecondNavbar() {
  return (
    <div className="bg-gray-50 dark:bg-gray-200 dark:text-gray-200">
      <div className="container mx-auto px-5 py-4 flex justify-between items-center">
        <ul className="flex space-x-4 text-sm">
          <li className="font-semibold text-gray-700 hover:text-[#606c38] hover:underline">
            Track Order
          </li>
          <li className="font-semibold text-gray-700 hover:text-[#606c38] hover:underline">
            About Us
          </li>
          <li className="font-semibold text-gray-700 hover:text-[#606c38] hover:underline">
            Blog
          </li>
          <li className="font-semibold text-gray-700 hover:text-[#606c38] hover:underline">
            Contact Us
          </li>
          <li className="font-semibold text-gray-700 hover:text-[#606c38] hover:underline">
            FAQ
          </li>
        </ul>
      </div>
      <hr className=' border-blue-400'></hr>
    </div>
  )
}
