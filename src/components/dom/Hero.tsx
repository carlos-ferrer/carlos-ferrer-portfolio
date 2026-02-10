'use client';

import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import SplitText from './ui/SplitText';
import resume from '../../../context/resume.json';

export default function Hero() {
    const containerRef = useRef<HTMLDivElement>(null);
    const titleRef = useRef<HTMLHeadingElement>(null);
    const subtitleRef = useRef<HTMLParagraphElement>(null);

    useEffect(() => {
        const ctx = gsap.context(() => {
            const tl = gsap.timeline({ defaults: { ease: 'power3.out' } });

            tl.fromTo(
                '.gsap-char',
                { y: '100%' },
                { y: '0%', duration: 1.2, stagger: 0.02, delay: 0.2 }
            );

            tl.fromTo(
                subtitleRef.current,
                { opacity: 0, y: 20 },
                { opacity: 1, y: 0, duration: 1 },
                '-=0.8'
            );
        }, containerRef);

        return () => ctx.revert();
    }, []);

    return (
        <section ref={containerRef} className="relative w-full h-screen flex flex-col justify-center px-6 md:px-20 z-10 pointer-events-none">
            <div className="max-w-7xl w-full mx-auto pointer-events-auto">
                <h1 ref={titleRef} className="text-6xl md:text-[8rem] font-display font-bold leading-[0.9] tracking-tighter mix-blend-difference text-white mb-6">
                    <div className="overflow-hidden">
                        <SplitText charClass="gsap-char" className="block">{resume.profile.name}</SplitText>
                    </div>
                    <div className="overflow-hidden">
                        <span className="text-4xl md:text-7xl font-light text-neutral-400 block mt-2">
                            <SplitText charClass="gsap-char">{resume.profile.role}</SplitText>
                        </span>
                    </div>
                </h1>

                <div className="flex flex-col items-start gap-4 mt-8">
                    <p ref={subtitleRef} className="text-sm md:text-xl font-mono text-neutral-500 max-w-xl uppercase tracking-widest border-l border-neutral-800 pl-6">
                        {resume.profile.tagline}
                    </p>

                    <a
                        href="https://wa.me/5567996894353?text=Ol%C3%A1%2C%20Carlos!%20Vim%20pelo%20seu%20portf%C3%B3lio."
                        target="_blank"
                        rel="noopener noreferrer"
                        className="ml-6 mt-4 px-6 py-3 bg-white text-black font-mono text-xs md:text-sm font-bold rounded-full hover:bg-green-400 transition-colors pointer-events-auto z-20"
                    >
                        INICIAR PROJETO
                    </a>
                </div>

                <div className="absolute bottom-12 left-6 md:left-20 animate-bounce z-10">
                    <span className="font-mono text-xs text-neutral-600">ROLE PARA EXPLORAR</span>
                </div>
            </div>

            {/* Profile Image (Elegant/B&W) */}
            <div className="absolute right-0 bottom-0 h-[85vh] md:h-[95vh] w-full pointer-events-none z-0">
                <div className="relative w-full h-full flex items-end justify-end">
                    <img
                        src="/assets/profile.jpg"
                        alt="Carlos Ferrer"
                        className="h-full w-auto md:max-w-[40vw] object-cover object-top opacity-0 animate-fade-in grayscale md:opacity-40"
                        style={{
                            maskImage: 'linear-gradient(to bottom, transparent 0%, black 20%, black 80%, transparent 100%), linear-gradient(to left, black 20%, transparent 100%)',
                            WebkitMaskImage: 'linear-gradient(to bottom, transparent 0%, black 20%, black 80%, transparent 100%), linear-gradient(to left, black 20%, transparent 100%)',
                            maskComposite: 'intersect',
                            WebkitMaskComposite: 'source-in'
                        }}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-neutral-950 via-transparent to-transparent" />
                </div>
            </div>
        </section>
    );
}
