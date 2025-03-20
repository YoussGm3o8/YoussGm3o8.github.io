"use client";

import { motion } from 'framer-motion';
import { FaDiscord, FaArrowLeft, FaServer, FaGamepad, FaDragon, FaDungeon, FaStore, FaCode, FaCalendarAlt } from 'react-icons/fa';
import Image from 'next/image';
import Link from 'next/link';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

export default function RoyalKingdomsProject() {
  return (
    <>
      <Navbar />
      <main className="pt-20 bg-background min-h-screen">
        <div className="container-custom mx-auto py-12">
          <Link href="/projects" className="flex items-center text-accent hover:text-opacity-80 mb-8">
            <FaArrowLeft className="mr-2" /> Back to Projects
          </Link>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <div className="flex items-center">
              <h1 className="text-3xl md:text-4xl font-bold mb-4">🏰 ROYAL KINGDOMS 🏰</h1>
              <div className="bg-accent/20 text-accent px-3 py-1 rounded-full ml-4 text-sm font-medium">
                Coming Summer 2025
              </div>
            </div>
            <div className="h-1 w-20 bg-accent mb-8"></div>
            
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
              <div className="lg:col-span-2">
                <div className="relative aspect-video rounded-xl overflow-hidden mb-8 bg-secondary">
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="text-center">
                      <FaGamepad className="text-4xl mx-auto mb-4 text-accent" />
                      <h3 className="text-xl font-bold">Royal Kingdoms</h3>
                      <p className="text-gray-400">Image Coming Soon</p>
                    </div>
                  </div>
                </div>
                
                <div className="mb-8">
                  <h2 className="text-2xl font-bold mb-4">⚔️ DOMINATE. CONQUER. RULE. ⚔️</h2>
                  <p className="text-gray-300 mb-6">
                    Welcome to <strong className="text-accent">Royal Kingdoms</strong> - where legends are born and empires rise! 
                    Our revolutionary Minecraft Pocket Edition factions experience offers gameplay like never before, 
                    powered by our custom Nukkit Java implementation for maximum performance and endless possibilities.
                  </p>
                </div>
                
                <div className="mb-8">
                  <h2 className="text-2xl font-bold mb-4">✨ FEATURES</h2>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="bg-secondary p-6 rounded-xl">
                      <div className="flex items-center mb-3">
                        <FaServer className="text-accent mr-3" />
                        <h3 className="font-semibold text-lg">CUSTOM FACTIONS CORE</h3>
                      </div>
                      <p className="text-gray-400">Built from the ground up for balanced, strategic gameplay</p>
                    </div>
                    
                    <div className="bg-secondary p-6 rounded-xl">
                      <div className="flex items-center mb-3">
                        <FaDragon className="text-accent mr-3" />
                        <h3 className="font-semibold text-lg">RIDEABLE DRAGONS</h3>
                      </div>
                      <p className="text-gray-400">Dominate the skies with powerful, customizable dragon companions</p>
                    </div>
                    
                    <div className="bg-secondary p-6 rounded-xl">
                      <div className="flex items-center mb-3">
                        <FaDungeon className="text-accent mr-3" />
                        <h3 className="font-semibold text-lg">DYNAMIC AI DUNGEONS</h3>
                      </div>
                      <p className="text-gray-400">Battle intelligent enemies in procedurally generated mob dungeons</p>
                    </div>
                    
                    <div className="bg-secondary p-6 rounded-xl">
                      <div className="flex items-center mb-3">
                        <FaStore className="text-accent mr-3" />
                        <h3 className="font-semibold text-lg">PLAYER MARKETPLACE</h3>
                      </div>
                      <p className="text-gray-400">Create shops, trade rare items, and build your economic empire</p>
                    </div>
                    
                    <div className="bg-secondary p-6 rounded-xl">
                      <div className="flex items-center mb-3">
                        <FaCode className="text-accent mr-3" />
                        <h3 className="font-semibold text-lg">EXCLUSIVE PLUGINS</h3>
                      </div>
                      <p className="text-gray-400">Experience mechanics and features available nowhere else</p>
                    </div>
                    
                    <div className="bg-secondary p-6 rounded-xl">
                      <div className="flex items-center mb-3">
                        <FaServer className="text-accent mr-3" />
                        <h3 className="font-semibold text-lg">HIGH-PERFORMANCE</h3>
                      </div>
                      <p className="text-gray-400">Runs on Nukkit with Java for superior stability and scale</p>
                    </div>
                  </div>
                </div>
                
                <div className="mb-8">
                  <h2 className="text-2xl font-bold mb-4">⭐ AND SO MUCH MORE!</h2>
                  <ul className="list-disc list-inside grid grid-cols-1 md:grid-cols-2 gap-3 text-gray-300">
                    <li>Seasonal rewards</li>
                    <li>Active staff team</li>
                    <li>Regular events</li>
                    <li>Constant updates</li>
                  </ul>
                </div>
              </div>
              
              <div className="lg:col-span-1">
                <div className="bg-secondary rounded-xl p-6 mb-6">
                  <h3 className="font-bold text-xl mb-4">🔥 JOIN THE KINGDOM 🔥</h3>
                  <ul className="space-y-4">
                    <li className="flex items-start">
                      <FaCalendarAlt className="text-accent mt-1 mr-3" />
                      <div>
                        <span className="font-medium">Release Date</span>
                        <p className="text-gray-400">Summer 2025</p>
                      </div>
                    </li>
                    <li className="flex items-start">
                      <FaDiscord className="text-accent mt-1 mr-3" />
                      <div>
                        <span className="font-medium">Discord</span>
                        <p className="text-gray-400">
                          <a 
                            href="https://discord.gg/kMS63eGWmF"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-accent hover:underline"
                          >
                            discord.gg/kMS63eGWmF
                          </a>
                        </p>
                      </div>
                    </li>
                    <li className="flex items-start">
                      <FaServer className="text-accent mt-1 mr-3" />
                      <div>
                        <span className="font-medium">Server Address</span>
                        <p className="text-gray-400">roki.minecraft.pe</p>
                      </div>
                    </li>
                    <li className="flex items-start">
                      <FaServer className="text-accent mt-1 mr-3" />
                      <div>
                        <span className="font-medium">Port</span>
                        <p className="text-gray-400">25620</p>
                      </div>
                    </li>
                  </ul>
                </div>
                
                <div className="bg-secondary rounded-xl p-6">
                  <h3 className="font-bold text-xl mb-4">Technologies</h3>
                  <div className="flex flex-wrap gap-2">
                    <span className="px-3 py-1 bg-background rounded-full text-sm">Java</span>
                    <span className="px-3 py-1 bg-background rounded-full text-sm">Nukkit</span>
                    <span className="px-3 py-1 bg-background rounded-full text-sm">Custom Plugins</span>
                    <span className="px-3 py-1 bg-background rounded-full text-sm">Minecraft PE</span>
                    <span className="px-3 py-1 bg-background rounded-full text-sm">Server Development</span>
                  </div>
                </div>
                
                <div className="mt-6">
                  <a 
                    href="https://discord.gg/kMS63eGWmF"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full btn-accent flex items-center justify-center"
                  >
                    <FaDiscord className="mr-2" /> Join Discord
                  </a>
                </div>
              </div>
            </div>
            
            <div className="border-t border-gray-800 pt-8">
              <p className="text-gray-400 italic text-center">
                Prepare your strategies, gather your allies, and sharpen your weapons... 
                the battle for Royal Kingdoms is coming.
              </p>
            </div>
          </motion.div>
        </div>
      </main>
      <Footer />
    </>
  );
} 