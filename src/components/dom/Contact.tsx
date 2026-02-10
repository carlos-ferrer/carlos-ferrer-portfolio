'use client';

export default function Contact() {
    return (
        <section className="py-32 px-6 flex flex-col items-center justify-center bg-neutral-950 border-t border-white/5">
            <div className="w-full max-w-4xl bg-neutral-900/50 border border-white/10 rounded-3xl p-12 md:p-24 text-center backdrop-blur-sm">
                <h2 className="text-4xl md:text-6xl font-display text-white mb-8">
                    Tem um projeto em mente?
                </h2>
                <p className="text-xl text-neutral-400 font-light mb-12 max-w-2xl mx-auto">
                    Vamos transformar sua ideia em uma solução digital de alto impacto. Estou disponível para novos projetos.
                </p>

                <div className="flex flex-col md:flex-row items-center justify-center gap-6">
                    <a
                        href="https://wa.me/5567996894353?text=Ol%C3%A1%2C%20Carlos!%20Vim%20pelo%20seu%20portf%C3%B3lio%20e%20gostaria%20de%20falar%20sobre%20um%20projeto%20e%20or%C3%A7amento."
                        target="_blank"
                        rel="noopener noreferrer"
                        className="px-8 py-4 bg-green-500 hover:bg-green-400 text-black font-bold rounded-full transition-all duration-300 transform hover:scale-105 shadow-[0_0_20px_rgba(34,197,94,0.3)] hover:shadow-[0_0_40px_rgba(34,197,94,0.6)]"
                    >
                        Agendar Chamada no WhatsApp
                    </a>

                    <button
                        onClick={() => navigator.clipboard.writeText('contact@daniel.dev')}
                        className="px-8 py-4 border border-white/20 hover:bg-white/10 text-white rounded-full transition-all duration-300 backdrop-blur-md"
                    >
                        Copiar Email
                    </button>
                </div>
            </div>

            <div className="mt-20 flex gap-6 text-neutral-500 font-mono text-sm">
                <a href="https://www.99freelas.com.br/user/kaploc" target="_blank" className="hover:text-white transition-colors">99Freelas</a>
                <span>•</span>
                <span>Carlos Ferrer © 2026</span>
            </div>
        </section>
    );
}
