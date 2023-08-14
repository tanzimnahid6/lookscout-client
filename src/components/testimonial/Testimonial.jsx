import { useState } from "react";

const slidesData = [
  {
    logo: "lookscout-black.png",
    text: "1.Thank you for making it painless, pleasant and most of all hassle free! I love LookScout. I can't say enough about LookScout. Great job, I will definitely be ordering again!",
    image: "textimonial-avatar.png",
  },
  {
    logo: "lookscout-black.png",
    text: "2.Thank you for making it painless, pleasant and most of all hassle free! I love LookScout. I can't say enough about LookScout. Great job, I will definitely be ordering again!",
    image: "textimonial-avatar.png",
  },
  // Add more slide data as needed
];

const Testimonial = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((currentIndex + 1) % slidesData.length);
  };

  const previousSlide = () => {
    setCurrentIndex((currentIndex - 1 + slidesData.length) % slidesData.length);
  };

  return (
    <>
      <div className="text-center w-11/12 md:hidden mx-auto">
        <h1 className="font-bold text-xl">What Our Customers Say</h1>
        <p>
          Organically grow the holistic world view of disruptive innovation via
          workplace diversity and empowerment. Bring to the table win-win
          strategies to ensure domination.
        </p>
      </div>
      <div className="slider bg-[#F8F9FB] mx-4 mb-12 h-[260px] md:mx-auto overflow-hidden mt-[50px] md:w-4/5 relative">
        <div className="slide-container  flex">
          {slidesData.map((slide, index) => (
            <div
              key={index}
              className={`slide flex flex-col items-center mt-10 justify-center text-center transform ${
                index === currentIndex ? "translate-x-0" : "translate-x-full"
              } transition-transform duration-1000 ease-in-out absolute w-full`}
            >
              <div className="logo">
                <img className="scale-75" src={slide.logo} alt="Logo" />
              </div>
              <div className="text px-8 sm:px-12 md:px-52 font-semibold">
                <p>{slide.text}</p>
              </div>
              <div className="image flex items-center gap-2 mt-8">
                <div>
                  <img src={slide.image} alt="" />
                </div>
                <div className="text-left">
                  <h1 className="font-semibold">Lisa Smith</h1>
                  <p className="text-gray-600 text-sm">CEO Company</p>
                </div>
              </div>
            </div>
          ))}
        </div>
        <button
          id="prevButton"
          className="absolute left-0 top-1/2 transform text-black -translate-y-1/2 rounded-full bg-gray-200 hover:bg-gray-600 px-2 py-1 rounded-l z-10"
          onClick={previousSlide}
        >
          {">"}
        </button>
        <button
          id="nextButton"
          className="absolute right-0 top-1/2 transform -translate-y-1/2 rounded-full text-black bg-gray-200 hover:bg-gray-600 px-2 py-1 rounded-r z-10"
          onClick={nextSlide}
        >
          {">"}
        </button>
      </div>
    </>
  );
};

export default Testimonial;
