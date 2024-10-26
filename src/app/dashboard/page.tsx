// "use client";
// import React from "react";
// import SwipeCards from "../../components/SwipeCards";
// import matches from "./matches";

// export default function Main() {
//   return (
//     <div className="flex justify-center items-center w-screen h-[100dvh]">
//       <div className="fixed top-0 flex w-full h-[70px] bg-gray-500"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" width="30" height="30"><path d="M0 96C0 78.3 14.3 64 32 64l384 0c17.7 0 32 14.3 32 32s-14.3 32-32 32L32 128C14.3 128 0 113.7 0 96zM0 256c0-17.7 14.3-32 32-32l384 0c17.7 0 32 14.3 32 32s-14.3 32-32 32L32 288c-17.7 0-32-14.3-32-32zM448 416c0 17.7-14.3 32-32 32L32 448c-17.7 0-32-14.3-32-32s14.3-32 32-32l384 0c17.7 0 32 14.3 32 32z"/></svg></div>

//       <div className="flex justify-center items-center h-[85%] w-full p-4">
//         <SwipeCards matches={matches} />
//       </div>

//       <div className="fixed bottom-0 flex w-full h-[60px] bg-gray-500 rounded-t-2xl"></div>
//     </div>
//   );
// }

'use client'

import { useState } from 'react'
import Image from 'next/image'
import { motion } from 'framer-motion'
import SwipeCards from '@/components/SwipeCards'
import matches from './matches'

export default function Component() {
  const [activeIcon, setActiveIcon] = useState('explore')

  const icons = {
    explore: (
      <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
        <path fillRule="evenodd" d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z" clipRule="evenodd" />
      </svg>
    ),
    matches: (
      <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
        <path d="M9.653 16.915l-.005-.003-.019-.01a20.759 20.759 0 01-1.162-.682 22.045 22.045 0 01-2.582-1.9C4.045 12.733 2 10.352 2 7.5a4.5 4.5 0 018-2.828A4.5 4.5 0 0118 7.5c0 2.852-2.044 5.233-3.885 6.82a22.049 22.049 0 01-3.744 2.582l-.019.01-.005.003h-.002a.739.739 0 01-.69.001l-.002-.001z" />
      </svg>
    ),
    chat: (
      <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
        <path fillRule="evenodd" d="M18 10c0 3.866-3.582 7-8 7a8.841 8.841 0 01-4.083-.98L2 17l1.338-3.123C2.493 12.767 2 11.434 2 10c0-3.866 3.582-7 8-7s8 3.134 8 7zM7 9H5v2h2V9zm8 0h-2v2h2V9zM9 9h2v2H9V9z" clipRule="evenodd" />
      </svg>
    ),
    profile: (
      <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
        <path fillRule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clipRule="evenodd" />
      </svg>
    ),
  }

  return (
    <div className="flex flex-col h-screen bg-gradient-to-b from-pink-50 to-purple-50">
      {/* Top Navigation Bar */}
      <nav className="flex items-center justify-between px-6 h-16 bg-white shadow-sm">
        <motion.div
          initial={{ y: -20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="text-2xl font-bold bg-gradient-to-r from-pink-500 to-purple-500 text-transparent bg-clip-text"
        >
          Dashing
        </motion.div>
        <div className="flex items-center space-x-4">
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="text-gray-600 focus:outline-none"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" />
            </svg>
          </motion.button>
          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="relative"
          >
            <Image
              src="/profile-picture.jpeg"
              alt="Profile"
              width={40}
              height={40}
              className="w-10 h-10 rounded-full object-cover border-2 border-pink-500"
            />
            <div className="absolute top-0 right-0 w-3 h-3 bg-green-500 rounded-full border-2 border-white"></div>
          </motion.div>
        </div>
      </nav>

      {/* Main Content Area */}
      <main className="flex-1 overflow-y-auto p-6">
      <div className="flex justify-center items-center h-[85%] w-full p-4">
         <SwipeCards matches={matches} />
       </div>
      </main>

      {/* Bottom Dock */}
      <div className="fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 px-6 py-2">
        <div className="max-w-md mx-auto">
          <div className="flex justify-around items-center">
            {Object.entries(icons).map(([name, icon]) => (
              <motion.button
                key={name}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                onClick={() => setActiveIcon(name)}
                className={`focus:outline-none p-3 rounded-full ${
                  activeIcon === name
                    ? 'text-white bg-gradient-to-r from-pink-500 to-purple-500'
                    : 'text-gray-500 hover:bg-gray-100'
                }`}
              >
                {icon}
              </motion.button>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}