const Sponsored = () => {
  return (
    <div className="px-[64px] mx-auto">
      <div className="text-center md:w-[700px] w-3/4 mx-auto">
        <h1 className="font-bold text-3xl">Proud to Be Used By</h1>
        <p className="text-gray-700">
          Professionally cultivate one-to-one customer service with robust
          ideas. Dynamically innovate resource-leveling customer service for
          state of the art customer service.
        </p>
      </div>
      <div className="mt-12 grid grid-cols-1  md:grid-cols-4 lg:grid-cols-6 justify-center">
        <img className="scale-75  sm:w-4/5 w-2/3     " src="./verge.png" alt="" />
        <img className="scale-75 sm:w-4/5 w-2/3 " src="./slack.png" alt="" />
        <img className="scale-75 sm:w-4/5 w-2/3" src="./google.png" alt="" />
        <img className="scale-75 sm:w-4/5 w-2/3" src="./paypal.png" alt="" />
        <img className="scale-75 sm:w-4/5 w-2/3" src="./pinterest.png" alt="" />
        <img className="scale-75 sm:w-4/5 w-2/3" src="./mailchimp.png" alt="" />
      </div>
    </div>
  );
};

export default Sponsored;
