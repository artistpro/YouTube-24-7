
import { channels } from '../data/channels';
import { motion } from 'framer-motion';

export default function Showroom({ lang }: { lang: 'es' | 'en' }) {
    return (
        <section id="showroom" className="py-24 bg-dark relative">
            <div className="container mx-auto px-4">
                <div className="text-center mb-16">
                    <h2 className="text-4xl font-bold mb-4">
                        {lang === 'es' ? 'Canales en ' : 'Channels On '}
                        <span className="text-red-500">Air</span>
                    </h2>
                    <p className="text-gray-400 max-w-2xl mx-auto">
                        {lang === 'es'
                            ? 'Descubre la calidad y estabilidad de nuestras transmisiones activas.'
                            : 'Discover the quality and stability of our active streams.'}
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {channels.map((channel, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, scale: 0.95 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            className={`glass-panel overflow-hidden group hover:border-red-500/30 transition-colors ${index === channels.length - 1 && channels.length % 3 === 1 ? 'lg:col-start-2' : ''
                                }`}
                        >
                            <div className="aspect-video relative bg-black">
                                <iframe
                                    src={`https://www.youtube.com/embed/${channel.videoId}?autoplay=1&mute=1&controls=0&modestbranding=1&rel=0&loop=1&playlist=${channel.videoId}&origin=${typeof window !== 'undefined' ? window.location.origin : ''}`}
                                    title={channel.name}
                                    className="w-full h-full absolute inset-0"
                                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                    allowFullScreen
                                />
                                {/* Overlay to prevent interaction if desired, or just custom styling */}
                                <div className="absolute inset-0 pointer-events-none shadow-[inset_0_0_50px_rgba(0,0,0,0.5)]" />
                            </div>
                            <div className="p-4 flex justify-between items-center">
                                <h3 className="font-semibold text-lg truncate">{channel.name}</h3>
                                <div className="flex items-center gap-2">
                                    <span className="w-2 h-2 rounded-full bg-red-500 animate-pulse" />
                                    <span className="text-xs text-red-500 font-bold uppercase">Live</span>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
