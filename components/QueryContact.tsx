// src/components/QueryContact.tsx
"use client";

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FiSend, FiMail, FiLinkedin, FiInstagram, FiCheckCircle, FiAlertCircle } from 'react-icons/fi';

const QueryContact = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: ''
    });

    // Status: idle | sending | success | error
    const [status, setStatus] = useState<'idle' | 'sending' | 'success' | 'error'>('idle');

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setStatus('sending');

        try {
            const response = await fetch('/api/contact', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(formData),
            });

            if (response.ok) {
                setStatus('success');
                setFormData({ name: '', email: '', message: '' }); // Reset form
                setTimeout(() => setStatus('idle'), 5000);
            } else {
                setStatus('error');
                setTimeout(() => setStatus('idle'), 3000);
            }
        } catch (error) {
            console.error(error);
            setStatus('error');
            setTimeout(() => setStatus('idle'), 3000);
        }
    };

    return (
        <section className="py-20 bg-white dark:bg-slate-950 text-black dark:text-white relative overflow-hidden transition-colors duration-300">

            {/* Background Code Pattern */}
            <div className="absolute top-0 left-0 w-full h-full opacity-5 pointer-events-none overflow-hidden">
                <div className="font-mono text-xs p-4 space-y-2 text-black dark:text-teal-500">
                    {Array.from({ length: 20 }).map((_, i) => (
                        <div key={i}>010101 SELECT * FROM users WHERE id = {i + 1};</div>
                    ))}
                </div>
            </div>

            <div className="max-w-6xl mx-auto px-6 relative z-10">
                {/* PERBAIKAN: Tambahkan 'items-start' di sini agar tinggi tidak saling mengikuti */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">

                    {/* KOLOM KIRI: INFO & AJAKAN */}
                    <div className="flex flex-col justify-center">
                        <h2 className="text-4xl md:text-5xl font-bold mb-6 text-black dark:text-white">
                            Let's <span className="text-black dark:text-teal-400">Connect</span>
                        </h2>
                        <p className="text-neutral-600 dark:text-slate-400 text-lg mb-8 leading-relaxed">
                            Looking for a Data Analyst who can translate numbers into strategy? Or want to discuss a data visualization project?
                            <br /><br />
                            Run the query below or contact me through the data sources next to me.
                        </p>

                        <div className="space-y-4">
                            {/* Email */}
                            <a href="mailto:jazmeenadilla01@gmail.com" target='blank' className="flex items-center gap-4 p-4 bg-white dark:bg-slate-900 border border-neutral-200 dark:border-slate-800 rounded-xl hover:border-black dark:hover:border-teal-500 transition-all group shadow-sm dark:shadow-none hover:shadow-md dark:hover:shadow-none">
                                <div className="p-3 bg-neutral-100 dark:bg-teal-500/10 rounded-lg text-black dark:text-teal-400 group-hover:bg-black group-hover:text-white dark:group-hover:bg-teal-500 dark:group-hover:text-white transition-colors">
                                    <FiMail size={24} />
                                </div>
                                <div>
                                    <div className="text-xs text-neutral-500 dark:text-slate-500 font-mono">EMAIL</div>
                                    <div className="text-black dark:text-white font-medium">Get in touch via Email</div>
                                </div>
                            </a>

                            {/* LinkedIn */}
                            <a href="https://www.linkedin.com/in/jazmeen-adilla-8b8a462a4" target='blank' className="flex items-center gap-4 p-4 bg-white dark:bg-slate-900 border border-neutral-200 dark:border-slate-800 rounded-xl hover:border-black dark:hover:border-blue-500 transition-all group shadow-sm dark:shadow-none hover:shadow-md dark:hover:shadow-none">
                                <div className="p-3 bg-neutral-100 dark:bg-blue-500/10 rounded-lg text-black dark:text-blue-400 group-hover:bg-black group-hover:text-white dark:group-hover:bg-blue-500 dark:group-hover:text-white transition-colors">
                                    <FiLinkedin size={24} />
                                </div>
                                <div>
                                    <div className="text-xs text-neutral-500 dark:text-slate-500 font-mono">LINKED_SERVER</div>
                                    <div className="text-black dark:text-white font-medium">Connect on LinkedIn</div>
                                </div>
                            </a>

                            {/* Instagram */}
                            <a href="https://www.instagram.com/jazmeenadilla/" target='blank' className="flex items-center gap-4 p-4 bg-white dark:bg-slate-900 border border-neutral-200 dark:border-slate-800 rounded-xl hover:border-black dark:hover:border-pink-500 transition-all group shadow-sm dark:shadow-none hover:shadow-md dark:hover:shadow-none">
                                <div className="p-3 bg-neutral-100 dark:bg-pink-500/10 rounded-lg text-black dark:text-pink-400 group-hover:bg-black group-hover:text-white dark:group-hover:bg-pink-500 dark:group-hover:text-white transition-colors">
                                    <FiInstagram size={24} />
                                </div>
                                <div>
                                    <div className="text-xs text-neutral-500 dark:text-slate-500 font-mono">SOCIAL_MEDIA</div>
                                    <div className="text-black dark:text-white font-medium">Follow on Instagram</div>
                                </div>
                            </a>
                        </div>
                    </div>

                    {/* KOLOM KANAN: FORMULIR ALA SQL EDITOR */}
                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="bg-white dark:bg-slate-900 rounded-xl overflow-hidden shadow-2xl border border-neutral-300 dark:border-slate-700 font-mono text-sm h-fit lg:sticky lg:top-24"
                    >
                        {/* Editor Header */}
                        <div className="bg-neutral-100 dark:bg-slate-950 px-4 py-3 flex items-center gap-2 border-b border-neutral-200 dark:border-slate-800">
                            <div className="flex gap-1.5">
                                <div className="w-3 h-3 rounded-full bg-red-400 dark:bg-red-500"></div>
                                <div className="w-3 h-3 rounded-full bg-yellow-400 dark:bg-yellow-500"></div>
                                <div className="w-3 h-3 rounded-full bg-green-400 dark:bg-green-500"></div>
                            </div>
                            <div className="ml-4 text-neutral-500 dark:text-slate-400 text-xs font-bold">query_contact_me.sql</div>
                        </div>

                        {/* Editor Body (Form) */}
                        <form onSubmit={handleSubmit} className="p-6 space-y-4">

                            {/* Line 1 */}
                            <div className="flex gap-4">
                                <span className="text-neutral-400 dark:text-slate-600 select-none pt-1">1</span>
                                <div className="flex-1">
                                    <span className="text-black dark:text-pink-400 font-bold">INSERT INTO</span> <span className="text-black dark:text-yellow-300">messages</span> (
                                </div>
                            </div>

                            {/* Line 2 (Name Input) */}
                            <div className="flex gap-4 items-center">
                                <span className="text-neutral-400 dark:text-slate-600 select-none">2</span>
                                <div className="flex-1 flex items-center gap-2">
                                    <span className="text-black font-semibold dark:text-blue-300 ml-4 dark:font-normal">name</span>,
                                    <input
                                        type="text"
                                        placeholder="'Recruiter Name'"
                                        value={formData.name}
                                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                                        className="bg-neutral-50 dark:bg-slate-800/50 border border-neutral-300 dark:border-slate-700 rounded px-3 py-2 text-black dark:text-green-400 focus:outline-none focus:border-black dark:focus:border-teal-500 w-full placeholder-neutral-400 dark:placeholder-slate-500"
                                        required
                                    />
                                </div>
                            </div>

                            {/* Line 3 (Email Input) */}
                            <div className="flex gap-4 items-center">
                                <span className="text-neutral-400 dark:text-slate-600 select-none">3</span>
                                <div className="flex-1 flex items-center gap-2">
                                    <span className="text-black font-semibold dark:text-blue-300 ml-4 dark:font-normal">email</span>,
                                    <input
                                        type="email"
                                        placeholder="'email@company.com'"
                                        value={formData.email}
                                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                                        className="bg-neutral-50 dark:bg-slate-800/50 border border-neutral-300 dark:border-slate-700 rounded px-3 py-2 text-black dark:text-green-400 focus:outline-none focus:border-black dark:focus:border-teal-500 w-full placeholder-neutral-400 dark:placeholder-slate-500"
                                        required
                                    />
                                </div>
                            </div>

                            {/* Line 4 (Message Input) */}
                            <div className="flex gap-4">
                                <span className="text-neutral-400 dark:text-slate-600 select-none pt-2">4</span>
                                <div className="flex-1 flex flex-col gap-2">
                                    <div className="flex items-center gap-2 mb-1">
                                        <span className="text-black font-semibold dark:text-blue-300 ml-4 dark:font-normal">message</span>
                                        <span className="text-black dark:text-slate-400">)</span>
                                        <span className="text-black font-bold dark:font-normal dark:text-pink-400">VALUES</span> <span className="text-black dark:text-slate-400">(</span>
                                    </div>
                                    <textarea
                                        placeholder="'Write your message here...'"
                                        value={formData.message}
                                        onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                                        className="bg-neutral-50 dark:bg-slate-800/50 border border-neutral-300 dark:border-slate-700 rounded px-3 py-2 text-black dark:text-green-400 focus:outline-none focus:border-black dark:focus:border-teal-500 w-full ml-4 h-32 resize-none placeholder-neutral-400 dark:placeholder-slate-500"
                                        required
                                    ></textarea>
                                    <span className="text-black dark:text-slate-400 ml-4 mt-1">);</span>
                                </div>
                            </div>

                            {/* Line 5 (Button) */}
                            <div className="flex gap-4 pt-4 items-center">
                                <span className="text-neutral-400 dark:text-slate-600 select-none">5</span>
                                <button
                                    type="submit"
                                    disabled={status === 'sending' || status === 'success'}
                                    className={`flex items-center gap-2 px-6 py-2 rounded font-sans font-bold transition-all ml-4 text-sm
                    ${status === 'success' ? 'bg-black text-white dark:bg-green-500 dark:text-white' :
                                            status === 'error' ? 'bg-red-500 text-white' :
                                                'bg-black text-white hover:bg-neutral-800 dark:bg-teal-500 dark:hover:bg-teal-400 dark:text-slate-900'}
                  `}
                                >
                                    {status === 'sending' ? (
                                        'Executing Query...'
                                    ) : status === 'success' ? (
                                        <><FiCheckCircle /> Query Success!</>
                                    ) : status === 'error' ? (
                                        <><FiAlertCircle /> Failed</>
                                    ) : (
                                        <><FiSend /> Run Query</>
                                    )}
                                </button>
                            </div>

                        </form>
                    </motion.div>

                </div>
            </div>
        </section>
    );
};

export default QueryContact;