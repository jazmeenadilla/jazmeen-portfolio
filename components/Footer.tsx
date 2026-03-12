// src/components/Footer.tsx
import React from 'react';

const Footer = () => {
    return (
        <footer className="bg-neutral-50 dark:bg-slate-950 border-t border-neutral-200 dark:border-slate-900 py-8 text-center text-neutral-600 dark:text-slate-500 text-sm transition-colors duration-300">
            <p>
                © {new Date().getFullYear()} Jazmeen Adilla. All rights reserved | Built with <span className="text-black dark:text-teal-400">Next.js</span> & <span className="text-black dark:text-blue-400">Tailwind</span>.
                <br className="md:hidden" /> Data Analyst Portfolio.
            </p>
        </footer>
    );
};

export default Footer;