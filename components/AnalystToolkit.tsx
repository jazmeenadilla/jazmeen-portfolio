// src/components/AnalystToolkit.tsx
"use client";

import React from 'react';
import { motion } from 'framer-motion';

// 1. Hapus SiPowerbi dari sini
import {
    SiPython, SiMysql, SiTableau,
    SiPandas, SiNumpy, SiGooglebigquery
} from 'react-icons/si';

// 2. Tambahkan RiBarChartBoxFill (Untuk pengganti Power BI)
import { RiFileExcel2Fill, RiBarChartBoxFill } from 'react-icons/ri';

const skills = [
    { name: "Python", icon: <SiPython />, color: "text-yellow-400", desc: "Data Cleaning & Analysis (Pandas/NumPy)" },
    { name: "SQL", icon: <SiMysql />, color: "text-blue-400", desc: "Complex Queries & Database Management" },
    { name: "Tableau", icon: <SiTableau />, color: "text-orange-500", desc: "Interactive Dashboard Visualization" },

    // 3. Gunakan ikon baru di sini
    { name: "Power BI", icon: <RiBarChartBoxFill />, color: "text-yellow-500", desc: "Business Intelligence Reporting" },

    { name: "Excel", icon: <RiFileExcel2Fill />, color: "text-green-500", desc: "Advanced Pivot & Macro" },
    { name: "BigQuery", icon: <SiGooglebigquery />, color: "text-blue-300", desc: "Cloud Data Warehousing" },
];

const AnalystToolkit = () => {
    return (
        <section className="py-20 bg-slate-900 relative">
            <div className="max-w-6xl mx-auto px-6">

                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">The Analyst <span className="text-teal-400">Toolkit</span></h2>
                    <p className="text-slate-400 max-w-2xl mx-auto">
                        A collection of tools and technologies I use to extract, process, and visualize data.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {skills.map((skill, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: index * 0.1 }}
                            whileHover={{ y: -5 }}
                            className="bg-slate-800/50 border border-slate-700 hover:border-teal-500/50 p-6 rounded-xl transition-all group cursor-default"
                        >
                            <div className="flex items-start justify-between mb-4">
                                <div className={`text-4xl ${skill.color} bg-slate-900 p-3 rounded-lg group-hover:scale-110 transition-transform`}>
                                    {skill.icon}
                                </div>
                                <div className="text-slate-500 font-mono text-xs opacity-0 group-hover:opacity-100 transition-opacity">
                                    {skill.name}
                                </div>
                            </div>
                            <h3 className="text-xl font-bold text-white mb-2">{skill.name}</h3>
                            <p className="text-slate-400 text-sm leading-relaxed">
                                {skill.desc}
                            </p>
                        </motion.div>
                    ))}
                </div>

                {/* Soft Skills Section */}
                <div className="mt-20 pt-16 border-t border-slate-800/80 text-center">
                    <h3 className="text-3xl font-bold text-white mb-8">
                        Soft <span className="text-teal-400">Skills</span>
                    </h3>
                    <div className="flex flex-wrap justify-center gap-4">
                        {["Problem Solving", "Analytical Thinking", "Adaptability", "Data Communication", "Teamwork"].map((skill, index) => (
                            <motion.div
                                key={`soft-${index}`}
                                initial={{ opacity: 0, scale: 0.9 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                transition={{ duration: 0.3, delay: index * 0.1 }}
                                viewport={{ once: true }}
                                className="px-6 py-2.5 bg-slate-800/60 border border-slate-700/80 hover:border-teal-500/50 hover:bg-slate-800 hover:text-teal-300 text-slate-300 rounded-full text-sm font-medium transition-all shadow-sm cursor-default"
                            >
                                {skill}
                            </motion.div>
                        ))}
                    </div>
                </div>

            </div>
        </section>
    );
};

export default AnalystToolkit;