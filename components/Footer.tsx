// src/components/Footer.tsx
import React from 'react';

const Footer = () => {
    return (
        <footer className="bg-slate-950 border-t border-slate-900 py-8 text-center text-slate-500 text-sm">
            <p>
                © {new Date().getFullYear()} Lumevo. All rights reserved | Built with <span className="text-teal-400">Next.js</span> & <span className="text-blue-400">Tailwind</span>.
                <br className="md:hidden" /> Data Analyst Portfolio.
            </p>
        </footer>
    );
};

export default Footer;