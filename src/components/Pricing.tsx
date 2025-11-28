
import { packages } from '../data/packages';
import { Check } from 'lucide-react';
import { motion } from 'framer-motion';

export default function Pricing({ lang }: { lang: 'es' | 'en' }) {
    return (
        <section id="pricing" className="py-24 bg-darker relative overflow-hidden">
            {/* Background Elements */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-red-600/5 rounded-full blur-[100px]" />

            <div className="container mx-auto px-4 relative z-10">
                <div className="text-center mb-16">
                    <h2 className="text-4xl font-bold mb-4">
                        {lang === 'es' ? 'Planes Flexibles' : 'Flexible Plans'}
                    </h2>
                    <p className="text-gray-400">
                        {lang === 'es'
                            ? 'Elige el plan que mejor se adapte a tus necesidades de transmisión.'
                            : 'Choose the plan that best fits your streaming needs.'}
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {packages.map((pkg, index) => (
                        <motion.div
                            key={pkg.id}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            className={`glass-panel p-6 flex flex-col relative ${pkg.highlight ? 'border-red-500/50 bg-red-500/5' : 'hover:border-white/20'
                                }`}
                        >
                            {pkg.highlight && (
                                <div className="absolute -top-3 left-1/2 -translate-x-1/2 px-3 py-1 bg-red-600 rounded-full text-xs font-bold uppercase tracking-wider">
                                    {lang === 'es' ? 'Recomendado' : 'Recommended'}
                                </div>
                            )}

                            <h3 className="text-xl font-bold mb-2">{lang === 'es' ? pkg.name : pkg.nameEn}</h3>
                            <div className="mb-6">
                                <span className="text-4xl font-bold">${pkg.price}</span>
                                <span className="text-gray-400 text-sm">/{lang === 'es' ? 'mes' : 'mo'}</span>
                                <div className="text-sm text-gray-500 mt-1">
                                    ${pkg.yearlyPrice}/{lang === 'es' ? 'año' : 'yr'}
                                </div>
                            </div>

                            <ul className="space-y-3 mb-8 flex-1">
                                {(lang === 'es' ? pkg.featuresEs : pkg.features).map((feature, i) => (
                                    <li key={i} className="flex items-start gap-2 text-sm text-gray-300">
                                        <Check className="w-4 h-4 text-green-500 mt-0.5 shrink-0" />
                                        <span>{feature}</span>
                                    </li>
                                ))}
                            </ul>

                            <a
                                href="#contact"
                                className={`w-full py-3 rounded-lg font-bold text-center transition-all ${pkg.highlight
                                    ? 'bg-red-600 hover:bg-red-700 text-white'
                                    : 'bg-white/10 hover:bg-white/20 text-white'
                                    }`}
                            >
                                {lang === 'es' ? 'Empezar Ahora' : 'Get Started'}
                            </a>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
