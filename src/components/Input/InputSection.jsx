import { AiFillCheckCircle } from "react-icons/ai";
const InputSection = () => {
  return (
    <div className="mt-12 flex flex-col items-center justify-center">
      <div className="text-center text-sm">
        <h1 className="text-primary">1% OF THE INDUSTRY</h1>
        <h1 className="text-3xl font-semibold px-4 md:w-2/4 mx-auto">
          Welcome to your new digital reality that will rock your world truly at
          all throughout.
        </h1>
      </div>
      <div className="form-control my-4">
        <div className=" flex gap-2 sm:gap-0 flex-col sm:flex-row">
          <input
            type="email"
            placeholder="Enter Your Email"
            className=" h-[46px] px-2 border-2 shadow-md border-black  md:w-[388px] rounded sm:rounded-e-none "
          />
          <button className="btn h-[46px] sm:px-10 w-80  sm:w-12 btn-primary sm:rounded-s-none ">
            Submit
          </button>
        </div>
      </div>
      <div className="flex gap-4 my-4">
        <span className="flex items-center gap-1">
          <AiFillCheckCircle color="#437EF7" size={20}></AiFillCheckCircle>
          <p>Fully Secure</p>
        </span>
        <span className="flex items-center gap-1">
          <AiFillCheckCircle color="#437EF7" size={20}></AiFillCheckCircle>
          <p>24/7 Support</p>
        </span>
        <span className="flex items-center gap-1">
          <AiFillCheckCircle color="#437EF7" size={20}></AiFillCheckCircle>
          <p>Done Deal</p>
        </span>
      </div>
    </div>
  );
};

export default InputSection;
