import { useState } from "react";

export default function InternshipApplication() {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        phone: "",
        course: "",
        type: "Insider",
        message: "",
        resume: null,
    });
    const [submitted, setSubmitted] = useState(false);

    const handleChange = (e) => {
        const { name, value, files } = e.target;
        if (name === "resume") {
            setFormData({ ...formData, resume: files[0] });
        } else {
            setFormData({ ...formData, [name]: value });
        }
    };

    const handleSubmit = (e) => {
        e.preventDefault();


        // console.log("Form Data Submitted:", formData);
        setSubmitted(true);


    };

    return (
        <div className="min-h-screen flex flex-col pt-32 items-center justify-center bg-gray-50 p-4">
            {/* Internship Info Section */}
            <div className="max-w-2xl text-center mb-8">
                <h1 className="text-3xl font-bold mb-2 text-blue-600">Join Our Internship Program</h1>
                <p className="text-gray-700">
                    Whether you are an insider or an outsider, our internship program provides an opportunity
                    to gain hands-on experience and enhance your skills. Apply today and start your journey with us!
                </p>
            </div>

            {/* Application Form */}
            {!submitted ? (
                <form
                    className="bg-white p-8 rounded-xl shadow-md w-full max-w-lg space-y-4"
                    onSubmit={handleSubmit}
                >
                    <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        placeholder="Full Name"
                        required
                        className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
                    />
                    <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="Email Address"
                        required
                        className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
                    />
                    <input
                        type="tel"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        placeholder="Phone Number"
                        required
                        className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
                    />
                    <input
                        type="text"
                        name="course"
                        value={formData.course}
                        onChange={handleChange}
                        placeholder="Course"
                        required
                        className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
                    />
                    <select
                        name="type"
                        value={formData.type}
                        onChange={handleChange}
                        className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
                    >
                        <option value="Insider">Insider</option>
                        <option value="Outsider">Outsider</option>
                    </select>
                    <textarea
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        placeholder="Message (optional)"
                        className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
                    ></textarea>
                    <input
                        type="file"
                        name="resume"
                        accept=".pdf,.doc,.docx"
                        onChange={handleChange}
                        required
                        className="w-full"
                    />
                    <button
                        type="submit"
                        className="w-full bg-blue-400 hover:bg-blue-500 text-white py-3 rounded-lg font-semibold transition"
                    >
                        Submit Application
                    </button>
                </form>
            ) : (
                <div className="bg-green-100 p-6 rounded-xl shadow-md text-center w-full max-w-lg">
                    <h2 className="text-2xl font-bold text-green-700 mb-2">Application Submitted!</h2>
                    <p className="text-green-800">Thank you for applying. We will review your application and get back to you soon.</p>
                </div>
            )}
        </div>
    );
}
