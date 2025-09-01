import './App.css';
import Header  from './components/Header/Header';
import './styles/main.css';
import Hero from './components/Hero/Hero';
import DashboardImage from './components/DashboardImage/DashboardImage';
import TrustedBy from './components/TrustedBy/TrustedBy';
import About from './components/About/About';
import Testimonials from './components/Testimonials/Testimonials';
import Footer from './components/Footer/Footer';
import AnimatedSection from './components/AnimatedSection/AnimatedSection';
import Contact from './components/Contact/Contact';
import Pricing from './components/Pricing/Pricing';

function App() {
  return (
    <div className="App">
      <Header />
      <AnimatedSection animationClass="fadeIn">
        <Hero />
      </AnimatedSection>
      <DashboardImage />
      <AnimatedSection animationClass="fadeIn">
        <TrustedBy />
      </AnimatedSection>
      <AnimatedSection animationClass="fadeIn">
        <About />
      </AnimatedSection>
      <AnimatedSection animationClass="fadeIn">
        <Testimonials />
      </AnimatedSection>
      <AnimatedSection animationClass="fadeIn">
        <Pricing />
      </AnimatedSection>
       <AnimatedSection animationClass="fadeIn">
        <Contact /> 
      </AnimatedSection>
      <AnimatedSection animationClass="fadeIn">
        <Footer />
      </AnimatedSection>
    </div>
  );
}

export default App;
