import React from "react";
import { FaStar } from "react-icons/fa";

const Testimonials = () => {
    const feedbacks = [
        {
            name: "Ali Khan",
            role: "Digital Marketing Student",
            message: "This course completely changed my understanding of online marketing. Highly recommended!",
            rating: 5,
        },
        {
            name: "Sara Ahmed",
            role: "Graphic Design Student",
            message: "The instructors are very professional and the projects are very practical.",
            rating: 4,
        },
        {
            name: "Usman Malik",
            role: "Web Development Student",
            message: "I landed my first web developer job after completing this course!",
            rating: 5,
        },
        {
            name: "Ayesha Khan",
            role: "SEO Student",
            message: "Step-by-step lessons made SEO really easy to understand.",
            rating: 4,
        },
    ];

    return (
        <section className="bg-blue-50 py-16 px-6 md:px-20">
            <h1 className="text-4xl font-extrabold text-center text-blue-900 mb-12">
                What Our <span className="text-blue-500">Students Say</span>
            </h1>

            <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-6">
                {feedbacks.map((fb, index) => (
                    <div
                        key={index}
                        className="bg-white p-6 rounded-xl shadow-md hover:shadow-xl transition-all hover:scale-105"
                    >
                        <div className="flex items-center mb-4">
                            <h3 className="text-xl font-bold text-gray-900">{fb.name}</h3>
                            <span className="ml-2 text-gray-500 text-sm">({fb.role})</span>
                        </div>
                        <p className="text-gray-700 mb-4">{fb.message}</p>
                        <div className="flex">
                            {Array.from({ length: fb.rating }).map((_, i) => (
                                <FaStar key={i} className="text-yellow-400 w-5 h-5" />
                            ))}
                            {Array.from({ length: 5 - fb.rating }).map((_, i) => (
                                <FaStar key={i} className="text-gray-300 w-5 h-5" />
                            ))}
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default Testimonials;
