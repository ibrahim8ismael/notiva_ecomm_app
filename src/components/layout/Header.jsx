"use client";
import { useState } from "react";
import Logo from "@/components/ui/Logo";
import Button from "@/components/ui/Buttons";
import Link from "@/components/ui/LinkButton";
import { Search, Heart, ShoppingCart, Menu, X, User } from "lucide-react";

const Header = () => {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    const cartItems = [
        {
            id: 1,
            name: "Product 1",
            price: 100,
        }
    ];

    const toggleMobileMenu = () => {
        setIsMobileMenuOpen(!isMobileMenuOpen);
    };

    return (
        <header className="bg-white border-b border-gray-200 sticky top-0 z-50">
            <div className="max-w-8xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between h-16">

                    {/* Logo */}
                    <div className="flex-shrink-0">
                        <Logo type="text" size="xs" className="lg:hidden cursor-pointer hover:opacity-80 transition-opacity" />
                        <Logo type="text" size="sm" className="hidden lg:block cursor-pointer hover:opacity-80 transition-opacity" />
                    </div>

                    {/* Navigation Links - Desktop & Large Tablets */}
                    <nav className="hidden lg:flex items-center space-x-8">
                        <Link href="/">Home</Link>
                        <Link href="/products">Products</Link>
                        <Link href="/categories">Categories</Link>
                        <Link href="/about">About</Link>
                        <Link href="/contact">Contact</Link>
                    </nav>

                    {/* Right Side Actions */}
                    <div className="flex items-center space-x-4">

                        {/* Wishlist Icon - Desktop Only */}
                        <button className="hidden lg:flex p-2 text-gray-600 hover:text-black transition-colors relative cursor-pointer">
                            <Heart className="w-5 h-5" />
                        </button>

                        {/* Cart Icon */}
                        <button className="p-2 text-gray-600 hover:text-black transition-colors relative cursor-pointer">
                            <ShoppingCart className="w-5 h-5" />
                            {/* Cart Badge */}
                            <span className="absolute -top-1 -right-1 bg-black text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
                                {cartItems.length}
                            </span>
                        </button>

                        {/* Account Button - Desktop Only */}
                        <Link href="/login">
                            <Button variant="ghost" size="sm" className="hidden lg:flex items-center gap-2">
                                <User className="w-4 h-4" />
                                Account
                            </Button>
                        </Link>

                        {/* Mobile & Tablet Menu Button */}
                        <button
                            className="lg:hidden p-2 text-gray-600 hover:text-black transition-colors rounded-lg hover:bg-gray-50"
                            onClick={toggleMobileMenu}
                            aria-label={isMobileMenuOpen ? "Close menu" : "Open menu"}
                        >
                            {isMobileMenuOpen ? (
                                <X className="w-6 h-6" />
                            ) : (
                                <Menu className="w-6 h-6" />
                            )}
                        </button>
                    </div>
                </div>

            </div>

            {/* Mobile & Tablet Navigation Overlay */}
            {isMobileMenuOpen && (
                <div className="lg:hidden fixed inset-0 top-16 z-40">
                    <div className="bg-white border-b border-gray-200 shadow-lg">
                        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
                            {/* Navigation Links */}
                            <nav className="flex flex-col gap-5 space-y-1 mb-6">
                                <Link href="/" className="text-lg font-medium" onClick={() => setIsMobileMenuOpen(false)}>
                                    Home
                                </Link>
                                <Link href="/products" className="text-lg font-medium" onClick={() => setIsMobileMenuOpen(false)}>
                                    Products
                                </Link>
                                <Link href="/categories" className="text-lg font-medium" onClick={() => setIsMobileMenuOpen(false)}>                                    
                                    Categories
                                </Link>
                                <Link href="/about" className="text-lg font-medium" onClick={() => setIsMobileMenuOpen(false)}>
                                    About
                                </Link>
                                <Link href="/contact" className="text-lg font-medium" onClick={() => setIsMobileMenuOpen(false)}>
                                    Contact
                                </Link>
                            </nav>

                            {/* Mobile Actions */}
                            <div className="border-t flex flex-col gap-1 border-gray-200 pt-6 space-y-3">
                            <Link href="/likes" onClick={() => setIsMobileMenuOpen(false)}>
                                    <Button variant="default" className="w-full justify-start gap-4">
                                    <Heart className="w-4 h-4" />
                                        Likes
                                    </Button>
                                </Link>
                                <Link href="/login" onClick={() => setIsMobileMenuOpen(false)}>
                                    <Button variant="default" className="w-full justify-start gap-4">
                                    <User className="w-4 h-4" />
                                        My Account
                                    </Button>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </header>
    );
};

export default Header;
