import { FaCheckCircle } from "react-icons/fa";

const WhyChooseUs = () => {
  const points = [
    "Experienced and certified instructors",
    "100% practical and skill-based training",
    "Updated course content with real-world projects",
    "Affordable prices with high-quality learning",
    "Internship & job placement guidance",
    "Lifetime access to study material"
  ];

  return (
    <section className="bg-blue-50 py-16 px-6 md:px-20">
      <h1 className="text-4xl font-extrabold text-center text-blue-900 mb-10">
        Why <span className="text-blue-500">Choose Us</span>
      </h1>

      <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-6">
        {points.map((item, index) => (
          <div 
            key={index}
            className="flex items-start gap-3 bg-white p-5 rounded-xl shadow-md hover:shadow-lg transition-all hover:scale-105"
          >
            <FaCheckCircle className="text-blue-500 w-6 h-6" />
            <p className="text-gray-700 text-lg">{item}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default WhyChooseUs;
