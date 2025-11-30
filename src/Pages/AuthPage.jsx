import { useState } from "react";
import { Link } from "react-router-dom";

const AuthPage = () => {
    const [isLogin, setIsLogin] = useState(true);
    const [showForgot, setShowForgot] = useState(false);
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        password: "",
        confirmPassword: "",
    });

    const handleChange = (e) => setFormData({ ...formData, [e.target.name]: e.target.value });

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!isLogin && !showForgot && formData.password !== formData.confirmPassword) {
            alert("Passwords do not match!");
            return;
        }

        if (showForgot) {
            alert(`Password reset link sent to ${formData.email}`);
            setShowForgot(false);
            return;
        }

        alert(isLogin ? "Login Successful!" : "Sign Up Successful!");
        setFormData({ name: "", email: "", password: "", confirmPassword: "" });
    };

    return (
        <div className="bg-blue-50 min-h-screen flex items-center mb-10 justify-center pt-32 px-4">
            <div className="bg-white p-10 rounded-lg shadow-lg w-full max-w-md">
                {/* Toggle */}
                {!showForgot && (
                    <div className="flex justify-center mb-6">
                        <button
                            onClick={() => setIsLogin(true)}
                            className={`px-4 py-2 font-semibold rounded-t-lg ${isLogin ? "bg-blue-500 text-white" : "bg-gray-200 text-gray-700"}`}
                        >
                            Login
                        </button>
                        <button
                            onClick={() => setIsLogin(false)}
                            className={`px-4 py-2 font-semibold rounded-t-lg ${!isLogin ? "bg-blue-500 text-white" : "bg-gray-200 text-gray-700"}`}
                        >
                            Sign Up
                        </button>
                    </div>
                )}

                {/* Title */}
                <h1 className="text-3xl font-bold text-blue-950 mb-6 text-center">
                    {showForgot ? "Forgot Password" : isLogin ? "Login" : "Sign Up"}
                </h1>

                {/* Form */}
                <form className="space-y-4" onSubmit={handleSubmit}>
                    {!isLogin && !showForgot && (
                        <input
                            type="text"
                            name="name"
                            value={formData.name}
                            onChange={handleChange}
                            placeholder="Full Name"
                            className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                            required
                        />
                    )}

                    <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="Email Address"
                        className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                        required
                    />

                    {!showForgot && (
                        <>
                            <input
                                type="password"
                                name="password"
                                value={formData.password}
                                onChange={handleChange}
                                placeholder="Password"
                                className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                                required
                            />
                            {!isLogin && (
                                <input
                                    type="password"
                                    name="confirmPassword"
                                    value={formData.confirmPassword}
                                    onChange={handleChange}
                                    placeholder="Confirm Password"
                                    className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                                    required
                                />
                            )}
                        </>
                    )}

                    <button
                        type="submit"
                        className="w-full bg-blue-500 hover:bg-blue-600 text-white py-3 rounded-lg font-semibold transition-colors"
                    >
                        {showForgot ? "Send Reset Link" : isLogin ? "Login" : "Sign Up"}
                    </button>
                </form>

                {/* Switch */}
                {!showForgot && (
                    <p className="text-center text-gray-600 mt-4">
                        <Link to={"/forgotpassword"}>
                            <span

                                className="text-blue-500 font-semibold cursor-pointer"
                            >
                                Forgot Password?
                            </span>
                        </Link>
                    </p>
                )}

                {showForgot && (
                    <p className="text-center text-gray-600 mt-4">
                        <span
                            onClick={() => setShowForgot(false)}
                            className="text-blue-500 font-semibold cursor-pointer"
                        >
                            Back to Login
                        </span>
                    </p>
                )}

                {!showForgot && (
                    <p className="text-center text-gray-600 mt-4">
                        {isLogin ? "Don't have an account?" : "Already have an account?"}{" "}
                        <span
                            onClick={() => setIsLogin(!isLogin)}
                            className="text-blue-500 font-semibold cursor-pointer"
                        >
                            {isLogin ? "Sign Up" : "Login"}
                        </span>
                    </p>
                )}
            </div>
        </div>
    );
};

export default AuthPage;

