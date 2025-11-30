import { useState } from "react";
import { useNavigate } from "react-router-dom";
import cer from "../assets/cer.webp";

export default function CertificateVerification() {
  const [rollNumber, setRollNumber] = useState("");
  const [result, setResult] = useState(null);
  const navigate = useNavigate();


  const certificates = {
    "101": { name: "Ali Khan", course: "Web Development", file: cer },
    "102": { name: "Sara Ahmed", course: "Data Science", file: cer },
    "103": { name: "Ahmed Raza", course: "Graphic Design", file: cer },
  };

  const handleVerify = () => {
    if (certificates[rollNumber]) {
      setResult({ ...certificates[rollNumber], valid: true });
    } else {
      setResult({ valid: false });
    }
  };

  const handleInternshipClick = () => {
    navigate("/internship");
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 p-4">
      <div className="bg-white flex flex-col items-center justify-center p-8 rounded-xl shadow-md w-full max-w-md text-center">
        <h2 className="text-2xl font-bold mb-6">Certificate Verification</h2>
        <input
          type="text"
          placeholder="Enter Roll Number"
          className="w-full p-3 border border-gray-300 rounded-lg mb-4 focus:outline-none focus:ring-2 focus:ring-blue-400"
          value={rollNumber}
          onChange={(e) => setRollNumber(e.target.value)}
        />
        <button
          onClick={handleVerify}
          className="w-full bg-blue-400 hover:bg-blue-500 text-white py-3 rounded-lg font-semibold transition"
        >
          Verify
        </button>

        {result && (
          <div
            className={`mt-6 p-4 rounded-lg ${result.valid ? "bg-blue-100 text-blue-900" : "bg-red-100 text-red-800"
              }`}
          >
            {result.valid ? (
              <>
                <p className="font-semibold text-lg">Valid Certificate</p>
                <p>Name: {result.name}</p>
                <p>Course: {result.course}</p>
                <a
                  href={result.file}
                  download
                  className="mt-2 inline-block bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded-lg"
                >
                  Download Certificate
                </a>
              </>
            ) : (
              <p className="font-semibold text-lg">Invalid Certificate</p>
            )}
          </div>
        )}

        {/* Get Internship Button */}
        <button
          onClick={handleInternshipClick}
          className="mt-6 w-full bg-blue-400 hover:bg-blue-500 text-white py-3 rounded-lg font-semibold transition"
        >
          Get Internship
        </button>
      </div>
    </div>
  );
}
