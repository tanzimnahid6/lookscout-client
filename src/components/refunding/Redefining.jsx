import { BsArrowRightShort } from "react-icons/bs";

const Redefining = () => {
  return (
    <div className="mt-[50px] px-[50px] ">
      <div className="text-center md:w-[800px] mx-auto h-24">
        <h1 className="text-3xl font-bold leading-10">
          Redefining Product Features
        </h1>
        <p className="text-gray-500 leading-6 mt-4">
          Keeping your eye on the ball while performing a deep dive on the
          start-up mentality to derive convergence <br /> on cross-platform
          integration.
        </p>
      </div>
      <div className="md:flex md:flex-row-reverse   gap-4 justify-center mt-16 md:mt-0 items-center h-[500px] ">
        <div className="md:w-[500px]   w-full">
          <img
            className="md:scale-75 scale-90 hidden md:block"
            src="./circle-photo.png"
            alt=""
          />
          <img
            src="./res-photo.png"
            className="md:hidden w-full py-4 "
            alt=""
          />
        </div>
        <div className="md:w-[500px] w-full ">
          <div className="flex-col space-y-4">
            <div className="flex gap-2 items-start justify-start ">
              <div>
                <img className="mt-1 scale-90" src="./icone5.png" alt="" />
              </div>
              <div>
                <h1 className="text-[#272D37] font-bold ">
                  Explore ideas together
                </h1>
                <p className="text-[14px] text-gray-700 ">
                  Efficiently unleash cross-media information without
                  cross-media value. <br className="hidden md:block" /> Quickly
                  timely deliverables for real-time schemas.
                </p>
                <div className="text-primary flex gap-1 items-center ">
                  <span>Learn More </span>
                  <span>
                    <BsArrowRightShort
                      className="mt-1"
                      size={25}
                    ></BsArrowRightShort>
                  </span>
                </div>
              </div>
            </div>
            <div className="flex gap-2 items-start justify-start ">
              <div>
                <img className="mt-1 scale-90" src="./light.png" alt="" />
              </div>
              <div>
                <h1 className="text-[#272D37] font-bold ">
                  Bring those ideas to life
                </h1>
                <p className="text-[14px] text-gray-700 ">
                  Efficiently unleash cross-media information without
                  cross-media value. <br className="hidden md:block" /> Quickly
                  timely deliverables for real-time schemas.
                </p>
                <div className="text-primary flex gap-1 items-center ">
                  <span>Learn More </span>
                  <span>
                    <BsArrowRightShort
                      className="mt-1"
                      size={25}
                    ></BsArrowRightShort>
                  </span>
                </div>
              </div>
            </div>
            <div className="flex gap-2 items-start justify-start ">
              <div>
                <img className="mt-1 scale-90" src="basket-ball.png" alt="" />
              </div>
              <div>
                <h1 className="text-[#272D37] font-bold ">
                  Ship better outcomes
                </h1>
                <p className="text-[14px] text-gray-700 ">
                  Efficiently unleash cross-media information without
                  cross-media value. <br className="hidden md:block" /> Quickly
                  timely deliverables for real-time schemas.
                </p>
                <div className="text-primary flex gap-1 items-center ">
                  <span>Learn More </span>
                  <span>
                    <BsArrowRightShort
                      className="mt-1"
                      size={25}
                    ></BsArrowRightShort>
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Redefining;
