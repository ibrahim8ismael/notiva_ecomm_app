"use client";
import { useState } from "react";
import { Eye, EyeOff, Mail, Lock, Facebook } from "lucide-react";
import Button from "@/components/ui/Buttons";
import Logo from "@/components/ui/Logo";
import Link from "@/components/ui/LinkButton";
import { ErrorPopup, SuccessPopup } from "@/components/ui/Popup";


const Login = () => {
  const [formData, setFormData] = useState({
    email: "",
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

    // Email validation
    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!validateEmail(formData.email)) {
      newErrors.email = "Please enter a valid email address";
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
      
      // For demo purposes, show error if email is not "admin@notiva.com"
      if (formData.email !== "admin@notiva.com") {
        setErrorMessage("Invalid email or password. Please check your credentials and try again.");
        setShowErrorPopup(true);
      } else {
        // Successful login - redirect to dashboard or home
        console.log("Login successful:", formData);
        setShowSuccessPopup(true);
        // Here you would typically redirect the user
        // window.location.href = '/dashboard';
      }
    } catch (error) {
      console.error("Login error:", error);
      setErrorMessage("Network error occurred. Please check your connection and try again.");
      setShowErrorPopup(true);
    } finally {
      setIsLoading(false);
    }
  };


  // Handle Facebook login
  const handleFacebookLogin = async () => {
    try {
      console.log("Facebook login initiated");
      // Here you would integrate with Facebook OAuth
      // For demo purposes, show success
      setShowSuccessPopup(true);
    } catch (error) {
      console.error("Facebook login error:", error);
      setErrorMessage("Facebook login failed. Please try again or use email/password.");
      setShowErrorPopup(true);
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center p-4">
      <div className="max-w-md w-full">
        {/* Header */}
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">
            Welcome back
          </h1>

        </div>

        {/* Login Form */}
        <div className="bg-white rounded-2xl shadow-lg border border-gray-100 p-8">
          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Email Field */}
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
                  className={`block w-full pl-10 pr-3 py-3 border rounded-xl text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-offset-2 transition-colors ${
                    errors.email 
                      ? "border-red-500 focus:ring-red-500" 
                      : "border-gray-200 focus:ring-black focus:border-black"
                  }`}
                  placeholder="Enter your email"
                />
              </div>
              {errors.email && (
                <p className="mt-2 text-sm text-red-600">{errors.email}</p>
              )}
            </div>

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
                  className={`block w-full pl-10 pr-10 py-3 border rounded-xl text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-offset-2 transition-colors ${
                    errors.password 
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

            {/* Remember Me & Forgot Password */}
            <div className="flex items-center justify-between">
              <div className="flex items-center">
                <input
                  id="remember-me"
                  name="remember-me"
                  type="checkbox"
                  className="h-4 w-4 text-black focus:ring-black border-gray-300 rounded"
                />
                <label htmlFor="remember-me" className="ml-2 block text-sm text-gray-900">
                  Remember me
                </label>
              </div>
              <Link href="/forgot-password" variant="underline" size="sm">
                Forgot password?
              </Link>
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

          {/* Divider */}
          <div className="mt-8 relative">
            <div className="absolute inset-0 flex items-center">
              <div className="w-full border-t border-gray-200" />
            </div>
            <div className="relative flex justify-center text-sm">
              <span className="px-2 bg-white text-gray-500">Or</span>
            </div>
          </div>

          {/* Facebook Login Button */}
          <div className="mt-6">
            <Button
              type="button"
              variant="default"
              size="lg"
              className="w-full flex items-center justify-center gap-3 bg-blue-600 text-white hover:bg-blue-700"
              onClick={handleFacebookLogin}
            >
              <Facebook className="w-5 h-5" />
              Sign in with Facebook
            </Button>
          </div>

          {/* Register Link */}
          <div className="mt-8 text-center">
            <span className="text-sm text-gray-600">
              Don't have an account?{" "}
              <Link href="/register" variant="primary" size="sm">
                Create your account
              </Link>
            </span>
          </div>
        </div>

        {/* Demo Info */}
        <div className="mt-8 text-center">
          <div className="bg-blue-50 border border-blue-200 rounded-xl p-4">
            <p className="text-sm text-blue-800">
              <strong>Demo:</strong> Use <code className="bg-blue-100 px-2 py-1 rounded">admin@notiva.com</code> with any password to test login
            </p>
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
