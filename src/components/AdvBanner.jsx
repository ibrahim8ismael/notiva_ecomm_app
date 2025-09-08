"use client";

import { useEffect, useRef } from "react";

export default function AdvBanner() {
    const containerRef = useRef(null);

    useEffect(() => {
        const container = containerRef.current;
        if (!container) return;

        const setDuration = () => {
            // Pixels per second speed (constant across breakpoints)
            const speed = 120; // adjust to taste
            const width = container.clientWidth;
            const durationSeconds = (width / speed) * 2; // times 2 because track is 200% width
            container.style.setProperty("--marquee-duration", `${Math.max(12, Math.min(60, durationSeconds)).toFixed(2)}s`);
        };

        const resizeObserver = new ResizeObserver(() => setDuration());
        resizeObserver.observe(container);
        setDuration();

        return () => resizeObserver.disconnect();
    }, []);

    return (
        <div ref={containerRef} className="relative w-full bg-black text-white overflow-hidden h-10 sm:h-10">
            <div className="marquee w-full h-full">
                <div className="marquee__track h-full">
                    <div className="marquee__group h-full px-4">
                        <span className="inline-flex items-center h-full text-xs sm:text-sm uppercase tracking-wide whitespace-nowrap">sale off 25% off all products!!</span>
                        <span className="inline-flex items-center h-full text-xs sm:text-sm uppercase tracking-wide whitespace-nowrap">sale off 25% off all products!!</span>
                        <span className="inline-flex items-center h-full text-xs sm:text-sm uppercase tracking-wide whitespace-nowrap">sale off 25% off all products!!</span>
                        <span className="inline-flex items-center h-full text-xs sm:text-sm uppercase tracking-wide whitespace-nowrap">sale off 25% off all products!!</span>
                        <span className="inline-flex items-center h-full text-xs sm:text-sm uppercase tracking-wide whitespace-nowrap">sale off 25% off all products!!</span>
                        <span className="inline-flex items-center h-full text-xs sm:text-sm uppercase tracking-wide whitespace-nowrap">sale off 25% off all products!!</span>
                        <span className="inline-flex items-center h-full text-xs sm:text-sm uppercase tracking-wide whitespace-nowrap">sale off 25% off all products!!</span>
                        <span className="inline-flex items-center h-full text-xs sm:text-sm uppercase tracking-wide whitespace-nowrap">sale off 25% off all products!!</span>
                        <span className="inline-flex items-center h-full text-xs sm:text-sm uppercase tracking-wide whitespace-nowrap">sale off 25% off all products!!</span>
                        <span className="inline-flex items-center h-full text-xs sm:text-sm uppercase tracking-wide whitespace-nowrap">sale off 25% off all products!!</span>
                        <span className="inline-flex items-center h-full text-xs sm:text-sm uppercase tracking-wide whitespace-nowrap">sale off 25% off all products!!</span>
                        <span className="inline-flex items-center h-full text-xs sm:text-sm uppercase tracking-wide whitespace-nowrap">sale off 25% off all products!!</span>
                        <span className="inline-flex items-center h-full text-xs sm:text-sm uppercase tracking-wide whitespace-nowrap">sale off 25% off all products!!</span>
                        <span className="inline-flex items-center h-full text-xs sm:text-sm uppercase tracking-wide whitespace-nowrap">sale off 25% off all products!!</span>
                        <span className="inline-flex items-center h-full text-xs sm:text-sm uppercase tracking-wide whitespace-nowrap">sale off 25% off all products!!</span>
                        <span className="inline-flex items-center h-full text-xs sm:text-sm uppercase tracking-wide whitespace-nowrap">sale off 25% off all products!!</span>
                        <span className="inline-flex items-center h-full text-xs sm:text-sm uppercase tracking-wide whitespace-nowrap">sale off 25% off all products!!</span>
                        <span className="inline-flex items-center h-full text-xs sm:text-sm uppercase tracking-wide whitespace-nowrap">sale off 25% off all products!!</span>
                    </div>
                    
                </div>
            </div>
        </div>
    )
}