import { useState } from 'react';
import Hero from './components/Hero';
import Showroom from './components/Showroom';
import Pricing from './components/Pricing';
import Contact from './components/Contact';
import { Globe } from 'lucide-react';

function App() {
  const [lang, setLang] = useState<'es' | 'en'>('es');

  return (
    <div className="min-h-screen bg-darker text-white selection:bg-red-500 selection:text-white">
      {/* Navigation / Language Toggle */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-darker/80 backdrop-blur-md border-b border-white/5">
        <div className="container mx-auto px-4 h-16 flex items-center justify-between">
          <div className="font-bold text-xl tracking-tighter">
            YT<span className="text-red-500">24/7</span>
          </div>

          <button
            onClick={() => setLang(l => l === 'es' ? 'en' : 'es')}
            className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/5 hover:bg-white/10 transition-colors text-sm font-medium"
          >
            <Globe size={14} />
            <span>{lang === 'es' ? 'ES' : 'EN'}</span>
          </button>
        </div>
      </nav>

      <main>
        <Hero lang={lang} />
        <Showroom lang={lang} />
        <Pricing lang={lang} />
        <Contact lang={lang} />
      </main>
    </div>
  );
}

export default App;
