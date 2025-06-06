import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

const Gameplay = () => {
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
              <span className="gradient-text">Gameplay</span>
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Dive into the chaotic, fun world of BRAWL3D and experience meme-based arena combat like never before.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Basic Gameplay */}
      <section className="py-16 relative">
        <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-[var(--primary-purple)] to-transparent"></div>
        <div className="cyberpunk-container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-3xl font-bold mb-6 neon-purple">Basic Gameplay</h2>
              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="flex-shrink-0 w-10 h-10 rounded-full bg-[var(--primary-purple)] flex items-center justify-center mr-4">
                    <span className="text-lg font-bold">1</span>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-2">Move & Grow</h3>
                    <p className="text-gray-300">
                      Control your sphere and collect orbs scattered throughout the arena to increase your size and power.
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="flex-shrink-0 w-10 h-10 rounded-full bg-[var(--primary-green)] flex items-center justify-center mr-4">
                    <span className="text-lg font-bold">2</span>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-2">Battle Others</h3>
                    <p className="text-gray-300">
                      Absorb smaller players to grow even faster. Use strategy and timing to outmaneuver larger opponents.
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="flex-shrink-0 w-10 h-10 rounded-full bg-[var(--primary-purple)] flex items-center justify-center mr-4">
                    <span className="text-lg font-bold">3</span>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-2">Collect Power-ups</h3>
                    <p className="text-gray-300">
                      Find and activate special power-ups that spawn randomly in the arena to gain temporary advantages.
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="flex-shrink-0 w-10 h-10 rounded-full bg-[var(--primary-green)] flex items-center justify-center mr-4">
                    <span className="text-lg font-bold">4</span>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-2">Earn Points</h3>
                    <p className="text-gray-300">
                      Accumulate points based on your size, survival time, and the number of players you absorb.
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="relative"
            >
              <div className="relative w-full h-[400px] flex items-center justify-center bg-[var(--darker-bg)] rounded-lg border border-[var(--primary-purple)] overflow-hidden">
                <div className="grid-pattern absolute inset-0 opacity-30"></div>
                
                <motion.div 
                  animate={{ 
                    x: [0, 50, -30, 0],
                    y: [0, -30, 40, 0],
                  }}
                  transition={{ 
                    duration: 15, 
                    repeat: Infinity,
                    ease: "linear" 
                  }}
                  className="absolute"
                >
                  <div className="w-20 h-20 rounded-full bg-[var(--primary-purple)] opacity-80"></div>
                </motion.div>
                
                <motion.div 
                  animate={{ 
                    x: [0, -40, 20, 0],
                    y: [0, 20, -40, 0],
                  }}
                  transition={{ 
                    duration: 12, 
                    repeat: Infinity,
                    ease: "linear",
                    delay: 1
                  }}
                  className="absolute"
                >
                  <div className="w-12 h-12 rounded-full bg-[var(--primary-green)] opacity-80"></div>
                </motion.div>
                
                <motion.div 
                  animate={{ 
                    x: [0, 30, -50, 0],
                    y: [0, -50, -20, 0],
                  }}
                  transition={{ 
                    duration: 18, 
                    repeat: Infinity,
                    ease: "linear",
                    delay: 2
                  }}
                  className="absolute"
                >
                  <div className="w-8 h-8 rounded-full bg-blue-500 opacity-80"></div>
                </motion.div>
                
                <motion.div 
                  animate={{ 
                    x: [0, -20, 40, 0],
                    y: [0, 40, 30, 0],
                  }}
                  transition={{ 
                    duration: 20, 
                    repeat: Infinity,
                    ease: "linear",
                    delay: 3
                  }}
                  className="absolute"
                >
                  <div className="w-6 h-6 rounded-full bg-yellow-500 opacity-80"></div>
                </motion.div>
                
                <motion.div 
                  animate={{ 
                    scale: [1, 1.2, 1],
                  }}
                  transition={{ 
                    duration: 2, 
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                  className="absolute"
                >
                  <div className="w-32 h-32 rounded-full bg-[var(--primary-purple)] opacity-40 flex items-center justify-center">
                    <div className="text-white text-xl font-bold">PLAYER</div>
                  </div>
                </motion.div>
                
                <div className="absolute bottom-4 left-4 bg-black bg-opacity-50 px-3 py-1 rounded-full text-sm">
                  Gameplay Simulation
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Power-ups Section */}
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
              <span className="gradient-text">Power-ups</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Discover these game-changing power-ups that spawn randomly throughout the arena.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { name: "Speed Boost", description: "Increases movement speed by 50% for 10 seconds", color: "purple" },
              { name: "Invincibility", description: "Makes you immune to being absorbed for 5 seconds", color: "green" },
              { name: "Score Multiplier", description: "Doubles all points earned for 15 seconds", color: "purple" },
              { name: "Terminator Mode", description: "Allows you to absorb larger players for 3 seconds", color: "green" },
            ].map((powerup, index) => (
              <motion.div
                key={powerup.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ y: -10, scale: 1.03 }}
                className={`card border-[var(--primary-${powerup.color})]`}
                style={{
                  boxShadow: `0 0 10px rgba(${powerup.color === 'purple' ? '181, 39, 252' : '39, 252, 158'}, 0.7), 0 0 20px rgba(${powerup.color === 'purple' ? '181, 39, 252' : '39, 252, 158'}, 0.5), 0 0 30px rgba(${powerup.color === 'purple' ? '181, 39, 252' : '39, 252, 158'}, 0.3)`
                }}
              >
                <div className={`h-16 w-16 rounded-full bg-[var(--primary-${powerup.color})] mx-auto mb-4 flex items-center justify-center`}>
                  <span className="text-2xl">⚡</span>
                </div>
                <h3 className={`text-xl font-bold mb-2 text-center neon-${powerup.color}`}>{powerup.name}</h3>
                <p className="text-gray-300 text-center">
                  {powerup.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* NFT Abilities Section */}
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
              <span className="gradient-text">NFT Abilities</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Unlock these special abilities by owning BRAWL3D NFTs (coming in Phase 2).
            </p>
          </motion.div>

          <div className="overflow-x-auto">
            <table className="w-full min-w-[600px] border-collapse">
              <thead>
                <tr>
                  <th className="py-4 px-6 bg-[var(--darker-bg)] text-left text-lg neon-purple">Rarity</th>
                  <th className="py-4 px-6 bg-[var(--darker-bg)] text-left text-lg neon-purple">Ability</th>
                  <th className="py-4 px-6 bg-[var(--darker-bg)] text-left text-lg neon-purple">Effect</th>
                </tr>
              </thead>
              <tbody>
                <motion.tr 
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: 0.1 }}
                  className="border-b border-gray-800"
                >
                  <td className="py-4 px-6 text-blue-400">Common</td>
                  <td className="py-4 px-6 font-medium">Quick Dash</td>
                  <td className="py-4 px-6 text-gray-300">75% speed for 0.5 sec</td>
                </motion.tr>
                <motion.tr 
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: 0.2 }}
                  className="border-b border-gray-800"
                >
                  <td className="py-4 px-6 text-indigo-400">Rare</td>
                  <td className="py-4 px-6 font-medium">Orb Magnet</td>
                  <td className="py-4 px-6 text-gray-300">7.5x radius attraction force</td>
                </motion.tr>
                <motion.tr 
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: 0.3 }}
                  className="border-b border-gray-800"
                >
                  <td className="py-4 px-6 text-purple-400">Epic</td>
                  <td className="py-4 px-6 font-medium">Stealth Mode</td>
                  <td className="py-4 px-6 text-gray-300">Invisible for 5 sec</td>
                </motion.tr>
                <motion.tr 
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: 0.4 }}
                >
                  <td className="py-4 px-6 text-yellow-400">Legendary</td>
                  <td className="py-4 px-6 font-medium">Golden Growth</td>
                  <td className="py-4 px-6 text-gray-300">40% growth + 50% speedboost for 1 sec</td>
                </motion.tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
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
              <span className="gradient-text">Frequently Asked Questions</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Everything you need to know about BRAWL3D gameplay.
            </p>
          </motion.div>

          <div className="max-w-3xl mx-auto space-y-6">
            {[
              { 
                question: "Do I need a crypto wallet to play?", 
                answer: "No, you can play without a wallet, but you won't earn points or rewards. For the full experience including rewards and token earnings, a wallet is recommended." 
              },
              { 
                question: "How do I earn BRAWL3D tokens?", 
                answer: "Tokens can be earned through leaderboard rankings, achievements, and special events. The more tokens you hold, the higher your in-game point multipliers." 
              },
              { 
                question: "What happens if I get absorbed by another player?", 
                answer: "When absorbed, you'll respawn as a new small sphere. Your accumulated points from that round will be added to your total, but you'll start fresh with size." 
              },
              { 
                question: "Are there different game modes?", 
                answer: "Currently, we offer free-for-all arena mode. Team battles, tournaments, and special event modes will be added in future updates according to our roadmap." 
              },
            ].map((faq, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="card"
              >
                <h3 className="text-xl font-bold mb-3 neon-purple">{faq.question}</h3>
                <p className="text-gray-300">{faq.answer}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 relative">
        <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-[var(--primary-purple)] to-transparent"></div>
        <div className="cyberpunk-container">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <h2 className="text-4xl font-bold mb-6">
              <span className="neon-purple">Ready to</span> <span className="neon-green">Jump In?</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
              Experience the chaotic fun of BRAWL3D arena combat now!
            </p>
            <motion.a
              href="#"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="btn btn-primary text-xl px-8 py-4"
            >
              Play Now <ArrowRight className="inline ml-2" size={20} />
            </motion.a>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Gameplay;
