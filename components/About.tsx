// src/components/About.tsx
"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { FiAward, FiBookOpen, FiActivity, FiDatabase, FiCheckCircle } from 'react-icons/fi';

const About = () => {
    return (
        <section id="about" className="py-24 bg-slate-950 text-slate-300 relative overflow-hidden">

            {/* Background Decorations */}
            <div className="absolute top-20 right-10 md:right-32 opacity-[0.02] text-[15rem] font-serif select-none pointer-events-none leading-none">
                ∫
            </div>
            <div className="absolute bottom-10 left-10 md:left-20 opacity-[0.02] text-[15rem] font-serif select-none pointer-events-none leading-none">
                ∑
            </div>

            {/* Soft Glow */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-teal-900/10 rounded-full blur-[120px] pointer-events-none"></div>

            <div className="max-w-7xl mx-auto px-6 relative z-10">

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    viewport={{ once: true }}
                    className="mb-16 md:mb-20"
                >
                    <h2 className="text-3xl md:text-5xl font-bold mb-2">
                        About <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-400 to-emerald-400">Me</span>
                    </h2>
                    <p className="text-slate-400 mt-4 max-w-xl text-lg leading-relaxed">
                        Evidence of my technical competence and dedication to continuous learning in the field of Data Analytics.
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-10 items-start">

                    {/* LEFT: TEXT STORY */}
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.1 }}
                        viewport={{ once: true }}
                        className="lg:col-span-7 space-y-7 text-lg text-slate-400"
                    >
                        <p className="leading-relaxed">
                            I am a <strong className="text-slate-200 font-semibold">Mathematics graduate</strong> transitioning into data analytics, grounded in <span className="text-teal-400 font-medium">honesty, discipline, and perseverance</span> to deliver reliable, evidence-based insights.
                        </p>

                        <p className="leading-relaxed">
                            To further strengthen this foundation, I pursued the <strong className="text-slate-200 font-semibold">RevoU Full-Stack Data Analytics program</strong>, where I developed strong technical skills in <span className="text-teal-400 font-medium whitespace-nowrap">Statistics, Spreadsheets, SQL, Python, Tableau, and Power BI</span> with hands-on experience in data preparation, analysis, and visualization. Through this program, I successfully translated complex data into actionable business recommendations, enhancing decision-making processes and overall efficiency.
                        </p>

                        <div className="relative p-6 my-8 bg-gradient-to-r from-teal-500/10 to-transparent border-l-2 border-teal-500 rounded-r-2xl">
                            <FiActivity className="absolute top-6 right-6 text-teal-500/10 text-6xl" />
                            <p className="italic text-slate-300 text-base md:text-lg relative z-10 font-light">
                                "Beyond analysis, I am driven to connect data insights to broader business strategy, identifying new opportunities and contributing to operational effectiveness."
                            </p>
                        </div>

                        <p className="leading-relaxed">
                            I am eager to bring this <strong className="text-slate-200 font-semibold">disciplined, data-driven approach</strong> to a team that drives measurable business growth and supports impactful decision-making.
                        </p>
                    </motion.div>


                    {/* RIGHT: BENTO HIGHLIGHTS */}
                    <motion.div
                        initial={{ opacity: 0, x: 30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8, delay: 0.3 }}
                        viewport={{ once: true }}
                        className="lg:col-span-5 grid grid-cols-1 gap-5"
                    >
                        {/* Card 1: Education */}
                        <div className="p-6 rounded-3xl bg-slate-900/40 border border-slate-800/80 backdrop-blur-md hover:bg-slate-800/50 hover:border-teal-500/30 transition-all duration-300 group">
                            <div className="flex items-start gap-5">
                                <div className="p-3.5 bg-blue-500/10 text-blue-400 rounded-2xl group-hover:scale-110 group-hover:bg-blue-500/20 transition-all duration-300">
                                    <FiBookOpen className="text-2xl" />
                                </div>
                                <div>
                                    <h3 className="text-slate-200 font-semibold text-lg">Mathematics Graduate</h3>
                                    <p className="text-slate-500 text-sm mt-1.5 leading-relaxed">Strong foundation in logical precision, statistics, and quantitative reasoning.</p>
                                </div>
                            </div>
                        </div>

                        {/* Card 2: Certification */}
                        <div className="p-6 rounded-3xl bg-slate-900/40 border border-slate-800/80 backdrop-blur-md hover:bg-slate-800/50 hover:border-purple-500/30 transition-all duration-300 group">
                            <div className="flex items-start gap-5">
                                <div className="p-3.5 bg-purple-500/10 text-purple-400 rounded-2xl group-hover:scale-110 group-hover:bg-purple-500/20 transition-all duration-300">
                                    <FiAward className="text-2xl" />
                                </div>
                                <div>
                                    <h3 className="text-slate-200 font-semibold text-lg">RevoU FS Data Analyst</h3>
                                    <p className="text-slate-500 text-sm mt-1.5 leading-relaxed">Intensive bootcamp covering full-stack data preparation, analysis & visualization.</p>
                                </div>
                            </div>
                        </div>

                        {/* Card 3: Core Skills */}
                        <div className="p-7 rounded-3xl bg-gradient-to-br from-slate-900/80 to-slate-950 border border-slate-800/80 relative overflow-hidden group hover:border-teal-500/30 transition-all duration-300">
                            <div className="absolute -right-10 -top-10 w-40 h-40 bg-teal-500/10 rounded-full blur-3xl group-hover:bg-teal-500/20 transition-all duration-500"></div>

                            <h3 className="text-slate-200 font-semibold mb-5 flex items-center gap-2.5">
                                <FiDatabase className="text-teal-400" /> Technical Arsenal
                            </h3>

                            <div className="flex flex-wrap gap-2.5 relative z-10">
                                {['Python', 'SQL', 'Tableau', 'Power BI', 'Spreadsheets', 'Statistics'].map((skill, i) => (
                                    <span
                                        key={i}
                                        className="px-3.5 py-1.5 bg-slate-950/80 border border-slate-700/80 rounded-xl text-sm text-slate-400 hover:text-teal-300 hover:border-teal-500/50 hover:bg-teal-900/30 transition-all cursor-default flex items-center gap-2"
                                    >
                                        <FiCheckCircle className="text-teal-500/50" />
                                        {skill}
                                    </span>
                                ))}
                            </div>
                        </div>
                    </motion.div>

                </div>
            </div>
        </section>
    );
};

export default About;