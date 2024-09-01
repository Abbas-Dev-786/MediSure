import { features } from "../constants";

const FeatureSection = () => {
  return (
    <div className="relative mt-16 border-b " id="working">
      <div className="text-center">
        <span className="text-2xl font-bold rounded-full bg-gradient-to-r from-[#26b170] to-[#009dd1] text-transparent bg-clip-text h-6 px-2 py-1 uppercase">
          How It Works
        </span>
        <h2 className="text-3xl sm:text-5xl lg:text-6xl mt-5 tracking-wide">
          A Seamless Process from Start to Finish
        </h2>
      </div>
      <div className="flex flex-wrap mt-10 lg:mt-20">
        {features.map((feature, index) => (
          <div key={index} className="w-full sm:w-1/2 lg:w-1/2 ">
            <div className="flex">
              <div className="flex mx-6 h-10 w-10 p-2 border text-green-500 justify-center items-center rounded-full">
                {feature.icon}
              </div>
              <div>
                <h5 className="mt-1 mb-6 text-xl">{feature.text}</h5>
                <p className="text-md p-2 mb-20 text-neutral-500">
                  {feature.description}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FeatureSection;
