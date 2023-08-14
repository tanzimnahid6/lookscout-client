import { BsArrowRightShort } from "react-icons/bs";

const LeftToright = () => {
  return (
    <div className="mt-[300px] md:mt-12 px-[50px]  ">
      <div className="md:flex justify-between  bg-[#151B28] px-8  items-center">
        <div className=" w-full md:w-auto">
          <img src="./left-photo.png" className="scale-75" alt="" />
        </div>
        <div className="md:w-[500px] w-full  text-white my-4">
          <div className="flex-col space-y-4 ">
            <div className="flex gap-2 items-start justify-start ">
              <div>
                <img className="mt-1 scale-90" src="./icone5.png" alt="" />
              </div>
              <div>
                <h1 className=" font-bold ">Explore ideas together</h1>
                <p className="text-[14px] text-gray-400">
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
                <img className="mt-1 scale-90" src="./icone5.png" alt="" />
              </div>
              <div>
                <h1 className=" font-bold ">Bring those ideas to life</h1>
                <p className="text-[14px] text-gray-400">
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
                <img className="mt-1 scale-90" src="./icone5.png" alt="" />
              </div>
              <div>
                <h1 className=" font-bold ">Ship better outcomes</h1>
                <p className="text-[14px] text-gray-400 ">
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

export default LeftToright;
