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
        issuer: "RevoU",
        date: "Feb 2025",
        // GANTI NAMA FILE DI BAWAH INI SESUAI FILE DI FOLDER public/certificates/
        image: "/img/full-stack.jpg",
        desc: "An intensive 6-month program covering Python, SQL, Tableau, and Business Acumen with a Distinction passing grade.",
        skills: ["Python", "SQL", "Tableau", "Business Strategy"],
        link: "https://drive.google.com/file/d/1G-Eqxxardqqd1aQiovry3bYicoGNymKr/view?usp=sharing" // Masukkan link kredensial jika ada
    },
    {
        id: 2,
        title: "Mini Course: Intro to Data Analytics",
        issuer: "RevoU", // Contoh saja
        date: "Jan 2025",
        // GANTI NAMA FILE DI SINI
        image: "/img/DAMC.jpg",
        desc: "Certification of competency in performing complex queries, joins, subqueries, and relational database management.",
        skills: ["Advanced Query", "Database Design"],
        link: "https://drive.google.com/file/d/11U8kvfShF-rLAMd7-ilSDJWhkoDlZO1J/view?usp=sharing"
    },
    {
        id: 3,
        title: "Stand-Out Data Analyst Portfolio for US Recruiters",
        issuer: "BuildWithAngga", // Ganti sesuai nama bootcamp
        date: "Feb 2026",
        image: "/img/bwa porto.jpg", // Ganti nama file sesuai kebutuhan
        desc: "Learn to build a professional and relevant Data Analyst portfolio that meets US company standards, complete with realistic projects based on datasets similar to real companies.",
        skills: [
            "Data Cleaning",
            "Exploratory Data Analysis",
            "Excel",
            "Power BI",
            "Dashboard Development",
            "Data Storytelling",
            "Portfolio Strategy"
        ],
        link: "https://drive.google.com/file/d/1JXD_IDHgI8ft43aULaJ4VIaIvMcL8ugS/view?usp=sharing"
    }
];

const Certification = () => {
    return (
        <section id="certifications" className="py-20 bg-slate-950 text-slate-300 relative overflow-hidden">

            {/* Soft Background Glow */}
            <div className="absolute top-1/2 left-1/4 w-[400px] h-[400px] bg-teal-900/10 rounded-full blur-[100px] pointer-events-none -translate-y-1/2"></div>

            <div className="max-w-4xl mx-auto px-6 relative z-10">

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    viewport={{ once: true }}
                    className="mb-10 text-center md:text-left border-b border-slate-800/50 pb-5"
                >
                    <h2 className="text-3xl md:text-5xl font-bold mb-2">
                        Professional <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-400 to-emerald-400">Certifications</span>
                    </h2>
                    <p className="text-slate-400 mt-4 max-w-xl leading-relaxed mx-auto md:mx-0">
                        Evidence of my technical competence and dedication to continuous learning in the field of Data Analytics.
                    </p>
                </motion.div>

                {/* Compact List */}
                <div className="flex flex-col gap-4">
                    {certifications.map((cert, index) => (
                        <motion.div
                            key={cert.id}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            viewport={{ once: true }}
                            className="group flex flex-col sm:flex-row gap-5 p-4 sm:p-5 bg-slate-900/40 border border-slate-800/80 backdrop-blur-sm rounded-2xl hover:bg-slate-800/60 hover:border-teal-500/30 transition-all duration-300 hover:shadow-[0_4px_20px_-10px_rgba(20,184,166,0.15)]"
                        >

                            {/* Compact Image */}
                            <div className="relative w-full sm:w-48 h-48 sm:h-auto shrink-0 rounded-xl overflow-hidden bg-slate-950 border border-slate-800/50">
                                <div className="absolute inset-0 flex items-center justify-center text-slate-800">
                                    <FiAward size={24} />
                                </div>
                                <Image
                                    src={cert.image}
                                    alt={cert.title}
                                    fill
                                    className="object-cover transition-transform duration-500 group-hover:scale-105 opacity-80 group-hover:opacity-100"
                                />
                                <div className="absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-[#0f172a]/90 to-transparent sm:hidden opacity-80"></div>
                            </div>

                            {/* Content Section */}
                            <div className="flex-1 flex flex-col justify-center py-1">
                                <div className="flex justify-between items-start gap-3 mb-2">
                                    <div className="pr-4">
                                        <h3 className="text-lg font-bold text-slate-200 group-hover:text-teal-400 transition-colors leading-tight mb-1">
                                            {cert.title}
                                        </h3>
                                        <div className="text-teal-500/80 text-xs font-medium flex items-center gap-1.5 flex-wrap">
                                            <span>{cert.issuer}</span>
                                            <span className="text-slate-600 hidden sm:inline">•</span>
                                            <span className="text-slate-400 font-normal">{cert.date}</span>
                                        </div>
                                    </div>
                                    {cert.link !== "#" && (
                                        <a
                                            href={cert.link}
                                            target="_blank"
                                            rel="noreferrer"
                                            className="p-2 rounded-lg bg-slate-800/40 text-slate-400 hover:text-teal-300 hover:bg-teal-500/10 border border-transparent hover:border-teal-500/20 transition-all shrink-0"
                                            aria-label="View Credential"
                                        >
                                            <FiExternalLink size={16} />
                                        </a>
                                    )}
                                </div>

                                <p className="text-slate-400 text-sm leading-relaxed mb-4">
                                    {cert.desc}
                                </p>

                                {/* Skills Footer */}
                                <div className="flex flex-wrap gap-2 mt-auto">
                                    {cert.skills.map((skill, i) => (
                                        <span
                                            key={i}
                                            className="px-2 py-1 bg-slate-950/40 border border-slate-800/60 rounded-md text-[11px] font-mono text-slate-400 flex items-center gap-1.5 group-hover:border-teal-500/20 group-hover:bg-teal-900/5 group-hover:text-teal-200 transition-colors"
                                        >
                                            <FiCheckCircle className="text-teal-500/40 group-hover:text-teal-400/70" size={10} /> {skill}
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