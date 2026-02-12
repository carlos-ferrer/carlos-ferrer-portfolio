'use client';

import { motion } from 'framer-motion';

export default function Methodology() {
    const steps = [
        {
            number: '01',
            title: 'Entender o Caos',
            description: 'Mergulho na operação para diagnosticar gargalos e processos manuais invisíveis.'
        },
        {
            number: '02',
            title: 'Desenhar a Solução',
            description: 'Defino a arquitetura ideal (Low-code ou Fullstack) focada em ROI e simplicidade.'
        },
        {
            number: '03',
            title: 'Construir & Automatizar',
            description: 'Desenvolvimento ágil da ferramenta e integração com sistemas existentes.'
        }
    ];

    return (
        <section className="relative w-full py-20 px-6 md:px-20 bg-neutral-900 border-t border-white/5">
            <div className="max-w-7xl mx-auto">
                <div className="mb-16">
                    <span className="text-green-400 font-mono text-xs uppercase tracking-widest">/ Como eu trabalho</span>
                    <h2 className="text-3xl md:text-5xl font-display text-white mt-4">
                        Do Problema à Solução
                    </h2>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">
                    {steps.map((step, i) => (
                        <div key={i} className="relative group">
                            <div className="absolute -inset-4 bg-gradient-to-r from-green-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-xl blur-xl" />
                            <div className="relative border-l border-white/10 pl-8 transition-colors duration-300 group-hover:border-green-500/50">
                                <span className="text-6xl font-display font-bold text-neutral-800 group-hover:text-green-500/20 transition-colors duration-500 absolute -top-4 -left-3 select-none">
                                    {step.number}
                                </span>
                                <h3 className="text-xl font-bold text-white mb-4 relative z-10">
                                    {step.title}
                                </h3>
                                <p className="text-neutral-400 font-light leading-relaxed relative z-10">
                                    {step.description}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
