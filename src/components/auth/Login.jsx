"use client";
import { useState } from "react";
import { Eye, EyeOff, Mail, Lock, Phone as PhoneIcon } from "lucide-react";
import Button from "@/components/ui/Buttons";
import Logo from "@/components/ui/Logo";
import Link from "@/components/ui/LinkButton";
import { ErrorPopup, SuccessPopup } from "@/components/ui/Popup";


const Login = () => {
  const [loginMode, setLoginMode] = useState("email"); // "email" | "phone"
  const [formData, setFormData] = useState({
    email: "",
    phone: "",
    password: ""
  });
  const [errors, setErrors] = useState({});
  const [showPassword, setShowPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [showErrorPopup, setShowErrorPopup] = useState(false);
  const [showSuccessPopup, setShowSuccessPopup] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  // Email validation
  const validateEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  // Egyptian phone validation (e.g., 010/011/012/015 + 8 digits => 11 digits total)
  const validateEGPhone = (phone) => {
    const digitsOnly = phone.replace(/\D/g, "");
    const phoneRegex = /^01[0-2,5][0-9]{8}$/;
    return phoneRegex.test(digitsOnly);
  };

  // Handle input changes
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));

    // Clear error when user starts typing
    if (errors[name]) {
      setErrors(prev => ({
        ...prev,
        [name]: ""
      }));
    }
  };

  // Validate form
  const validateForm = () => {
    const newErrors = {};

    if (loginMode === "email") {
      if (!formData.email.trim()) {
        newErrors.email = "Email is required";
      } else if (!validateEmail(formData.email)) {
        newErrors.email = "Please enter a valid email address";
      }
    } else {
      if (!formData.phone.trim()) {
        newErrors.phone = "Phone number is required";
      } else if (!validateEGPhone(formData.phone)) {
        newErrors.phone = "Enter a valid Egyptian phone (e.g. 01xxxxxxxxx)";
      }
    }

    // Password validation
    if (!formData.password.trim()) {
      newErrors.password = "Password is required";
    } else if (formData.password.length < 6) {
      newErrors.password = "Password must be at least 6 characters";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!validateForm()) return;

    setIsLoading(true);

    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 2000));

      if (loginMode === "email") {
        if (formData.email !== "admin@notiva.com") {
          setErrorMessage("Invalid email or password. Please check your credentials and try again.");
          setShowErrorPopup(true);
        } else {
          console.log("Login successful (email):", formData);
          setShowSuccessPopup(true);
        }
      } else {
        // Demo: accept a specific test number; otherwise error
        const normalized = formData.phone.replace(/\D/g, "");
        if (normalized !== "01000000000") {
          setErrorMessage("Invalid phone or password. Please check your credentials and try again.");
          setShowErrorPopup(true);
        } else {
          console.log("Login successful (phone):", formData);
          setShowSuccessPopup(true);
        }
      }
    } catch (error) {
      console.error("Login error:", error);
      setErrorMessage("Network error occurred. Please check your connection and try again.");
      setShowErrorPopup(true);
    } finally {
      setIsLoading(false);
    }
  };


  // Social login removed per request

  return (
    <div className="min-h-fit py-16 bg-gray-50 flex items-center justify-center p-4">
      <div className="max-w-md min-h-fit w-full">
        {/* Header */}
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold text-gray-900">
            Welcome back
          </h1>
        </div>

        {/* Login Form */}
        <div className="bg-white rounded-2xl shadow-lg border border-gray-100 p-8">
          {/* Mode Toggle inside card, full width */}
          <div className="mb-6">
            <div className="w-full relative p-1 rounded-xl border border-gray-200 bg-white">
              <div className={`absolute top-1 bottom-1 left-1 w-1/2 rounded-lg bg-black transition-transform duration-300 ${loginMode === 'phone' ? 'translate-x-full' : ''}`}></div>
              <div className="relative z-10 grid grid-cols-2 gap-0 text-sm font-medium">
                <button
                  type="button"
                  onClick={() => setLoginMode('email')}
                  className={`w-full py-2.5 font-bold text-center rounded-lg transition-colors ${loginMode === 'email' ? 'text-white' : 'text-gray-700 hover:text-black'}`}
                >
                  Email
                </button>
                <button
                  type="button"
                  onClick={() => setLoginMode('phone')}
                  className={`w-full py-2.5 font-bold text-center rounded-lg transition-colors ${loginMode === 'phone' ? 'text-white' : 'text-gray-700 hover:text-black'}`}
                >
                  Phone
                </button>
              </div>
            </div>
          </div>
          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Email Field */}
            {loginMode === 'email' && (
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-900 mb-2">
                  Email Address
                </label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <Mail className="h-5 w-5 text-gray-400" />
                  </div>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    className={`block w-full pl-10 pr-3 py-3 border rounded-xl text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-offset-2 transition-colors ${errors.email
                      ? 'border-red-500 focus:ring-red-500'
                      : 'border-gray-200 focus:ring-black focus:border-black'
                      }`}
                    placeholder="Enter your email"
                  />
                </div>
                {errors.email && (
                  <p className="mt-2 text-sm text-red-600">{errors.email}</p>
                )}
              </div>
            )}

            {/* Phone Field */}
            {loginMode === 'phone' && (
              <div>
                <label htmlFor="phone" className="block text-sm font-medium text-gray-900 mb-2">
                  Phone Number (Egypt)
                </label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <PhoneIcon className="h-5 w-5 text-gray-400" />
                  </div>
                  <input
                    id="phone"
                    name="phone"
                    inputMode="numeric"
                    value={formData.phone}
                    onChange={handleInputChange}
                    className={`block w-full pl-10 pr-3 py-3 border rounded-xl text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-offset-2 transition-colors ${errors.phone
                      ? 'border-red-500 focus:ring-red-500'
                      : 'border-gray-200 focus:ring-black focus:border-black'
                      }`}
                    placeholder="01xxxxxxxxx"
                  />
                </div>
                {errors.phone && (
                  <p className="mt-2 text-sm text-red-600">{errors.phone}</p>
                )}
              </div>
            )}

            {/* Password Field */}
            <div>
              <label htmlFor="password" className="block text-sm font-medium text-gray-900 mb-2">
                Password
              </label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <Lock className="h-5 w-5 text-gray-400" />
                </div>
                <input
                  id="password"
                  name="password"
                  type={showPassword ? "text" : "password"}
                  value={formData.password}
                  onChange={handleInputChange}
                  className={`block w-full pl-10 pr-10 py-3 border rounded-xl text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-offset-2 transition-colors ${errors.password
                    ? "border-red-500 focus:ring-red-500"
                    : "border-gray-200 focus:ring-black focus:border-black"
                    }`}
                  placeholder="Enter your password"
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute inset-y-0 right-0 pr-3 flex items-center"
                >
                  {showPassword ? (
                    <EyeOff className="h-5 w-5 text-gray-400 hover:text-gray-600" />
                  ) : (
                    <Eye className="h-5 w-5 text-gray-400 hover:text-gray-600" />
                  )}
                </button>
              </div>
              {errors.password && (
                <p className="mt-2 text-sm text-red-600">{errors.password}</p>
              )}
            </div>

            {/* Submit Button */}
            <Button
              type="submit"
              variant="default"
              size="lg"
              className="w-full"
              loading={isLoading}
            >
              {isLoading ? "Signing in..." : "Sign in"}
            </Button>
          </form>

          {/* Social login removed */}

          {/* Register Link */}
          <div className="mt-8 text-center">
            <span className="text-sm font-bold text-gray-600">
              Don't have an account?{" "}
              <Link href="/register" variant="primary" size="sm" className="font-bold">
                Create your account
              </Link>
            </span>
          </div>

          {/* Forgot Password only */}
          <div className="mt-2 text-center">
            <Link href="/forgot-password" variant="primary" size="sm" className="font-bold">
              did you forget your password?
            </Link>
          </div>
        </div>

      </div>

      {/* Success Popup */}
      <SuccessPopup
        title="Welcome Back!"
        message="You have successfully logged in to your Notiva account. Redirecting you to your dashboard..."
        isOpen={showSuccessPopup}
        onClose={() => setShowSuccessPopup(false)}
      />

      {/* Error Popup */}
      <ErrorPopup
        title="Login Failed"
        message={errorMessage}
        isOpen={showErrorPopup}
        onClose={() => setShowErrorPopup(false)}
      />
    </div>
  );
};

export default Login;
