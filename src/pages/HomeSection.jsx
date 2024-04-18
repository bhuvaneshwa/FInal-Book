import { useState, useEffect } from "react";
import General from "./Books/General";
import Newbooks from "./Books/NewBooks";
import Permium from "./Books/perminum";
import Membership from "./Membership";
import SecondBanner from "./SecondBanner";
import Testimonial from "./Testimonial";

const HomeSection = () => {
  const [backgroundIndex, setBackgroundIndex] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setBackgroundIndex((prevIndex) => (prevIndex + 1) % 3);
    }, 5000);

    return () => clearInterval(intervalId);
  }, []);

  const backgrounds = [
    "url('https://images.unsplash.com/photo-1543002588-bfa74002ed7e?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxleHBsb3JlLWZlZWR8Mnx8fGVufDB8fHx8fA%3D%3D')",
    "url('https://images.unsplash.com/photo-1597167100957-1dfa110c1c14?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTl8fHJlYWRpbmclMjBib29rfGVufDB8fDB8fHww')",
    "url('https://www.theasianschool.net/blog/wp-content/uploads/2023/01/Here-Know-Why-Books-Are-Important-in-Students-Life-1.jpg')",
  ];

  return (
    <div>
      <section
        className="pt-20 bg-cover bg-gray-200 bg-center h-[30rem] relative transition duration-1000 mt-24"
        style={{
          backgroundImage: backgrounds[backgroundIndex],
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          transitionProperty: "background-image",
        }}
        id="home"
      >
        <div className="container mx-auto flex flex-col md:flex-row items-center h-full">
          <div className="w-full md:w-1/2 p-5">
            <div className="content flex flex-col justify-center items-center bg-transparent p-5 rounded-xl">
              <h3 className="text-4xl font-bold text-black">
                Books Feed Your Soulsss
              </h3>
              <p className="text-base text-gray-700 leading-relaxed my-4 text-center">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Cum
                ipsam et maxime libero inventore placeat illo, illum deserunt
                rem aperiam fuga repudiandae distinctio quo odio sit
                perspiciatis vero laudantium minima.
              </p>
              <a
                href="#populer"
                className="btn bg-[#007bff] hover:text-black hover:bg-white text-white py-2 px-6 rounded-full text-lg font-semibold transition duration-300 hover:bg-secondaryColor"
              >
                Shop Now !
              </a>
            </div>
          </div>
          <div className="w-full md:w-1/2">
            <img src="/blog3.jpg" alt="Hero Image" className="w-full" />
          </div>
          <div className="text-5xl pt-0 pl-28 flex h-[15rem]">
            <h1>Welcome</h1>
          </div>
        </div>
      </section>

      <SecondBanner />

      <div className="m-10">
        <General />
        <Permium />
        <Newbooks />
      </div>

      <Testimonial />

      <Membership />
    </div>
  );
};

export default HomeSection;
