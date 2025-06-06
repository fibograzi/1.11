import { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';

// Components
import Header from './components/Header';
import Footer from './components/Footer';
import Cursor from './components/Cursor';
import ParticleBackground from './components/ParticleBackground';

// Pages
import Home from './pages/Home';
import Gameplay from './pages/Gameplay';
import Tokenomics from './pages/Tokenomics';
import NFTs from './pages/NFTs';
import Roadmap from './pages/Roadmap';
import Community from './pages/Community';
import About from './pages/About';

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate loading assets
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <Router>
      <Cursor />
      <ParticleBackground />
      
      <AnimatePresence mode="wait">
        {loading ? (
          <motion.div 
            key="loader"
            className="fixed inset-0 flex items-center justify-center bg-[var(--darker-bg)] z-50"
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
          >
            <motion.div 
              className="relative"
              animate={{ 
                rotate: 360,
                scale: [1, 1.2, 1],
              }}
              transition={{ 
                rotate: { repeat: Infinity, duration: 2, ease: "linear" },
                scale: { repeat: Infinity, duration: 1.5, ease: "easeInOut" }
              }}
            >
              <div className="w-24 h-24 rounded-full border-4 border-[var(--primary-purple)] relative">
                <div className="absolute top-1/2 left-1/2 w-6 h-6 rounded-full bg-[var(--primary-green)] transform -translate-x-1/2 -translate-y-1/2"></div>
              </div>
            </motion.div>
            <motion.h1 
              className="absolute mt-32 text-4xl font-bold"
              animate={{ 
                opacity: [0.5, 1, 0.5],
                textShadow: [
                  "0 0 7px rgba(181, 39, 252, 0.6), 0 0 10px rgba(181, 39, 252, 0.4), 0 0 21px rgba(181, 39, 252, 0.2)",
                  "0 0 10px rgba(39, 252, 158, 0.6), 0 0 23px rgba(39, 252, 158, 0.4), 0 0 36px rgba(39, 252, 158, 0.2)",
                  "0 0 7px rgba(181, 39, 252, 0.6), 0 0 10px rgba(181, 39, 252, 0.4), 0 0 21px rgba(181, 39, 252, 0.2)",
                ]
              }}
              transition={{ 
                repeat: Infinity, 
                duration: 2,
              }}
            >
              <span className="gradient-text">BRAWL3D</span>
            </motion.h1>
          </motion.div>
        ) : (
          <motion.div
            key="app"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="min-h-screen flex flex-col"
          >
            <Header />
            <main className="flex-grow">
              <AnimatePresence mode="wait">
                <Routes>
                  <Route path="/" element={<Home />} />
                  <Route path="/gameplay" element={<Gameplay />} />
                  <Route path="/tokenomics" element={<Tokenomics />} />
                  <Route path="/nfts" element={<NFTs />} />
                  <Route path="/roadmap" element={<Roadmap />} />
                  <Route path="/community" element={<Community />} />
                  <Route path="/about" element={<About />} />
                </Routes>
              </AnimatePresence>
            </main>
            <Footer />
          </motion.div>
        )}
      </AnimatePresence>
    </Router>
  );
}

export default App;
