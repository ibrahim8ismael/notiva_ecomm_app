"use client";
import Logo from "@/components/ui/Logo";
import Button from "@/components/ui/Buttons";
import Link from "@/components/ui/LinkButton";
import Popup, { SuccessPopup } from "@/components/ui/Popup";
import { ArrowRight, Phone, Mail, Instagram, Facebook } from "lucide-react";
import { useState } from "react";

// Custom TikTok Icon
const TikTokIcon = ({ className }) => (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor">
        <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z" />
    </svg>
);

// Custom WhatsApp Icon
const WhatsAppIcon = ({ className }) => (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor">
        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.465 3.488" />
    </svg>
);

const Footer = () => {
    const [email, setEmail] = useState("");
    const [isEmailValid, setIsEmailValid] = useState(true);
    const [showSuccessPopup, setShowSuccessPopup] = useState(false);
    const [emailError, setEmailError] = useState("");

    // Email validation function
    const validateEmail = (email) => {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(email);
    };

    // Handle newsletter signup
    const handleNewsletterSignup = (e) => {
        e.preventDefault();

        if (!email.trim()) {
            setIsEmailValid(false);
            setEmailError("Please enter your email address");
            return;
        }

        if (!validateEmail(email)) {
            setIsEmailValid(false);
            setEmailError("Please enter a valid email address");
            return;
        }

        // Email is valid - show success popup
        setIsEmailValid(true);
        setEmailError("");
        setShowSuccessPopup(true);
        setEmail(""); // Clear the input
    };

    // Handle email input change
    const handleEmailChange = (e) => {
        setEmail(e.target.value);
        // Reset error state when user starts typing
        if (!isEmailValid) {
            setIsEmailValid(true);
            setEmailError("");
        }
    };

    return (
        <footer className="bg-gray-50 border-t border-gray-100">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">

                {/* Main Footer Content */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-16">

                    {/* Brand Section */}
                    <div className="">
                        {/* Logo */}
                        <div className="mb-8">
                            <Logo type="text" size="sm" className="lg:hidden cursor-pointer hover:opacity-80 transition-opacity" />
                            <Logo type="text" size="md" className="hidden lg:block cursor-pointer hover:opacity-80 transition-opacity" />
                        </div>

                        <p className="font-light text-gray-900 mb-6 leading-tight">
                            Spend less - Write more. Find the joy in the journey
                        </p>

                        {/* Newsletter Signup */}
                        <div className="space-y-2">
                            {/* Error Message */}
                            {emailError && (
                                <p className="text-red-600 text-sm font-medium">
                                    {emailError}
                                </p>
                            )}

                            <form onSubmit={handleNewsletterSignup} className="flex">
                                <input
                                    type="email"
                                    placeholder="Enter your email"
                                    value={email}
                                    onChange={handleEmailChange}
                                    className={`flex-1 px-4 py-3 bg-white text-gray-900 placeholder-gray-500 transition-all ${isEmailValid
                                            ? "outline outline-gray-400 focus:outline-black"
                                            : "outline outline-red-500 focus:outline-red-500"
                                        }`}
                                />
                                <Button
                                    type="submit"
                                    variant="default"
                                    className="px-4 py-6 rounded-none bg-black outline outline-black hover:bg-gray-800 text-white"
                                >
                                    <ArrowRight className="w-4 h-4" />
                                </Button>
                            </form>
                        </div>
                    </div>

                    {/* Categories */}
                    <div>
                        <h4 className="font-medium text-gray-900 mb-8 text-lg">Categories</h4>
                        <ul className="space-y-4">
                            <li>
                                <Link href="/categories/notebooks">Notebooks</Link>
                            </li>
                            <li>
                                <Link href="/categories/sketchbook">Sketchbook</Link>
                            </li>
                            <li>
                                <Link href="/categories/stickers">Sticker</Link>
                            </li>
                        </ul>
                    </div>

                    {/* Notiva */}
                    <div>
                        <h4 className="font-medium text-gray-900 mb-8 text-lg">Notiva</h4>
                        <ul className="space-y-4">
                            <li>
                                <Link href="/about">About Notiva</Link>
                            </li>
                            <li>
                                <Link href="/contact">Contact</Link>
                            </li>
                            <li>
                                <Link href="/club">Notiva Club</Link>
                            </li>
                            <li>
                                <Link href="/refund">Refund Policy</Link>
                            </li>
                            <li>
                                <Link href="/terms">Terms & Conditions</Link>
                            </li>
                        </ul>
                    </div>

                    {/* Contact */}
                    <div>
                        <h4 className="font-medium text-gray-900 mb-8 text-lg">Contact us</h4>
                        <div className="space-y-6">
                            {/* Contact Info */}
                            <div className="space-y-4">
                                <div className="flex items-center gap-3">
                                    <Phone className="w-4 h-4 text-gray-500" />
                                    <span className="text-gray-600">+20 104 463 9570</span>
                                </div>
                                <div className="flex items-center gap-3">
                                    <Mail className="w-4 h-4 text-gray-500" />
                                    <span className="text-gray-600">info@notiva.com</span>
                                </div>
                            </div>

                            {/* Social Media */}
                            <div>
                                <p className="text-gray-600 text-sm mb-3">Follow us:</p>
                                <div className="flex items-center gap-3">
                                    {/* Instagram */}
                                    <a
                                        href="#"
                                        className="p-2 bg-white rounded-lg text-gray-500 hover:text-pink-500 hover:bg-pink-50 transition-all duration-200 border border-gray-200"
                                        aria-label="Follow us on Instagram"
                                    >
                                        <Instagram className="w-4 h-4" />
                                    </a>

                                    {/* Facebook */}
                                    <a
                                        href="#"
                                        className="p-2 bg-white rounded-lg text-gray-500 hover:text-blue-600 hover:bg-blue-50 transition-all duration-200 border border-gray-200"
                                        aria-label="Follow us on Facebook"
                                    >
                                        <Facebook className="w-4 h-4" />
                                    </a>

                                    {/* TikTok */}
                                    <a
                                        href="#"
                                        className="p-2 bg-white rounded-lg text-gray-500 hover:text-black hover:bg-gray-100 transition-all duration-200 border border-gray-200"
                                        aria-label="Follow us on TikTok"
                                    >
                                        <TikTokIcon className="w-4 h-4" />
                                    </a>

                                    {/* WhatsApp */}
                                    <a
                                        href="https://wa.me/201044639570"
                                        className="p-2 bg-white rounded-lg text-gray-500 hover:text-green-600 hover:bg-green-50 transition-all duration-200 border border-gray-200"
                                        aria-label="Contact us on WhatsApp"
                                    >
                                        <WhatsAppIcon className="w-4 h-4" />
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Success Popup */}
            <SuccessPopup
                title="Successfully Subscribed!"
                message="Thank you for subscribing to our newsletter. You'll receive updates about new products, exclusive offers, and creative inspiration directly to your inbox."
                isOpen={showSuccessPopup}
                onClose={() => setShowSuccessPopup(false)}
            />
        </footer>
    );
};

export default Footer;
