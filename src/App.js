import React, { useEffect, useLayoutEffect, useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import Lenis from 'lenis';
import { AnimatePresence } from 'framer-motion';
import LandingPage from './components/LandingPage/LandingPage';
import ParallaxText from './components/ParallaxText/ParallaxText';
import TransitionPage from './components/TransitionPage/TransitionPage';
import Contact from './components/Contact/Contact';
import ProjectTitle from './components/ProjectTitle/ProjectTitle';
import Projects from './components/Projects/Projects';
import Preloader from './components/Preloader/Preloader';
import ProjectTemplate from './components/Projects/ProjectTemplate/ProjectTemplate';
import './App.css';
import ScrollToTop from './components/ScrollToTop/ScrollToTop';
import Navbar from './components/Navbar/Navbar';
import Sport from './components/Projects/Sport/Sport';
import SelfDrivingCar from './components/Projects/SelfDrivingCar/SelfDrivingCar';
import DevCristi from './components/Projects/DevCristi/DevCristi';
import Brasov from './components/Projects/Brasov/Brasov';
import BritishCamps from './components/Projects/BritishCamps/BritishCamps';
function App() {
  useLayoutEffect(() => {
    const lenis = new Lenis();
    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }
    requestAnimationFrame(raf);
  }, []);

  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    document.body.classList.add('no-scroll');

    const timer = setTimeout(() => {
      setIsLoading(false);
      document.body.classList.remove('no-scroll');
    }, 2000);

    return () => {
      clearTimeout(timer);
      document.body.classList.remove('no-scroll');
    };
  }, []);

  return (
    <div className="App">
      <ScrollToTop />
      <AnimatePresence mode="wait">
        {isLoading && <Preloader key="preloader" />}
      </AnimatePresence>
      <Routes>
        <Route path="/" element={
          <>
            <Navbar />
            <LandingPage />
            <TransitionPage />
            <ParallaxText />
            <ProjectTitle />
            <Projects />
            <Contact />
          </>
        } />
        <Route path="/sport" element={<Sport />} />
        <Route path="/selfdrivingcar" element={<SelfDrivingCar />} />
        <Route path="/britishcamps" element={<BritishCamps />} />
        <Route path="/brasov" element={<Brasov />} />
        <Route path="/devcristi" element={<DevCristi />} />      </Routes>
    </div>
  );
}

export default App;
