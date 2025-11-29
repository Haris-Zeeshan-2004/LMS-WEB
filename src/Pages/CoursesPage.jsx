import React from "react";
import { Link } from "react-router-dom";
import digi from "../assets/digital marketing.jpg";
import seo from "../assets/SEO.jpg";
import web from "../assets/Web-Development.jpeg";
import grfic from "../assets/ggg.jpg";
import data from "../assets/data.jpg";
import mmm2 from "../assets/mmm2.jpg";
import uuu from "../assets/uuu.webp";
import ppp from "../assets/ppp.webp";


const courses = [
    { id: 1, title: "Digital Marketing", description: "Learn social media strategy, paid ads, and online brand growth", price: 14000, oldPrice: 19000, rating: 4, reviews: 42, image: digi },
    { id: 2, title: "SEO", description: "Master keyword research, on-page SEO, backlinks, and Google ranking techniques", price: 16000, oldPrice: 21000, rating: 4, reviews: 42, image: seo },
    { id: 3, title: "Web Development", description: "Build responsive websites and powerful web applications from scratch.", price: 18000, oldPrice: 23000, rating: 4, reviews: 42, image: web },
    { id: 4, title: "Graphic Designing", description: "Create professional logos, posters, and visual designs using modern tools.", price: 14000, oldPrice: 19000, rating: 4, reviews: 42, image: grfic },
    { id: 5, title: "Data Science", description: "Learn data analysis, visualization, and machine learning techniques.", price: 20000, oldPrice: 25000, rating: 4.5, reviews: 30, image: data },
    { id: 6, title: "Mobile App Development", description: "Build Android and iOS apps using Flutter and React Native.", price: 22000, oldPrice: 27000, rating: 4.5, reviews: 25, image: mmm2 },
    { id: 7, title: "UI/UX Design", description: "Design intuitive and beautiful user interfaces and experiences.", price: 15000, oldPrice: 20000, rating: 4, reviews: 20, image: uuu },
    { id: 8, title: "Python Programming", description: "Learn Python from basics to advanced for web, data, and automation.", price: 18000, oldPrice: 23000, rating: 4.5, reviews: 35, image: ppp },
];

const CoursesPage = () => {
    return (
        <div className="pt-32">
            <h1 className="text-center text-4xl md:text-5xl font-extrabold text-blue-950 mb-10">
                Our <span className="text-blue-500">Courses</span>
            </h1>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 w-full gap-8 px-4 md:px-10 bg-blue-50 pb-10">
                {courses.map((course) => (
                    <Link
                        key={course.id}
                        to={`/courses/${course.id}`}
                        className="bg-white rounded-lg w-full shadow-md overflow-hidden cursor-pointer transform transition-all duration-300 hover:scale-105 hover:shadow-xl flex flex-col"
                    >
                        <img src={course.image} alt={course.title} className="w-full h-48 object-cover" />
                        <div className="p-5 flex flex-col flex-1">
                            <h2 className="text-xl font-semibold mb-2">{course.title}</h2>
                            <p className="text-gray-600 text-sm mb-4">{course.description}</p>

                            {/* Price */}
                            <div className="flex items-center justify-between mb-3">
                                <div>
                                    <span className="text-lg font-bold text-gray-900">Rs{course.price.toLocaleString()}</span>{" "}
                                    <span className="text-gray-400 line-through text-sm">Rs{course.oldPrice.toLocaleString()}</span>
                                </div>

                                {/* Rating */}
                                <div className="flex items-center text-yellow-400 text-sm">
                                    {Array.from({ length: 5 }, (_, i) => (
                                        <svg
                                            key={i}
                                            className={`w-4 h-4 ${i < course.rating ? "fill-current" : "text-gray-300"}`}
                                            xmlns="http://www.w3.org/2000/svg"
                                            viewBox="0 0 20 20"
                                        >
                                            <path d="M10 15l-5.878 3.09L5.523 11 1 6.91l6.061-.909L10 1l2.939 5.001L19 6.91 14.477 11l1.401 7.09z" />
                                        </svg>
                                    ))}
                                    <span className="ml-2 text-gray-600">({course.reviews})</span>
                                </div>
                            </div>


                            <button className="bg-blue-500 hover:bg-blue-600 text-white py-2 rounded w-full cursor-pointer transition mt-auto">
                                View Details
                            </button>
                        </div>
                    </Link>
                ))}
            </div>
        </div>
    );
};

export default CoursesPage;
