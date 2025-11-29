import { IoIosArrowForward } from "react-icons/io";
import { Link } from "react-router-dom";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen pt-20 md:pt-30 text-white flex items-center justify-center px-6">

      {/* Background Video */}
      <video
        className="absolute inset-0 w-full h-full object-cover"
        src="/background.mp4"
        autoPlay
        loop
        muted
        playsInline
        webkit-playsinline="true"
        preload="auto"
        disablePictureInPicture
        controls={false}
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/40 backdrop-blur-[3px]"></div>

      {/* Content */}
      <div className="relative text-center max-w-3xl mx-auto">
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold leading-tight mb-4">
          <span className="text-white">Upgrade Your Skills</span>{" "}
          <span className="text-[#00B0D0]">Transform Your Future</span>
        </h1>

        <p className="text-gray-200 text-lg sm:text-xl mb-8 max-w-2xl mx-auto">
          Join thousands of learners advancing their careers with world-class online courses.
          Learn in-demand skills from industry experts anytime, anywhere.
        </p>

        <div className="flex flex-wrap justify-center gap-4">
          <Link to="/auth">
            <button className="bg-[#00B0D0] hover:bg-gradient-to-r hover:from-[#00B0D0] hover:to-[#0087a3] text-white font-semibold py-3 px-6 rounded-2xl flex items-center gap-2 transition-transform duration-300 transform hover:scale-105 shadow-lg">
              Get Started <IoIosArrowForward />
            </button>
          </Link>

          <button className="bg-transparent border-2 border-white text-white font-medium py-3 px-6 rounded-2xl hover:bg-white hover:text-blue-950 transition-colors duration-300">
            Learn More
          </button>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
