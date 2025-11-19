import { Crown, Phone, Mail, MapPin, MessageCircle } from 'lucide-react';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-slate-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          <div className="lg:col-span-2">
            <div className="flex items-center gap-2 mb-4">
              <Crown className="w-8 h-8 text-amber-400" />
              <span className="text-2xl font-bold">Crown Fleet</span>
            </div>
            <p className="text-slate-400 mb-6 leading-relaxed max-w-md">
              Reliable staff and corporate transport in Cape Town. Professional service, competitive rates, and a commitment to getting your team where they need to be.
            </p>
            <div className="flex gap-3">
              <a
                href="tel:+27000000000"
                className="px-4 py-2 bg-white/10 hover:bg-white/20 rounded-lg transition-colors flex items-center gap-2"
              >
                <Phone className="w-4 h-4" />
                Call
              </a>
              <a
                href="https://wa.me/27000000000"
                target="_blank"
                rel="noopener noreferrer"
                className="px-4 py-2 bg-green-600 hover:bg-green-700 rounded-lg transition-colors flex items-center gap-2"
              >
                <MessageCircle className="w-4 h-4" />
                WhatsApp
              </a>
            </div>
          </div>

          <div>
            <h3 className="text-lg font-bold mb-4">Quick Links</h3>
            <ul className="space-y-3">
              <li>
                <a href="#services" className="text-slate-400 hover:text-white transition-colors">
                  Services
                </a>
              </li>
              <li>
                <a href="#about" className="text-slate-400 hover:text-white transition-colors">
                  About Us
                </a>
              </li>
              <li>
                <a href="#contact" className="text-slate-400 hover:text-white transition-colors">
                  Get a Quote
                </a>
              </li>
              <li>
                <a href="#contact" className="text-slate-400 hover:text-white transition-colors">
                  Contact
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-bold mb-4">Contact</h3>
            <ul className="space-y-3">
              <li className="flex items-start gap-2 text-slate-400">
                <Phone className="w-5 h-5 flex-shrink-0 mt-0.5" />
                <a href="tel:+27000000000" className="hover:text-white transition-colors">
                  +27 00 000 0000
                </a>
              </li>
              <li className="flex items-start gap-2 text-slate-400">
                <Mail className="w-5 h-5 flex-shrink-0 mt-0.5" />
                <a href="mailto:info@crownfleet.co.za" className="hover:text-white transition-colors">
                  info@crownfleet.co.za
                </a>
              </li>
              <li className="flex items-start gap-2 text-slate-400">
                <MapPin className="w-5 h-5 flex-shrink-0 mt-0.5" />
                <span>Cape Town & Surrounds</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/10 pt-8">
          <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
            <p className="text-slate-400 text-sm text-center sm:text-left">
              {currentYear} Crown Fleet. All rights reserved.
            </p>
            <p className="text-slate-400 text-sm text-center sm:text-right">
              Company Registration: [Pending] | Licensed Transport Operator
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
