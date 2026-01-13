// src/components/CaseStudies.tsx
"use client";

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FiExternalLink, FiBarChart2, FiPieChart } from 'react-icons/fi';

// 1. Import ikon Brand yang AMAN
import { SiTableau, SiPython, SiMysql } from 'react-icons/si';

// 2. Import ikon pengganti dari Remix Icons
import { RiFileExcel2Fill, RiBarChartBoxFill } from 'react-icons/ri';

const projects = [
    {
        id: 1,
        title: "E-Commerce Sales Analysis",
        category: "Exploratory Data Analysis",
        // Hapus SiPandas, cukup Python & Tableau
        tools: [<SiPython key="py" />, <SiTableau key="tab" />],
        // Image placeholder (Ganti path ini nanti jika sudah ada gambar)
        image: "/projects/project1.jpg",
        desc: "Menganalisis tren penjualan tahunan untuk mengidentifikasi produk terlaris dan pola pembelian pelanggan.",
        insight: "Revenue +24%",
        insightDesc: "Peningkatan pendapatan Q4 melalui strategi bundling.",
        link: "#"
    },
    {
        id: 2,
        title: "Customer Churn Prediction",
        category: "Machine Learning / SQL",
        tools: [<SiMysql key="sql" />, <SiPython key="py" />],
        image: "/projects/project2.jpg",
        desc: "Query SQL kompleks untuk membersihkan data pelanggan dan Python untuk memprediksi risiko churn.",
        insight: "85% Accuracy",
        insightDesc: "Model prediksi churn pelanggan telekomunikasi.",
        link: "#"
    },
    {
        id: 3,
        title: "Marketing Campaign Dashboard",
        category: "Business Intelligence",
        // Ganti PowerBI & Excel dengan ikon Remix (Ri...)
        tools: [<RiBarChartBoxFill key="pbi" />, <RiFileExcel2Fill key="xl" />],
        image: "/projects/project3.jpg",
        desc: "Dashboard interaktif untuk memonitor performa kampanye iklan di berbagai channel media sosial.",
        insight: "ROI 3.5x",
        insightDesc: "Efisiensi budget iklan meningkat signifikan.",
        link: "#"
    }
];

const CaseStudies = () => {
    const [hoveredId, setHoveredId] = useState<number | null>(null);

    return (
        <section id="projects" className="py-20 bg-slate-950 text-white">
            <div className="max-w-7xl mx-auto px-6">

                {/* Header Section */}
                <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-4">
                    <div>
                        <h2 className="text-3xl md:text-5xl font-bold mb-2">
                            Selected <span className="text-teal-400">Case Studies</span>
                        </h2>
                        <p className="text-slate-400 max-w-xl">
                            Proyek analisis data pilihan yang mengubah data mentah menjadi keputusan bisnis strategis.
                        </p>
                    </div>
                    <div className="hidden md:block w-32 h-1 bg-gradient-to-r from-teal-500 to-transparent"></div>
                </div>

                {/* Grid Projects */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {projects.map((project) => (
                        <motion.div
                            key={project.id}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5 }}
                            className="group relative rounded-2xl overflow-hidden bg-slate-900 border border-slate-800 h-[450px] cursor-pointer"
                            onMouseEnter={() => setHoveredId(project.id)}
                            onMouseLeave={() => setHoveredId(null)}
                            onClick={() => window.open(project.link, '_blank')}
                        >

                            {/* 1. GAMBAR THUMBNAIL (Background) */}
                            <div className="absolute inset-0 w-full h-full transition-transform duration-700 group-hover:scale-110">
                                {/* Fallback Placeholder (Warna Gradient) */}
                                <div className="w-full h-full bg-gradient-to-br from-slate-800 to-slate-900 flex items-center justify-center text-slate-700">
                                    <FiBarChart2 size={64} />
                                </div>
                                {/* Jika nanti ada gambar, uncomment baris ini:
                   <Image src={project.image} alt={project.title} fill className="object-cover" /> 
                */}
                            </div>

                            {/* Overlay Gradient */}
                            <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/60 to-transparent opacity-90"></div>

                            {/* 2. KONTEN NORMAL */}
                            <div className="absolute inset-0 p-8 flex flex-col justify-end transition-opacity duration-300 z-10">
                                <div className="absolute top-6 left-6">
                                    <span className="px-3 py-1 text-xs font-mono font-bold text-teal-400 bg-teal-500/10 border border-teal-500/20 rounded-full">
                                        {project.category}
                                    </span>
                                </div>

                                <div className={`transition-all duration-300 ${hoveredId === project.id ? 'translate-y-4 opacity-0' : 'translate-y-0 opacity-100'}`}>
                                    <h3 className="text-2xl font-bold mb-2 text-white group-hover:text-teal-400 transition-colors">
                                        {project.title}
                                    </h3>
                                    <p className="text-slate-400 text-sm line-clamp-2 mb-4">
                                        {project.desc}
                                    </p>
                                    <div className="flex gap-3 text-lg text-slate-300">
                                        {project.tools}
                                    </div>
                                </div>
                            </div>

                            {/* 3. KONTEN HOVER (INSIGHT) */}
                            <div className={`absolute inset-0 bg-teal-900/90 backdrop-blur-sm flex flex-col items-center justify-center p-8 text-center transition-all duration-300 z-20 ${hoveredId === project.id ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}>

                                <div className="w-16 h-16 bg-white/10 rounded-full flex items-center justify-center mb-4 text-teal-300">
                                    <FiPieChart size={32} />
                                </div>

                                <p className="text-teal-200 font-mono text-sm uppercase tracking-widest mb-2">Key Result</p>
                                <h4 className="text-4xl md:text-5xl font-bold text-white mb-2">{project.insight}</h4>
                                <p className="text-white/80 text-sm mb-8 max-w-xs">{project.insightDesc}</p>

                                <button className="px-6 py-2 border border-white text-white rounded-full hover:bg-white hover:text-teal-900 transition-colors flex items-center gap-2 font-bold text-sm">
                                    View Analysis <FiExternalLink />
                                </button>
                            </div>

                        </motion.div>
                    ))}
                </div>

                {/* Footer Link */}
                <div className="mt-16 text-center">
                    <button className="px-8 py-3 bg-slate-800 text-slate-300 rounded hover:bg-slate-700 transition-all font-mono text-sm">
                        View All Archives
                    </button>
                </div>

            </div>
        </section>
    );
};

export default CaseStudies;