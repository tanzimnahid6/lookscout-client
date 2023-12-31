import { motion } from "framer-motion";
const fadeInVariant = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 1.6 } }, // Increase the duration to 0.6 seconds
};
const Blog = () => {
  
  return (
    <div className=" mb-12  mx-auto mt-16">
      <div className="text-center w-3/4 mx-auto">
        <h1 className="text-3xl font-bold">Latest Blog Posts</h1>
        <p className="text-[16px] md:px-32 ">
          Completely synergize resource taxing relationships via premier niche
          markets. Professionally cultivate one-to-one customer service with
          robust ideas.
        </p>
        {/* card section */}
        <div className="grid place-items-center grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2">
          <motion.div
            className="p-4 text-left"
            initial="hidden"
            animate="visible"
            variants={fadeInVariant}
          >
            <div>
              <img src="./card1.png" alt="" />
            </div>
            <div>
              <h1 className="font-bold">
                Organize your digital assets with a new methodology here.
              </h1>
            </div>
            <div>
              <p className="text-gray-500 left-1 text-sm">
                Podcasting operational management inside of workflows to
                establish a framework seamless. Convergence collaboratively..
              </p>
            </div>
            <div className="flex justify-between items-center">
              <div className="flex gap-2 mt-2 items-center">
                <div>
                  <img src="./card-avater1.png" alt="" />
                </div>
                <div>
                  <h1 className="font-semibold">Andrew Miller</h1>
                  <p className="text-gray-500 -mt-1 text-sm">CEO</p>
                </div>
              </div>
              <div>25 April</div>
            </div>
          </motion.div>
          <motion.div
            className="p-4 text-left"
            initial="hidden"
            animate="visible"
            variants={fadeInVariant}
          >
            <div>
              <img src="./card1.png" alt="" />
            </div>
            <div>
              <h1 className="font-bold">
                Organize your digital assets with a new methodology here.
              </h1>
            </div>
            <div>
              <p className="text-gray-500 left-1 text-sm">
                Podcasting operational management inside of workflows to
                establish a framework seamless. Convergence collaboratively..
              </p>
            </div>
            <div className="flex justify-between items-center">
              <div className="flex gap-2 mt-2 items-center">
                <div>
                  <img src="./card-avater1.png" alt="" />
                </div>
                <div>
                  <h1 className="font-semibold">Andrew Miller</h1>
                  <p className="text-gray-500 -mt-1 text-sm">CEO</p>
                </div>
              </div>
              <div>25 April</div>
            </div>
          </motion.div>
          <motion.div
            className="p-4 text-left"
            initial="hidden"
            animate="visible"
            variants={fadeInVariant}
          >
            <div>
              <img src="./card1.png" alt="" />
            </div>
            <div>
              <h1 className="font-bold">
                Organize your digital assets with a new methodology here.
              </h1>
            </div>
            <div>
              <p className="text-gray-500 left-1 text-sm">
                Podcasting operational management inside of workflows to
                establish a framework seamless. Convergence collaboratively..
              </p>
            </div>
            <div className="flex justify-between items-center">
              <div className="flex gap-2 mt-2 items-center">
                <div>
                  <img src="./card-avater1.png" alt="" />
                </div>
                <div>
                  <h1 className="font-semibold">Andrew Miller</h1>
                  <p className="text-gray-500 -mt-1 text-sm">CEO</p>
                </div>
              </div>
              <div>25 April</div>
            </div>
          </motion.div>
          
        </div>
      </div>
    </div>
  );
};

export default Blog;
