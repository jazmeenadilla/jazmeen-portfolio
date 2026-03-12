// src/components/ETLProcess.tsx
"use client";

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FiDatabase, FiArrowRight, FiCheckCircle, FiPlay, FiSettings, FiFileText } from 'react-icons/fi';
import { SiPython, SiMysql } from 'react-icons/si';
import { RiFileExcel2Fill, RiBarChartBoxFill } from 'react-icons/ri';

const ETLProcess = () => {
    const [isProcessing, setIsProcessing] = useState(false);
    const [logs, setLogs] = useState<string[]>([
        "> Ready to process data...",
        "> Waiting for input source..."
    ]);

    // Langkah-langkah Simulasi Log (Ala Pandas/Python)
    const runPipeline = () => {
        if (isProcessing) return;
        setIsProcessing(true);
        setLogs(["> Initializing ETL Pipeline..."]);

        const steps = [
            { msg: "> [EXTRACT] pd.read_csv('raw_sales_data.csv')", delay: 800, color: "text-slate-400" },
            { msg: "> [INFO] Loaded 1,500,000 rows", delay: 1500, color: "text-blue-400" },
            { msg: "> [TRANSFORM] df.dropna(inplace=True) # Cleaning nulls", delay: 2500, color: "text-yellow-400" },
            { msg: "> [TRANSFORM] Converting currency types...", delay: 3200, color: "text-yellow-400" },
            { msg: "> [SQL] SELECT * FROM customers JOIN transactions", delay: 4000, color: "text-purple-400" },
            { msg: "> [LOAD] Exporting to Tableau Hyper file...", delay: 5000, color: "text-green-400" },
            { msg: "> [SUCCESS] Dashboard updated successfully!", delay: 6000, color: "text-green-500 font-bold" },
        ];

        steps.forEach((step, index) => {
            setTimeout(() => {
                setLogs((prev) => [...prev, step.msg]);
                // Reset status setelah langkah terakhir
                if (index === steps.length - 1) setTimeout(() => setIsProcessing(false), 1000);
            }, step.delay);
        });
    };

    return (
        <section className="py-20 bg-white dark:bg-slate-900 text-black dark:text-white relative overflow-hidden transition-colors duration-300">
            {/* Background Line Decoration */}
            <div className="absolute top-1/2 left-0 w-full h-px bg-gradient-to-r from-transparent via-neutral-300 dark:via-slate-700 to-transparent"></div>

            <div className="max-w-7xl mx-auto px-6 relative z-10">

                {/* Header */}
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-4xl font-bold mb-4 text-black dark:text-white">The <span className="text-black dark:text-teal-400">Process</span></h2>
                    <p className="text-neutral-600 dark:text-slate-400 max-w-2xl mx-auto">
                        From messy raw data to clear insights. This is the pipeline I built to ensure data quality.
                    </p>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-center">

                    {/* 1. VISUALISASI PIPELINE (Diagram Kiri) */}
                    <div className="lg:col-span-2 bg-white dark:bg-slate-800/50 border border-neutral-200 dark:border-slate-700 rounded-xl p-8 relative min-h-[400px] flex flex-col justify-center shadow-md dark:shadow-none">

                        {/* Diagram Alur */}
                        <div className="flex justify-between items-center relative">

                            {/* NODE 1: RAW DATA */}
                            <div className="flex flex-col items-center gap-2 z-10">
                                <div className="w-16 h-16 bg-neutral-100 dark:bg-slate-700 rounded-xl flex items-center justify-center border border-neutral-300 dark:border-slate-600 shadow-lg">
                                    <RiFileExcel2Fill className="text-3xl text-black dark:text-green-500" />
                                </div>
                                <span className="text-xs font-mono text-neutral-500 dark:text-slate-400">Raw Data</span>
                                {/* Partikel Data Kotor (Animasi) */}
                                {isProcessing && (
                                    <motion.div
                                        className="absolute top-6 left-12 w-3 h-3 bg-red-500 rounded-full"
                                        animate={{ x: [0, 100], opacity: [1, 0] }}
                                        transition={{ duration: 1, repeat: 3 }}
                                    />
                                )}
                            </div>

                            {/* ARROW 1 */}
                            <div className="flex-1 h-1 bg-neutral-200 dark:bg-slate-700 mx-4 relative overflow-hidden rounded-full">
                                {isProcessing && (
                                    <motion.div
                                        className="w-full h-full bg-black dark:bg-teal-500"
                                        initial={{ x: "-100%" }}
                                        animate={{ x: "100%" }}
                                        transition={{ duration: 1.5, repeat: Infinity, ease: "linear" }}
                                    />
                                )}
                            </div>

                            {/* NODE 2: PROCESSING ENGINE */}
                            <div className="flex flex-col items-center gap-2 z-10">
                                <div className={`w-20 h-20 rounded-full flex items-center justify-center border-2 shadow-[0_0_30px_rgba(0,0,0,0.1)] dark:shadow-[0_0_30px_rgba(0,0,0,0.2)] transition-colors duration-500 ${isProcessing ? 'border-black dark:border-teal-400 bg-neutral-100 dark:bg-teal-500/10' : 'border-neutral-300 dark:border-slate-600 bg-neutral-100 dark:bg-slate-800'}`}>
                                    {isProcessing ? (
                                        <motion.div animate={{ rotate: 360 }} transition={{ duration: 2, repeat: Infinity, ease: "linear" }}>
                                            <FiSettings className="text-3xl text-black dark:text-teal-400" />
                                        </motion.div>
                                    ) : (
                                        <div className="flex gap-2">
                                            <SiPython className="text-2xl text-black dark:text-yellow-400" />
                                            <SiMysql className="text-2xl text-black dark:text-blue-400" />
                                        </div>
                                    )}
                                </div>
                                <span className="text-xs font-mono text-neutral-500 dark:text-slate-400">Cleaning & Transform</span>
                            </div>

                            {/* ARROW 2 */}
                            <div className="flex-1 h-1 bg-neutral-200 dark:bg-slate-700 mx-4 relative overflow-hidden rounded-full">
                                {isProcessing && (
                                    <motion.div
                                        className="w-full h-full bg-black dark:bg-blue-500"
                                        initial={{ x: "-100%" }}
                                        animate={{ x: "100%" }}
                                        transition={{ duration: 1.5, delay: 0.5, repeat: Infinity, ease: "linear" }}
                                    />
                                )}
                            </div>

                            {/* NODE 3: DASHBOARD */}
                            <div className="flex flex-col items-center gap-2 z-10">
                                <div className={`w-16 h-16 rounded-xl flex items-center justify-center border shadow-lg transition-all duration-500 ${isProcessing ? 'bg-neutral-100 dark:bg-blue-500/20 border-black dark:border-blue-500 scale-110' : 'bg-neutral-100 dark:bg-slate-700 border-neutral-300 dark:border-slate-600'}`}>
                                    <RiBarChartBoxFill className={`text-3xl ${isProcessing ? 'text-black dark:text-blue-400' : 'text-neutral-400 dark:text-slate-400'}`} />
                                </div>
                                <span className="text-xs font-mono text-neutral-500 dark:text-slate-400">Insights</span>
                                {/* Centang Sukses */}
                                {isProcessing && (
                                    <motion.div
                                        initial={{ scale: 0 }} animate={{ scale: 1 }} transition={{ delay: 5.5 }}
                                        className="absolute -top-2 -right-2 bg-green-500 text-white rounded-full p-1"
                                    >
                                        <FiCheckCircle size={12} />
                                    </motion.div>
                                )}
                            </div>
                        </div>

                        <div className="mt-12 flex justify-center">
                            <button
                                onClick={runPipeline}
                                disabled={isProcessing}
                                className={`flex items-center gap-2 px-8 py-3 rounded-full font-bold transition-all ${isProcessing
                                    ? 'bg-neutral-200 dark:bg-slate-700 text-neutral-400 dark:text-slate-500 cursor-not-allowed'
                                    : 'bg-black hover:bg-neutral-800 text-white dark:bg-teal-500 dark:hover:bg-teal-400 dark:text-slate-900 shadow-xl dark:shadow-[0_0_20px_rgba(20,184,166,0.4)]'
                                    }`}
                            >
                                {isProcessing ? 'Processing Data...' : <><FiPlay /> Run ETL Pipeline</>}
                            </button>
                        </div>
                    </div>

                    {/* 2. TERMINAL LOGS (Kanan) */}
                    <div className="bg-slate-950 border border-slate-800 rounded-xl p-6 font-mono text-xs h-[400px] overflow-hidden flex flex-col shadow-2xl">
                        <div className="flex items-center gap-2 mb-4 border-b border-slate-800 pb-2">
                            <div className="w-3 h-3 rounded-full bg-red-500"></div>
                            <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                            <div className="w-3 h-3 rounded-full bg-green-500"></div>
                            <span className="ml-2 text-slate-500">python script.py</span>
                        </div>

                        <div className="space-y-2 overflow-y-auto flex-1 custom-scrollbar">
                            {logs.map((log, i) => (
                                <motion.div
                                    key={i}
                                    initial={{ opacity: 0, x: -10 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    className={`${log.includes("SUCCESS") ? "text-green-400" :
                                        log.includes("EXTRACT") ? "text-blue-300" :
                                            log.includes("TRANSFORM") ? "text-yellow-300" :
                                                "text-slate-300"
                                        }`}
                                >
                                    {log}
                                </motion.div>
                            ))}
                            {isProcessing && (
                                <motion.div
                                    animate={{ opacity: [0, 1, 0] }}
                                    transition={{ repeat: Infinity, duration: 0.8 }}
                                    className="w-2 h-4 bg-teal-500 inline-block align-middle ml-1"
                                />
                            )}
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
};

export default ETLProcess;