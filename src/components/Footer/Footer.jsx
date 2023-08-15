

const Footer = () => {
    return (
      <div>
        <footer className="lg:p-20 md:p-4 bg-[#151B28] text-base-content px-4 pt-8 mt-8">
          <div className="lg:w-5/6 mx-auto ">
            {/* Links and logo  */}
            <div className="grid lg:grid-cols-4 lg:gap-10 justify-between md:grid-cols-2  grid-cols-2 ">
              {/* Logo  */}
              <div className="space-y-4 w-5/6 md:order-1 lg:order-1 col-span-2 md:col-auto mb-5 md:mb-0">
                <div className="">
                  <img src="./lookscout.png" alt="" />
                </div>
                <p className="text-[#A5ACBA] ">
                  Generate outside the box thinking with the possibility to
                  targtet the low.
                </p>
              </div>
              {/* 1st links column */}
              <div className="flex flex-col space-y-3 w-1/2 md:order-3 md:mt-10 lg:order-2 lg:mt-0 lg:mx-auto mb-5 md:mb-0">
                <span className="text-xl text-white mb-3">Resources</span>
                <a className="hover:cursor-pointer text-[#A5ACBA] ">
                  Community
                </a>
                <a className="hover:cursor-pointer  text-[#A5ACBA]">Events</a>
                <a className="hover:cursor-pointer  text-[#A5ACBA]">
                  Help Center
                </a>
                <a className="hover:cursor-pointer  text-[#A5ACBA]">Partners</a>
              </div>
              {/* 2nd links column */}
              <div className="flex flex-col space-y-3 w-1/2 md:order-4 md:mt-10 lg:order-3 lg:mt-0 lg:mx-auto mb-5 md:mb-0">
                <span className="text-xl text-white mb-3">Products</span>
                <a className="hover:cursor-pointer text-[#A5ACBA] ">
                  Integrations
                </a>
                <a className="hover:cursor-pointer  text-[#A5ACBA]">
                  Solutions
                </a>
                <a className="hover:cursor-pointer  text-[#A5ACBA]">Features</a>
                <a className="hover:cursor-pointer  text-[#A5ACBA]">
                  Enterprise
                </a>
              </div>
              {/*Form column  */}
              <div className="w-full space-y-4 md:order-2 lg:order-4 col-span-2 md:col-auto mb-5 md:mb-0">
                <span className="text-xl text-white">
                  Get Email Notifications
                </span>
                <p className="text-[#A5ACBA]">
                  Generate outside the box thinking with the possibility to
                  targtet the low.
                </p>
                <div className="form-control w-full">
                  <div className="relative ">
                    <input
                      type="text"
                      placeholder="Enter email...."
                      className="input input-bordered w-full pr-16 text-[#A5ACBA] bg-[#2E3545] "
                    />
                    <button className="btn btn-primary absolute top-0 right-0 rounded-l-none ">
                      Submit
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* Divider part */}
          <hr className="lg:w-5/6 mx-auto text-[#A5ACBA] mt-12 opacity-40" />
          {/* Copyright part */}
          <div className="footer items-center pt-4  text-neutral-content lg:w-5/6 mx-auto">
            <div className="items-center grid-flow-col">
              <p className="text-[#A5ACBA]">
                © 2023 Lookscout. All Rights Reserved.
              </p>
            </div>
            <div className="grid-flow-col gap-6 md:place-self-center md:justify-self-end mx-auto md:mx-0">
             <img src="./facbook.png" alt="" />
              <img src="./google2.png" alt="" />
              <img src="./apple.png" alt="" />
              <img src="./instra.png" alt="" />
            </div>
          </div>
         
        </footer>
        
      </div>
    );
};

export default Footer;