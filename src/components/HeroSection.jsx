// import video1 from "../assets/video1.mp4";
// import video2 from "../assets/video2.mp4";

const HeroSection = () => {
  return (
    <div className="flex flex-col items-center mt-4 lg:mt-6">
      <h1 className="text-4xl sm:text-6xl lg:text-7xl text-center tracking-wide">
        Ensuring the Quality of Your Medical Supplies{" "}
        <span className="bg-gradient-to-r from-[#26b170] to-[#009dd1] text-transparent bg-clip-text">
          Effortlessly
        </span>{" "}
        and{" "}
        <span className="bg-gradient-to-r from-[#26b170] to-[#009dd1] text-transparent bg-clip-text">
          Reliably
        </span>
      </h1>
      <p className="mt-10 text-lg text-center text-neutral-500 max-w-4xl">
        Join the national effort to safeguard patient safety and healthcare
        excellence. BharatMeds is your partner in ensuring that every medical
        supply meets the strictest quality standards, with seamless integration
        and nationwide scalability.
      </p>
      <div className="flex justify-center my-10">
        <a
          href="#"
          className="bg-gradient-to-r  from-[#84d37e] to-[#55b4db] py-3 px-4 mx-3 rounded-md"
        >
          Explore the Platform
        </a>
      </div>
      {/* <div className="flex mt-10 justify-center">
        <video
          autoPlay
          loop
          muted
          className="rounded-lg w-1/2 border border-green-700 shadow-sm shadow-blue-400 mx-2 my-4"
        >
          <source src={video1} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        <video
          autoPlay
          loop
          muted
          className="rounded-lg w-1/2 border border-green-700 shadow-sm shadow-blue-400 mx-2 my-4"
        >
          <source src={video2} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div> */}
    </div>
  );
};

export default HeroSection;
