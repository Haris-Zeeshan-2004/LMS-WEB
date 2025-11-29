import { FaUserCheck, FaBookOpen, FaTools, FaCertificate, FaBriefcase } from "react-icons/fa";

const HowItWorks = () => {
    const steps = [
        {
            title: "Enroll",
            desc: "Choose your desired course and complete the signup.",
            icon: <FaUserCheck className="text-blue-600 w-12 h-12" />,
        },
        {
            title: "Learn",
            desc: "Watch lessons and attend live classes to master concepts.",
            icon: <FaBookOpen className="text-blue-600 w-12 h-12" />,
        },
        {
            title: "Practice",
            desc: "Work on real-world projects and assignments.",
            icon: <FaTools className="text-blue-600 w-12 h-12" />,
        },
        {
            title: "Get Certified",
            desc: "Receive an official course completion certificate.",
            icon: <FaCertificate className="text-blue-600 w-12 h-12" />,
        },
        {
            title: "Start Career",
            desc: "Use your skills to get a job, freelance, or start a business.",
            icon: <FaBriefcase className="text-blue-600 w-12 h-12" />,
        },
    ];

    return (
        <section className="bg-blue-50 py-16 px-6 md:px-20">
            <h1 className="text-4xl font-extrabold text-center text-blue-900 mb-12">
                How <span className="text-blue-500">It Works</span>
            </h1>

            <div className="max-w-5xl mx-auto grid md:grid-cols-5 gap-6">
                {steps.map((step, index) => (
                    <div
                        key={index}
                        className="flex flex-col items-center text-center bg-blue-50 p-6 rounded-xl shadow-md 
                       hover:shadow-xl transition-all hover:scale-105"
                    >
                        {step.icon}
                        <h3 className="text-xl font-bold text-gray-900 mt-4 mb-2">{step.title}</h3>
                        <p className="text-gray-600 text-sm">{step.desc}</p>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default HowItWorks;
