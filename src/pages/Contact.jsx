/* eslint-disable react/no-unescaped-entities */


const Contact = () => {
  return (
    <div className="container lg:px-4 lg:mr-4 lg:ml-4">
      <section className="my-10">
      <div className="lg:w-full lg:mx-8">
            <h2 className="mb-6 lg:mb-3 lg:mr- text-3xl font-bold text-left text-blue-950">
              Contact us
            </h2>
            <h2 className="mb-10 text-3xl font-bold text-left text-blue-950">
              We're Here to Help!
            </h2>
          </div>
        <div className="flex flex-col lg:flex-row items-start">
          

          <div className="w-full lg:w-1/2">
            
            <div className="mb-12 bg-white rounded-lg shadow-md p-8">
              <form>
                <div className="mb-6">
                  <input
                    type="text"
                    className="w-full border border-blue-500 rounded py-2 px-3 outline-none transition duration-200 focus:border-blue-700"
                    placeholder="Name"
                  />
                </div>
                <div className="mb-6">
                  <input
                    type="email"
                    className="w-full border border-blue-500 rounded py-2 px-3 outline-none transition duration-200 focus:border-blue-700"
                    placeholder="Email address"
                  />
                </div>
                <div className="mb-6">
                  <textarea
                    className="w-full border border-blue-500 rounded py-2 px-3 outline-none transition duration-200 focus:border-blue-700"
                    rows="3"
                    placeholder="Your message"
                  ></textarea>
                </div>
                <div className="mb-6 flex items-center">
                  <input
                    className="mr-2 leading-tight"
                    type="checkbox"
                    checked
                  />
                  <label className="text-sm text-gray-700">
                    Send me a copy of this message
                  </label>
                </div>
                <button
                  type="submit"
                  className="w-full bg-blue-500 text-white py-2 px-4 rounded transition duration-200 hover:bg-blue-600"
                >
                  Send
                </button>
              </form>
            </div>
          </div>

          <div className="w-full lg:w-1/2 mt-6 lg:mt-0">
            <div className="flex flex-wrap">
              <div className="mb-6 w-full md:w-1/2 lg:w-full lg:px-3">
                <div className="flex items-start">
                  <div className="mr-4">
                    <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        className="w-6 h-6 text-blue-500"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M14.25 9.75v-4.5m0 4.5h4.5m-4.5 0l6-6m-3 18c-8.284 0-15-6.716-15-15V4.5A2.25 2.25 0 014.5 2.25h1.372c.516 0 .966.351 1.091.852l1.106 4.423c.11.44-.054.902-.417 1.173l-1.293.97a1.062 1.062 0 00-.38 1.21 12.035 12.035 0 007.143 7.143c.441.162.928-.004 1.21-.38l.97-1.293a1.125 1.125 0 011.173-.417l4.423 1.106c.5.125.852.575.852 1.091V19.5a2.25 2.25 0 01-2.25 2.25h-2.25z"
                        />
                      </svg>
                    </div>
                  </div>
                  <div>
                    <p className="mb-2 font-bold">Contact Number</p>
                    <p className="text-gray-700">8904765123</p>
                  </div>
                </div>
              </div>

              <div className="mb-6 w-full md:w-1/2 lg:w-full lg:px-3">
                <div className="flex items-start">
                  <div className="mr-4">
                    <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        className="w-6 h-6 text-blue-500"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M2.25 18.75a60.07 60.07 0 0115.797 2.101c.727.198 1.453-.342 1.453-1.096V18.75M3.75 4.5v.75A.75.75 0 013 6h-.75m0 0v-.375c0-.621.504-1.125 1.125-1.125H20.25M2.25 6v9m18-10.5v.75c0 .414.336.75.75.75h.75m-1.5-1.5h.375c.621 0 1.125.504 1.125 1.125v9.75c0 .621-.504 1.125-1.125 1.125h-.375m1.5-1.5H21a.75.75 0 00-.75.75v.75m0 0H3.75m0 0h-.375a1.125 1.125 0 01-1.125-1.125V15m1.5 1.5v-.75A.75.75 0 003 15h-.75M15 10.5a3 3 0 11-6 0 3 3 0 016 0zm3 0h.008v.008H18V10.5zm-12 0h.008v.008H6V10.5z"
                        />
                      </svg>
                    </div>
                  </div>
                  <div>
                    <p className="mb-2 font-bold">Email</p>
                    <p className="text-gray-700">doodledreams@gmail.com</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
