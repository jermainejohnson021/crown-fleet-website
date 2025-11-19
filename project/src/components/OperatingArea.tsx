import { MapPin, CheckCircle2 } from 'lucide-react';

const areas = [
  'Cape Town CBD',
  'Northern Suburbs',
  'Southern Suburbs',
  'Atlantic Seaboard',
  'Bellville',
  'Parow',
  'Durbanville',
  'Brackenfell',
  'Kraaifontein',
  'Kuilsrivier',
  'Somerset West',
  'Strand',
  'Mitchell\'s Plain',
  'Athlone',
  'Pinelands',
  'Goodwood',
];

export default function OperatingArea() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <div className="flex items-center gap-3 mb-6">
              <MapPin className="w-10 h-10 text-amber-500" />
              <h2 className="text-4xl sm:text-5xl font-bold text-slate-900">
                Operating Area
              </h2>
            </div>
            <p className="text-xl text-slate-600 mb-8 leading-relaxed">
              Serving Cape Town metropolitan area and surrounding suburbs with reliable, punctual transport services.
            </p>
            <div className="grid sm:grid-cols-2 gap-3">
              {areas.map((area, index) => (
                <div key={index} className="flex items-center gap-2">
                  <CheckCircle2 className="w-5 h-5 text-amber-500 flex-shrink-0" />
                  <span className="text-slate-700">{area}</span>
                </div>
              ))}
            </div>
            <p className="mt-8 text-slate-600 italic">
              Don't see your area? Contact us – we're always expanding our service reach.
            </p>
          </div>

          <div className="relative">
            <div className="aspect-square bg-slate-100 rounded-2xl overflow-hidden shadow-xl">
              <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-slate-900 to-slate-700 relative">
                <div className="absolute inset-0 opacity-10">
                  <svg className="w-full h-full" viewBox="0 0 100 100">
                    <circle cx="50" cy="50" r="40" stroke="currentColor" strokeWidth="0.5" fill="none" className="text-amber-400" />
                    <circle cx="50" cy="50" r="30" stroke="currentColor" strokeWidth="0.5" fill="none" className="text-amber-400" />
                    <circle cx="50" cy="50" r="20" stroke="currentColor" strokeWidth="0.5" fill="none" className="text-amber-400" />
                    <circle cx="50" cy="50" r="10" stroke="currentColor" strokeWidth="0.5" fill="none" className="text-amber-400" />
                  </svg>
                </div>
                <div className="relative text-center z-10">
                  <MapPin className="w-20 h-20 text-amber-400 mx-auto mb-4" />
                  <p className="text-white text-2xl font-bold">Cape Town</p>
                  <p className="text-slate-300">& Surrounds</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
