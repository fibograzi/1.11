import { motion } from 'framer-motion';
import { ArrowRight, Calendar, CheckCircle } from 'lucide-react';

const Roadmap = () => {
  const fadeIn = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6 }
  };

  return (
    <div className="min-h-screen pt-24">
      {/* Hero Section */}
      <section className="relative py-16">
        <div className="cyberpunk-container">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              <span className="gradient-text">Roadmap</span>
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Our journey to build the ultimate Web3 meme arena game.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Roadmap Timeline */}
      <section className="py-16 relative">
        <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-[var(--primary-purple)] to-transparent"></div>
        <div className="cyberpunk-container">
          <div className="relative">
            {/* Vertical Timeline Line */}
            <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-gradient-to-b from-[var(--primary-purple)] to-[var(--primary-green)]"></div>
            
            {/* Launch Phase */}
            <div className="relative z-10">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="flex flex-col md:flex-row items-center mb-24"
              >
                <div className="md:w-1/2 md:pr-12 mb-8 md:mb-0 md:text-right">
                  <h2 className="text-3xl font-bold mb-4 neon-purple">Launch Phase</h2>
                  <p className="text-gray-300 mb-4">
                    The beginning of our journey, focused on establishing the core game and token.
                  </p>
                  <div className="inline-block bg-[var(--darker-bg)] px-4 py-2 rounded-full border border-[var(--primary-purple)]">
                    <div className="flex items-center">
                      <Calendar className="mr-2 text-[var(--primary-purple)]" size={16} />
                      <span className="text-sm">Current Phase</span>
                    </div>
                  </div>
                </div>
                
                <div className="mx-auto md:mx-0 w-12 h-12 rounded-full bg-[var(--darker-bg)] border-4 border-[var(--primary-purple)] flex items-center justify-center relative z-20">
                  <span className="text-xl font-bold">1</span>
                </div>
                
                <div className="md:w-1/2 md:pl-12 mt-8 md:mt-0">
                  <div className="space-y-4">
                    <div className="flex items-start">
                      <CheckCircle className="flex-shrink-0 mr-2 text-green-500" size={20} />
                      <p className="text-gray-300">Token Launch via Pump.fun on Solana</p>
                    </div>
                    <div className="flex items-start">
                      <CheckCircle className="flex-shrink-0 mr-2 text-green-500" size={20} />
                      <p className="text-gray-300">Demo Version Release</p>
                    </div>
                    <div className="flex items-start">
                      <CheckCircle className="flex-shrink-0 mr-2 text-green-500" size={20} />
                      <p className="text-gray-300">Website Launch</p>
                    </div>
                    <div className="flex items-start">
                      <CheckCircle className="flex-shrink-0 mr-2 text-yellow-500" size={20} />
                      <p className="text-gray-300">Early Rewards System Implementation</p>
                    </div>
                  </div>
                </div>
              </motion.div>
              
              {/* Phase 1 */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="flex flex-col md:flex-row items-center mb-24"
              >
                <div className="md:w-1/2 md:pr-12 mb-8 md:mb-0 md:text-right order-1 md:order-1">
                  <div className="space-y-4">
                    <div className="flex items-start md:justify-end">
                      <p className="text-gray-300">Leaderboards Implementation</p>
                      <CheckCircle className="flex-shrink-0 ml-2 text-yellow-500 hidden md:block" size={20} />
                    </div>
                    <div className="flex items-start md:justify-end">
                      <p className="text-gray-300">Active Reward System Enhancement</p>
                      <CheckCircle className="flex-shrink-0 ml-2 text-gray-500 hidden md:block" size={20} />
                    </div>
                    <div className="flex items-start md:justify-end">
                      <p className="text-gray-300">Meme Skin Launches</p>
                      <CheckCircle className="flex-shrink-0 ml-2 text-gray-500 hidden md:block" size={20} />
                    </div>
                    <div className="flex items-start md:justify-end">
                      <p className="text-gray-300">Community Events Kickoff</p>
                      <CheckCircle className="flex-shrink-0 ml-2 text-gray-500 hidden md:block" size={20} />
                    </div>
                  </div>
                </div>
                
                <div className="mx-auto md:mx-0 w-12 h-12 rounded-full bg-[var(--darker-bg)] border-4 border-[var(--primary-green)] flex items-center justify-center relative z-20 order-2 md:order-2">
                  <span className="text-xl font-bold">2</span>
                </div>
                
                <div className="md:w-1/2 md:pl-12 mt-8 md:mt-0 order-3 md:order-3">
                  <h2 className="text-3xl font-bold mb-4 neon-green">Phase 1</h2>
                  <p className="text-gray-300 mb-4">
                    Expanding gameplay features and building community engagement.
                  </p>
                  <div className="inline-block bg-[var(--darker-bg)] px-4 py-2 rounded-full border border-[var(--primary-green)]">
                    <div className="flex items-center">
                      <Calendar className="mr-2 text-[var(--primary-green)]" size={16} />
                      <span className="text-sm">Q3 2025</span>
                    </div>
                  </div>
                </div>
              </motion.div>
              
              {/* Phase 2 */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.4 }}
                className="flex flex-col md:flex-row items-center mb-24"
              >
                <div className="md:w-1/2 md:pr-12 mb-8 md:mb-0 md:text-right">
                  <h2 className="text-3xl font-bold mb-4 neon-purple">Phase 2</h2>
                  <p className="text-gray-300 mb-4">
                    Introducing NFTs and expanding the ecosystem with marketplace integration.
                  </p>
                  <div className="inline-block bg-[var(--darker-bg)] px-4 py-2 rounded-full border border-[var(--primary-purple)]">
                    <div className="flex items-center">
                      <Calendar className="mr-2 text-[var(--primary-purple)]" size={16} />
                      <span className="text-sm">Q4 2025</span>
                    </div>
                  </div>
                </div>
                
                <div className="mx-auto md:mx-0 w-12 h-12 rounded-full bg-[var(--darker-bg)] border-4 border-[var(--primary-purple)] flex items-center justify-center relative z-20">
                  <span className="text-xl font-bold">3</span>
                </div>
                
                <div className="md:w-1/2 md:pl-12 mt-8 md:mt-0">
                  <div className="space-y-4">
                    <div className="flex items-start">
                      <CheckCircle className="flex-shrink-0 mr-2 text-gray-500" size={20} />
                      <p className="text-gray-300">NFT Integration with Special Abilities</p>
                    </div>
                    <div className="flex items-start">
                      <CheckCircle className="flex-shrink-0 mr-2 text-gray-500" size={20} />
                      <p className="text-gray-300">Marketplace Link (Magic Eden)</p>
                    </div>
                    <div className="flex items-start">
                      <CheckCircle className="flex-shrink-0 mr-2 text-gray-500" size={20} />
                      <p className="text-gray-300">Advanced Power-ups System</p>
                    </div>
                    <div className="flex items-start">
                      <CheckCircle className="flex-shrink-0 mr-2 text-gray-500" size={20} />
                      <p className="text-gray-300">Expanded Game Modes</p>
                    </div>
                  </div>
                </div>
              </motion.div>
              
              {/* Phase 3 */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.6 }}
                className="flex flex-col md:flex-row items-center mb-24"
              >
                <div className="md:w-1/2 md:pr-12 mb-8 md:mb-0 md:text-right order-1 md:order-1">
                  <div className="space-y-4">
                    <div className="flex items-start md:justify-end">
                      <p className="text-gray-300">Tournaments System Launch</p>
                      <CheckCircle className="flex-shrink-0 ml-2 text-gray-500 hidden md:block" size={20} />
                    </div>
                    <div className="flex items-start md:justify-end">
                      <p className="text-gray-300">DAO Governance Implementation</p>
                      <CheckCircle className="flex-shrink-0 ml-2 text-gray-500 hidden md:block" size={20} />
                    </div>
                    <div className="flex items-start md:justify-end">
                      <p className="text-gray-300">Mobile Optimization</p>
                      <CheckCircle className="flex-shrink-0 ml-2 text-gray-500 hidden md:block" size={20} />
                    </div>
                    <div className="flex items-start md:justify-end">
                      <p className="text-gray-300">Cross-platform Play</p>
                      <CheckCircle className="flex-shrink-0 ml-2 text-gray-500 hidden md:block" size={20} />
                    </div>
                  </div>
                </div>
                
                <div className="mx-auto md:mx-0 w-12 h-12 rounded-full bg-[var(--darker-bg)] border-4 border-[var(--primary-green)] flex items-center justify-center relative z-20 order-2 md:order-2">
                  <span className="text-xl font-bold">4</span>
                </div>
                
                <div className="md:w-1/2 md:pl-12 mt-8 md:mt-0 order-3 md:order-3">
                  <h2 className="text-3xl font-bold mb-4 neon-green">Phase 3</h2>
                  <p className="text-gray-300 mb-4">
                    Expanding competitive play and community governance.
                  </p>
                  <div className="inline-block bg-[var(--darker-bg)] px-4 py-2 rounded-full border border-[var(--primary-green)]">
                    <div className="flex items-center">
                      <Calendar className="mr-2 text-[var(--primary-green)]" size={16} />
                      <span className="text-sm">Q1 2026</span>
                    </div>
                  </div>
                </div>
              </motion.div>
              
              {/* Phase 4 */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.8 }}
                className="flex flex-col md:flex-row items-center"
              >
                <div className="md:w-1/2 md:pr-12 mb-8 md:mb-0 md:text-right">
                  <h2 className="text-3xl font-bold mb-4 neon-purple">Phase 4</h2>
                  <p className="text-gray-300 mb-4">
                    Exclusive events, partnerships, and ecosystem expansion.
                  </p>
                  <div className="inline-block bg-[var(--darker-bg)] px-4 py-2 rounded-full border border-[var(--primary-purple)]">
                    <div className="flex items-center">
                      <Calendar className="mr-2 text-[var(--primary-purple)]" size={16} />
                      <span className="text-sm">Q2 2026</span>
                    </div>
                  </div>
                </div>
                
                <div className="mx-auto md:mx-0 w-12 h-12 rounded-full bg-[var(--darker-bg)] border-4 border-[var(--primary-purple)] flex items-center justify-center relative z-20">
                  <span className="text-xl font-bold">5</span>
                </div>
                
                <div className="md:w-1/2 md:pl-12 mt-8 md:mt-0">
                  <div className="space-y-4">
                    <div className="flex items-start">
                      <CheckCircle className="flex-shrink-0 mr-2 text-gray-500" size={20} />
                      <p className="text-gray-300">Exclusive Seasonal Events</p>
                    </div>
                    <div className="flex items-start">
                      <CheckCircle className="flex-shrink-0 mr-2 text-gray-500" size={20} />
                      <p className="text-gray-300">Strategic Partnerships</p>
                    </div>
                    <div className="flex items-start">
                      <CheckCircle className="flex-shrink-0 mr-2 text-gray-500" size={20} />
                      <p className="text-gray-300">Expanded Universe Content</p>
                    </div>
                    <div className="flex items-start">
                      <CheckCircle className="flex-shrink-0 mr-2 text-gray-500" size={20} />
                      <p className="text-gray-300">Advanced Ecosystem Integration</p>
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Community Voting */}
      <section className="py-16 relative bg-[var(--darker-bg)]">
        <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-[var(--primary-green)] to-transparent"></div>
        <div className="cyberpunk-container">
          <motion.div
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={fadeIn}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold mb-4">
              <span className="gradient-text">Community Voting</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Help shape the future of BRAWL3D by voting on upcoming features.
            </p>
          </motion.div>

          <div className="max-w-4xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="card"
              >
                <h3 className="text-2xl font-bold mb-4 neon-purple">Current Poll</h3>
                <p className="text-gray-300 mb-6">
                  Which new game mode should we develop next?
                </p>
                
                <div className="space-y-4">
                  <div className="relative">
                    <div className="bg-gray-800 h-10 rounded-md overflow-hidden">
                      <div className="bg-[var(--primary-purple)] h-full rounded-md" style={{ width: '45%' }}></div>
                    </div>
                    <div className="flex justify-between mt-1">
                      <span className="text-sm">Team Battle</span>
                      <span className="text-sm">45%</span>
                    </div>
                  </div>
                  
                  <div className="relative">
                    <div className="bg-gray-800 h-10 rounded-md overflow-hidden">
                      <div className="bg-[var(--primary-purple)] h-full rounded-md" style={{ width: '30%' }}></div>
                    </div>
                    <div className="flex justify-between mt-1">
                      <span className="text-sm">Capture the Flag</span>
                      <span className="text-sm">30%</span>
                    </div>
                  </div>
                  
                  <div className="relative">
                    <div className="bg-gray-800 h-10 rounded-md overflow-hidden">
                      <div className="bg-[var(--primary-purple)] h-full rounded-md" style={{ width: '25%' }}></div>
                    </div>
                    <div className="flex justify-between mt-1">
                      <span className="text-sm">Battle Royale</span>
                      <span className="text-sm">25%</span>
                    </div>
                  </div>
                </div>
                
                <div className="mt-6">
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="btn btn-primary w-full"
                  >
                    Vote Now
                  </motion.button>
                </div>
              </motion.div>
              
              <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="card"
              >
                <h3 className="text-2xl font-bold mb-4 neon-green">Upcoming Votes</h3>
                <p className="text-gray-300 mb-6">
                  Future community decisions coming soon.
                </p>
                
                <div className="space-y-6">
                  <div className="flex items-start">
                    <div className="flex-shrink-0 w-10 h-10 rounded-full bg-[var(--primary-green)] flex items-center justify-center mr-4">
                      <span className="text-lg">🎨</span>
                    </div>
                    <div>
                      <h4 className="text-lg font-bold mb-1">New Meme Skin Selection</h4>
                      <p className="text-gray-300">Vote on which meme character should join the game next.</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="flex-shrink-0 w-10 h-10 rounded-full bg-[var(--primary-green)] flex items-center justify-center mr-4">
                      <span className="text-lg">⚡</span>
                    </div>
                    <div>
                      <h4 className="text-lg font-bold mb-1">New Power-up Ideas</h4>
                      <p className="text-gray-300">Help us choose the next power-up to add to the arena.</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="flex-shrink-0 w-10 h-10 rounded-full bg-[var(--primary-green)] flex items-center justify-center mr-4">
                      <span className="text-lg">🏆</span>
                    </div>
                    <div>
                      <h4 className="text-lg font-bold mb-1">Tournament Structure</h4>
                      <p className="text-gray-300">Vote on the format for our first official tournament.</p>
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Progress Indicators */}
      <section className="py-16 relative">
        <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-[var(--primary-purple)] to-transparent"></div>
        <div className="cyberpunk-container">
          <motion.div
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={fadeIn}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold mb-4">
              <span className="gradient-text">Development Progress</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Track our progress as we build the BRAWL3D universe.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { name: "Core Gameplay", progress: 85, color: "purple" },
              { name: "Token Ecosystem", progress: 70, color: "green" },
              { name: "NFT Integration", progress: 30, color: "purple" },
              { name: "Community Features", progress: 60, color: "green" },
            ].map((item, index) => (
              <motion.div
                key={item.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="card"
              >
                <h3 className={`text-xl font-bold mb-4 neon-${item.color}`}>{item.name}</h3>
                <div className="relative pt-1">
                  <div className="flex mb-2 items-center justify-between">
                    <div>
                      <span className="text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full bg-[var(--darker-bg)]">
                        Progress
                      </span>
                    </div>
                    <div className="text-right">
                      <span className={`text-xs font-semibold inline-block text-[var(--primary-${item.color})]`}>
                        {item.progress}%
                      </span>
                    </div>
                  </div>
                  <div className="overflow-hidden h-2 mb-4 text-xs flex rounded bg-gray-800">
                    <motion.div
                      initial={{ width: 0 }}
                      whileInView={{ width: `${item.progress}%` }}
                      viewport={{ once: true }}
                      transition={{ duration: 1, delay: 0.5 + index * 0.1 }}
                      className={`shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-[var(--primary-${item.color})]`}
                    ></motion.div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 relative bg-[var(--darker-bg)]">
        <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-[var(--primary-green)] to-transparent"></div>
        <div className="cyberpunk-container">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <h2 className="text-4xl font-bold mb-6">
              <span className="neon-purple">Join Our</span> <span className="neon-green">Journey</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
              Be part of the BRAWL3D community and help shape our future.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <motion.a
                href="/community"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="btn btn-primary"
              >
                Join Community <ArrowRight className="inline ml-2" size={18} />
              </motion.a>
              <motion.a
                href="#"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="btn btn-secondary"
              >
                Play Demo
              </motion.a>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Roadmap;
