import { useState, useCallback } from 'react';
import SplashScreen from './components/SplashScreen';
import EmberParticles from './components/EmberParticles';
import CursorTrail from './components/CursorTrail';
import ScrollProgress from './components/ScrollProgress';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import DailySpecial from './components/DailySpecial';
import DailySpecials from './components/DailySpecials';
import Menu from './components/Menu';
import About from './components/About';
import Loyalty from './components/Loyalty';
import MealBuilder from './components/MealBuilder';
import SectionReveal from './components/SectionReveal';
import Location from './components/Location';
import Footer from './components/Footer';

function App() {
  const [loaded, setLoaded] = useState(false);
  const handleSplashComplete = useCallback(() => setLoaded(true), []);

  return (
    <>
      {!loaded && <SplashScreen onComplete={handleSplashComplete} />}
      {loaded && (
        <>
          <EmberParticles density={50} />
          <CursorTrail />
          <ScrollProgress />
          <Navbar />
          <main>
            <Hero />
            <DailySpecial />
            <hr className="section-divider" />
            <Menu />
            <hr className="section-divider" />
            <SectionReveal>
              <DailySpecials />
            </SectionReveal>
            <hr className="section-divider" />
            <SectionReveal>
              <MealBuilder />
            </SectionReveal>
            <hr className="section-divider" />
            <SectionReveal>
              <About />
            </SectionReveal>
            <hr className="section-divider" />
            <SectionReveal>
              <Loyalty />
            </SectionReveal>
            <hr className="section-divider" />
            <Location />
          </main>
          <Footer />
        </>
      )}
    </>
  );
}

export default App;
