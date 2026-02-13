// src/components/About.tsx
"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { FiAward, FiTrendingUp, FiBookOpen, FiActivity } from 'react-icons/fi';

const About = () => {
    return (
        <section id="about" className="py-20 bg-slate-900 text-white relative overflow-hidden">

            {/* Hiasan Background: Rumus Matematika Samar (Hanya estetika) */}
            <div className="absolute top-10 right-0 opacity-5 text-9xl font-serif select-none pointer-events-none">
                ∫dx
            </div>
            <div className="absolute bottom-10 left-10 opacity-5 text-9xl font-serif select-none pointer-events-none">
                ∑
            </div>

            <div className="max-w-6xl mx-auto px-6 relative z-10">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">

                    {/* KOLOM KIRI: FOTO / ILUSTRASI PROFIL */}
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8 }}
                        viewport={{ once: true }}
                        className="relative"
                    >
                        {/* Kartu Profil Utama */}
                        <div className="bg-gradient-to-br from-slate-800 to-slate-900 border border-slate-700 p-8 rounded-2xl shadow-2xl relative overflow-hidden">
                            <div className="absolute top-0 right-0 w-24 h-24 bg-teal-500/10 rounded-bl-full"></div>

                            <div className="mb-6">
                                <span className="px-3 py-1 bg-teal-500/20 text-teal-400 text-xs font-mono font-bold rounded-full">
                                    THE PROFILE
                                </span>
                            </div>

                            <h3 className="text-3xl font-bold mb-2">Math-Driven Analyst</h3>
                            <p className="text-slate-400 mb-6 text-sm">Combining Logical Precision with Business Strategy.</p>

                            <div className="space-y-4">
                                <div className="flex items-center gap-4 p-3 bg-slate-800/50 rounded-lg border border-slate-700/50">
                                    <div className="p-2 bg-blue-500/20 text-blue-400 rounded-lg"><FiBookOpen /></div>
                                    <div>
                                        <div className="text-xs text-slate-500 uppercase">Education</div>
                                        <div className="font-semibold">Mathematics Graduate</div>
                                    </div>
                                </div>

                                <div className="flex items-center gap-4 p-3 bg-slate-800/50 rounded-lg border border-slate-700/50">
                                    <div className="p-2 bg-purple-500/20 text-purple-400 rounded-lg"><FiAward /></div>
                                    <div>
                                        <div className="text-xs text-slate-500 uppercase">Certification</div>
                                        <div className="font-semibold">RevoU FS Data Analyst</div>
                                    </div>
                                </div>

                                <div className="flex items-center gap-4 p-3 bg-slate-800/50 rounded-lg border border-slate-700/50">
                                    <div className="p-2 bg-green-500/20 text-green-400 rounded-lg"><FiTrendingUp /></div>
                                    <div>
                                        <div className="text-xs text-slate-500 uppercase">Impact Goal</div>
                                        <div className="font-semibold">Targeting 15% Revenue Growth</div>
                                    </div>
                                </div>
                            </div>

                        </div>

                        {/* Elemen Dekorasi Belakang */}
                        <div className="absolute -z-10 top-6 -right-6 w-full h-full border-2 border-slate-700 rounded-2xl"></div>
                    </motion.div>


                    {/* KOLOM KANAN: TEXT NARRATIVE */}
                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        viewport={{ once: true }}
                        className="space-y-6 text-slate-300 leading-relaxed"
                    >
                        <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                            About <span className="text-teal-400">Me</span>
                        </h2>

                        <p>
                            I am an aspiring Data Analyst with a <strong className="text-white">strong foundation in Mathematics</strong> who values logical precision and data-driven problem solving. Through my participation in the <strong className="text-white">RevoU Fullstack Data Analyst program</strong>, I have successfully transformed over <span className="text-teal-400 font-bold">1,000 transaction records</span> into strategic insights.
                        </p>

                        <p>
                            I utilize <strong>Python</strong> for data processing and <strong>Tableau</strong> to visualize key trends, targeting a <span className="text-green-400 font-bold">15% increase in business revenue</span>. I have significantly enhanced my skills in Spreadsheets, SQL, Python, and Tableau/Power BI, which are essential for a successful career in data analysis.
                        </p>

                        <div className="p-4 border-l-4 border-teal-500 bg-teal-500/5 italic text-slate-400">
                            "My background as a Mathematics graduate combined with an intensive data analytics bootcamp demonstrates my advanced quantitative reasoning and technical readiness."
                        </div>

                        <p>
                            I am highly proficient in Python for data cleaning, Spreadsheets for advanced reporting, and both Tableau and Power BI to translate complex datasets into interactive dashboards. I am eager to leverage my mathematical precision to deliver high-quality analysis that drives measurable business growth.
                        </p>

                    </motion.div>

                </div>
            </div>
        </section>
    );
};

export default About;