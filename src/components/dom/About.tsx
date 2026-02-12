'use client';

import { useState } from 'react';
import resume from '../../../context/resume.json';
import { motion } from 'framer-motion';
import clsx from 'clsx';

export default function About() {
    const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

    return (
        <section className="relative w-full py-32 px-6 md:px-20 bg-neutral-950">
            <div className="max-w-4xl mx-auto">
                <h2 className="text-4xl font-display text-white mb-20 border-b border-white/10 pb-8">
                    Soluções & Expertise
                </h2>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {/* @ts-ignore */}
                    {resume.services && resume.services.map((service: any, i: number) => (
                        <div
                            key={i}
                            className="p-8 border border-white/10 bg-white/5 rounded-2xl hover:bg-white/10 transition-colors duration-300 group"
                        >
                            <div className="mb-6 w-12 h-12 rounded-full bg-white/10 flex items-center justify-center text-white group-hover:bg-white group-hover:text-black transition-all duration-300">
                                {/* Simple icon based on config */}
                                {service.icon === 'Bot' && <span className="text-xl">🤖</span>}
                                {service.icon === 'Chart' && <span className="text-xl">📊</span>}
                                {service.icon === 'Code' && <span className="text-xl">💻</span>}
                            </div>

                            <h3 className="text-2xl font-display text-white mb-4">
                                {service.title}
                            </h3>
                            <p className="text-neutral-400 font-light leading-relaxed">
                                {service.description}
                            </p>
                        </div>
                    ))}
                </div>

                {/* Skills Section */}
                <div className="mt-20">
                    <h3 className="text-2xl font-display text-white mb-8">Tecnologias & Ferramentas</h3>
                    <div className="flex flex-wrap gap-3">
                        {/* @ts-ignore */}
                        {resume.skills && resume.skills.map((skill: string, i: number) => (
                            <span
                                key={i}
                                className="px-4 py-2 rounded-full border border-white/10 bg-white/5 text-neutral-400 font-mono text-sm hover:bg-white/10 hover:border-white/30 transition-all cursor-crosshair"
                            >
                                {skill}
                            </span>
                        ))}
                    </div>

                    <div className="mt-12 p-6 border border-white/10 rounded-xl bg-white/5">
                        <p className="text-lg text-neutral-300 italic font-body">
                            "{/* @ts-ignore */ resume.profile.bio}"
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
}
