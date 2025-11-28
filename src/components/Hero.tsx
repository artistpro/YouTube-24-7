
import { Play, Radio, Globe, Zap } from 'lucide-react';
import { motion } from 'framer-motion';

export default function Hero({ lang }: { lang: 'es' | 'en' }) {
    return (
        <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
            {/* Background Effects */}
            <div className="absolute inset-0 bg-darker">
                <div className="absolute top-0 left-1/4 w-96 h-96 bg-red-600/20 rounded-full blur-[128px]" />
                <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-orange-600/10 rounded-full blur-[128px]" />
            </div>

            <div className="relative z-10 container mx-auto px-4 text-center">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                >
                    <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 mb-8">
                        <span className="w-2 h-2 rounded-full bg-red-500 animate-pulse" />
                        <span className="text-sm font-medium text-gray-300">
                            {lang === 'es' ? 'Transmisión 24/7 Garantizada' : '24/7 Streaming Guaranteed'}
                        </span>
                    </div>

                    <h1 className="text-5xl md:text-7xl font-bold mb-6 tracking-tight">
                        YouTube <span className="gradient-text">24/7 4 U</span>
                    </h1>

                    <p className="text-xl md:text-2xl text-gray-400 max-w-2xl mx-auto mb-12 leading-relaxed">
                        {lang === 'es'
                            ? 'Tu canal siempre en vivo. Sin interrupciones, sin complicaciones técnicas. Nosotros nos encargamos de la infraestructura, tú disfrutas del crecimiento.'
                            : 'Your channel always live. No interruptions, no technical hassles. We handle the infrastructure, you enjoy the growth.'}
                    </p>

                    <div className="flex flex-col md:flex-row gap-4 justify-center items-center">
                        <a href="#pricing" className="px-8 py-4 bg-gradient-to-r from-red-600 to-orange-600 rounded-full font-bold text-lg hover:opacity-90 transition-opacity w-full md:w-auto">
                            {lang === 'es' ? 'Ver Planes' : 'View Plans'}
                        </a>
                        <a href="#showroom" className="px-8 py-4 bg-white/5 border border-white/10 rounded-full font-bold text-lg hover:bg-white/10 transition-colors w-full md:w-auto flex items-center justify-center gap-2">
                            <Play size={20} />
                            {lang === 'es' ? 'Ver Canales en Vivo' : 'Watch Live Channels'}
                        </a>
                    </div>
                </motion.div>

                {/* Features Grid */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-24">
                    {[
                        {
                            icon: <Zap className="w-8 h-8 text-yellow-500" />,
                            title: lang === 'es' ? 'Siempre Activo' : 'Always On',
                            desc: lang === 'es' ? 'Infraestructura robusta que nunca duerme.' : 'Robust infrastructure that never sleeps.'
                        },
                        {
                            icon: <Globe className="w-8 h-8 text-blue-500" />,
                            title: lang === 'es' ? 'Alcance Global' : 'Global Reach',
                            desc: lang === 'es' ? 'Llega a audiencias en cualquier zona horaria.' : 'Reach audiences in any time zone.'
                        },
                        {
                            icon: <Radio className="w-8 h-8 text-green-500" />,
                            title: lang === 'es' ? 'Gestión Total' : 'Full Management',
                            desc: lang === 'es' ? 'Nosotros lo administramos por ti.' : 'We manage it for you.'
                        }
                    ].map((feature, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: i * 0.2 }}
                            className="glass-panel p-6 text-left hover:bg-white/10 transition-colors"
                        >
                            <div className="mb-4 p-3 bg-white/5 rounded-lg w-fit">{feature.icon}</div>
                            <h3 className="text-xl font-bold mb-2">{feature.title}</h3>
                            <p className="text-gray-400">{feature.desc}</p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
