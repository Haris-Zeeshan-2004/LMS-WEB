import { Link } from "react-router-dom";

const JoinNow = () => {
    return (
        <section className="bg-blue-50 py-20 px-6 md:px-20 text-center text-black">
            <h1 className="text-4xl md:text-5xl font-extrabold text-blue-900 mb-6">
                Ready to <span className="text-blue-500">Boost Your Career</span>
            </h1>
            <p className="text-lg text-blue-950 md:text-xl mb-8 max-w-2xl mx-auto">
                Join thousands of students who have transformed their skills and careers with our professional courses. Don’t wait — your future starts today!
            </p>
            <div className="flex justify-center gap-4 flex-wrap">
                <Link to={"/contact"}>
                    <button className="bg-[#01aac8]  hover:bg-[rgb(6,155,182)] cursor-pointer  text-white font-bold py-4 px-8 rounded-lg text-lg transition-transform transform hover:scale-105">
                        Join Now
                    </button>
                </Link>


            </div>
        </section >
    );
};

export default JoinNow;
