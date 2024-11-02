import Navbar from './Components/Navbar';
import Hero from './Components/Hero';
import Highlights from './Components/Highlights';
import Model from './Components/Model';
import Features from './Components/Features';
import Footer from './Components/Footer';
import LocomotiveScroll from 'locomotive-scroll';
import * as Sentry from '@sentry/react';
import HowItWorks from './Components/HowItWorks';


const App = () => {
  const scroll = new LocomotiveScroll();
  return (
    <main className="bg-black">
      <Navbar />
      <Hero />
      <Highlights />
      <Model />
      <Features />
      <HowItWorks/>
      <Footer />
    </main>
  )
}

export default Sentry.withProfiler(App);
