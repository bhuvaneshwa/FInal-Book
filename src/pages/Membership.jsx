export default function Membership() {
  return (
    <div>
      <section className="dark:bg-gray-100 dark:text-gray-800">
        <div className="container flex flex-col-reverse mx-auto lg:flex-row">
          <div className="flex flex-col px-6 py-8 space-y-6 rounded-sm sm:p-8 lg:p-12 lg:w-1/2 xl:w-2/5">
            <h1>Join Our Member And Get Notify For New Updates!</h1>
            <div className="flex flex-row gap-5">
              <button className="bg-[#606c38] text-white my-4 p-2">
                Get Notify
              </button> 
              <button className="bg-[#606c38] text-white my-4 p-2">
                Join Member
              </button>
            </div>
          </div>
          <div className="lg:w-1/2 xl:w-3/5">
            <div className="flex items-center justify-center p-4 md:p-8 lg:p-12">
              <img
                src="/svg/img5.svg"
                alt=""
                className="rounded-lg  aspect-video sm:min-h-96"
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
