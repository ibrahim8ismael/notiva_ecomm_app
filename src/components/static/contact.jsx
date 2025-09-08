"use client";
import { useState } from "react";
import Button from "@/components/ui/Buttons";
import { SuccessPopup, ErrorPopup } from "@/components/ui/Popup";
import { Mail, Phone, Instagram, Facebook, MessageSquare } from "lucide-react";

const Contact = () => {
    const [form, setForm] = useState({ name: "", email: "", phone: "", message: "" });
    const [submitting, setSubmitting] = useState(false);
    const [errors, setErrors] = useState({});
    const [showSuccessPopup, setShowSuccessPopup] = useState(false);
    const [showErrorPopup, setShowErrorPopup] = useState(false);
    const [errorMessage, setErrorMessage] = useState("");

    const handleChange = (e) => {
        const { name, value } = e.target;
        setForm((prev) => ({ ...prev, [name]: value }));
        if (errors[name]) setErrors((prev) => ({ ...prev, [name]: "" }));
    };

    const validate = () => {
        const next = {};
        if (!form.name.trim()) next.name = "Name is required";
        if (!form.email.trim()) next.email = "Email is required";
        else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) next.email = "Invalid email";
        if (!form.phone.trim()) next.phone = "Phone is required";
        if (!form.message.trim()) next.message = "Please write a message";
        setErrors(next);
        return Object.keys(next).length === 0;
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (!validate()) return;
        setSubmitting(true);
        try {
            // Fake submit
            await new Promise((r) => setTimeout(r, 1200));
            setForm({ name: "", email: "", phone: "", message: "" });
            setShowSuccessPopup(true);
        } catch (err) {
            console.error(err);
            setErrorMessage("Couldn't send your message. Please try again.");
            setShowErrorPopup(true);
        } finally {
            setSubmitting(false);
        }
    };

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


    return (
        <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
            <div className="mb-8">
                <h1 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-gray-900">We would love to hear from you.</h1>
                <p className="mt-3 text-gray-600">If you’ve got great products you're making or want to work with us, drop us a line.</p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
                {/* Form */}
                <div className="lg:col-span-2">
                    <form onSubmit={handleSubmit} className="bg-white border border-gray-100 rounded-2xl shadow-sm p-6 sm:p-8 space-y-5">
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                            <div>
                                <label className="block text-sm font-medium text-gray-900 mb-2">Name</label>
                                <input
                                    name="name"
                                    value={form.name}
                                    onChange={handleChange}
                                    className={`w-full px-3 py-3 rounded-md outline-1 outline-gray-200 placeholder-gray-500 transition-all duration-200 focus:outline-none focus:ring-1 focus:ring-offset-1 focus:ring-black focus:border-black ${errors.name ? "border-red-500 focus:ring-red-500" : "border-gray-200"}`}
                                    placeholder="Your name"
                                />
                                {errors.name && <p className="mt-1 text-sm text-red-600">{errors.name}</p>}
                            </div>
                            <div>
                                <label className="block text-sm font-medium text-gray-900 mb-2">Email</label>
                                <input
                                    name="email"
                                    type="email"
                                    value={form.email}
                                    onChange={handleChange}
                                    className={`w-full px-3 py-3 outline-1 outline-gray-200 rounded-md placeholder-gray-500 transition-all duration-200 focus:outline-none focus:ring-1 focus:ring-offset-1 focus:ring-black focus:border-black ${errors.email ? "border-red-500 focus:ring-red-500" : "border-gray-200"}`}
                                    placeholder="you@example.com"
                                />
                                {errors.email && <p className="mt-1 text-sm text-red-600">{errors.email}</p>}
                            </div>
                        </div>

                        <div>
                            <label className="block text-sm font-medium text-gray-900 mb-2">Phone Number</label>
                            <input
                                name="phone"
                                value={form.phone}
                                onChange={handleChange}
                                className={`w-full px-3 py-3 outline-1 outline-gray-200 rounded-md placeholder-gray-500 transition-all duration-200 focus:outline-none focus:ring-1 focus:ring-offset-1 focus:ring-black focus:border-black ${errors.phone ? "border-red-500 focus:ring-red-500" : "border-gray-200"}`}
                                placeholder="01xxxxxxxxx"
                            />
                            {errors.phone && <p className="mt-1 text-sm text-red-600">{errors.phone}</p>}
                        </div>

                        <div>
                            <label className="block text-sm font-medium text-gray-900 mb-2">Message</label>
                            <textarea
                                name="message"
                                value={form.message}
                                onChange={handleChange}
                                rows={6}
                                className={`w-full px-3 py-3 outline-1 outline-gray-200 rounded-md placeholder-gray-500 transition-all duration-200 focus:outline-none focus:ring-1 focus:ring-offset-1 focus:ring-black focus:border-black resize-y ${errors.message ? "border-red-500 focus:ring-red-500" : "border-gray-200"}`}
                                placeholder="Tell us a bit about your request"
                            />
                            {errors.message && <p className="mt-1 text-sm text-red-600">{errors.message}</p>}
                        </div>

                        <div className="pt-2">
                            <Button type="submit" size="lg" className="w-full" loading={submitting}>
                                {submitting ? "Sending..." : "Submit now"}
                            </Button>
                        </div>
                    </form>
                </div>

                {/* Info (no location map for now) */}
                <aside className="space-y-6">
                    <div>
                        <h3 className="text-lg font-semibold text-gray-900 mb-2">Information</h3>
                        <ul className="text-gray-700 space-y-2">
                            <li className="flex items-center gap-2"><Phone className="w-4 h-4" /> +20 10 0000 0000</li>
                            <li className="flex items-center gap-2"><Mail className="w-4 h-4" /> support@notiva.com</li>
                        </ul>
                    </div>
                    <div>
                        <h3 className="text-lg font-semibold text-gray-900 mb-2">Social Media</h3>
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
                </aside>
            </div>

            {/* Popups */}
            <SuccessPopup
                title="Message sent!"
                message="Thanks! We received your message and will get back to you soon."
                isOpen={showSuccessPopup}
                onClose={() => setShowSuccessPopup(false)}
            />
            <ErrorPopup
                title="Message not sent"
                message={errorMessage || "Something went wrong. Please try again later."}
                isOpen={showErrorPopup}
                onClose={() => setShowErrorPopup(false)}
            />
        </section>
    );
};

export default Contact;



