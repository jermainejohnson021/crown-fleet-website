import { Crown, Phone, MessageCircle } from 'lucide-react';

export default function Hero() {
  const scrollToContact = () => {
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="relative bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white">
      <nav className="absolute top-0 left-0 right-0 z-10 px-4 py-6">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Crown className="w-8 h-8 text-amber-400" />
            <span className="text-2xl font-bold">Crown Fleet</span>
          </div>
          <div className="flex gap-3">
            <a
              href="tel:+27000000000"
              className="flex items-center gap-2 px-4 py-2 bg-white/10 hover:bg-white/20 rounded-lg transition-colors"
            >
              <Phone className="w-4 h-4" />
              <span className="hidden sm:inline">Call</span>
            </a>
            <a
              href="https://wa.me/27000000000"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-4 py-2 bg-green-600 hover:bg-green-700 rounded-lg transition-colors"
            >
              <MessageCircle className="w-4 h-4" />
              <span className="hidden sm:inline">WhatsApp</span>
            </a>
          </div>
        </div>
      </nav>

      <div className="relative min-h-screen flex items-center">
        <div
          className="absolute inset-0 bg-cover bg-center opacity-20"
          style={{ backgroundImage: 'url(/31c7eaab-a68e-44bd-8772-226ce0bb9f7e.JPG)' }}
        />

        <div className="relative max-w-7xl mx-auto px-4 py-32 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <div className="flex items-center gap-2 mb-6">
              <Crown className="w-12 h-12 text-amber-400" />
              <span className="text-amber-400 font-semibold tracking-wide uppercase text-sm">
                Reliable Staff & Corporate Transport in Cape Town
              </span>
            </div>

            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold mb-6 leading-tight">
              On time. Safe.
              <br />
              <span className="text-amber-400">Every trip.</span>
            </h1>

            <p className="text-xl sm:text-2xl text-slate-300 mb-10 leading-relaxed">
              Tailored staff transport solutions for businesses in Cape Town & surrounds.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <button
                onClick={scrollToContact}
                className="px-8 py-4 bg-amber-500 hover:bg-amber-600 text-slate-900 font-semibold rounded-lg transition-colors text-lg shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 transition-all"
              >
                Get a Quote
              </button>
              <button
                onClick={scrollToContact}
                className="px-8 py-4 bg-white/10 hover:bg-white/20 backdrop-blur-sm font-semibold rounded-lg transition-colors text-lg border border-white/20"
              >
                Contact Us
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
