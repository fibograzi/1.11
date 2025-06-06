import { motion } from 'framer-motion';
import { Coins, BarChart3, Users } from 'lucide-react';

const Tokenomics = () => {
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
              <span className="gradient-text">Tokenomics</span>
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              The economic system powering the BRAWL3D ecosystem.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Token Overview */}
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
              <h2 className="text-3xl font-bold mb-6 neon-purple">BRAWL Token</h2>
              <p className="text-gray-300 mb-6">
                The BRAWL token is the native cryptocurrency of the BRAWL3D ecosystem, built on the Solana blockchain for lightning-fast transactions and minimal fees.
              </p>
              <p className="text-gray-300 mb-6">
                BRAWL tokens serve multiple purposes within our ecosystem, from gameplay rewards and power-ups to governance and staking opportunities.
              </p>
              <div className="space-y-4">
                <div className="flex items-start">
                  <div className="flex-shrink-0 w-10 h-10 rounded-full bg-[var(--primary-purple)] flex items-center justify-center mr-4">
                    <Coins className="text-white" size={20} />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-1 neon-purple">In-Game Currency</h3>
                    <p className="text-gray-300">
                      Use BRAWL tokens to purchase power-ups, special abilities, and cosmetic upgrades.
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="flex-shrink-0 w-10 h-10 rounded-full bg-[var(--primary-green)] flex items-center justify-center mr-4">
                    <BarChart3 className="text-white" size={20} />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-1 neon-green">Staking Rewards</h3>
                    <p className="text-gray-300">
                      Stake your BRAWL tokens to earn passive income and exclusive in-game benefits.
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="flex-shrink-0 w-10 h-10 rounded-full bg-[var(--primary-purple)] flex items-center justify-center mr-4">
                    <Users className="text-white" size={20} />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-1 neon-purple">Governance</h3>
                    <p className="text-gray-300">
                      Hold BRAWL tokens to participate in community voting and shape the future of the game.
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
              <div className="relative w-full h-[400px] flex items-center justify-center">
                <motion.div 
                  animate={{ 
                    y: [0, -20, 0],
                    rotate: [0, 5, 0, -5, 0],
                  }}
                  transition={{ 
                    duration: 8, 
                    repeat: Infinity,
                    ease: "easeInOut" 
                  }}
                  className="absolute"
                >
                  <div className="w-64 h-64 rounded-full bg-[var(--primary-purple)] opacity-80 flex items-center justify-center">
                    <span className="text-6xl font-bold">$BRAWL</span>
                  </div>
                </motion.div>
                
                <motion.div 
                  animate={{ 
                    scale: [1, 1.1, 1],
                    opacity: [0.8, 1, 0.8]
                  }}
                  transition={{ 
                    duration: 4, 
                    repeat: Infinity,
                    ease: "easeInOut" 
                  }}
                  className="absolute w-full h-full"
                >
                  <div className="absolute top-0 left-0 w-full h-full">
                    <div className="absolute top-1/4 left-1/4 w-1/2 h-1/2 rounded-full bg-[var(--primary-purple)] filter blur-[80px] opacity-30"></div>
                    <div className="absolute bottom-1/4 right-1/4 w-1/2 h-1/2 rounded-full bg-[var(--primary-green)] filter blur-[80px] opacity-30"></div>
                  </div>
                </motion.div>
                
                <div className="absolute inset-0 bg-gradient-to-r from-[var(--darker-bg)] via-transparent to-[var(--darker-bg)] pointer-events-none"></div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Token Distribution */}
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
              <span className="gradient-text">Token Distribution</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              A fair and transparent allocation designed for long-term sustainability.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="card"
            >
              <h3 className="text-2xl font-bold mb-6 neon-purple">Allocation</h3>
              
              <div className="space-y-6">
                <div>
                  <div className="flex justify-between mb-2">
                    <span className="text-gray-300">Community & Gameplay Rewards</span>
                    <span className="text-[var(--primary-purple)] font-bold">40%</span>
                  </div>
                  <div className="h-4 bg-gray-800 rounded-full overflow-hidden">
                    <motion.div
                      initial={{ width: 0 }}
                      whileInView={{ width: '40%' }}
                      viewport={{ once: true }}
                      transition={{ duration: 1, delay: 0.1 }}
                      className="h-full bg-[var(--primary-purple)]"
                    ></motion.div>
                  </div>
                </div>
                
                <div>
                  <div className="flex justify-between mb-2">
                    <span className="text-gray-300">Fair Launch (Pump.fun)</span>
                    <span className="text-[var(--primary-green)] font-bold">30%</span>
                  </div>
                  <div className="h-4 bg-gray-800 rounded-full overflow-hidden">
                    <motion.div
                      initial={{ width: 0 }}
                      whileInView={{ width: '30%' }}
                      viewport={{ once: true }}
                      transition={{ duration: 1, delay: 0.2 }}
                      className="h-full bg-[var(--primary-green)]"
                    ></motion.div>
                  </div>
                </div>
                
                <div>
                  <div className="flex justify-between mb-2">
                    <span className="text-gray-300">Development & Marketing</span>
                    <span className="text-[var(--primary-purple)] font-bold">15%</span>
                  </div>
                  <div className="h-4 bg-gray-800 rounded-full overflow-hidden">
                    <motion.div
                      initial={{ width: 0 }}
                      whileInView={{ width: '15%' }}
                      viewport={{ once: true }}
                      transition={{ duration: 1, delay: 0.3 }}
                      className="h-full bg-[var(--primary-purple)]"
                    ></motion.div>
                  </div>
                </div>
                
                <div>
                  <div className="flex justify-between mb-2">
                    <span className="text-gray-300">Liquidity Pool</span>
                    <span className="text-[var(--primary-green)] font-bold">10%</span>
                  </div>
                  <div className="h-4 bg-gray-800 rounded-full overflow-hidden">
                    <motion.div
                      initial={{ width: 0 }}
                      whileInView={{ width: '10%' }}
                      viewport={{ once: true }}
                      transition={{ duration: 1, delay: 0.4 }}
                      className="h-full bg-[var(--primary-green)]"
                    ></motion.div>
                  </div>
                </div>
                
                <div>
                  <div className="flex justify-between mb-2">
                    <span className="text-gray-300">Team</span>
                    <span className="text-[var(--primary-purple)] font-bold">5%</span>
                  </div>
                  <div className="h-4 bg-gray-800 rounded-full overflow-hidden">
                    <motion.div
                      initial={{ width: 0 }}
                      whileInView={{ width: '5%' }}
                      viewport={{ once: true }}
                      transition={{ duration: 1, delay: 0.5 }}
                      className="h-full bg-[var(--primary-purple)]"
                    ></motion.div>
                  </div>
                </div>
              </div>
              
              <div className="mt-8 p-4 bg-[var(--dark-bg)] rounded-lg border border-gray-800">
                <h4 className="text-lg font-bold mb-2 neon-green">Total Supply</h4>
                <p className="text-3xl font-bold">1,000,000,000 BRAWL</p>
              </div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="card"
            >
              <h3 className="text-2xl font-bold mb-6 neon-green">Vesting Schedule</h3>
              
              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="flex-shrink-0 w-10 h-10 rounded-full bg-[var(--primary-green)] flex items-center justify-center mr-4">
                    <span className="text-lg font-bold">1</span>
                  </div>
                  <div>
                    <h4 className="text-lg font-bold mb-1 neon-green">Community & Gameplay Rewards</h4>
                    <p className="text-gray-300">
                      Released gradually over 3 years based on gameplay milestones and community growth.
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="flex-shrink-0 w-10 h-10 rounded-full bg-[var(--primary-purple)] flex items-center justify-center mr-4">
                    <span className="text-lg font-bold">2</span>
                  </div>
                  <div>
                    <h4 className="text-lg font-bold mb-1 neon-purple">Fair Launch</h4>
                    <p className="text-gray-300">
                      100% available at launch via Pump.fun on Solana.
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="flex-shrink-0 w-10 h-10 rounded-full bg-[var(--primary-green)] flex items-center justify-center mr-4">
                    <span className="text-lg font-bold">3</span>
                  </div>
                  <div>
                    <h4 className="text-lg font-bold mb-1 neon-green">Development & Marketing</h4>
                    <p className="text-gray-300">
                      10% at launch, remaining 90% vested linearly over 2 years.
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="flex-shrink-0 w-10 h-10 rounded-full bg-[var(--primary-purple)] flex items-center justify-center mr-4">
                    <span className="text-lg font-bold">4</span>
                  </div>
                  <div>
                    <h4 className="text-lg font-bold mb-1 neon-purple">Liquidity Pool</h4>
                    <p className="text-gray-300">
                      100% locked for 1 year, then released gradually to ensure market stability.
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="flex-shrink-0 w-10 h-10 rounded-full bg-[var(--primary-green)] flex items-center justify-center mr-4">
                    <span className="text-lg font-bold">5</span>
                  </div>
                  <div>
                    <h4 className="text-lg font-bold mb-1 neon-green">Team</h4>
                    <p className="text-gray-300">
                      6-month cliff, then vested linearly over 2 years to ensure long-term commitment.
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Token Utility */}
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
              <span className="gradient-text">Token Utility</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              How BRAWL tokens power the ecosystem.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: "Gameplay Rewards",
                description: "Earn BRAWL tokens by winning matches, climbing leaderboards, and completing special challenges.",
                icon: "🏆",
                color: "purple"
              },
              {
                title: "Power-Up Purchases",
                description: "Spend BRAWL tokens to acquire special abilities, power-ups, and temporary boosts during gameplay.",
                icon: "⚡",
                color: "green"
              },
              {
                title: "NFT Integration",
                description: "Use BRAWL tokens to mint, upgrade, and trade special NFT skins with unique abilities.",
                icon: "🎨",
                color: "purple"
              },
              {
                title: "Staking Rewards",
                description: "Stake your BRAWL tokens to earn passive income and exclusive in-game benefits.",
                icon: "💰",
                color: "green"
              },
              {
                title: "Governance Voting",
                description: "Participate in community governance to shape the future development of BRAWL3D.",
                icon: "🗳️",
                color: "purple"
              },
              {
                title: "Tournament Entry",
                description: "Use BRAWL tokens to enter special tournaments with larger prize pools and exclusive rewards.",
                icon: "🎮",
                color: "green"
              }
            ].map((item, index) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="card"
              >
                <div className={`h-16 w-16 rounded-full bg-[var(--primary-${item.color})] mx-auto mb-4 flex items-center justify-center`}>
                  <span className="text-2xl">{item.icon}</span>
                </div>
                <h3 className={`text-xl font-bold mb-2 text-center neon-${item.color}`}>{item.title}</h3>
                <p className="text-gray-300 text-center">
                  {item.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* How to Acquire */}
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
              <span className="gradient-text">How to Acquire BRAWL Tokens</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Multiple ways to get your hands on BRAWL tokens.
            </p>
          </motion.div>

          <div className="max-w-4xl mx-auto">
            <div className="relative">
              <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-gradient-to-b from-[var(--primary-purple)] to-[var(--primary-green)]"></div>
              
              <div className="relative z-10">
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6 }}
                  className="flex flex-col md:flex-row items-center mb-16"
                >
                  <div className="md:w-1/2 md:pr-12 mb-8 md:mb-0 md:text-right">
                    <h3 className="text-2xl font-bold mb-2 neon-purple">Fair Launch on Pump.fun</h3>
                    <p className="text-gray-300">
                      The initial token distribution will happen through a fair launch on Pump.fun, the popular Solana launchpad.
                    </p>
                  </div>
                  
                  <div className="mx-auto md:mx-0 w-12 h-12 rounded-full bg-[var(--darker-bg)] border-4 border-[var(--primary-purple)] flex items-center justify-center relative z-20">
                    <span className="text-xl font-bold">1</span>
                  </div>
                  
                  <div className="md:w-1/2 md:pl-12 mt-8 md:mt-0">
                    <div className="card">
                      <div className="space-y-2">
                        <div className="flex items-center">
                          <div className="w-6 h-6 rounded-full bg-[var(--primary-purple)] flex items-center justify-center mr-2">
                            <span className="text-xs font-bold">1</span>
                          </div>
                          <p className="text-gray-300">Create a Solana wallet (Phantom recommended)</p>
                        </div>
                        <div className="flex items-center">
                          <div className="w-6 h-6 rounded-full bg-[var(--primary-purple)] flex items-center justify-center mr-2">
                            <span className="text-xs font-bold">2</span>
                          </div>
                          <p className="text-gray-300">Visit Pump.fun and connect your wallet</p>
                        </div>
                        <div className="flex items-center">
                          <div className="w-6 h-6 rounded-full bg-[var(--primary-purple)] flex items-center justify-center mr-2">
                            <span className="text-xs font-bold">3</span>
                          </div>
                          <p className="text-gray-300">Search for BRAWL token and purchase</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </motion.div>
                
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                  className="flex flex-col md:flex-row items-center mb-16"
                >
                  <div className="md:w-1/2 md:pr-12 mb-8 md:mb-0 md:text-right order-1 md:order-1">
                    <div className="card">
                      <div className="space-y-2">
                        <div className="flex items-center md:justify-end">
                          <p className="text-gray-300">Win matches and climb the leaderboard</p>
                          <div className="w-6 h-6 rounded-full bg-[var(--primary-green)] flex items-center justify-center ml-2 hidden md:flex">
                            <span className="text-xs font-bold">1</span>
                          </div>
                        </div>
                        <div className="flex items-center md:justify-end">
                          <p className="text-gray-300">Complete daily and weekly challenges</p>
                          <div className="w-6 h-6 rounded-full bg-[var(--primary-green)] flex items-center justify-center ml-2 hidden md:flex">
                            <span className="text-xs font-bold">2</span>
                          </div>
                        </div>
                        <div className="flex items-center md:justify-end">
                          <p className="text-gray-300">Participate in special events and tournaments</p>
                          <div className="w-6 h-6 rounded-full bg-[var(--primary-green)] flex items-center justify-center ml-2 hidden md:flex">
                            <span className="text-xs font-bold">3</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  <div className="mx-auto md:mx-0 w-12 h-12 rounded-full bg-[var(--darker-bg)] border-4 border-[var(--primary-green)] flex items-center justify-center relative z-20 order-2 md:order-2">
                    <span className="text-xl font-bold">2</span>
                  </div>
                  
                  <div className="md:w-1/2 md:pl-12 mt-8 md:mt-0 order-3 md:order-3">
                    <h3 className="text-2xl font-bold mb-2 neon-green">Earn Through Gameplay</h3>
                    <p className="text-gray-300">
                      The most fun way to acquire BRAWL tokens is by playing the game and earning rewards for your achievements.
                    </p>
                  </div>
                </motion.div>
                
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.4 }}
                  className="flex flex-col md:flex-row items-center"
                >
                  <div className="md:w-1/2 md:pr-12 mb-8 md:mb-0 md:text-right">
                    <h3 className="text-2xl font-bold mb-2 neon-purple">Decentralized Exchanges</h3>
                    <p className="text-gray-300">
                      After the initial launch, BRAWL tokens will be available on popular Solana DEXes for trading.
                    </p>
                  </div>
                  
                  <div className="mx-auto md:mx-0 w-12 h-12 rounded-full bg-[var(--darker-bg)] border-4 border-[var(--primary-purple)] flex items-center justify-center relative z-20">
                    <span className="text-xl font-bold">3</span>
                  </div>
                  
                  <div className="md:w-1/2 md:pl-12 mt-8 md:mt-0">
                    <div className="card">
                      <div className="space-y-2">
                        <div className="flex items-center">
                          <div className="w-6 h-6 rounded-full bg-[var(--primary-purple)] flex items-center justify-center mr-2">
                            <span className="text-xs font-bold">1</span>
                          </div>
                          <p className="text-gray-300">Visit Jupiter, Raydium, or Orca</p>
                        </div>
                        <div className="flex items-center">
                          <div className="w-6 h-6 rounded-full bg-[var(--primary-purple)] flex items-center justify-center mr-2">
                            <span className="text-xs font-bold">2</span>
                          </div>
                          <p className="text-gray-300">Connect your Solana wallet</p>
                        </div>
                        <div className="flex items-center">
                          <div className="w-6 h-6 rounded-full bg-[var(--primary-purple)] flex items-center justify-center mr-2">
                            <span className="text-xs font-bold">3</span>
                          </div>
                          <p className="text-gray-300">Swap SOL or other tokens for BRAWL</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </motion.div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Staking */}
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
              <span className="gradient-text">Staking Rewards</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Lock your tokens and earn passive rewards.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="card"
            >
              <h3 className="text-2xl font-bold mb-6 neon-purple">Staking Benefits</h3>
              
              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="flex-shrink-0 w-10 h-10 rounded-full bg-[var(--primary-purple)] flex items-center justify-center mr-4">
                    <span className="text-lg">💸</span>
                  </div>
                  <div>
                    <h4 className="text-lg font-bold mb-1 neon-purple">Passive Income</h4>
                    <p className="text-gray-300">
                      Earn up to 15% APY by staking your BRAWL tokens in our staking pool.
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="flex-shrink-0 w-10 h-10 rounded-full bg-[var(--primary-purple)] flex items-center justify-center mr-4">
                    <span className="text-lg">🎁</span>
                  </div>
                  <div>
                    <h4 className="text-lg font-bold mb-1 neon-purple">Exclusive Rewards</h4>
                    <p className="text-gray-300">
                      Stakers receive exclusive in-game items, power-ups, and early access to new features.
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="flex-shrink-0 w-10 h-10 rounded-full bg-[var(--primary-purple)] flex items-center justify-center mr-4">
                    <span className="text-lg">🗳️</span>
                  </div>
                  <div>
                    <h4 className="text-lg font-bold mb-1 neon-purple">Boosted Voting Power</h4>
                    <p className="text-gray-300">
                      Staked tokens count for 1.5x voting power in governance decisions.
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="flex-shrink-0 w-10 h-10 rounded-full bg-[var(--primary-purple)] flex items-center justify-center mr-4">
                    <span className="text-lg">🔒</span>
                  </div>
                  <div>
                    <h4 className="text-lg font-bold mb-1 neon-purple">Flexible Lock Periods</h4>
                    <p className="text-gray-300">
                      Choose from 30, 90, or 180-day lock periods with increasing rewards.
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="card"
            >
              <h3 className="text-2xl font-bold mb-6 neon-green">Staking Tiers</h3>
              
              <div className="space-y-8">
                <div>
                  <div className="flex items-center justify-between mb-2">
                    <div className="flex items-center">
                      <div className="w-8 h-8 rounded-full bg-gray-700 flex items-center justify-center mr-3">
                        <span className="text-sm">🥉</span>
                      </div>
                      <h4 className="text-lg font-bold">Bronze Tier</h4>
                    </div>
                    <span className="text-gray-400">1,000 - 9,999 BRAWL</span>
                  </div>
                  <div className="bg-gray-800 p-4 rounded-lg">
                    <ul className="space-y-2 text-gray-300">
                      <li>• 8% APY</li>
                      <li>• Basic power-up pack monthly</li>
                      <li>• 1.1x voting power</li>
                    </ul>
                  </div>
                </div>
                
                <div>
                  <div className="flex items-center justify-between mb-2">
                    <div className="flex items-center">
                      <div className="w-8 h-8 rounded-full bg-gray-500 flex items-center justify-center mr-3">
                        <span className="text-sm">🥈</span>
                      </div>
                      <h4 className="text-lg font-bold">Silver Tier</h4>
                    </div>
                    <span className="text-gray-400">10,000 - 49,999 BRAWL</span>
                  </div>
                  <div className="bg-gray-800 p-4 rounded-lg">
                    <ul className="space-y-2 text-gray-300">
                      <li>• 10% APY</li>
                      <li>• Premium power-up pack monthly</li>
                      <li>• 1.3x voting power</li>
                      <li>• Early access to new features</li>
                    </ul>
                  </div>
                </div>
                
                <div>
                  <div className="flex items-center justify-between mb-2">
                    <div className="flex items-center">
                      <div className="w-8 h-8 rounded-full bg-yellow-700 flex items-center justify-center mr-3">
                        <span className="text-sm">🥇</span>
                      </div>
                      <h4 className="text-lg font-bold">Gold Tier</h4>
                    </div>
                    <span className="text-gray-400">50,000+ BRAWL</span>
                  </div>
                  <div className="bg-gray-800 p-4 rounded-lg">
                    <ul className="space-y-2 text-gray-300">
                      <li>• 15% APY</li>
                      <li>• Legendary power-up pack monthly</li>
                      <li>• 1.5x voting power</li>
                      <li>• Early access to all features</li>
                      <li>• Exclusive NFT drops</li>
                      <li>• Custom in-game title</li>
                    </ul>
                  </div>
                </div>
              </div>
            </motion.div>
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
              <span className="neon-purple">Ready to</span> <span className="neon-green">Join the BRAWL?</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
              Get your BRAWL tokens now and become part of our growing ecosystem.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <motion.a
                href="#"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="btn btn-primary"
              >
                Buy BRAWL Tokens
              </motion.a>
              <motion.a
                href="#"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="btn btn-secondary"
              >
                View Whitepaper
              </motion.a>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Tokenomics;
