import { Route, Routes } from "react-router-dom";
import Navbar from './Components/Navbar';
import Home from './Pages/Home';
import Footer from "./Components/Footer";
import CoursesPage from "./Pages/CoursesPage";
import SingleCourse from "./Pages/SingleCourse";
import AboutPage from "./Pages/AboutUs";
import ContactPage from "./Pages/ContactPage";
import BlogPage from "./Pages/BlogPage";
import AuthPage from "./Pages/AuthPage";
import CertificateVerification from "./Components/CertificateVerification";
import InternshipApplication from "./Pages/Internship";
import ForgotPassword from "./Pages/ForgotPasseord";

const App = () => {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/courses" element={<CoursesPage />} />
        <Route path="/courses/:id" element={<SingleCourse />} />
        <Route path="/aboutus" element={<AboutPage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/blog" element={<BlogPage />} />
        <Route path="/auth" element={<AuthPage />} />
        <Route path="/certificate" element={<CertificateVerification />} />
        <Route path="/internship" element={<InternshipApplication />} />
        <Route path="/forgotpassword" element={<ForgotPassword />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
