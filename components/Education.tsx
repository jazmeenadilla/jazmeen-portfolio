// src/components/Education.tsx
"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { FiBook, FiAward, FiCalendar, FiMapPin } from 'react-icons/fi';

const Education = () => {
    const educationList = [
        {
            id: 1,
            school: "Universitas Diponegoro",
            degree: "Bachelor of Mathematics (S.Mat)",
            year: "2021 - 2025", // Sesuaikan jika sudah lulus (misal: 2021 - 2025)
            location: "Semarang, Indonesia",
            description: "Build a strong foundation in logic and statistics. Focus on quantitative problem solving and mathematical modeling.",
            tags: ["Statistical Analysis", "Linear Algebra", "Calculus", "Probability Theory", "Real Analysis"],
            icon: <FiBook className="text-3xl text-black dark:text-blue-400" />,
            color: "border-neutral-200 dark:border-blue-500/50"
        },
        {
            id: 2,
            school: "RevoU",
            degree: "Full Stack Data Analytics",
            year: "2025 - 2026", // Sesuaikan tahun bootcamp
            location: "Intensive Bootcamp",
            description: "An intensive program that teaches end-to-end data analysis, from Python, SQL, to business visualization with Tableau/PowerBI.",
            tags: ["Understanding Business Problems", "Statistics and Spreadsheets", "SQL", "Python for Data Analyst", "Data Visualization", "Tableau", "Power BI", "Data Communication", "Business Intelligence"],
            icon: <FiAward className="text-3xl text-black dark:text-teal-400" />,
            color: "border-neutral-200 dark:border-teal-500/50"
        }
    ];

    return (
        <section id="education" className="py-20 bg-neutral-50 dark:bg-slate-950 text-black dark:text-white relative transition-colors duration-300">
            <div className="max-w-6xl mx-auto px-6">

                {/* Header Section */}
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-4xl font-bold mb-4 text-black dark:text-white">
                        Background <span className="text-black dark:text-teal-400">Education</span>
                    </h2>
                    <p className="text-neutral-600 dark:text-slate-400">
                        A combination of a strong academic background in Mathematics with practical technical skills.
                    </p>
                </div>

                {/* Timeline Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 relative">

                    {/* Garis Tengah (Hiasan untuk Desktop) */}
                    <div className="hidden md:block absolute top-0 bottom-0 left-1/2 w-px bg-gradient-to-b from-neutral-300 dark:from-slate-800 via-black/20 dark:via-teal-500/50 to-neutral-300 dark:to-slate-800 -translate-x-1/2"></div>

                    {educationList.map((edu, index) => (
                        <motion.div
                            key={edu.id}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: index * 0.2, duration: 0.5 }}
                            viewport={{ once: true }}
                            className={`relative bg-white dark:bg-slate-900 p-8 rounded-2xl border ${edu.color} hover:shadow-lg dark:hover:shadow-[0_0_30px_rgba(0,0,0,0.2)] transition-all group shadow-sm dark:shadow-none`}
                        >
                            {/* Icon Floating */}
                            <div className="absolute -top-6 left-8 bg-neutral-50 dark:bg-slate-800 p-4 rounded-xl border border-neutral-200 dark:border-slate-700 shadow-xl group-hover:scale-110 transition-transform">
                                {edu.icon}
                            </div>

                            <div className="mt-8">
                                <div className="flex justify-between items-start mb-2">
                                    <h3 className="text-xl font-bold text-black dark:text-white">{edu.school}</h3>
                                    <span className="text-xs font-mono text-neutral-500 bg-neutral-100 dark:bg-slate-800 px-2 py-1 rounded border border-neutral-200 dark:border-slate-700">
                                        {edu.year}
                                    </span>
                                </div>

                                <h4 className="text-black dark:text-teal-400 font-medium mb-4 flex items-center gap-2">
                                    {edu.degree}
                                </h4>

                                <p className="text-neutral-600 dark:text-slate-400 text-sm leading-relaxed mb-6">
                                    {edu.description}
                                </p>

                                {/* Relevant Coursework Tags */}
                                <div className="flex flex-wrap gap-2">
                                    {edu.tags.map((tag, i) => (
                                        <span key={i} className="text-[10px] md:text-xs font-mono px-3 py-1 rounded-full bg-neutral-100 dark:bg-slate-800 text-neutral-600 dark:text-slate-300 border border-neutral-200 dark:border-slate-700">
                                            # {tag}
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

export default Education;