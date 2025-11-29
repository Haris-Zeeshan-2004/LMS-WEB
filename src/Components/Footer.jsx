import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-gray-900 w-full  px-5 sm:px-10 md:px-16 lg:px-36">
      <div className="flex flex-col md:flex-row gap-10 md:gap-32 py-10 border-b border-white/30">
        <div className="flex flex-col items-center md:items-start text-center md:text-left w-full">
          <Link to="/" className="cursor-pointer">
            <h1 className="font-bold text-3xl sm:text-4xl">
              <span className="text-white">Course</span>
              <span className="text-[#00B0D0]">Hub</span>
            </h1>
          </Link>
          <p className="mt-4 sm:mt-6 text-sm sm:text-base text-white/80 max-w-md">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text.
          </p>
        </div>

        {/* Company Links */}
        <div className="flex flex-col items-center md:items-start text-center md:text-left w-full">
          <h2 className="font-semibold text-white mb-4 sm:mb-5">Company</h2>
          <ul className="flex flex-col gap-2 text-sm sm:text-base text-white/80">
            <li>
              <a href="#" className="hover:text-white transition">Home</a>
            </li>
            <li>
              <a href="#" className="hover:text-white transition">About us</a>
            </li>
            <li>
              <a href="#" className="hover:text-white transition">Contact us</a>
            </li>
            <li>
              <a href="#" className="hover:text-white transition">Privacy policy</a>
            </li>
          </ul>
        </div>

        {/* Newsletter */}
        <div className="flex flex-col items-center md:items-start text-center md:text-left w-full">
          <h2 className="font-semibold text-white mb-4 sm:mb-5">
            Subscribe to our newsletter
          </h2>
          <p className="text-sm sm:text-base text-white/80 mb-4 sm:mb-5 max-w-xs">
            The latest news, articles, and resources, sent to your inbox weekly.
          </p>
          <div className="flex flex-col sm:flex-row items-center gap-3 w-full max-w-xs">
            <input
              type="email"
              placeholder="Enter your email"
              className="border border-gray-500/30 bg-gray-800 text-white placeholder-gray-500 outline-none w-full sm:flex-1 h-10 rounded px-3 text-sm sm:text-base"
            />
            <button className="bg-blue-500 hover:bg-blue-600 transition w-full sm:w-32 h-10 text-white rounded text-sm sm:text-base">
              Subscribe
            </button>
          </div>
        </div>
      </div>

      {/* Footer bottom */}
      <p className="py-4 text-center text-xs sm:text-sm text-white/60">
        Copyright 2025 © CourseHub. All Rights Reserved.
      </p>
    </footer>
  );
};

export default Footer;
