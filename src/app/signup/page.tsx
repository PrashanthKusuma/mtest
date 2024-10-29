'use client'

import { useState } from 'react'
import RegisterStep1 from './register-step1'
import RegisterStep2 from './register-step2'
import { motion } from 'framer-motion'

export default function Register() {
  const [step, setStep] = useState(1)
  const [error, setError] = useState<string | null>(null)
  const [formData, setFormData] = useState({
    email: '',
    password: '',
    name: '',
    birthdate: '',
    gender: '',
    interests: [] as string[],
    bio: ''
  })

  const handleStep1Submit = (data: { email: string; password: string }) => {
    try {
      setFormData(prev => ({ ...prev, ...data }))
      setStep(2)
      setError(null)
    } catch (err) {
      setError('An error occurred during step 1. Please try again.')
      console.error(err)
    }
  }

  const handleStep2Submit = (data: { name: string; birthdate: string; gender: string; interests: string[]; bio: string }) => {
    try {
      const completeFormData = { ...formData, ...data }
      // Here you would typically send the complete formData to your backend
      console.log('Registration completed with data:', completeFormData)
      setError(null)
      // Redirect or show success message
    } catch (err) {
      setError('An error occurred during registration. Please try again.')
      console.error(err)
    }
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-pink-50 to-purple-50 flex flex-col justify-center p-4 sm:py-12 sm:px-6 lg:px-8">
      {error && (
        <motion.div
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-4 p-4 bg-red-100 border border-red-400 text-red-700 rounded"
        >
          {error}
        </motion.div>
      )}
      {step === 1 ? (
        <RegisterStep1 onSubmit={handleStep1Submit} />
      ) : (
        <RegisterStep2 setStep={setStep} onSubmit={handleStep2Submit} />
      )}
    </div>
  )
}