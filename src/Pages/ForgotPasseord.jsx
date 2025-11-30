import { useState } from "react";
import { useNavigate } from "react-router-dom";

const ForgotPassword = () => {
    const navigate = useNavigate();

    const [step, setStep] = useState(1); // 1 = email, 2 = OTP, 3 = reset password
    const [formData, setFormData] = useState({
        email: "",
        otp: "",
        newPassword: "",
        confirmPassword: ""
    });

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleEmailSubmit = (e) => {
        e.preventDefault();
        alert(`OTP sent to ${formData.email}`);
        setStep(2);
    };

    const handleOtpSubmit = (e) => {
        e.preventDefault();
        if (formData.otp === "1234") {
            setStep(3);
        } else {
            alert("Invalid OTP");
        }
    };

    const handleResetSubmit = (e) => {
        e.preventDefault();

        if (formData.newPassword !== formData.confirmPassword) {
            alert("Passwords do not match!");
            return;
        }

        alert("Password Reset Successful!");
        navigate("/"); // redirect back to login page
    };

    return (
        <div className="bg-blue-50 min-h-screen flex items-center justify-center px-4">
            <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-md">
                {/* Step Titles */}
                <h1 className="text-3xl font-bold text-blue-950 mb-6 text-center">
                    {step === 1 && "Forgot Password"}
                    {step === 2 && "Enter OTP"}
                    {step === 3 && "Reset Password"}
                </h1>

                {/* Step 1: Email */}
                {step === 1 && (
                    <form className="space-y-4" onSubmit={handleEmailSubmit}>
                        <input
                            type="email"
                            name="email"
                            placeholder="Enter your email"
                            value={formData.email}
                            onChange={handleChange}
                            className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
                            required
                        />
                        <button className="w-full bg-blue-500 hover:bg-blue-600 text-white py-3 rounded-lg font-semibold">
                            Send OTP
                        </button>
                    </form>
                )}

                {/* Step 2: OTP */}
                {step === 2 && (
                    <form className="space-y-4" onSubmit={handleOtpSubmit}>
                        <input
                            type="text"
                            name="otp"
                            placeholder="Enter 4-digit OTP"
                            value={formData.otp}
                            onChange={handleChange}
                            className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
                            required
                        />
                        <button className="w-full bg-blue-500 hover:bg-blue-600 text-white py-3 rounded-lg font-semibold">
                            Verify OTP
                        </button>
                    </form>
                )}

                {/* Step 3: Reset Password */}
                {step === 3 && (
                    <form className="space-y-4" onSubmit={handleResetSubmit}>
                        <input
                            type="password"
                            name="newPassword"
                            placeholder="Enter new password"
                            value={formData.newPassword}
                            onChange={handleChange}
                            className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
                            required
                        />

                        <input
                            type="password"
                            name="confirmPassword"
                            placeholder="Confirm new password"
                            value={formData.confirmPassword}
                            onChange={handleChange}
                            className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
                            required
                        />

                        <button className="w-full bg-blue-500 hover:bg-blue-600 text-white py-3 rounded-lg font-semibold">
                            Reset Password
                        </button>
                    </form>
                )}

                <p className="text-center text-gray-600 mt-4 cursor-pointer" onClick={() => navigate("/")}>Back to Login</p>
            </div>
        </div>
    );
};

export default ForgotPassword;
