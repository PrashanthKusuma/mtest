"use client";
import { motion } from 'framer-motion'
import { Heart } from 'lucide-react'
import { useTheme } from 'next-themes'

export default function LoadingScreen() {
  const { theme, systemTheme } = useTheme()
  const currentTheme = theme === 'system' ? systemTheme : theme
  const isDark = currentTheme === 'dark'

  const heartColors = {
    light: {
      primary: 'text-pink-500',
      background: 'bg-white',
      shadow: 'rgba(236,72,153,0.8)',
      glow: [
        'rgba(236,72,153,0.3)',
        'rgba(236,72,153,0.5)',
        'rgba(236,72,153,0.7)',
        'rgba(236,72,153,0.5)',
        'rgba(236,72,153,0.3)'
      ]
    },
    dark: {
      primary: 'text-pink-400',
      background: 'bg-gray-900',
      shadow: 'rgba(244,114,182,0.8)',
      glow: [
        'rgba(244,114,182,0.3)',
        'rgba(244,114,182,0.5)',
        'rgba(244,114,182,0.7)',
        'rgba(244,114,182,0.5)',
        'rgba(244,114,182,0.3)'
      ]
    }
  }

  const colors = isDark ? heartColors.dark : heartColors.light

  return (
    <div className={`fixed inset-0 ${colors.background} flex flex-col items-center justify-center z-50`}>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-center"
      >
        <motion.div
        //   animate={{
        //     scale: [1, 1.1, 1],
        //     rotate: [0, 5, -5, 0],
        //   }}
        //   transition={{
        //     duration: 1.5,
        //     repeat: Infinity,
        //     repeatType: "reverse",
        //     ease: "easeInOut"
        //   }}
          className="relative mb-6 flex justify-center items-center bg-transparent"
        >
          <Heart 
            className={`w-24 h-24 ${colors.primary} filter drop-shadow-[0_0_10px_${colors.shadow}]`}
            strokeWidth={2}
          />
          {/* <motion.div
            className="absolute inset-0"
            animate={{
              boxShadow: colors.glow.map(color => `0 0 40px ${color}`),
            }}
            transition={{
              duration: 1.5,
              repeat: Infinity,
              repeatType: "reverse"
            }}
          /> */}
        </motion.div>
        
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
          className={`text-lg font-medium ${isDark ? 'text-gray-200' : 'text-gray-700'}`}
        >
          Loading...
        </motion.div>
        
        <motion.div 
          className="mt-4 flex space-x-2 justify-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
        >
          {[0, 1, 2].map((dot) => (
            <motion.div
              key={dot}
              className={`w-2 h-2 rounded-full ${colors.primary}`}
              animate={{ scale: [1, 1.5, 1] }}
              transition={{
                duration: 0.6,
                repeat: Infinity,
                repeatType: "reverse",
                delay: dot * 0.2
              }}
            />
          ))}
        </motion.div>
      </motion.div>
    </div>
  );
}