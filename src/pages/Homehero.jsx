import { useState, useEffect } from "react";

export default function Homehero() {
  const [backgroundIndex, setBackgroundIndex] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setBackgroundIndex((prevIndex) => (prevIndex + 1) % 3);
    }, 5000);

    return () => clearInterval(intervalId);
  }, []);

  const backgrounds = [
    "/books/01.jpg",
    "/books/02.jpg",
    "/books/03.jpg",
    "/books/04.jpg",
    "/books/05.jpg",
    "/books/06.jpg",
    "/books/07.jpg",
  ];

  const texts = [
    "Books Feed Your Soulsss",
    "Another Text for Second Image",
    "More Text for Third Image",
  ];

  const paragraphs = [
    [
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Cum ipsam et maxime libero inventore placeat illo, illum deserunt rem aperiam fuga repudiandae distinctio quo odio sit perspiciatis vero laudantium minima.",
      "Another paragraph for the first image. Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque ratione qui consectetur assumenda voluptatum nemo temporibus velit, dolore iusto quae.",
    ],
    [
      "Another paragraph for the second image. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam aspernatur dolore assumenda labore? Vel, ad est doloremque rerum corporis quibusdam perferendis itaque magnam!",
      "Yet another paragraph for the second image. Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi, quos incidunt. Fugiat nesciunt consequuntur quaerat repellat obcaecati vel, incidunt ullam?",
    ],
    [
      "Yet another paragraph for the third image. Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam autem minus fuga accusamus ad aliquid sint veniam quas, ipsum numquam?",
      "Final paragraph for the third image. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod, aliquam quae. Modi molestiae velit ab. Veniam optio molestias repudiandae, incidunt eaque ex sint temporibus saepe.",
    ],
  ];

  return (
    <div>
      <section
        className="pt-10 mx-2 mt-2 sm:pt-2 bg-cover bg-center h-[30rem] relative transition duration-1000 brightness-70"
        style={{
          backgroundImage: `url(${backgrounds[backgroundIndex]})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          transitionProperty: "background-image",
        }}
        id="home"
      >
        <div className="container px-8 flex flex-col md:flex-row items-center h-full">
          <div className="w-full  p-5">
            <div className="content flex flex-col justify-center items-center bg-transparent p-5 rounded-xl">
              <h3 className="text-2xl sm:text-4xl font-bold text-white mb-4 text-shadow">
                {texts[backgroundIndex]}
              </h3>
              {paragraphs[backgroundIndex].map((paragraph, index) => (
                <p
                  key={index}
                  className="text-sm sm:text-base text-white leading-relaxed mb-2 text-center text-shadow"
                >
                  {paragraph}
                </p>
              ))}
              <a
                href="#populer"
                className="btn bg-[#007bff] hover:text-black hover:bg-white text-white py-2 px-4 sm:px-6 rounded-full text-base sm:text-lg font-semibold transition duration-300 hover:bg-secondaryColor"
              >
                Shop Now!
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
