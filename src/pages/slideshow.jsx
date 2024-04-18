import React, { useState } from 'react';

const Slideshow = () => {
    const [currentIndex, setCurrentIndex] = useState(0);

    const nextSlide = () => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % 6);
    };

    const prevSlide = () => {
        setCurrentIndex((prevIndex) => (prevIndex - 1 + 6) % 6);
    };

    const items = [1, 2, 3, 4, 5, 6]; // Array of item indices

    return (
        <div className="box-border m-0 p-0">
            <div className="overflow-hidden bg-gray-300">
                <div className="container absolute left-1/2 top-1/2 transform -translate-x-2/4 -translate-y-2/4 w-96 h-96 shadow-md bg-gray-200">
                    <div className="slide relative">
                        {items.map((index) => (
                            <div
                                key={index}
                                className={`item ${currentIndex === index - 1 ? 'active' : ''
                                    } ${index === 1
                                        ? 'left-0'
                                        : index === 2
                                            ? 'left-1/2'
                                            : `left-${50 + (index - 2) * 22}rem`
                                    } w-48 h-72 absolute translate-y-0 shadow-md bg-center bg-cover inline-block transition-all duration-500 ease-in-out rounded-lg`}
                                style={{
                                    backgroundImage: `url(https://i.ibb.co/qCkd9jS/img${index}.jpg)`,
                                }}
                            >
                                <div className="content bg-black bg-opacity-50 p-6 rounded-lg absolute top-1/2 left-full transform -translate-y-1/2 -translate-x-full transition duration-500 ease-in-out opacity-0 group-hover:opacity-100">
                                    <div className="name text-white text-4xl font-bold mb-4">
                                        Country {index}
                                    </div>
                                    <div className="des text-white">
                                        Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                                        Ab, eum!
                                    </div>
                                    <button className="mt-4 px-6 py-2 bg-white text-black rounded-md">
                                        See More
                                    </button>
                                </div>
                            </div>
                        ))}
                    </div>
                    <div className="button absolute bottom-20 left-1/2 transform -translate-x-1/2">
                        <button
                            className="prev bg-white text-black rounded-full w-10 h-10 flex justify-center items-center border border-black hover:bg-black hover:text-white transition duration-300"
                            onClick={prevSlide}
                        >
                            <i className="fas fa-arrow-left"></i>
                        </button>
                        <button
                            className="next bg-white text-black rounded-full w-10 h-10 flex justify-center items-center border border-black hover:bg-black hover:text-white transition duration-300"
                            onClick={nextSlide}
                        >
                            <i className="fas fa-arrow-right"></i>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Slideshow;
