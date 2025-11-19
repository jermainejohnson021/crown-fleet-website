import { Sun, Moon, Users, Repeat, Calendar } from 'lucide-react';

const services = [
  {
    icon: Sun,
    title: 'Daily Staff Transport',
    description: 'Reliable transportation for day and night shifts, ensuring your team arrives on time, every time.',
  },
  {
    icon: Users,
    title: 'Corporate Contracts',
    description: 'Workforce shuttle services with flexible contracts tailored to your business needs.',
  },
  {
    icon: Repeat,
    title: 'Route Optimisation',
    description: 'Dedicated vehicles with optimised routes for maximum efficiency and cost-effectiveness.',
  },
  {
    icon: Calendar,
    title: 'Event Transport',
    description: 'Overflow staff transport for events, special occasions, or temporary workforce needs.',
  },
];

export default function Services() {
  return (
    <section className="py-20 bg-white" id="services">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-slate-900 mb-4">
            Our Services
          </h2>
          <p className="text-xl text-slate-600 max-w-2xl mx-auto">
            Comprehensive transport solutions designed for your business operations
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <div
                key={index}
                className="group p-8 rounded-2xl bg-slate-50 hover:bg-amber-50 transition-all duration-300 hover:shadow-xl border border-slate-100"
              >
                <div className="w-16 h-16 bg-amber-100 group-hover:bg-amber-500 rounded-xl flex items-center justify-center mb-6 transition-colors">
                  <Icon className="w-8 h-8 text-amber-600 group-hover:text-white transition-colors" />
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-3">
                  {service.title}
                </h3>
                <p className="text-slate-600 leading-relaxed">
                  {service.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
