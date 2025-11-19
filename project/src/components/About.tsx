import { Crown, Target, TrendingUp } from 'lucide-react';

export default function About() {
  return (
    <section className="py-20 bg-white" id="about">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <div className="flex items-center gap-3 mb-6">
              <Crown className="w-10 h-10 text-amber-500" />
              <h2 className="text-4xl sm:text-5xl font-bold text-slate-900">
                About Crown Fleet
              </h2>
            </div>
            <div className="space-y-6 text-lg text-slate-700 leading-relaxed">
              <p>
                Crown Fleet is an owner-managed transport service dedicated to providing reliable, professional staff transport solutions for businesses across Cape Town and the surrounding areas.
              </p>
              <p>
                Starting with a single vehicle and a commitment to exceptional service, we understand that your workforce is your most valuable asset. That's why we ensure they arrive safely and on time, every single day.
              </p>
              <p>
                Our focus is on building long-term partnerships with our clients. We're not just a transport provider – we're a trusted extension of your operations, committed to supporting your business growth with flexible, scalable transport solutions.
              </p>
              <p className="font-semibold text-slate-900">
                We're ready to grow with your business, offering the personal attention of a small operation with the reliability of a professional service.
              </p>
            </div>
          </div>

          <div className="space-y-6">
            <div className="bg-slate-50 p-8 rounded-2xl border-l-4 border-amber-500">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-amber-500 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Target className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-slate-900 mb-2">Our Mission</h3>
                  <p className="text-slate-600 leading-relaxed">
                    To provide safe, reliable, and punctual transport services that businesses can depend on, ensuring their workforce arrives ready to perform at their best.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-slate-50 p-8 rounded-2xl border-l-4 border-slate-900">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-slate-900 rounded-lg flex items-center justify-center flex-shrink-0">
                  <TrendingUp className="w-6 h-6 text-amber-400" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-slate-900 mb-2">Our Vision</h3>
                  <p className="text-slate-600 leading-relaxed">
                    To become Cape Town's most trusted staff transport partner, known for reliability, professionalism, and a commitment to service excellence.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-r from-amber-500 to-amber-600 p-8 rounded-2xl text-white">
              <h3 className="text-2xl font-bold mb-3">Ready to Scale</h3>
              <p className="leading-relaxed">
                While we're starting focused, we're equipped and ready to expand our fleet to meet your growing needs. Your success is our success.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
