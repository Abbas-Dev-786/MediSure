import { CheckCircle2 } from "lucide-react";
import docImg from "../assets/doctors.png";
import { checklistItems } from "../constants";

const Workflow = () => {
  return (
    <div className="mt-12 border-b border-t pt-8" id="features">
      <div className="text-center">
        <span className="text-2xl font-bold rounded-full bg-gradient-to-r from-[#26b170] to-[#009dd1] text-transparent bg-clip-text h-6 px-2 py-1 uppercase">
          Features
        </span>
        <h2 className="text-3xl sm:text-5xl lg:text-6xl mt-5 tracking-wide">
          Why Choose MedSure?
        </h2>
      </div>
      <div className="flex flex-wrap justify-center mt-4">
        <div className="p-2 w-full lg:w-1/2">
          <img src={docImg} alt="Coding" />
        </div>
        <div className="pt-12 w-full lg:w-1/2">
          {checklistItems.map((item, index) => (
            <div key={index} className="flex mb-12">
              <div className="text-green-400 mx-6 border h-10 w-10 p-2 justify-center items-center rounded-full">
                <CheckCircle2 />
              </div>
              <div>
                <h5 className="mt-1 mb-2 text-xl">{item.title}</h5>
                <p className="text-md text-neutral-500">{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Workflow;
