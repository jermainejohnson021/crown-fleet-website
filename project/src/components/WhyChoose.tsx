import { Shield, MapPin, UserCheck, Settings, DollarSign, Gauge } from 'lucide-react';

const features = [
  {
    icon: Shield,
    title: 'Licensed & Insured',
    description: 'All vehicles fully licensed and comprehensively insured for your peace of mind',
  },
  {
    icon: MapPin,
    title: 'GPS Tracked',
    description: 'Real-time tracking for transparency and enhanced safety',
  },
  {
    icon: UserCheck,
    title: 'Professional Drivers',
    description: 'Experienced, vetted drivers committed to safety and service excellence',
  },
  {
    icon: Settings,
    title: 'Flexible Contracts',
    description: 'Customisable agreements that grow with your business needs',
  },
  {
    icon: DollarSign,
    title: 'Competitive Pricing',
    description: 'Transparent, fair rates with no hidden costs',
  },
  {
    icon: Gauge,
    title: 'Automatic Vehicle',
    description: 'Smooth, comfortable ride with automatic transmission',
  },
];

export default function WhyChoose() {
  return (
    <section className="py-20 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-slate-900 mb-4">
            Why Choose Crown Fleet
          </h2>
          <p className="text-xl text-slate-600 max-w-2xl mx-auto">
            Professional service with a personal touch
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <div
                key={index}
                className="flex gap-4 p-6 bg-white rounded-xl hover:shadow-lg transition-shadow"
              >
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 bg-slate-900 rounded-lg flex items-center justify-center">
                    <Icon className="w-6 h-6 text-amber-400" />
                  </div>
                </div>
                <div>
                  <h3 className="text-lg font-bold text-slate-900 mb-2">
                    {feature.title}
                  </h3>
                  <p className="text-slate-600 text-sm leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        <div className="mt-16 bg-gradient-to-r from-slate-900 to-slate-800 rounded-2xl p-8 sm:p-12 text-center">
          <img
            src="/3e6f87c4-2499-4ec5-839a-098c9d5a794d.JPG"
            alt="Crown Fleet Vehicle"
            className="w-full max-w-4xl mx-auto rounded-xl shadow-2xl mb-8 object-cover"
          />
          <h3 className="text-2xl sm:text-3xl font-bold text-white mb-4">
            Your Trusted Transport Partner
          </h3>
          <p className="text-slate-300 text-lg max-w-2xl mx-auto">
            We're committed to delivering exceptional service that keeps your workforce moving efficiently and safely.
          </p>
        </div>
      </div>
    </section>
  );
}
