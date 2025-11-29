import seo from "../assets/SEO.jpg";
import digi from "../assets/digital marketing.jpg";
import web from "../assets/Web-Development.jpeg";

const blogs = [
    { id: 1, title: "Top 10 Digital Marketing Trends in 2025", summary: "Learn the latest strategies to boost your online presence.", image: digi },
    { id: 2, title: "SEO Basics for Beginners", summary: "Step-by-step guide to improve your Google ranking.", image: seo },
    { id: 3, title: "Web Devepment Basics for Beginners", summary: "Step-by-step guide to improve your skills.", image: web },
];

const BlogPage = () => {
    return (
        <div className="bg-blue-50 min-h-screen mb-10 pt-32 px-4 md:px-10">
            <h1 className="text-4xl md:text-5xl font-extrabold text-center text-blue-950 mb-10">
                Our <span className="text-blue-500">Blog</span>
            </h1>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
                {blogs.map(blog => (
                    <div key={blog.id} className="bg-white rounded-lg shadow-lg overflow-hidden">
                        <img src={blog.image} alt={blog.title} className="w-full h-48 object-cover" />
                        <div className="p-5">
                            <h2 className="text-xl font-bold mb-2">{blog.title}</h2>
                            <p className="text-gray-600 mb-3">{blog.summary}</p>
                            <button className="bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded">Read More</button>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default BlogPage;
