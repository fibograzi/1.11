import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Menu, X } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    // Close mobile menu when route changes
    setMobileMenuOpen(false);
  }, [location]);

  const navItems = [
    { name: 'Home', path: '/' },
    { name: 'Gameplay', path: '/gameplay' },
    { name: 'Tokenomics', path: '/tokenomics' },
    { name: 'NFTs', path: '/nfts' },
    { name: 'Roadmap', path: '/roadmap' },
    { name: 'Community', path: '/community' },
    { name: 'About', path: '/about' },
  ];

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-[var(--darker-bg)] bg-opacity-90 backdrop-blur-md py-2'
          : 'bg-transparent py-4'
      }`}
    >
      <div className="cyberpunk-container flex justify-between items-center">
        <Link to="/" className="flex items-center">
          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="relative"
          >
            <div className="flex items-center">
              <div className="relative mr-2">
                <div className="w-10 h-10 rounded-full bg-[var(--primary-purple)] opacity-80"></div>
                <div className="w-4 h-4 rounded-full bg-[var(--primary-green)] absolute -right-1 top-1 opacity-80"></div>
              </div>
              <h1 className="text-2xl font-bold">
                <span className="neon-purple">BRAWL</span>
                <span className="neon-green">3D</span>
              </h1>
            </div>
          </motion.div>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-6">
          {navItems.map((item) => (
            <Link
              key={item.path}
              to={item.path}
              className={`relative font-medium text-lg transition-colors duration-300 ${
                location.pathname === item.path
                  ? 'text-[var(--primary-green)]'
                  : 'text-[var(--light-text)] hover:text-[var(--primary-purple)]'
              }`}
            >
              <motion.span
                whileHover={{ y: -2 }}
                className="relative"
              >
                {item.name}
                {location.pathname === item.path && (
                  <motion.div
                    layoutId="underline"
                    className="absolute -bottom-1 left-0 right-0 h-0.5 bg-[var(--primary-green)]"
                    initial={{ width: 0 }}
                    animate={{ width: '100%' }}
                    transition={{ duration: 0.3 }}
                  />
                )}
              </motion.span>
            </Link>
          ))}
          <motion.a
            href="#"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="btn btn-primary"
          >
            Play Now
          </motion.a>
        </nav>

        {/* Mobile Menu Button */}
        <motion.button
          whileTap={{ scale: 0.9 }}
          className="md:hidden text-[var(--primary-purple)] hover:text-[var(--primary-green)] transition-colors"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label={mobileMenuOpen ? 'Close menu' : 'Open menu'}
        >
          {mobileMenuOpen ? (
            <X size={28} className="neon-purple" />
          ) : (
            <Menu size={28} className="neon-purple" />
          )}
        </motion.button>
      </div>

      {/* Mobile Navigation */}
      <motion.div
        initial={{ height: 0, opacity: 0 }}
        animate={{
          height: mobileMenuOpen ? 'auto' : 0,
          opacity: mobileMenuOpen ? 1 : 0,
        }}
        transition={{ duration: 0.3 }}
        className="md:hidden overflow-hidden bg-[var(--darker-bg)] bg-opacity-95 backdrop-blur-md"
      >
        <nav className="cyberpunk-container py-4 flex flex-col space-y-4">
          {navItems.map((item) => (
            <Link
              key={item.path}
              to={item.path}
              className={`text-xl font-medium py-2 ${
                location.pathname === item.path
                  ? 'text-[var(--primary-green)]'
                  : 'text-[var(--light-text)]'
              }`}
            >
              {item.name}
            </Link>
          ))}
          <a href="#" className="btn btn-primary text-center mt-4">
            Play Now
          </a>
        </nav>
      </motion.div>
    </header>
  );
};

export default Header;
