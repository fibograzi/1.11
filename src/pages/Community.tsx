import { motion } from 'framer-motion';
import { ArrowRight, Users, MessageCircle, Trophy } from 'lucide-react';

const Community = () => {
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
              <span className="gradient-text">Community</span>
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Join thousands of players in the BRAWL3D universe and become part of our growing community.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Social Media Links */}
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
              <span className="gradient-text">Connect With Us</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Follow our social channels for the latest updates, events, and community activities.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            <motion.a
              href="#"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              whileHover={{ y: -10, scale: 1.03 }}
              className="card flex flex-col items-center text-center"
            >
              <div className="w-16 h-16 rounded-full bg-[var(--primary-purple)] flex items-center justify-center mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-white" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"/>
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-2 neon-purple">Twitter</h3>
              <p className="text-gray-300 mb-4">
                Follow us for the latest announcements, memes, and community polls.
              </p>
              <span className="mt-auto btn btn-secondary">@BRAWL3D</span>
            </motion.a>
            
            <motion.a
              href="#"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              whileHover={{ y: -10, scale: 1.03 }}
              className="card flex flex-col items-center text-center"
            >
              <div className="w-16 h-16 rounded-full bg-[var(--primary-green)] flex items-center justify-center mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-white" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M19.54 0c1.356 0 2.46 1.104 2.46 2.472v21.528l-2.58-2.28-1.452-1.344-1.536-1.428.636 2.22h-13.608c-1.356 0-2.46-1.104-2.46-2.472v-16.224c0-1.368 1.104-2.472 2.46-2.472h16.08zm-4.632 15.672c2.652-.084 3.672-1.824 3.672-1.824 0-3.864-1.728-6.996-1.728-6.996-1.728-1.296-3.372-1.26-3.372-1.26l-.168.192c2.04.624 2.988 1.524 2.988 1.524-1.248-.684-2.472-1.02-3.612-1.152-.864-.096-1.692-.072-2.424.024l-.204.024c-.42.036-1.44.192-2.724.756-.444.204-.708.348-.708.348s.996-.948 3.156-1.572l-.12-.144s-1.644-.036-3.372 1.26c0 0-1.728 3.132-1.728 6.996 0 0 1.008 1.74 3.66 1.824 0 0 .444-.54.804-.996-1.524-.456-2.1-1.416-2.1-1.416l.336.204.048.036.047.027.014.006.047.027c.3.168.6.3.876.408.492.192 1.08.384 1.764.516.9.168 1.956.228 3.108.012.564-.096 1.14-.264 1.74-.516.42-.156.888-.384 1.38-.708 0 0-.6.984-2.172 1.428.36.456.792.972.792.972zm-5.58-5.604c-.684 0-1.224.6-1.224 1.332 0 .732.552 1.332 1.224 1.332.684 0 1.224-.6 1.224-1.332.012-.732-.54-1.332-1.224-1.332zm4.38 0c-.684 0-1.224.6-1.224 1.332 0 .732.552 1.332 1.224 1.332.684 0 1.224-.6 1.224-1.332 0-.732-.54-1.332-1.224-1.332z"/>
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-2 neon-green">Discord</h3>
              <p className="text-gray-300 mb-4">
                Join our Discord server for discussions, support, and exclusive events.
              </p>
              <span className="mt-auto btn btn-secondary">discord.gg/BRAWL3D</span>
            </motion.a>
            
            <motion.a
              href="#"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              whileHover={{ y: -10, scale: 1.03 }}
              className="card flex flex-col items-center text-center"
            >
              <div className="w-16 h-16 rounded-full bg-[var(--primary-purple)] flex items-center justify-center mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-white" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 0c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm-2 16h-2v-6h2v6zm-1-6.891c-.607 0-1.1-.496-1.1-1.109 0-.612.492-1.109 1.1-1.109s1.1.497 1.1 1.109c0 .613-.493 1.109-1.1 1.109zm8 6.891h-1.998v-2.861c0-1.881-2.002-1.722-2.002 0v2.861h-2v-6h2v1.093c.872-1.616 4-1.736 4 1.548v3.359z"/>
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-2 neon-purple">Reddit</h3>
              <p className="text-gray-300 mb-4">
                Join our subreddit for memes, gameplay tips, and community discussions.
              </p>
              <span className="mt-auto btn btn-secondary">r/BRAWL3D</span>
            </motion.a>
          </div>
        </div>
      </section>

      {/* Community Stats */}
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
              <span className="gradient-text">Community Stats</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Our growing community of meme battlers.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { icon: <Users size={40} />, value: "25,000+", label: "Players", color: "purple" },
              { icon: <MessageCircle size={40} />, value: "15,000+", label: "Discord Members", color: "green" },
              { icon: <Trophy size={40} />, value: "1,200+", label: "Tournament Players", color: "purple" },
              { icon: <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>, value: "5,000+", label: "Token Holders", color: "green" },
            ].map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className={`card text-center border-[var(--primary-${stat.color})]`}
                style={{
                  boxShadow: `0 0 10px rgba(${stat.color === 'purple' ? '181, 39, 252' : '39, 252, 158'}, 0.7), 0 0 20px rgba(${stat.color === 'purple' ? '181, 39, 252' : '39, 252, 158'}, 0.5), 0 0 30px rgba(${stat.color === 'purple' ? '181, 39, 252' : '39, 252, 158'}, 0.3)`
                }}
              >
                <div className={`text-[var(--primary-${stat.color})] mb-4 flex justify-center`}>
                  {stat.icon}
                </div>
                <h3 className="text-3xl font-bold mb-2">{stat.value}</h3>
                <p className="text-gray-400">{stat.label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Leaderboards */}
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
              <span className="gradient-text">Leaderboards</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Top players in the BRAWL3D arena.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="card"
            >
              <h3 className="text-2xl font-bold mb-6 neon-purple">Weekly Top Players</h3>
              
              <div className="overflow-x-auto">
                <table className="w-full min-w-full">
                  <thead>
                    <tr className="border-b border-gray-800">
                      <th className="py-3 text-left">Rank</th>
                      <th className="py-3 text-left">Player</th>
                      <th className="py-3 text-right">Score</th>
                      <th className="py-3 text-right">Reward</th>
                    </tr>
                  </thead>
                  <tbody>
                    {[
                      { rank: 1, name: "MemeKing", score: "125,430", reward: "5,000 BRAWL" },
                      { rank: 2, name: "CryptoSphere", score: "98,752", reward: "2,500 BRAWL" },
                      { rank: 3, name: "BullRunner", score: "87,621", reward: "1,000 BRAWL" },
                      { rank: 4, name: "LiquidatorX", score: "76,543", reward: "500 BRAWL" },
                      { rank: 5, name: "MoonBoi", score: "65,432", reward: "250 BRAWL" },
                    ].map((player, index) => (
                      <motion.tr
                        key={player.name}
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.3, delay: 0.1 * index }}
                        className="border-b border-gray-800"
                      >
                        <td className="py-3">
                          <span className={`inline-flex items-center justify-center w-6 h-6 rounded-full ${
                            player.rank === 1 ? 'bg-yellow-500' : 
                            player.rank === 2 ? 'bg-gray-400' : 
                            player.rank === 3 ? 'bg-amber-700' : 'bg-gray-800'
                          } text-xs font-bold`}>
                            {player.rank}
                          </span>
                        </td>
                        <td className="py-3 font-medium">{player.name}</td>
                        <td className="py-3 text-right">{player.score}</td>
                        <td className="py-3 text-right text-[var(--primary-purple)]">{player.reward}</td>
                      </motion.tr>
                    ))}
                  </tbody>
                </table>
              </div>
              
              <div className="mt-6 text-center">
                <motion.a
                  href="#"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="btn btn-secondary"
                >
                  View Full Leaderboard
                </motion.a>
              </div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="card"
            >
              <h3 className="text-2xl font-bold mb-6 neon-green">All-Time Champions</h3>
              
              <div className="space-y-6">
                <div className="relative">
                  <div className="flex items-center">
                    <div className="flex-shrink-0 w-16 h-16 rounded-full bg-yellow-500 flex items-center justify-center mr-4 text-2xl font-bold">1</div>
                    <div>
                      <h4 className="text-xl font-bold">GigaChad</h4>
                      <p className="text-gray-400">Total Score: 1,245,678</p>
                    </div>
                    <div className="ml-auto">
                      <span className="text-[var(--primary-green)] font-bold">Legendary</span>
                    </div>
                  </div>
                  <div className="mt-2 bg-gray-800 h-2 rounded-full">
                    <div className="bg-yellow-500 h-full rounded-full" style={{ width: '100%' }}></div>
                  </div>
                </div>
                
                <div className="relative">
                  <div className="flex items-center">
                    <div className="flex-shrink-0 w-16 h-16 rounded-full bg-gray-400 flex items-center justify-center mr-4 text-2xl font-bold">2</div>
                    <div>
                      <h4 className="text-xl font-bold">TokenWhale</h4>
                      <p className="text-gray-400">Total Score: 987,654</p>
                    </div>
                    <div className="ml-auto">
                      <span className="text-purple-400 font-bold">Epic</span>
                    </div>
                  </div>
                  <div className="mt-2 bg-gray-800 h-2 rounded-full">
                    <div className="bg-gray-400 h-full rounded-full" style={{ width: '80%' }}></div>
                  </div>
                </div>
                
                <div className="relative">
                  <div className="flex items-center">
                    <div className="flex-shrink-0 w-16 h-16 rounded-full bg-amber-700 flex items-center justify-center mr-4 text-2xl font-bold">3</div>
                    <div>
                      <h4 className="text-xl font-bold">DiamondHands</h4>
                      <p className="text-gray-400">Total Score: 876,543</p>
                    </div>
                    <div className="ml-auto">
                      <span className="text-indigo-400 font-bold">Rare</span>
                    </div>
                  </div>
                  <div className="mt-2 bg-gray-800 h-2 rounded-full">
                    <div className="bg-amber-700 h-full rounded-full" style={{ width: '70%' }}></div>
                  </div>
                </div>
              </div>
              
              <div className="mt-6 text-center">
                <motion.a
                  href="#"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="btn btn-secondary"
                >
                  View Hall of Fame
                </motion.a>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Community Events */}
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
              <span className="gradient-text">Community Events</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Join our upcoming events and activities.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="card"
            >
              <div className="flex items-start">
                <div className="flex-shrink-0 w-16 h-16 rounded-md bg-[var(--primary-purple)] flex items-center justify-center mr-4">
                  <span className="text-2xl">🏆</span>
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2 neon-purple">Weekend Tournament</h3>
                  <p className="text-gray-300 mb-2">
                    Join our weekly tournament for a chance to win exclusive rewards and climb the leaderboard.
                  </p>
                  <div className="flex items-center text-sm text-gray-400">
                    <span className="mr-4">Every Saturday, 8PM UTC</span>
                    <span className="bg-[var(--primary-purple)] bg-opacity-20 text-[var(--primary-purple)] px-2 py-1 rounded">1,000 BRAWL Prize Pool</span>
                  </div>
                </div>
              </div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="card"
            >
              <div className="flex items-start">
                <div className="flex-shrink-0 w-16 h-16 rounded-md bg-[var(--primary-green)] flex items-center justify-center mr-4">
                  <span className="text-2xl">🎨</span>
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2 neon-green">Meme Contest</h3>
                  <p className="text-gray-300 mb-2">
                    Create and submit your best BRAWL3D-themed memes for a chance to have it featured in-game.
                  </p>
                  <div className="flex items-center text-sm text-gray-400">
                    <span className="mr-4">Submissions until June 15</span>
                    <span className="bg-[var(--primary-green)] bg-opacity-20 text-[var(--primary-green)] px-2 py-1 rounded">NFT Rewards</span>
                  </div>
                </div>
              </div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="card"
            >
              <div className="flex items-start">
                <div className="flex-shrink-0 w-16 h-16 rounded-md bg-[var(--primary-purple)] flex items-center justify-center mr-4">
                  <span className="text-2xl">🎮</span>
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2 neon-purple">Community Playtest</h3>
                  <p className="text-gray-300 mb-2">
                    Help test new features and provide feedback before they go live.
                  </p>
                  <div className="flex items-center text-sm text-gray-400">
                    <span className="mr-4">June 10, 7PM UTC</span>
                    <span className="bg-[var(--primary-purple)] bg-opacity-20 text-[var(--primary-purple)] px-2 py-1 rounded">Early Access</span>
                  </div>
                </div>
              </div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="card"
            >
              <div className="flex items-start">
                <div className="flex-shrink-0 w-16 h-16 rounded-md bg-[var(--primary-green)] flex items-center justify-center mr-4">
                  <span className="text-2xl">🎙️</span>
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2 neon-green">AMA Session</h3>
                  <p className="text-gray-300 mb-2">
                    Ask the team anything about BRAWL3D, upcoming features, and future plans.
                  </p>
                  <div className="flex items-center text-sm text-gray-400">
                    <span className="mr-4">June 20, 6PM UTC</span>
                    <span className="bg-[var(--primary-green)] bg-opacity-20 text-[var(--primary-green)] px-2 py-1 rounded">Discord Event</span>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* User-Generated Content */}
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
              <span className="gradient-text">Community Creations</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Check out these amazing creations from our community members.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {[1, 2, 3, 4, 5, 6].map((item, index) => (
              <motion.div
                key={item}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ y: -10, scale: 1.03 }}
                className="card overflow-hidden"
              >
                <div className="h-48 bg-gradient-to-br from-[var(--primary-purple)] to-[var(--primary-green)] rounded-md mb-4 flex items-center justify-center">
                  <span className="text-4xl">🎨</span>
                </div>
                <h3 className="text-xl font-bold mb-1 neon-purple">Community Artwork #{item}</h3>
                <p className="text-gray-400 mb-2">by BRAWL3D Fan</p>
                <p className="text-gray-300">
                  Amazing fan creation showcasing the BRAWL3D universe.
                </p>
              </motion.div>
            ))}
          </div>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="mt-12 text-center"
          >
            <motion.a
              href="#"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="btn btn-primary"
            >
              Submit Your Creation
            </motion.a>
          </motion.div>
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
              <span className="neon-purple">Join the</span> <span className="neon-green">BRAWL</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
              Become part of our growing community and help shape the future of BRAWL3D.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <motion.a
                href="#"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="btn btn-primary"
              >
                Join Discord <ArrowRight className="inline ml-2" size={18} />
              </motion.a>
              <motion.a
                href="#"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="btn btn-secondary"
              >
                Follow on Twitter
              </motion.a>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Community;
