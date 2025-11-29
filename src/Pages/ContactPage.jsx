import React, { useState } from "react";
import { FaWhatsapp, FaFacebook, FaInstagram, FaLinkedin, FaTwitter } from "react-icons/fa";

const ContactPage = () => {
  const [formData, setFormData] = useState({ name: "", email: "", course: "", message: "" });

  const courses = [
    "Digital Marketing",
    "SEO",
    "Web Development",
    "Graphic Designing",
    "Data Science",
    "Mobile App Development",
    "UI/UX Design",
    "Python Programming",
  ];

  const handleChange = (e) => setFormData({ ...formData, [e.target.name]: e.target.value });

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
    alert(`Message sent successfully! You selected the course: ${formData.course}`);
    setFormData({ name: "", email: "", course: "", message: "" });
  };

  return (
    <div className="bg-blue-50 min-h-screen pt-32 px-4 md:px-10 flex flex-col">
      <main className="flex-1 max-w-6xl mx-auto space-y-16">
        {/* Header */}
        <section className="text-center">
          <h1 className="text-4xl md:text-5xl font-extrabold text-blue-950 mb-4">
            Contact <span className="text-blue-500">Us</span>
          </h1>
          <p className="text-gray-700 text-lg md:text-xl">
            Get in touch with us! Fill the form or reach us directly via WhatsApp, phone, or social media.
          </p>
        </section>

        {/* Form + Map */}
        <section className="flex flex-col lg:flex-row gap-10">
          {/* Contact Form */}
          <div className="flex-1 bg-white p-8 rounded-lg shadow-lg">
            <h2 className="text-2xl font-bold text-blue-950 mb-6">Send a Message</h2>
            <form onSubmit={handleSubmit} className="space-y-4">
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Your Name"
                className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                required
              />
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Your Email"
                className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                required
              />

              {/* Course Dropdown */}
              <select
                name="course"
                value={formData.course}
                onChange={handleChange}
                className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                required
              >
                <option value="" disabled>Select a Course</option>
                {courses.map((c, i) => (
                  <option key={i} value={c}>{c}</option>
                ))}
              </select>

              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                placeholder="Your Message"
                className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                rows={5}
                required
              ></textarea>

              <button
                type="submit"
                className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-3 px-6 rounded-lg transition-colors w-full"
              >
                Send Message
              </button>
            </form>
          </div>

          {/* Map */}
          <div className="flex-1 bg-white p-2 rounded-lg shadow-lg">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d27219.505179071937!2d74.32392324999999!3d31.48463845!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x391904106691c4c7%3A0xfb24ddaf1e7bc6c2!2sModel%20Town%2C%20Lahore!5e0!3m2!1sen!2s!4v1764402238185!5m2!1sen!2s"
              width="100%"
              height="100%"
              className="rounded-lg border-0 min-h-[300px] md:min-h-[400px]"
              allowFullScreen=""
              loading="lazy"
            ></iframe>
          </div>
        </section>

        {/* Direct Contact + Social Links */}
        <section className="flex flex-col mb-10 md:flex-row justify-between items-center bg-white p-8 rounded-lg shadow-lg gap-6">
          <div className="text-center md:text-left">
            <h2 className="text-2xl font-bold text-blue-950 mb-2">Reach Us Directly</h2>
            <p className="text-gray-700 mb-1">
              Phone: <a href="tel:+923001234567" className="text-blue-500">+92 300 1234567</a>
            </p>
            <p className="text-gray-700">
              WhatsApp: <a href="https://wa.me/923001234567" target="_blank" rel="noreferrer" className="text-green-500">+92 302 7654321</a>
            </p>
          </div>

          <div className="flex gap-6 text-2xl text-blue-500">
            <a href="#" target="_blank" rel="noreferrer"><FaFacebook /></a>
            <a href="#" target="_blank" rel="noreferrer"><FaInstagram /></a>
            <a href="#" target="_blank" rel="noreferrer"><FaLinkedin /></a>
            <a href="#" target="_blank" rel="noreferrer"><FaTwitter /></a>
            <a href="https://wa.me/923001234567" target="_blank" rel="noreferrer"><FaWhatsapp className="text-green-500" /></a>
          </div>
        </section>
      </main>
    </div>
  );
};

export default ContactPage;
