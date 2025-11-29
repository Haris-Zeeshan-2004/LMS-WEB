import React from "react";
import trainer1 from "../assets/profile_img_1.png";
import trainer2 from "../assets/profile_img_2.png";
import trainer3 from "../assets/profile_img_3.png";
import JoinNow from "../Components/JoinNow";

const AboutPage = () => {
    return (
        <div className="flex flex-col min-h-screen bg-blue-50 pt-32 px-4 md:px-10">

            <main className="flex-1">
                {/* About Institute / Mission */}
                <section className="max-w-5xl mx-auto my-10 text-center">
                    <h1 className="text-4xl md:text-5xl font-extrabold text-blue-950 mb-4">
                        About <span className="text-blue-500">Our Institute</span>
                    </h1>
                    <p className="text-gray-700 text-lg md:text-xl">
                        Our mission is to provide high-quality education and practical training that empowers students to excel in their careers and achieve their goals. We focus on hands-on experience, industry-relevant skills, and personalized guidance.
                    </p>
                </section>

                {/* Team / Trainers */}
                <section className="max-w-5xl mx-auto mb-10">
                    <h2 className="text-3xl font-bold text-blue-950 mb-6 text-center">Meet Our Trainers</h2>
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
                        {[trainer1, trainer2, trainer3].map((trainer, i) => (
                            <div key={i} className="bg-white rounded-lg shadow-lg p-6 flex flex-col items-center">
                                <img src={trainer} alt={`Trainer ${i + 1}`} className="w-32 h-32 rounded-full object-cover mb-4" />
                                <h3 className="text-xl font-bold mb-1">
                                    {i === 0 ? "John Doe" : i === 1 ? "Jane Smith" : "Mike Johnson"}
                                </h3>
                                <p className="text-gray-600 text-center">
                                    {i === 0
                                        ? "Expert in Digital Marketing with 10+ years of experience."
                                        : i === 1
                                            ? "SEO Specialist and Web Strategist with a strong portfolio."
                                            : "Full-Stack Developer and Python expert with real-world experience."}
                                </p>
                            </div>
                        ))}
                    </div>
                </section>

                {/* Achievements / Experience */}
                <section className="max-w-5xl mx-auto mb-10 text-center">
                    <h2 className="text-3xl font-bold text-blue-950 mb-4">Our Achievements</h2>
                    <p className="text-gray-700 text-lg md:text-xl">
                        • Trained over 5000 students successfully.<br />
                        • 90% placement rate for our graduates.<br />
                        • Collaborations with top companies in IT and Digital Marketing.<br />
                        • Recognized as a leading institute for practical and project-based learning.
                    </p>
                </section>

                {/* Vision & Values */}
                <section className="max-w-5xl mx-auto mb-10 text-center">
                    <h2 className="text-3xl font-bold text-blue-950 mb-4">Vision & Values</h2>
                    <p className="text-gray-700 text-lg md:text-xl">
                        Our vision is to empower individuals with the skills and confidence to succeed in a rapidly evolving digital world. <br />
                        We value integrity, innovation, collaboration, and lifelong learning as the pillars of our teaching methodology.
                    </p>
                </section>
            </main>
            <JoinNow />


        </div>
    );
};

export default AboutPage;
