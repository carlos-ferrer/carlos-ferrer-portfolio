'use client';

import { useRef } from 'react';
import resume from '../../../context/resume.json';
import { motion } from 'framer-motion';

export default function Testimonials() {
    return (
        <section className="relative w-full py-32 overflow-hidden pointer-events-none">
            <div className="absolute inset-0 bg-gradient-to-b from-transparent via-black/50 to-transparent z-0 pointer-events-none" />

            <div className="relative z-10 flex flex-col gap-12">
                <h2 className="text-4xl font-display text-white/50 text-center uppercase tracking-widest">
                    Clientes & Parceiros
                </h2>

                {/* Marquee Container */}
                <div className="flex overflow-hidden relative w-full pointer-events-auto">
                    <motion.div
                        className="flex gap-8 whitespace-nowrap"
                        animate={{ x: [0, -1000] }}
                        transition={{ repeat: Infinity, ease: "linear", duration: 30 }}
                    >
                        {[...resume.testimonials, ...resume.testimonials, ...resume.testimonials, ...resume.testimonials].map((t, i) => (
                            <div
                                key={i}
                                className="relative w-[500px] h-[300px] bg-white/5 backdrop-blur-md border border-white/10 rounded-xl p-8 flex flex-col justify-between hover:bg-white/10 transition-colors duration-300 group whitespace-normal"
                            >
                                {/* Floating Animation Wrapper */}
                                <motion.div
                                    animate={{ y: [0, -5, 0] }}
                                    transition={{ repeat: Infinity, duration: 6, ease: "easeInOut", delay: i * 0.5 }}
                                    className="h-full flex flex-col justify-between"
                                >
                                    <p className="text-xl font-body text-neutral-300 italic leading-relaxed">
                                        "{t.text}"
                                    </p>
                                    <div className="flex flex-col mt-6">
                                        <span className="font-display text-white text-2xl">{t.client}</span>
                                        <span className="font-mono text-sm text-neutral-500 uppercase tracking-widest">{t.role}</span>
                                    </div>
                                </motion.div>

                                {/* Glow Effect */}
                                <div className="absolute -inset-1 bg-gradient-to-r from-purple-500/20 to-blue-500/20 rounded-xl blur opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-10" />
                            </div>
                        ))}
                    </motion.div>
                    {/* Duplicate for seamless loop if needed, but the array duplication handles it for now */}
                </div>
            </div>
        </section>
    );
}
