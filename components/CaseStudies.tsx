"use client";

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FiExternalLink, FiBarChart2, FiX, FiCode, FiTarget, FiTrendingUp, FiCheckSquare } from 'react-icons/fi';
import { SiTableau, SiPython, SiMysql } from 'react-icons/si';
import { RiFileExcel2Fill, RiBarChartBoxFill } from 'react-icons/ri';

// --- DATA PROYEK REAL (Balaji Fast Food) ---
const projects = [
  {
    id: 1,
    title: "Balaji Fast Food Sales Analysis",
    category: "F&B Performance Optimization",
    tools: [<SiTableau key="tab" />, <SiPython key="py" />],
    image: "/projects/balaji-dashboard.jpg", // GANTI dengan nama file screenshot dashboard kamu
    desc: "Analisis data penjualan restoran QSR untuk mengidentifikasi peluang pertumbuhan revenue dan efisiensi operasional.",
    
    // Data untuk Hover Card
    insight: "Revenue +15%", 
    insightDesc: "Potensi kenaikan revenue melalui optimasi menu & shift.",

    // Data Lengkap untuk Modal Popup
    fullDetail: {
      summary: "Balaji Fast Food beroperasi dengan model margin rendah & volume tinggi. Proyek ini menganalisis 1.000 data transaksi (April 2022 - Maret 2023) untuk menstabilkan kinerja penjualan dan meningkatkan efisiensi operasional.",
      goals: [
        "Mencapai kenaikan revenue 15% (Target: INR 316,515).",
        "Meningkatkan efisiensi operasional sebesar 20% dengan mengatasi bottleneck layanan."
      ],
      process: "Melakukan Data Cleaning pada 1.000 record, Feature Engineering (AOV, Growth Rate), Trend Analysis untuk melihat penurunan musiman, serta Pareto Analysis untuk menemukan 'Vital Few' menu.",
      outcome: "Menemukan bahwa 80% revenue berasal dari 4 menu utama. Mengidentifikasi gap upselling pada staf pria shift malam dan ketergantungan uang tunai (47.6%) yang memperlambat antrian.",
      achievements: [
        "Identifikasi penurunan 34% revenue di bulan Juni & strategi musiman.",
        "Optimasi jadwal staf menggunakan Heatmap Analysis.",
        "Rekomendasi migrasi pembayaran digital untuk kurangi 47.6% transaksi tunai."
      ],
      links: {
        tableau: "https://public.tableau.com/views/DEEPPJAZMEENADILLA-BalajiFastFoodSalesDashboard1/Dashboard1?:language=en-US&publish=yes&:sid=&:redirect=auth&:display_count=n&:origin=viz_share_link",
        colab: "https://colab.research.google.com/drive/15ppBVU-x68MLzY2lahQUhvfP9i8HXOU_?usp=sharing"
      }
    }
  },
  // --- Placeholder Proyek Lain (Bisa diisi nanti) ---
  {
    id: 2,
    title: "Customer Churn Prediction",
    category: "Machine Learning / SQL",
    tools: [<SiMysql key="sql" />, <SiPython key="py" />],
    image: "/projects/project2.jpg", 
    desc: "Query SQL kompleks untuk membersihkan data pelanggan dan Python untuk memprediksi risiko churn.",
    insight: "85% Accuracy",
    insightDesc: "Model prediksi churn pelanggan telekomunikasi.",
    fullDetail: {
      summary: "Memprediksi pelanggan yang berpotensi berhenti berlangganan.",
      goals: ["Mengurangi churn rate sebesar 10%."],
      process: "Data cleaning SQL, modeling Random Forest.",
      outcome: "Akurasi model mencapai 85% dengan precision tinggi.",
      achievements: ["Mengidentifikasi 3 faktor utama penyebab churn."],
      links: { tableau: "#", colab: "#" }
    }
  },
  {
    id: 3,
    title: "Marketing Campaign Dashboard",
    category: "Business Intelligence",
    tools: [<RiBarChartBoxFill key="pbi" />, <RiFileExcel2Fill key="xl" />],
    image: "/projects/project3.jpg",
    desc: "Dashboard interaktif untuk memonitor performa kampanye iklan di berbagai channel media sosial.",
    insight: "ROI 3.5x",
    insightDesc: "Efisiensi budget iklan meningkat signifikan.",
    fullDetail: {
      summary: "Monitoring performa iklan real-time.",
      goals: ["Optimasi budget marketing."],
      process: "ETL dari Facebook Ads API ke Power BI.",
      outcome: "Budget save 20% dengan mematikan iklan underperform.",
      achievements: ["Visualisasi funnel conversion rate."],
      links: { tableau: "#", colab: "#" }
    }
  }
];

