// src/components/Services.tsx
import React from "react";

const servicesData = [
    { id: 1, title: "News Articles", description: "Professional and timely articles covering your topics.", image: "/images/news.png" },
    { id: 2, title: "Community Updates", description: "Keep your community informed with regular updates.", image: "/images/community.png" },
    { id: 3, title: "Advertising", description: "Promote your business with our advertising packages.", image: "/images/ads.png" },
];

export default function Services() {
    return (
        <section className="p-8 bg-gray-50">
            <h2 className="text-3xl font-bold text-center mb-8">Our Services</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {servicesData.map(service => (
                    <div key={service.id} className="bg-white rounded-lg shadow p-6 flex flex-col items-center text-center">
                        <img src={service.image} alt={service.title} className="h-24 mb-4" />
                        <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
                        <p className="mb-4">{service.description}</p>
                        <button className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700">
                            Learn More
                        </button>
                    </div>
                ))}
            </div>
        </section>
    );
}