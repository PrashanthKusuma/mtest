'use client'

import { useState } from 'react'
import Image from 'next/image'
import { motion } from 'framer-motion'

export default function Component() {
  const [activeIcon, setActiveIcon] = useState('home')

  return (
    <div className="flex flex-col h-[100dvh] bg-gray-100">
      {/* Top Navigation Bar */}
      <nav className="flex items-center justify-between px-6 h-[70px] bg-white shadow-md">
        <motion.button
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          className="text-gray-700 focus:outline-none"
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </motion.button>
        <motion.div
          initial={{ y: -20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="text-2xl font-bold text-gray-800"
        >
          Logo
        </motion.div>
        <motion.div
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          className="w-10 h-10 rounded-full bg-gray-300 overflow-hidden"
        >
          <Image
            src="/placeholder.svg?height=40&width=40"
            alt="Profile"
            width={40}
            height={40}
            className="w-full h-full object-cover"
          />
        </motion.div>
      </nav>

      {/* Main Content Area */}
      <main className="flex-1 overflow-y-auto p-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="bg-red-600 rounded-lg overflow-hidden shadow-lg"
        >
          <Image
            src="/placeholder.svg?height=400&width=400"
            alt="Red Nike sneaker"
            width={400}
            height={400}
            className="w-full h-auto object-cover"
          />
          <div className="flex items-center p-4 bg-white">
            <div className="w-10 h-10 rounded-full bg-gray-300 overflow-hidden mr-3">
              <Image
                src="/placeholder.svg?height=40&width=40"
                alt="Emily Wong"
                width={40}
                height={40}
                className="w-full h-full object-cover"
              />
            </div>
            <span className="font-semibold text-gray-800">Emily Wong</span>
          </div>
        </motion.div>
      </main>

      {/* Bottom Dock */}
      <div className="flex justify-around items-center py-3 bg-white border-t border-gray-200">
        {['home', 'message', 'users', 'bell'].map((icon) => (
          <motion.button
            key={icon}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            onClick={() => setActiveIcon(icon)}
            className={`focus:outline-none ${activeIcon === icon ? 'text-blue-500' : 'text-gray-600'}`}
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              {icon === 'home' && <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />}
              {icon === 'message' && <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z" />}
              {icon === 'users' && <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />}
              {icon === 'bell' && <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" />}
            </svg>
          </motion.button>
        ))}
      </div>
    </div>
  )
}