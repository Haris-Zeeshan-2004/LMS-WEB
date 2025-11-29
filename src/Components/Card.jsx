
import { Link } from 'react-router-dom'; 
import digi from "../assets/digital marketing.jpg";
import seo from "../assets/SEO.jpg";
import web from "../assets/Web-Development.jpeg";
import grfic from "../assets/ggg.jpg";

const Card = () => {
    const products = [
        { id: 1, title: "Digital Marketing", desc: "Learn social media strategy, paid ads, and online brand growth", price: "₨14,000", oldPrice: "₨19,000", img: digi },
        { id: 2, title: "SEO", desc: "Master keyword research, on-page SEO, backlinks, and Google ranking techniques", price: "₨16,000", oldPrice: "₨21,000", img: seo },
        { id: 3, title: "Web Development", desc: "Build responsive websites and powerful web applications from scratch.", price: "₨18,000", oldPrice: "₨23,000", img: web },
        { id: 4, title: "Graphic Designing", desc: "Create professional logos, posters, and visual designs using modern tools.", price: "₨14,000", oldPrice: "₨19,000", img: grfic }
    ];

    return (
        <>
            <h1 className='text-blue-950 bg-blue-50 text-center text-4xl md:text-5xl font-extrabold pt-10 pb-6'>
                Our <span className='text-blue-500'>Courses</span>
            </h1>

            <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 px-4 md:px-10 bg-blue-50 pb-10'>
                {products.map((item) => (
                    <Link key={item.id} to={`/courses/${item.id}`} className="flex justify-center">
                        <div className="w-full max-w-sm bg-white rounded-xl shadow-lg overflow-hidden cursor-pointer
                                        transform transition-all duration-300 hover:scale-105 hover:shadow-xl">
                            <div className="relative">
                                <img
                                    src={item.img}
                                    alt={item.title}
                                    className="w-full h-52 sm:h-56 md:h-60 lg:h-64 object-cover"
                                />
                            </div>

                            <div className="p-5 space-y-4">
                                <div>
                                    <h3 className="text-xl font-bold text-gray-900">{item.title}</h3>
                                    <p className="text-gray-500 mt-1 text-sm md:text-base">{item.desc}</p>
                                </div>

                                <div className="flex justify-between items-center">
                                    <div className="space-y-1">
                                        <p className="text-2xl font-bold text-gray-900">{item.price}</p>
                                        <p className="text-sm text-gray-500 line-through">{item.oldPrice}</p>
                                    </div>

                                    <div className="flex items-center gap-1">
                                        <div className="text-yellow-400">★★★★</div>
                                        <div className="text-gray-300">★</div>
                                        <span className="text-sm text-gray-600 ml-1">(42)</span>
                                    </div>
                                </div>

                                <button className="w-full bg-blue-500 hover:bg-blue-600 text-white font-medium py-3 rounded-lg transition-colors">
                                    Enroll Now
                                </button>
                            </div>
                        </div>
                    </Link>
                ))}
            </div>
        </>
    );
};

export default Card;
