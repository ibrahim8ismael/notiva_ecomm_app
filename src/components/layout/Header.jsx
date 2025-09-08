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
                    <nav className="hidden lg:flex items-center space-x-14">
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

            {/* Mobile & Tablet Navigation - Relative, simple open/close */}
            <div className="lg:hidden relative w-full">
                <div className={`absolute w-full overflow-hidden duration-300 ease-out bg-white border-b border-gray-200 shadow-sm ${isMobileMenuOpen ? 'max-h-[420px]' : 'max-h-0'}`}>
                    <div className="px-4 sm:px-6 py-5">
                        <nav className="flex flex-col gap-4 mb-5">
                            <Link href="/" onClick={() => setIsMobileMenuOpen(false)} className="text-lg">Home</Link>
                            <Link href="/products" onClick={() => setIsMobileMenuOpen(false)} className="text-lg">Products</Link>
                            <Link href="/categories" onClick={() => setIsMobileMenuOpen(false)} className="text-lg">Categories</Link>
                            <Link href="/about" onClick={() => setIsMobileMenuOpen(false)} className="text-lg">About</Link>
                            <Link href="/contact" onClick={() => setIsMobileMenuOpen(false)} className="text-lg">Contact</Link>
                            <Link href="/likes" onClick={() => setIsMobileMenuOpen(false)} className="text-lg">Likes</Link>
                        </nav>
                        <div className="border-t border-gray-200 pt-5 flex flex-col gap-3">
                            <Link href="/login" onClick={() => setIsMobileMenuOpen(false)}>
                                <Button variant="default" className="w-full justify-start gap-3 border-2 border-black rounded-xl bg-white text-black hover:bg-black hover:text-white">
                                    <User className="w-4 h-4" />
                                    Login
                                </Button>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </header>
    );
};

export default Header;
