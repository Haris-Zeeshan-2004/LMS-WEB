import { useState } from "react";
import { Link } from "react-router-dom"
import { AiOutlineClose } from "react-icons/ai";
import { FaFacebookF, FaTwitter, FaLinkedinIn, FaInstagram, FaYoutube, FaPinterestP, FaInstagramSquare, FaTwitterSquare } from "react-icons/fa";
import { HiMenuAlt2 } from "react-icons/hi";

const Navbar = () => {
    const [sidebarOpen, setSidebarOpen] = useState(false);
    const [showForm, setShowForm] = useState(false);



    const menuList = [
        { label: "Home", link: "/" },
        { label: "Course", link: "/courses" },
        { label: "About", link: "/aboutus" },
        { label: "Blogs", link: "/blog" },
        { label: "Contact Us", link: "/contact" },
        { label: "Certificate", link: "/certificate" },
    ];

    return (
        <div className="fixed w-full z-50 shadow-2xl text-white">
            <div className="flex justify-between gap-4 sm:gap-2 items-center p-4 md:px-10 px-5 bg-blue-950 shadow-xl">
                <Link to="/" className="cursor-pointer">
                    <h1 className="font-bold text-3xl sm:text-4xl ">
                        <span className="text-white">Course</span>
                        <span className="text-[#00B0D0]">Hub</span>
                    </h1>
                </Link>
                <nav className="hidden lg:flex items-center gap-8 text-lg font-medium">
                    {menuList.map((item) => (
                        <Link
                            key={item.label}
                            to={item.link}

                            duration={500}
                            className="hover:text-[#00B0D0] transition cursor-pointer"
                        >
                            {item.label} <span className="text-[#00B0D0]">+</span>
                        </Link>
                    ))}
                </nav>
                <div className="hidden md:flex items-end justify-end gap-4 w-full lg:w-auto   ">
                    <Link to={"/contact"}>
                        <button className="bg-[#00B0D0] hover:bg-[#01aac8] font-medium text-white py-3 px-7 cursor-pointer rounded-2xl">
                            Enroll Now
                        </button>
                    </Link>

                    <Link to={"/auth"}>
                        <button className="border-2 border-blue-400 font-medium text-white py-2 px-4 cursor-pointer rounded-2xl 
                                     hover:bg-[#01aac8] 
                                       transform hover:scale-105 
                                      transition-transform duration-300"
                        >
                            Sign In
                        </button>
                    </Link>
                </div>
                <div className="lg:hidden px-2 flex items-center">
                    {!sidebarOpen ? (
                        <HiMenuAlt2 size={48} className="text-white" onClick={() => setSidebarOpen(true)} />
                    ) : (
                        <AiOutlineClose size={28} className="text-white" onClick={() => setSidebarOpen(false)} />
                    )}
                </div>
            </div>
            <div
                className={`fixed top-0 left-0 h-screen w-72 bg-white text-blue-950 z-50 transform 
        ${sidebarOpen ? "translate-x-0" : "-translate-x-full"} 
        transition-transform duration-300 shadow-xl`}
            >

                <div className="flex justify-between items-center px-4 pt-2 ">
                    <Link to="/" className="cursor-pointer">
                        <h1 className="font-bold text-3xl sm:text-4xl ">
                            <span className="text-blue-950">Course</span>
                            <span className="text-[#00B0D0]">Hub</span>
                        </h1>
                    </Link>

                </div>
                <ul className="mt-5 px-6 text-base font-normal">
                    {menuList.map((item) => (
                        <li key={item.label}>
                            <Link
                                to={item.link}
                                className="flex items-center justify-between py-2 border-b hover:border-black cursor-pointer hover:text-[#00B0D0]"
                                onClick={() => setSidebarOpen(false)} // close sidebar on click
                            >
                                {item.label}

                            </Link>
                        </li>
                    ))}
                </ul>

                <div className="mt-5 px-10 flex items-center mx-auto gap-2">
                    {[FaFacebookF, FaTwitter, FaLinkedinIn, FaInstagram].map((Icon, index) => (
                        <div
                            key={index}
                            className="p-3 border  rounded hover:bg-[#00B0D0] hover:text-white cursor-pointer transition"
                        >
                            <Icon size={16} />
                        </div>
                    ))}
                </div>
            </div>
            {sidebarOpen && (
                <div
                    className="fixed inset-0  bg-opacity-40 backdrop-blur-xs z-40"
                    onClick={() => setSidebarOpen(false)}
                ></div>
            )}
            {showForm && <Contact closeForm={() => setShowForm(false)} />}
        </div>
    );
};

export default Navbar;

