// src/components/About.tsx
"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { FiAward, FiBookOpen, FiActivity, FiDatabase, FiCheckCircle } from 'react-icons/fi';

const About = () => {
    return (
        <section id="about" className="py-24 bg-white dark:bg-slate-950 text-black dark:text-slate-300 relative overflow-hidden transition-colors duration-300">

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
                    className="mb-12 md:mb-18"
                >
                    <h2 className="text-3xl md:text-5xl font-bold mb-2 text-black dark:text-white">
                        About <span className="text-black dark:text-transparent dark:bg-clip-text dark:bg-gradient-to-r dark:from-teal-400 dark:to-emerald-400">Me</span>
                    </h2>
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
                        <p className="leading-relaxed text-justify text-neutral-600 dark:text-slate-400">
                            I am a <strong className="text-black dark:text-slate-200 font-semibold">Mathematics graduate</strong> transitioning into data analytics, grounded in <span className="text-black dark:text-teal-400 font-medium">honesty, discipline, and perseverance</span> to deliver reliable, evidence-based insights.
                        </p>

                        <p className="leading-relaxed text-justify text-neutral-600 dark:text-slate-400">
                            To further strengthen this foundation, I pursued the <strong className="text-black dark:text-slate-200 font-semibold">RevoU Full-Stack Data Analytics program</strong>, where I developed strong technical skills in <span className="text-black dark:text-teal-400 font-medium">Statistics, Spreadsheets, SQL, Python, Tableau, and Power BI</span> with hands-on experience in data preparation, analysis, and visualization. Through this program, I successfully translated complex data into actionable business recommendations, enhancing decision-making processes and overall efficiency.
                        </p>

                        <div className="relative p-6 my-8 bg-neutral-100 dark:bg-slate-900/50 border-l-2 border-black dark:border-teal-500 rounded-r-2xl">
                            <FiActivity className="absolute top-6 right-6 text-black/5 dark:text-teal-500/10 text-6xl" />
                            <p className="italic text-black dark:text-slate-300 text-base md:text-lg relative z-10 font-light text-justify">
                                "Beyond analysis, I am driven to connect data insights to broader business strategy, identifying new opportunities and contributing to operational effectiveness."
                            </p>
                        </div>

                        <p className="leading-relaxed text-justify text-neutral-600 dark:text-slate-400">
                            I am eager to bring this <strong className="text-black dark:text-slate-200 font-semibold">disciplined, data-driven approach</strong> to a team that drives measurable business growth and supports impactful decision-making.
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
                        <div className="p-6 rounded-3xl bg-white dark:bg-slate-900/40 border border-neutral-200 dark:border-slate-800/80 backdrop-blur-md hover:bg-neutral-50 dark:hover:bg-slate-800/50 hover:border-black dark:hover:border-teal-500/30 transition-all duration-300 group shadow-sm dark:shadow-none">
                            <div className="flex items-start gap-5">
                                <div className="p-3.5 bg-neutral-100 dark:bg-blue-500/10 text-black dark:text-blue-400 rounded-2xl group-hover:scale-110 group-hover:bg-black group-hover:text-white dark:group-hover:bg-blue-500/20 transition-all duration-300">
                                    <FiBookOpen className="text-2xl" />
                                </div>
                                <div>
                                    <h3 className="text-black dark:text-slate-200 font-semibold text-lg">Mathematics Graduate</h3>
                                    <p className="text-neutral-600 dark:text-slate-500 text-sm mt-1.5 leading-relaxed">Strong foundation in logical precision, analytical thinking, statistics, and quantitative reasoning.</p>
                                </div>
                            </div>
                        </div>

                        {/* Card 2: Certification */}
                        <div className="p-6 rounded-3xl bg-white dark:bg-slate-900/40 border border-neutral-200 dark:border-slate-800/80 backdrop-blur-md hover:bg-neutral-50 dark:hover:bg-slate-800/50 hover:border-black dark:hover:border-purple-500/30 transition-all duration-300 group shadow-sm dark:shadow-none">
                            <div className="flex items-start gap-5">
                                <div className="p-3.5 bg-neutral-100 dark:bg-purple-500/10 text-black dark:text-purple-400 rounded-2xl group-hover:scale-110 group-hover:bg-black group-hover:text-white dark:group-hover:bg-purple-500/20 transition-all duration-300">
                                    <FiAward className="text-2xl" />
                                </div>
                                <div>
                                    <h3 className="text-black dark:text-slate-200 font-semibold text-lg">RevoU FS Data Analyst</h3>
                                    <p className="text-neutral-600 dark:text-slate-500 text-sm mt-1.5 leading-relaxed">Intensive bootcamp covering full-stack data preparation, analysis & visualization.</p>
                                </div>
                            </div>
                        </div>

                        {/* Card 3: Core Skills */}
                        <div className="p-7 rounded-3xl bg-neutral-50 dark:bg-gradient-to-br dark:from-slate-900/80 dark:to-slate-950 border border-neutral-200 dark:border-slate-800/80 relative overflow-hidden group hover:border-black dark:hover:border-teal-500/30 transition-all duration-300 shadow-sm dark:shadow-none">
                            <div className="absolute -right-10 -top-10 w-40 h-40 bg-neutral-200 dark:bg-teal-500/10 rounded-full blur-3xl group-hover:bg-neutral-300 dark:group-hover:bg-teal-500/20 transition-all duration-500"></div>

                            <h3 className="text-black dark:text-slate-200 font-semibold mb-5 flex items-center gap-2.5">
                                <FiDatabase className="text-black dark:text-teal-400" /> Technical Skills
                            </h3>

                            <div className="flex flex-wrap gap-2.5 relative z-10">
                                {['Python', 'SQL', 'Tableau', 'Power BI', 'Spreadsheets', 'Statistics'].map((skill, i) => (
                                    <span
                                        key={i}
                                        className="px-3.5 py-1.5 bg-white dark:bg-slate-950/80 border border-neutral-200 dark:border-slate-700/80 rounded-xl text-sm text-black dark:text-slate-400 hover:text-white dark:hover:text-teal-300 hover:border-black dark:hover:border-teal-500/50 hover:bg-black dark:hover:bg-teal-900/30 transition-all cursor-default flex items-center gap-2 shadow-none"
                                    >
                                        <FiCheckCircle className="text-neutral-400 dark:text-teal-500/50 group-hover:text-white" />
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