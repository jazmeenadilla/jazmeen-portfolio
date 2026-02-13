"use client";

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  FiExternalLink, FiBarChart2, FiX, FiCode,
  FiTarget, FiTrendingUp, FiCheckSquare, FiDatabase, FiMonitor, FiFileText,
  FiPieChart, FiShoppingCart, FiActivity
} from 'react-icons/fi';
import { SiTableau, SiPython, SiMysql } from 'react-icons/si';
import { RiFileExcel2Fill, RiBarChartBoxFill } from 'react-icons/ri';

// --- DATA PROYEK REAL ---
const projects = [
  {
    id: 1,
    title: "Balaji Fast Food Sales Analysis",
    category: "F&B Performance Optimization",
    tools: [<SiTableau key="tab" />, <SiPython key="py" />],
    // Ikon pengganti gambar
    coverIcon: <FiPieChart />,
    desc: "Analyze QSR restaurant sales data to identify revenue growth opportunities and operational efficiencies.",

    insight: "Revenue +15%",
    insightDesc: "Potential revenue increase through menu & shift optimization.",

    fullDetail: {
      duration: "Dec 2025 - Feb 2026",
      background: "Balaji Fast Food is a Quick Service Restaurant (QSR) in India specializing in street food and beverages. Operating on a high-volume, low-margin model, the restaurant serves urban customers like students and workers. This project analyzes sales data from April 2022 to March 2023 to identify growth opportunities and operational improvements.",
      objective: [
        "Stabilize sales performance during critical periods to achieve a 15% revenue increase (target: INR 316,515).",
        "Target a 20% increase in operational efficiency by identifying top-performing menu items and resolving service bottlenecks.",
        "Identify a night-shift upselling gap between genders and propose targeted training.",
        "Propose a digital payment migration strategy to reduce the 47.6% cash dependency."
      ],
      methods: "Cleaned 1,000 transaction records and performed Feature Engineering (AOV, Growth Rate). Conducted Trend Analysis to identify seasonal dips, Pareto Analysis to find 'Vital Few' menu items, and Heatmap analysis for peak hours. Formulated strategies using Root Cause Analysis (RCA) and scenario simulations.",
      results: "Analysis revealed 80% of revenue comes from four 'Vital Few' items. June and November saw sharp declines (34% and 15%). Recommended dynamic bundling of high-margin items with beverages, digital payment incentives to accelerate checkout by 20%, and retraining male staff to close the night-shift upselling gap toward 305.16 INR AOV.",

      links: {
        deck: "#",
        query: "#",
        colab: "https://colab.research.google.com/drive/15ppBVU-x68MLzY2lahQUhvfP9i8HXOU_?usp=sharing",
        tableau: "https://public.tableau.com/views/DEEPPJAZMEENADILLA-BalajiFastFoodSalesDashboard1/Dashboard1?:language=en-US&publish=yes&:sid=&:redirect=auth&:display_count=n&:origin=viz_share_link",
        kaggle: "#",
        sheet1: "#",
        sheet2: "#"
      }
    }
  },
  {
    id: 2,
    title: "RevoGrocers Sales Performance Analysis",
    category: "Retail Sales Analytics",
    tools: [<SiMysql key="sql" />, <RiBarChartBoxFill key="pbi" />],
    // Ikon pengganti gambar
    coverIcon: <FiShoppingCart />,
    desc: "Analyze sales performance by product category using SQL (BigQuery) for customer basket value optimization.",

    insight: "34.4% Revenue",
    insightDesc: "Top 3 Categories generate customer retention >99%.",

    fullDetail: {
      duration: "Oct 2025 - Nov 2025",
      background: "RevoGrocers is a large-scale retail network offering a wide range of products from fresh food to daily necessities. The dataset contains 10,142 sales transactions that require analysis to improve revenue and customer experience.",
      objective: [
        "Analyze sales performance by product category.",
        "Identify strategies for optimizing customer basket value.",
        "Evaluate customer retention rate (repeat purchase rate)."
      ],
      methods: "Extracting data using Google BigQuery (SQL) with aggregation functions, Window Functions, and CTEs. Applying the OBIPR (Observation, Business Impact, Isolation, Prioritization, Recommendation) analytical framework to generate structured business insights.",
      results: "Found that Confections, Meat, and Poultry categories collectively contribute 34.4% of total revenue with customer retention rates exceeding 99%. Conversely, the Grain category is a negative outlier with the lowest repeat purchase rate (93.7%) due to high average pricing. Recommended implementation of 'Daily Rewards' to increase daily shopping frequency and value-based pricing adjustments for the Grain category.",
      links: {
        deck: "#",
        query: "https://console.cloud.google.com/bigquery?ws=!1m7!1m6!12m5!1m3!1sintermediete-assignment!2sus-central1!3s9d06ebd9-b0ad-45ba-92e4-5cb25bc4ef7d!2e1&project=my-login-project-481408",
        colab: "#",
        tableau: "#",
        kaggle: "https://www.kaggle.com/datasets/andrexibiza/grocery-sales-dataset?resource=download&select=products.csv",
        sheet1: "#",
        sheet2: "#"
      }
    }
  },
  {
    id: 3,
    title: "TokoBli A/B Testing & Campaign Evaluation",
    category: "A/B Testing & Statistics",
    tools: [<RiFileExcel2Fill key="xl" />],
    // Ikon pengganti gambar
    coverIcon: <FiActivity />,
    desc: "Hypothesis Testing (A/B Testing) UI/UX design and evaluation of discount campaign efficiency in e-commerce.",

    insight: "ROI 59x",
    insightDesc: "12/12 campaign most efficient, new design increases ATV.",

    fullDetail: {
      duration: "Oct 2025",
      background: "TokoBli regularly runs promotional campaigns on double dates (October 10, November 11, and December 12). Management wanted to evaluate the effectiveness of the discount budget on revenue generation. Additionally, an A/B test was conducted to determine the impact of replacing the 'Add to Cart' button with 'Buy Now' on product pages.",
      objective: [
        "Identifying the most efficient campaign strategy based on the ratio of revenue to discount costs. Conducting A/B testing to determine whether the 'Buy Now' button design significantly increases Average Transaction Value (ATV)."
      ],
      methods: "Data Cleaning (removing duplicates, handling missing values, data imputation, removing outliers). Descriptive Analysis and ROI comparison. Conducting Statistical Hypothesis Testing using T-Test (Two-Sample Assuming Equal & Unequal Variances) with an alpha significance level of 0.05.",
      results: "The campaign evaluation found that the 12/12 Campaign was the most efficient (generating 59x the turnover per Rp1 discount) because it successfully triggered wholesale shopping without excessive discounts. The A/B Testing results (p-value = 0) rejected the Null Hypothesis, statistically proving that the new design ('Buy Now') significantly increased the Average Transaction Value (ATV) by Rp84,357 per user.",
      links: {
        deck: "#",
        query: "#",
        colab: "#",
        tableau: "#",
        kaggle: "#",
        sheet1: "https://docs.google.com/spreadsheets/d/12P3540NfY0Nbsny2bezNtt7klBHPoBrIG_1j0gg6gYI/edit?gid=44213569#gid=44213569",
        sheet2: "https://docs.google.com/spreadsheets/d/18IwLvw95nE5k-i2O8u6d6wEIyVQPj2Nby0Z94vI-H6Y/edit?gid=1273931063#gid=1273931063"
      }
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
              Recent <span className="text-teal-400">Projects</span>
            </h2>
            <p className="text-slate-400 max-w-xl">
              A curated data analytics project that transforms raw data into strategic business decisions.
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

              {/* Cover Ikon (Pengganti Gambar) */}
              <div className="absolute inset-0 w-full h-full bg-gradient-to-br from-slate-800 to-slate-900 flex items-center justify-center overflow-hidden">
                <motion.div
                  className="text-slate-700/30 group-hover:text-teal-500/20 transition-colors duration-500 transform group-hover:scale-110 text-[180px]"
                >
                  {project.coverIcon}
                </motion.div>
              </div>

              {/* Overlay Gradient */}
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/80 to-transparent opacity-90"></div>

              {/* Content Card */}
              <div className="absolute inset-0 p-8 flex flex-col justify-end z-10">
                <div className="absolute top-6 left-6">
                  <span className="px-3 py-1 text-xs font-mono font-bold text-teal-400 bg-teal-500/10 border border-teal-500/20 rounded-full backdrop-blur-sm">
                    {project.category}
                  </span>
                </div>

                <div className={`transition-all duration-300 ${hoveredId === project.id ? 'translate-y-4 opacity-0' : 'translate-y-0 opacity-100'}`}>
                  <h3 className="text-2xl font-bold mb-2 text-white group-hover:text-teal-400 transition-colors drop-shadow-md">
                    {project.title}
                  </h3>
                  <p className="text-slate-300 text-sm line-clamp-2 mb-4 drop-shadow-sm">
                    {project.desc}
                  </p>
                  <div className="flex gap-3 text-lg text-teal-400">
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
                <h4 className="text-3xl font-bold text-white mb-2">{project.insight}</h4>
                <p className="text-white/80 text-sm mb-8 max-w-xs">{project.insightDesc}</p>
                <button className="px-6 py-2 bg-white text-teal-900 rounded-full flex items-center gap-2 font-bold text-sm hover:bg-teal-50 transition-colors">
                  View Full Case Study <FiExternalLink />
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
              className="w-full max-w-5xl bg-slate-900 border border-slate-700 rounded-2xl overflow-hidden relative z-10 max-h-[90vh] flex flex-col"
            >
              {/* Header Modal */}
              <div className="p-6 md:p-8 border-b border-slate-700 flex justify-between items-start bg-slate-800/80">
                <div>
                  <div className="flex flex-wrap items-center gap-2 md:gap-3 mb-2 text-teal-400 text-xs md:text-sm font-mono">
                    <span className="flex items-center gap-2">{selectedProject.tools}</span>
                    <span className="hidden md:inline">•</span>
                    <span className="bg-teal-500/10 px-2 py-1 rounded border border-teal-500/20">{selectedProject.category}</span>
                    <span className="hidden md:inline">•</span>
                    <span className="text-slate-400 bg-slate-800 px-2 py-1 rounded border border-slate-700">{selectedProject.fullDetail?.duration}</span>
                  </div>
                  <h3 className="text-2xl md:text-4xl font-bold text-white mt-3">{selectedProject.title}</h3>
                </div>
                <button onClick={() => setSelectedProject(null)} className="p-2 bg-slate-700 rounded-full hover:bg-red-500 hover:text-white transition-colors">
                  <FiX size={24} />
                </button>
              </div>

              {/* Scrollable Content */}
              <div className="p-6 md:p-8 overflow-y-auto custom-scrollbar space-y-8 bg-slate-900">

                {/* 1. Background & Objective */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                  <div>
                    <h4 className="text-teal-400 font-bold mb-3 flex items-center gap-2 text-lg">
                      <FiTarget /> Project Background
                    </h4>
                    <p className="text-slate-300 text-sm md:text-base leading-relaxed text-justify">
                      {selectedProject.fullDetail?.background}
                    </p>
                  </div>

                  <div className="bg-slate-800/50 p-6 rounded-xl border border-slate-700">
                    <h4 className="text-white font-bold mb-4 flex items-center gap-2 text-lg">
                      <FiCheckSquare className="text-green-400" /> Scope of Work / Objective
                    </h4>
                    <ul className="space-y-3">
                      {selectedProject.fullDetail?.objective.map((item, i) => (
                        <li key={i} className="flex gap-3 text-sm md:text-base text-slate-300">
                          <span className="text-green-500 mt-1 flex-shrink-0">✔</span>
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* 2. Methods & Results */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 border-t border-slate-800 pt-8">
                  <div>
                    <h4 className="text-blue-400 font-bold mb-3 flex items-center gap-2 text-lg">
                      <FiCode /> Tools and Methods
                    </h4>
                    <p className="text-slate-300 text-sm md:text-base leading-relaxed text-justify">
                      {selectedProject.fullDetail?.methods}
                    </p>
                  </div>

                  <div>
                    <h4 className="text-purple-400 font-bold mb-3 flex items-center gap-2 text-lg">
                      <FiBarChart2 /> Results and Visuals
                    </h4>
                    <p className="text-slate-300 text-sm md:text-base leading-relaxed text-justify">
                      {selectedProject.fullDetail?.results}
                    </p>
                  </div>
                </div>

              </div>

              {/* Footer Actions (Links) */}
              <div className="p-6 border-t border-slate-700 bg-slate-950 flex flex-wrap gap-4 justify-start items-center">

                {selectedProject.fullDetail?.links.deck && selectedProject.fullDetail?.links.deck !== "#" && (
                  <a href={selectedProject.fullDetail?.links.deck} target="_blank" rel="noreferrer"
                    className="px-4 py-2 border border-slate-600 text-slate-300 rounded hover:border-pink-500 hover:text-pink-400 transition-all flex items-center gap-2 text-sm font-medium">
                    <FiMonitor /> Presentation Deck
                  </a>
                )}

                {selectedProject.fullDetail?.links.query && selectedProject.fullDetail?.links.query !== "#" && (
                  <a href={selectedProject.fullDetail?.links.query} target="_blank" rel="noreferrer"
                    className="px-4 py-2 border border-slate-600 text-slate-300 rounded hover:border-blue-500 hover:text-blue-400 transition-all flex items-center gap-2 text-sm font-medium">
                    <FiDatabase /> Console Query
                  </a>
                )}

                {selectedProject.fullDetail?.links.tableau && selectedProject.fullDetail?.links.tableau !== "#" && (
                  <a href={selectedProject.fullDetail?.links.tableau} target="_blank" rel="noreferrer"
                    className="px-6 py-2 bg-gradient-to-r from-teal-500 to-blue-600 text-white rounded hover:shadow-[0_0_20px_rgba(20,184,166,0.5)] transition-all flex items-center gap-2 text-sm font-bold shadow-lg">
                    <SiTableau /> View Dashboard
                  </a>
                )}

                {selectedProject.fullDetail?.links.kaggle && selectedProject.fullDetail?.links.kaggle !== "#" && (
                  <a href={selectedProject.fullDetail?.links.kaggle} target="_blank" rel="noreferrer"
                    className="px-4 py-2 border border-slate-600 text-slate-300 rounded hover:border-blue-400 hover:text-blue-300 transition-all flex items-center gap-2 text-sm font-medium">
                    <FiDatabase /> Kaggle Dataset
                  </a>
                )}

                {selectedProject.fullDetail?.links.sheet1 && selectedProject.fullDetail?.links.sheet1 !== "#" && (
                  <a href={selectedProject.fullDetail?.links.sheet1} target="_blank" rel="noreferrer"
                    className="px-4 py-2 border border-slate-600 text-slate-300 rounded hover:border-green-500 hover:text-green-400 transition-all flex items-center gap-2 text-sm font-medium">
                    <FiFileText /> TokoBli Dataset
                  </a>
                )}

                {selectedProject.fullDetail?.links.sheet2 && selectedProject.fullDetail?.links.sheet2 !== "#" && (
                  <a href={selectedProject.fullDetail?.links.sheet2} target="_blank" rel="noreferrer"
                    className="px-4 py-2 border border-slate-600 text-slate-300 rounded hover:border-green-500 hover:text-green-400 transition-all flex items-center gap-2 text-sm font-medium">
                    <FiFileText /> A/B Testing Dataset
                  </a>
                )}

                {selectedProject.fullDetail?.links.colab && selectedProject.fullDetail?.links.colab !== "#" && (
                  <a href={selectedProject.fullDetail?.links.colab} target="_blank" rel="noreferrer"
                    className="px-4 py-2 border border-slate-600 text-slate-300 rounded hover:border-yellow-500 hover:text-yellow-400 transition-all flex items-center gap-2 text-sm font-medium">
                    <SiPython /> Python (Colab)
                  </a>
                )}

              </div>

            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default CaseStudies;