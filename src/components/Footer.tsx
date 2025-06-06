import { useState } from 'react';
import { motion } from 'framer-motion';
import { Twitter, Github } from 'lucide-react';

const Footer = () => {
  const [year] = useState(new Date().getFullYear());
  
  return (
    <footer className="relative bg-[var(--darker-bg)] py-12 mt-auto">
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-[var(--primary-purple)] to-transparent"></div>
      
      <div className="cyberpunk-container">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="md:col-span-1">
            <div className="flex items-center mb-4">
              <img src="/logo.png" alt="BRAWL3D Logo" className="h-10 mr-2" />
              <h3 className="text-xl font-bold gradient-text">BRAWL3D</h3>
            </div>
            <p className="text-gray-400 mb-4">
              The ultimate Web3 meme arena game with spherical characters and token integration.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-[var(--primary-purple)] transition-colors">
                <Twitter size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-[var(--primary-purple)] transition-colors">
                <Github size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-[var(--primary-purple)] transition-colors">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19.54 0c1.356 0 2.46 1.104 2.46 2.472v21.528l-2.58-2.28-1.452-1.344-1.536-1.428.636 2.22h-13.608c-1.356 0-2.46-1.104-2.46-2.472v-16.224c0-1.368 1.104-2.472 2.46-2.472h16.08zm-4.632 15.672c2.652-.084 3.672-1.824 3.672-1.824 0-3.864-1.728-6.996-1.728-6.996-1.728-1.296-3.372-1.26-3.372-1.26l-.168.192c2.04.624 2.988 1.524 2.988 1.524-1.248-.684-2.472-1.02-3.612-1.152-.864-.096-1.692-.072-2.424.024l-.204.024c-.42.036-1.44.192-2.724.756-.444.204-.708.348-.708.348s.996-.948 3.156-1.572l-.12-.144s-1.644-.036-3.372 1.26c0 0-1.728 3.132-1.728 6.996 0 0 1.008 1.74 3.66 1.824 0 0 .444-.54.804-.996-1.524-.456-2.1-1.416-2.1-1.416l.336.204.048.036.047.027.014.006.047.027c.3.168.6.3.876.408.492.192 1.08.384 1.764.516.9.168 1.956.228 3.108.012.564-.096 1.14-.264 1.74-.516.42-.156.888-.384 1.38-.708 0 0-.6.984-2.172 1.428.36.456.792.972.792.972zm-5.58-5.604c-.684 0-1.224.6-1.224 1.332 0 .732.552 1.332 1.224 1.332.684 0 1.224-.6 1.224-1.332.012-.732-.54-1.332-1.224-1.332zm4.38 0c-.684 0-1.224.6-1.224 1.332 0 .732.552 1.332 1.224 1.332.684 0 1.224-.6 1.224-1.332 0-.732-.54-1.332-1.224-1.332z" />
                </svg>
              </a>
            </div>
          </div>
          
          <div className="md:col-span-1">
            <h4 className="text-lg font-bold mb-4 neon-purple">Navigation</h4>
            <ul className="space-y-2">
              <li><a href="/" className="text-gray-400 hover:text-white transition-colors">Home</a></li>
              <li><a href="/gameplay" className="text-gray-400 hover:text-white transition-colors">Gameplay</a></li>
              <li><a href="/tokenomics" className="text-gray-400 hover:text-white transition-colors">Tokenomics</a></li>
              <li><a href="/nfts" className="text-gray-400 hover:text-white transition-colors">NFTs</a></li>
              <li><a href="/roadmap" className="text-gray-400 hover:text-white transition-colors">Roadmap</a></li>
            </ul>
          </div>
          
          <div className="md:col-span-1">
            <h4 className="text-lg font-bold mb-4 neon-green">Resources</h4>
            <ul className="space-y-2">
              <li><a href="/community" className="text-gray-400 hover:text-white transition-colors">Community</a></li>
              <li><a href="/about" className="text-gray-400 hover:text-white transition-colors">About</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Whitepaper</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Documentation</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">FAQ</a></li>
            </ul>
          </div>
          
          <div className="md:col-span-1">
            <h4 className="text-lg font-bold mb-4 neon-purple">Subscribe</h4>
            <p className="text-gray-400 mb-4">Stay updated with our latest news and announcements.</p>
            <form className="space-y-2">
              <input
                type="email"
                placeholder="Your email address"
                className="w-full bg-[var(--dark-bg)] border border-[var(--primary-purple)] rounded-md px-4 py-2 focus:outline-none focus:border-[var(--primary-green)] transition-colors"
              />
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="btn btn-primary w-full"
              >
                Subscribe
              </motion.button>
            </form>
          </div>
        </div>
        
        <div className="mt-12 pt-8 border-t border-gray-800 text-center">
          <p className="text-gray-400">
            &copy; {year} BRAWL3D. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
