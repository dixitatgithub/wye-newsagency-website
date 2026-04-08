// src/components/Navbar.tsx
import { h } from "react";

export default function Navbar() {
    return (
        <nav className="bg-white shadow sticky top-0 z-50">
            <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
                <div className="text-2xl font-bold">Wye News Agency</div>
                <div className="space-x-6">
                    <a href="#services" className="hover:text-blue-500">Services</a>
                    <a href="#contact" className="hover:text-blue-500">Contact</a>
                </div>
            </div>
        </nav>
    );
}