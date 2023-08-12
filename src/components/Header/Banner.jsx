

const Banner = () => {
    return (
      <div>
        <div className="md:flex gap-2 justify-center items-center px-[40px] bg-[#3971E7] h-[600px]">
          <div className="w-full h-[500px] md:w-1/2  grid grid-flow-row  pl-12 pr-2">
            <div className="flex flex-col mt-12 ">
              <h1 className="text-5xl font-bold text-white">
                Your supercharged Design Workflow
              </h1>
              <p className="text-xl text-gray-300 mt-8">
                We’ve been told it is not possible to overachieve our customers’
                expectations. We have not reinvented the wheel, we decided to
                build upon it. <br />
              </p>
            </div>
            <span className="">
              <button
                className=" bg-[#437EF7] text-white w-[120px] rounded-[6px] h-[45px]"
              >
                Get Started
              </button>
            </span>
            <div className="">
              <p className="text-gray-200">Who supports us</p>
              <div className="flex -mx-3 pt-2 ">
                <span>
                  <img className=" scale-75" src="./gitlab.png  " alt="" />
                </span>
                <span>
                  <img className=" scale-75" src="./logo.png  " alt="" />
                </span>
                <span>
                  <img className=" scale-75" src="./netflix.png " alt="" />
                </span>
                <span>
                  <img className=" scale-75" src="./paypal2.png  " alt="" />
                </span>
              </div>
            </div>
          </div>
          <div className="w-full md:w-1/2 h-[500px]  border-2"> right</div>
        </div>
      </div>
    );
};

export default Banner;