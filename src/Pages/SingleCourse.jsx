import React from "react";
import { Link, useParams } from "react-router-dom";
import digi from "../assets/digital marketing.jpg";
import seo from "../assets/SEO.jpg";
import web from "../assets/Web-Development.jpeg";
import grfic from "../assets/ggg.jpg";
import data from "../assets/data.jpg";
import mmm2 from "../assets/mmm2.jpg";
import uuu from "../assets/uuu.webp";
import ppp from "../assets/ppp.webp";
import instructor from "../assets/profile_img_1.png";

const Courses = [
    { id: 1, title: "Digital Marketing", description: "Learn social media strategy, paid ads, and online brand growth", price: 14000, oldPrice: 19000, rating: 4, reviews: 42, image: digi },
    { id: 2, title: "SEO", description: "Master keyword research, on-page SEO, backlinks, and Google ranking techniques", price: 16000, oldPrice: 21000, rating: 4, reviews: 42, image: seo },
    { id: 3, title: "Web Development", description: "Build responsive websites and powerful web applications from scratch.", price: 18000, oldPrice: 23000, rating: 4, reviews: 42, image: web },
    { id: 4, title: "Graphic Designing", description: "Create professional logos, posters, and visual designs using modern tools.", price: 14000, oldPrice: 19000, rating: 4, reviews: 42, image: grfic },
    { id: 5, title: "Data Science", description: "Learn data analysis, visualization, and machine learning techniques.", price: 20000, oldPrice: 25000, rating: 4.5, reviews: 30, image: data },
    { id: 6, title: "Mobile App Development", description: "Build Android and iOS apps using Flutter and React Native.", price: 22000, oldPrice: 27000, rating: 4.5, reviews: 25, image: mmm2 },
    { id: 7, title: "UI/UX Design", description: "Design intuitive and beautiful user interfaces and experiences.", price: 15000, oldPrice: 20000, rating: 4, reviews: 20, image: uuu },
    { id: 8, title: "Python Programming", description: "Learn Python from basics to advanced for web, data, and automation.", price: 18000, oldPrice: 23000, rating: 4.5, reviews: 35, image: ppp },
];

const SingleCourse = () => {
    const { id } = useParams();
    const courses = Courses.find(c => c.id === parseInt(id));

    if (!courses) return <p>Course not found!</p>;
    console.log(id, courses);


    return (
        <div className="bg-blue-50">
            <div className="max-w-5xl  mx-auto px-4 py-10 pt-32 space-y-10">
                <div className="flex flex-col md:flex-row gap-6 items-start">
                    <div className="flex-1">
                        <h1 className="text-4xl font-bold mb-2">{courses.title}</h1>
                        <p className="text-gray-600 mb-1">Duration: 3 Months | Level: Beginner</p>
                        <p className="text-gray-600 mb-4">Fee: Rs{courses.price.toLocaleString()}</p>
                        <button className="bg-blue-500 hover:bg-blue-600 text-white py-3 px-6 rounded">Enroll Now</button>
                    </div>
                    <img src={courses.image} alt={courses.title} className="w-full md:w-80 rounded-lg object-cover" />
                </div>

                <section>
                    <h2 className="text-2xl font-bold mb-4">What You'll Learn</h2>
                    <ul className="list-disc list-inside space-y-2">
                        <li>Key skills in {courses.title}</li>
                        <li>Practical projects and hands-on experience</li>
                        <li>Industry best practices and tools</li>
                    </ul>
                </section>

                <section>
                    <h2 className="text-2xl font-bold mb-4">Courses Modules</h2>
                    <ul className="space-y-2 border-l-2 border-blue-950 pl-4">
                        <li>Module 1: Introduction</li>
                        <li>Module 2: Basics</li>
                        <li>Module 3: Advanced Concepts</li>
                        <li>Module 4: Project & Practical</li>
                    </ul>
                </section>

                <section className="flex items-center gap-6">
                    <img src={instructor} alt="Instructor" className="w-24 h-24 rounded-full object-cover" />
                    <div>
                        <h3 className="text-xl font-bold">John Doe</h3>
                        <p className="text-gray-600">John has 10+ years of experience in {courses.title} and trained over 5000 students.</p>
                    </div>
                </section>

                <section>
                    <h2 className="text-2xl font-bold mb-4">Student Reviews</h2>
                    <div className="space-y-4">
                        <div className="p-4 border rounded-lg">
                            <p className="font-semibold">Jane Smith</p>
                            <p>"This courses helped me start a career in {courses.title}!"</p>
                        </div>
                        <div className="p-4 border rounded-lg">
                            <p className="font-semibold">Mike Johnson</p>
                            <p>"Highly recommended for beginners and professionals alike."</p>
                        </div>
                    </div>
                </section>

                <section>
                    <h2 className="text-2xl font-bold mb-4">FAQ</h2>
                    <div className="space-y-2">
                        <div className="p-4 border rounded-lg">
                            <p className="font-semibold">What is the courses duration?</p>
                            <p>3 months with flexible schedules.</p>
                        </div>
                        <div className="p-4 border rounded-lg">
                            <p className="font-semibold">Will I get a certificate?</p>
                            <p>Yes, a certificate is awarded after completion.</p>
                        </div>
                    </div>
                </section>

                <section className="text-center mt-10">
                    <Link to={"/contact"}>
                        <button className="bg-blue-500 cursor-pointer text-white py-4 px-10 rounded hover:bg-blue-600 text-lg font-semibold">
                            Join Courses Now
                        </button>
                    </Link>
                </section>
            </div>
        </div>
    );
};

export default SingleCourse;
