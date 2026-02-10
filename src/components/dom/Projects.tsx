'use client';

import { useRef } from 'react';
import resume from '../../../context/resume.json';
import { motion, useScroll, useTransform, useMotionValue } from 'framer-motion';

export default function Projects() {
    return (
        <section className="relative w-full py-32 px-6 md:px-20 bg-neutral-950">
            <div className="max-w-7xl mx-auto">
                <h2 className="text-4xl md:text-6xl font-display text-white mb-24 border-b border-white/10 pb-8">
                    Projetos Selecionados
                </h2>

                <div className="flex flex-col gap-32">
                    {/* @ts-ignore */}
                    {resume.projects.map((project, i) => (
                        <ProjectCard key={i} project={project} index={i} />
                    ))}
                </div>
            </div>
        </section>
    );
}

function ProjectCard({ project, index }: { project: any, index: number }) {
    const ref = useRef(null);
    const isEven = index % 2 === 0;

    // 3D Tilt Logic
    const x = useMotionValue(0);
    const y = useMotionValue(0);
    const rotateX = useTransform(y, [-0.5, 0.5], [5, -5]);
    const rotateY = useTransform(x, [-0.5, 0.5], [-5, 5]);

    const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
        const rect = e.currentTarget.getBoundingClientRect();
        const width = rect.width;
        const height = rect.height;
        const mouseX = e.clientX - rect.left;
        const mouseY = e.clientY - rect.top;
        const xPct = mouseX / width - 0.5;
        const yPct = mouseY / height - 0.5;
        x.set(xPct);
        y.set(yPct);
    };

    const handleMouseLeave = () => {
        x.set(0);
        y.set(0);
    };

    return (
        <motion.div
            ref={ref}
            initial={{ opacity: 0, y: 100 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            viewport={{ once: true, margin: "-10%" }}
            className={`flex flex-col ${isEven ? 'md:flex-row' : 'md:flex-row-reverse'} gap-12 md:gap-24 items-center`}
        >
            {/* Image Side with Tilt */}
            <motion.div
                className="w-full md:w-3/5 group perspective-1000"
                onMouseMove={handleMouseMove}
                onMouseLeave={handleMouseLeave}
                style={{ rotateX, rotateY, transformStyle: "preserve-3d" }}
            >
                <div className="relative overflow-hidden rounded-xl border border-white/10 bg-white/5 aspect-video shadow-2xl transition-all duration-500 hover:shadow-green-900/20">
                    <img
                        src={project.image}
                        alt={project.title}
                        className="w-full h-full object-cover transition-transform duration-700 ease-out transform group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-60 group-hover:opacity-40 transition-opacity duration-500" />
                </div>
            </motion.div>

            {/* Content Side */}
            <div className="w-full md:w-2/5 flex flex-col items-start px-4 md:px-0">
                <span className="font-mono text-xs text-green-400 mb-4 tracking-widest uppercase">
                    / {project.year} — {project.id}
                </span>

                <h3 className="text-3xl md:text-5xl font-display text-white mb-6 leading-tight">
                    {project.title}
                </h3>

                <p className="text-lg text-neutral-400 font-light leading-relaxed mb-8">
                    {project.description}
                </p>

                <div className="flex flex-wrap gap-2">
                    {project.tech.map((t: string, k: number) => (
                        <span key={k} className="px-3 py-1 rounded-full border border-white/10 text-xs font-mono text-neutral-500">
                            {t}
                        </span>
                    ))}
                </div>
            </div>
        </motion.div>
    );
}
