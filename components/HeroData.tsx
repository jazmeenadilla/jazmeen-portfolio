// src/components/HeroData.tsx
"use client";

import React from 'react';
import { TypeAnimation } from 'react-type-animation';
import { motion } from 'framer-motion';
import { FiDownload, FiDatabase, FiCheckCircle } from 'react-icons/fi';
import Image from 'next/image';

const HeroData = () => {
    const bars = [20, 45, 30, 80, 50, 95, 65, 85, 45, 100, 75, 50];

    return (
        <section className="relative w-full min-h-screen bg-slate-950 text-white flex flex-col justify-center px-6 md:px-20 overflow-hidden font-sans">

            {/* Background Grid Pattern */}
            <div className="absolute inset-0 opacity-5 pointer-events-none"
                style={{ backgroundImage: 'linear-gradient(#2dd4bf 1px, transparent 1px), linear-gradient(90deg, #2dd4bf 1px, transparent 1px)', backgroundSize: '40px 40px' }}>
            </div>

            {/* --- NAVIGASI UPDATE --- */}
            <nav className="absolute top-6 right-6 md:right-20 flex gap-6 text-sm md:text-base text-slate-300 font-mono z-50">
                <a href="#about" className="hover:text-teal-400 transition-colors cursor-pointer">About</a>
                <a href="#skills" className="hover:text-teal-400 transition-colors cursor-pointer">Toolkit</a>
                <a href="#projects" className="hover:text-teal-400 transition-colors cursor-pointer">Projects</a>
                <a href="#contact" className="hover:text-teal-400 transition-colors cursor-pointer">Contact</a>
            </nav>
            {/* ----------------------- */}

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center z-10 max-w-7xl mx-auto w-full pt-20 md:pt-0">

                {/* KOLOM KIRI (TEKS) */}
                <div className="space-y-6 order-2 lg:order-1">
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8 }}
                    >
                        <p className="text-teal-400 font-mono mb-2 text-lg">Hello, I'm</p>
                        <h1 className="text-5xl md:text-7xl font-bold leading-tight">
                            Jazmeen Adilla <br />
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-400 to-blue-500">
                                Data Analyst.
                            </span>
                        </h1>
                    </motion.div>

                    <div className="text-xl md:text-2xl font-mono text-slate-300 h-16 flex items-center">
                        <span className="mr-3 text-blue-500 text-2xl">SELECT * FROM</span>
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
                            className="font-bold text-slate-100"
                        />
                    </div>

                    <motion.p
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.5 }}
                        className="text-slate-400 max-w-lg text-lg leading-relaxed"
                    >
                        Mengubah data mentah menjadi cerita yang bermakna.
                        Spesialisasi dalam <span className="text-teal-400 font-semibold">SQL, Python,</span> dan <span className="text-blue-400 font-semibold">Data Visualization</span> untuk membantu bisnis mengambil keputusan yang tepat.
                    </motion.p>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.8 }}
                        className="flex flex-wrap gap-4 pt-6"
                    >
                        <a href="#projects" className="px-8 py-3 bg-gradient-to-r from-teal-500 to-blue-600 text-white font-bold rounded-lg hover:shadow-[0_0_20px_rgba(20,184,166,0.5)] transition-all transform hover:-translate-y-1">
                            Lihat Dashboard
                        </a>
                        <button className="px-8 py-3 border border-slate-600 hover:border-teal-400 text-slate-300 hover:text-teal-400 font-mono rounded-lg hover:bg-teal-400/10 flex items-center gap-2 transition-all">
                            <FiDownload /> Resume
                        </button>
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
                        <div className="relative w-52 h-52 md:w-64 md:h-64 rounded-full overflow-hidden border-4 border-slate-800 shadow-[0_0_60px_rgba(20,184,166,0.4)] z-20 bg-slate-900">
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
                        className="absolute top-[10%] right-[5%] lg:right-[10%] bg-slate-800/80 backdrop-blur-md border border-slate-700 p-3 rounded-xl shadow-xl z-30 flex items-center gap-3"
                    >
                        <div className="p-2 bg-teal-500/20 rounded-lg text-teal-400">
                            <FiDatabase size={20} />
                        </div>
                        <div>
                            <div className="text-[10px] uppercase tracking-wider text-slate-400">Rows Processed</div>
                            <div className="text-lg font-bold text-white font-mono">1,420,099</div>
                        </div>
                    </motion.div>

                    <motion.div
                        animate={{ y: [0, 10, 0] }}
                        transition={{ duration: 7, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                        className="absolute bottom-[15%] left-[5%] lg:left-[10%] bg-slate-800/80 backdrop-blur-md border border-slate-700 py-2 px-4 rounded-full shadow-xl z-30"
                    >
                        <div className="flex items-center gap-2">
                            <FiCheckCircle className="text-teal-400" />
                            <span className="text-xs font-bold text-slate-200">Analysis: Accurate & Clean</span>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default HeroData;