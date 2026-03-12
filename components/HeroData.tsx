// src/components/HeroData.tsx
"use client";

import React from 'react';
import { TypeAnimation } from 'react-type-animation';
import { motion } from 'framer-motion';
import { FiDownload, FiDatabase, FiCheckCircle, FiCpu } from 'react-icons/fi';
import Image from 'next/image';
import { FiFileText } from "react-icons/fi";

const HeroData = () => {
    const bars = [20, 45, 30, 80, 50, 95, 65, 85, 45, 100, 75, 50];

    return (
        <section className="relative w-full min-h-screen bg-white dark:bg-slate-950 text-black dark:text-white flex flex-col justify-center px-6 md:px-20 overflow-hidden font-sans transition-colors duration-300">

            {/* Background Grid Pattern */}
            <div className="absolute inset-0 opacity-5 pointer-events-none"
                style={{ backgroundImage: 'linear-gradient(#2dd4bf 1px, transparent 1px), linear-gradient(90deg, #2dd4bf 1px, transparent 1px)', backgroundSize: '40px 40px' }}>
            </div>

            {/* ----------------------- */}

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center z-10 max-w-7xl mx-auto w-full pt-20 md:pt-0">

                {/* KOLOM KIRI (TEKS) */}
                <div className="space-y-6 order-2 lg:order-1">
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8 }}
                    >
                        <p className="text-black dark:text-teal-400 font-mono mb-2 text-lg">Hello, I'm</p>
                        <h1 className="text-5xl md:text-7xl font-bold leading-tight text-black dark:text-white">
                            Jazmeen Adilla <br />
                            <span className="text-black dark:text-transparent dark:bg-clip-text dark:bg-gradient-to-r dark:from-teal-400 dark:to-blue-500">
                                Data Analyst.
                            </span>
                        </h1>
                        <div className="flex flex-wrap items-center gap-3 mt-4 text-sm md:text-lg font-medium text-neutral-600 dark:text-slate-400">
                            <span className="flex items-center gap-2"><FiCpu className="text-teal-600 dark:text-teal-400" /> Driven by Logic</span>
                            <span className="hidden sm:inline text-neutral-300 dark:text-slate-600">•</span>
                            <span className="flex items-center gap-2"><FiDatabase className="text-blue-600 dark:text-blue-400" /> Powered by Data</span>
                        </div>
                    </motion.div>

                    <div className="text-xl md:text-2xl font-mono text-neutral-600 dark:text-slate-300 h-16 flex items-center">
                        <span className="mr-3 text-black dark:text-blue-500 text-2xl">SELECT * FROM</span>
                        <TypeAnimation
                            sequence={[
                                'Insights', 1000,
                                'Patterns', 1000,
                                'Solutions', 1000,
                                'Big_Data', 1000
                            ]}
                            wrapper="span"
                            speed={50}
                            repeat={Infinity}
                            className="font-bold text-black dark:text-slate-100"
                        />
                    </div>

                    <motion.p
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.5 }}
                        className="text-slate-600 dark:text-slate-400 max-w-lg text-lg leading-relaxed text-justify"
                    >
                        A Mathematics graduate with a strong analytical foundation, transitioning into Data Analytics. I transform complex data into meaningful stories, specializing in <span className="text-black dark:text-teal-400 font-semibold">Spreadsheets, SQL, Python,</span> and <span className="text-black dark:text-blue-400 font-semibold">Data Visualization</span> to help businesses make informed decisions.
                    </motion.p>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.8 }}
                        className="flex flex-wrap gap-4 pt-6"
                    >
                        <a href="#projects" className="px-8 py-3 bg-black dark:bg-gradient-to-r dark:from-teal-500 dark:to-blue-600 text-white font-bold rounded-lg shadow-sm hover:shadow-md dark:shadow-none dark:hover:shadow-[0_0_20px_rgba(20,184,166,0.5)] transition-all transform hover:-translate-y-1">
                            View Projects
                        </a>
                        <a
                            href="/JAZMEEN ADILLA_ ATS CV.pdf"
                            target="_blank"
                            rel="noopener noreferrer"
                            download="JAZMEEN ADILLA_ ATS CV.pdf"
                            className="px-8 py-3 border border-black dark:border-slate-600 hover:border-black dark:hover:border-teal-400 text-black dark:text-slate-300 hover:text-white dark:hover:text-teal-400 font-mono rounded-lg hover:bg-black dark:hover:bg-teal-400/10 flex items-center gap-2 transition-all"
                        >
                            <FiFileText /> Download CV
                        </a>
                    </motion.div>
                </div>

                {/* KOLOM KANAN (FOTO & CHART) */}
                <div className="relative h-[500px] flex items-center justify-center order-1 lg:order-2 font-sans">
                    <div className="absolute inset-0 flex items-end justify-center z-0 opacity-40 md:opacity-60">
                        <div className="absolute bottom-0 w-full h-1/2 bg-blue-500/20 blur-[100px]"></div>
                        <div className="flex items-end gap-2 md:gap-3 h-full pb-10">
                            {bars.map((height, index) => (
                                <motion.div
                                    key={index}
                                    animate={{
                                        height: [`${height * 0.6}%`, `${height * 0.3}%`, `${height * 0.6}%`],
                                        opacity: [0.3, 0.7, 0.3]
                                    }}
                                    transition={{
                                        duration: 3 + (index * 0.4),
                                        repeat: Infinity,
                                        ease: "easeInOut"
                                    }}
                                    className={`w-3 md:w-6 rounded-t-full ${index % 2 === 0 ? 'bg-teal-500' : 'bg-blue-600'}`}
                                ></motion.div>
                            ))}
                        </div>
                    </div>

                    <motion.div
                        initial={{ scale: 0.8, opacity: 0 }}
                        animate={{ scale: 1, opacity: 1 }}
                        transition={{ duration: 1 }}
                        className="relative z-20 w-64 h-64 md:w-80 md:h-80 flex items-center justify-center"
                    >
                        <motion.div
                            animate={{ rotate: 360 }}
                            transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
                            className="absolute inset-0 rounded-full border border-dashed border-teal-500/30"
                        ></motion.div>
                        <motion.div
                            animate={{ rotate: -360 }}
                            transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
                            className="absolute inset-4 rounded-full border border-dotted border-blue-500/40"
                        ></motion.div>
                        <div className="relative w-52 h-52 md:w-64 md:h-64 rounded-full overflow-hidden border-4 border-white dark:border-slate-800 shadow-xl dark:shadow-[0_0_60px_rgba(20,184,166,0.4)] z-20 bg-white dark:bg-slate-900">
                            <Image
                                src="/jazmeen-profile.png"
                                alt="Jazmeen Adilla Data Analyst"
                                fill
                                className="object-cover"
                                priority
                            />
                        </div>
                    </motion.div>

                    <motion.div
                        animate={{ y: [0, -15, 0] }}
                        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
                        className="absolute top-[10%] right-[5%] lg:right-[10%] bg-white/90 dark:bg-slate-800/80 backdrop-blur-md border border-slate-200 dark:border-slate-700 p-3 rounded-xl shadow-xl z-30 flex items-center gap-3"
                    >
                        <div className="p-2 bg-neutral-100 dark:bg-teal-500/20 rounded-lg text-black dark:text-teal-400">
                            <FiDatabase size={20} />
                        </div>
                        <div>
                            <div className="text-[10px] uppercase tracking-wider text-neutral-500 dark:text-slate-400">Rows Processed</div>
                            <div className="text-lg font-bold text-black dark:text-white font-mono">1,420,099</div>
                        </div>
                    </motion.div>

                    <motion.div
                        animate={{ y: [0, 10, 0] }}
                        transition={{ duration: 7, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                        className="absolute bottom-[15%] left-[5%] lg:left-[10%] bg-white/90 dark:bg-slate-800/80 backdrop-blur-md border border-slate-200 dark:border-slate-700 py-2 px-4 rounded-full shadow-xl z-30"
                    >
                        <div className="flex items-center gap-2">
                            <FiCheckCircle className="text-black dark:text-teal-400" />
                            <span className="text-xs font-bold text-black dark:text-slate-200">Analysis: Accurate & Clean</span>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default HeroData;