const CaseStudies = () => {
  const [hoveredId, setHoveredId] = useState<number | null>(null);
  const [selectedProject, setSelectedProject] = useState<typeof projects[0] | null>(null);

  return (
    <section id="projects" className="py-20 bg-slate-950 text-white relative">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Header */}
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
              layoutId={`card-${project.id}`}
              onClick={() => setSelectedProject(project)}
              className="group relative rounded-2xl overflow-hidden bg-slate-900 border border-slate-800 h-[450px] cursor-pointer shadow-lg hover:shadow-teal-500/10 transition-shadow"
              onMouseEnter={() => setHoveredId(project.id)}
              onMouseLeave={() => setHoveredId(null)}
            >
              
              {/* Image / Background */}
              <div className="absolute inset-0 w-full h-full transition-transform duration-700 group-hover:scale-110">
                <div className="w-full h-full bg-gradient-to-br from-slate-800 to-slate-900 flex items-center justify-center text-slate-700">
                    <FiBarChart2 size={64} />
                </div>
                {/* <Image src={project.image} alt={project.title} fill className="object-cover" /> */}
              </div>

              {/* Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/80 to-transparent opacity-90"></div>

              {/* Content Card */}
              <div className="absolute inset-0 p-8 flex flex-col justify-end z-10">
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

              {/* Hover Insight (Key Result) */}
              <div className={`absolute inset-0 bg-teal-900/95 backdrop-blur-sm flex flex-col items-center justify-center p-8 text-center transition-all duration-300 z-20 ${hoveredId === project.id ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}>
                <div className="w-16 h-16 bg-white/10 rounded-full flex items-center justify-center mb-4 text-teal-300">
                  <FiTrendingUp size={32} />
                </div>
                <p className="text-teal-200 font-mono text-xs uppercase tracking-widest mb-2">Key Impact</p>
                <h4 className="text-4xl font-bold text-white mb-2">{project.insight}</h4>
                <p className="text-white/80 text-sm mb-8 max-w-xs">{project.insightDesc}</p>
                <button className="px-6 py-2 bg-white text-teal-900 rounded-full flex items-center gap-2 font-bold text-sm hover:bg-teal-50 transition-colors">
                  View Case Study <FiExternalLink />
                </button>
              </div>

            </motion.div>
          ))}
        </div>
      </div>

      {/* --- MODAL DETAIL PROJECT --- */}
      <AnimatePresence>
        {selectedProject && (
          <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 md:p-8">
            {/* Backdrop */}
            <motion.div 
              initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
              onClick={() => setSelectedProject(null)}
              className="absolute inset-0 bg-black/80 backdrop-blur-sm"
            />

            {/* Modal Card */}
            <motion.div 
              layoutId={`card-${selectedProject.id}`}
              className="w-full max-w-4xl bg-slate-900 border border-slate-700 rounded-2xl overflow-hidden relative z-10 max-h-[90vh] flex flex-col"
            >
              {/* Header Modal */}
              <div className="p-6 md:p-8 border-b border-slate-700 flex justify-between items-start bg-slate-800/50">
                <div>
                  <div className="flex items-center gap-3 mb-2 text-teal-400 text-sm font-mono">
                    {selectedProject.tools}
                    <span>• {selectedProject.category}</span>
                  </div>
                  <h3 className="text-2xl md:text-3xl font-bold text-white">{selectedProject.title}</h3>
                </div>
                <button onClick={() => setSelectedProject(null)} className="p-2 bg-slate-800 rounded-full hover:bg-red-500 hover:text-white transition-colors">
                  <FiX size={24} />
                </button>
              </div>

              {/* Scrollable Content */}
              <div className="p-6 md:p-8 overflow-y-auto custom-scrollbar space-y-8">
                
                {/* Section 1: Summary & Goals */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div>
                    <h4 className="text-teal-400 font-bold mb-3 flex items-center gap-2"><FiTarget /> Project Summary</h4>
                    <p className="text-slate-300 text-sm leading-relaxed mb-4">{selectedProject.fullDetail?.summary}</p>
                    
                    <h4 className="text-teal-400 font-bold mb-2 text-sm">Goals:</h4>
                    <ul className="list-disc list-inside text-slate-400 text-sm space-y-1">
                      {selectedProject.fullDetail?.goals.map((g, i) => <li key={i}>{g}</li>)}
                    </ul>
                  </div>

                  <div className="bg-slate-950 p-6 rounded-xl border border-slate-800">
                    <h4 className="text-white font-bold mb-4 flex items-center gap-2"><FiCheckSquare className="text-green-400"/> Key Achievements</h4>
                    <ul className="space-y-3">
                      {selectedProject.fullDetail?.achievements.map((item, i) => (
                        <li key={i} className="flex gap-3 text-sm text-slate-300">
                          <span className="text-green-500 mt-1">✔</span>
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* Section 2: Process & Output */}
                <div className="border-t border-slate-800 pt-6">
                  <h4 className="text-xl font-bold text-white mb-4">Process & Analysis</h4>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-sm">
                    <div>
                      <strong className="text-blue-400 block mb-2">Methodology:</strong>
                      <p className="text-slate-400 leading-relaxed">{selectedProject.fullDetail?.process}</p>
                    </div>
                    <div>
                      <strong className="text-purple-400 block mb-2">Key Findings (Output):</strong>
                      <p className="text-slate-400 leading-relaxed">{selectedProject.fullDetail?.outcome}</p>
                    </div>
                  </div>
                </div>

              </div>

              {/* Footer Actions */}
              <div className="p-6 border-t border-slate-700 bg-slate-900 flex flex-wrap gap-4 justify-end">
                {selectedProject.fullDetail?.links.colab !== "#" && (
                   <a href={selectedProject.fullDetail?.links.colab} target="_blank" rel="noreferrer" 
                      className="px-6 py-2 border border-slate-600 text-slate-300 rounded-lg hover:border-yellow-500 hover:text-yellow-400 transition-all flex items-center gap-2 text-sm font-bold">
                      <FiCode /> View Python Code (Colab)
                   </a>
                )}
                <a href={selectedProject.fullDetail?.links.tableau} target="_blank" rel="noreferrer" 
                   className="px-6 py-2 bg-gradient-to-r from-teal-500 to-blue-600 text-white rounded-lg hover:shadow-[0_0_20px_rgba(20,184,166,0.5)] transition-all flex items-center gap-2 text-sm font-bold">
                   <SiTableau /> View Live Dashboard
                </a>
              </div>

            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default CaseStudies;