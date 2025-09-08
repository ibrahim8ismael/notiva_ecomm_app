"use client";
import dynamic from "next/dynamic";
const Contact = dynamic(() => import("@/components/static/contact"), { ssr: false });

export default function ContactPage() {
    return <Contact />;
}