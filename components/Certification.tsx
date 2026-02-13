// src/components/Certification.tsx
"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { FiExternalLink, FiAward, FiCheckCircle } from 'react-icons/fi';
import Image from 'next/image';

const certifications = [
    {
        id: 1,
        title: "Full Stack Data Analytics",
        issuer: "RevoU Tech Academy",
        date: "Feb 2025",
        // GANTI NAMA FILE DI BAWAH INI SESUAI FILE DI FOLDER public/certificates/
        image: "/certificates/revou-cert.jpg",
        desc: "An intensive 6-month program covering Python, SQL, Tableau, and Business Acumen with a Distinction passing grade.",
        skills: ["Python", "SQL", "Tableau", "Business Strategy"],
        link: "#" // Masukkan link kredensial jika ada
    },
    {
        id: 2,
        title: "SQL for Data Science",
        issuer: "Coursera / HackerRank", // Contoh saja
        date: "Jan 2025",
        // GANTI NAMA FILE DI SINI
        image: "/img/DAMC.jpg",
        desc: "Certification of competency in performing complex queries, joins, subqueries, and relational database management.",
        skills: ["Advanced Query", "Database Design"],
        link: "#"
    }
];

const Certification = () => {
    return (
        <section className="py-20 bg-slate-900 text-white relative">
            <div className="max-w-6xl mx-auto px-6">

                {/* Header */}
                <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-4">
                    <div>
                        <h2 className="text-3xl md:text-4xl font-bold mb-2">
                            Professional <span className="text-teal-400">Certifications</span>
                        </h2>
                        <p className="text-slate-400 max-w-xl">
                            Evidence of my technical competence and dedication to continuous learning in the field of Data Analytics.
                        </p>
                    </div>
                    {/* Garis Dekorasi */}
                    <div className="hidden md:block w-1/3 h-px bg-slate-700"></div>
                </div>

                {/* Grid Sertifikat */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {certifications.map((cert, index) => (
                        <motion.div
                            key={cert.id}
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            whileHover={{ y: -5 }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            viewport={{ once: true }}
                            className="group bg-slate-800 border border-slate-700 rounded-2xl overflow-hidden hover:shadow-[0_0_30px_rgba(20,184,166,0.15)] hover:border-teal-500/50 transition-all"
                        >

                            {/* Bagian Gambar (Thumbnail) */}
                            <div className="relative h-64 w-full bg-slate-700 overflow-hidden">
                                {/* Fallback jika gambar belum ada */}
                                <div className="absolute inset-0 flex items-center justify-center text-slate-500">
                                    <FiAward size={48} />
                                    <span className="ml-2">Image Placeholder</span>
                                </div>

                                {/* Gambar Asli (Akan muncul jika path file benar) */}
                                <Image
                                    src={cert.image}
                                    alt={cert.title}
                                    fill
                                    className="object-cover transition-transform duration-500 group-hover:scale-105 opacity-90 group-hover:opacity-100"
                                />

                                {/* Overlay Gradient */}
                                <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-transparent to-transparent"></div>
                            </div>

                            {/* Bagian Konten Text */}
                            <div className="p-6 relative">
                                <div className="flex justify-between items-start mb-2">
                                    <div>
                                        <h3 className="text-xl font-bold text-white group-hover:text-teal-400 transition-colors">{cert.title}</h3>
                                        <p className="text-slate-400 text-sm">{cert.issuer} • {cert.date}</p>
                                    </div>
                                    {cert.link !== "#" && (
                                        <a href={cert.link} target="_blank" rel="noreferrer" className="text-slate-500 hover:text-white transition-colors">
                                            <FiExternalLink size={20} />
                                        </a>
                                    )}
                                </div>

                                <p className="text-slate-400 text-sm leading-relaxed mb-4 border-t border-slate-700 pt-4 mt-4">
                                    {cert.desc}
                                </p>

                                {/* Skills Tags */}
                                <div className="flex flex-wrap gap-2">
                                    {cert.skills.map((skill, i) => (
                                        <span key={i} className="text-xs font-mono px-2 py-1 rounded bg-teal-500/10 text-teal-300 border border-teal-500/20 flex items-center gap-1">
                                            <FiCheckCircle size={10} /> {skill}
                                        </span>
                                    ))}
                                </div>
                            </div>

                        </motion.div>
                    ))}
                </div>

            </div>
        </section>
    );
};

export default Certification;