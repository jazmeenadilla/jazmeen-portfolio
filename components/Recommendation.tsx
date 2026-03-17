"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { FiLinkedin } from 'react-icons/fi';

const Recommendation = () => {
    return (
        <section id="recommendation" className="py-24 bg-neutral-50 dark:bg-slate-950 text-black dark:text-slate-300 relative overflow-hidden transition-colors duration-300">
            {/* Background Glow */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-150 h-150 bg-neutral-200/50 dark:bg-teal-900/10 rounded-full blur-[120px] pointer-events-none"></div>

            <div className="max-w-4xl mx-auto px-6 relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    viewport={{ once: true }}
                    className="text-center mb-16"
                >
                    <h2 className="text-3xl md:text-5xl font-bold mb-4 text-black dark:text-white">
                        Words of <span className="text-black dark:text-transparent dark:bg-clip-text dark:bg-gradient-to-r dark:from-teal-400 dark:to-emerald-400">Recommendation</span>
                    </h2>
                    <div className="w-20 h-1 bg-black dark:bg-teal-500 mx-auto rounded-full opacity-50"></div>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.7 }}
                    viewport={{ once: true }}
                    className="relative bg-white dark:bg-slate-900/50 border border-neutral-200 dark:border-slate-800/80 rounded-3xl p-8 md:p-12 backdrop-blur-sm shadow-xl"
                >
                    {/* Quotation Marks Decoration */}
                    <div className="absolute -top-6 -left-4 md:-left-8 text-6xl md:text-8xl text-black/5 dark:text-teal-500/10 font-serif leading-none select-none">
                        "
                    </div>

                    <div className="space-y-6 text-neutral-600 dark:text-slate-400 text-base md:text-lg leading-relaxed text-justify relative z-10">
                        <p>
                            I'm pleased to recommend Jazmeen as a capable and insightful Data Analyst. While she may come across as reserved at first, once you start exchanging ideas with her, you quickly see how thoughtful and engaging she is. Especially on mathematics.
                        </p>
                        <p>
                            Jazmeen has a particularly strong understanding of the Food and Beverages industry. She is able to connect data with real business contexts, which allows her to uncover insights that are both practical and valuable for decision-making in the F&B space.
                        </p>
                        <p>
                            At the same time, her analytical skills are highly transferable across different industries. Jazmeen has the ability to break down complex datasets, identify meaningful patterns, and translate them into clear insights that can support strategic decisions in a wide range of business contexts.
                        </p>
                        <p>
                            What stands out most about Jazmeen is her analytical curiosity and her ability to look at problems from multiple perspectives. With her combination of strong analytical thinking, industry knowledge, and adaptability, she would be a valuable asset to any team that relies on data to drive better business decisions.
                        </p>
                    </div>

                    <div className="mt-10 pt-6 border-t border-neutral-200 dark:border-slate-800/50 flex items-center justify-between">
                        <div>
                            <a href="https://www.linkedin.com/recs/received/?senderId=amieyoesa" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 group">
                                <h4 className="text-black dark:text-white font-bold text-lg md:text-xl group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">Amie Febri Yoesa</h4>
                                <FiLinkedin className="text-neutral-400 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors" />
                            </a>
                            <p className="text-neutral-500 dark:text-teal-400 text-sm md:text-base font-medium mt-1">Team Leader at RevoU Faculty</p>
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default Recommendation;
