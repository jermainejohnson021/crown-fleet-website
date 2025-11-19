import Hero from './components/Hero';
import Services from './components/Services';
import WhyChoose from './components/WhyChoose';
import OperatingArea from './components/OperatingArea';
import Testimonials from './components/Testimonials';
import ContactForm from './components/ContactForm';
import About from './components/About';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-white">
      <Hero />
      <Services />
      <WhyChoose />
      <OperatingArea />
      <Testimonials />
      <ContactForm />
      <About />
      <Footer />
    </div>
  );
}

export default App;
