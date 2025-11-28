
import { Mail } from 'lucide-react';

export default function Contact({ lang }: { lang: 'es' | 'en' }) {
    return (
        <section id="contact" className="py-24 bg-dark relative border-t border-white/5">
            <div className="container mx-auto px-4 text-center">
                <h2 className="text-4xl font-bold mb-8">
                    {lang === 'es' ? '¿Listo para transmitir?' : 'Ready to Stream?'}
                </h2>

                <div className="max-w-xl mx-auto glass-panel p-8">
                    <p className="text-gray-300 mb-8 text-lg">
                        {lang === 'es'
                            ? 'Contáctanos a través de Artist Pro para configurar tu canal hoy mismo.'
                            : 'Contact us via Artist Pro to set up your channel today.'}
                    </p>

                    <div className="flex flex-col gap-4">
                        <a
                            href="https://artistpro.co"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center justify-center gap-3 w-full py-4 bg-white text-black rounded-lg font-bold hover:bg-gray-200 transition-colors"
                        >
                            <GlobeIcon className="w-5 h-5" />
                            {lang === 'es' ? 'Visitar ArtistPro.co' : 'Visit ArtistPro.co'}
                        </a>
                        <a
                            href="mailto:contact@artistpro.co"
                            className="flex items-center justify-center gap-3 w-full py-4 bg-white/5 border border-white/10 rounded-lg font-bold hover:bg-white/10 transition-colors"
                        >
                            <Mail className="w-5 h-5" />
                            contact@artistpro.co
                        </a>
                    </div>
                </div>

                <footer className="mt-20 text-gray-600 text-sm">
                    <p>© {new Date().getFullYear()} YouTube 24/7 4 U. Powered by Artist Pro.</p>
                </footer>
            </div>
        </section>
    );
}

function GlobeIcon({ className }: { className?: string }) {
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className={className}
        >
            <circle cx="12" cy="12" r="10" />
            <line x1="2" x2="22" y1="12" y2="12" />
            <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
        </svg>
    )
}
