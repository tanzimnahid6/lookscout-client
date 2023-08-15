

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
                  <img src="./public/lookscout.png" alt="" />
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
            <div className="grid-flow-col gap-4 md:place-self-center md:justify-self-end mx-auto md:mx-0">
              <a>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width={24}
                  height={24}
                  viewBox="0 0 24 24"
                  className="fill-current"
                >
                  <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z" />
                </svg>
              </a>
              <a>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width={24}
                  height={24}
                  viewBox="0 0 24 24"
                  className="fill-current"
                >
                  <path d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z" />
                </svg>
              </a>
              <a>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width={24}
                  height={24}
                  viewBox="0 0 24 24"
                  className="fill-current"
                >
                  <path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z" />
                </svg>
              </a>
            </div>
          </div>
         
        </footer>
        
      </div>
    );
};

export default Footer;