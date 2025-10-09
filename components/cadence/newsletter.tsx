'use client'

import { useState } from 'react'
import { Button } from '@/components/ui/button'
import { Mail } from 'lucide-react'

export function Newsletter() {
  const [email, setEmail] = useState('')
  const [zipCode, setZipCode] = useState('')

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log('Newsletter signup:', { email, zipCode })
    // Add newsletter signup logic here
  }

  return (
    <section className="py-20 bg-blue-900 text-white">
      <div className="container mx-auto px-4">
        <div className="max-w-2xl mx-auto text-center">
          <div className="inline-flex items-center justify-center w-20 h-20 bg-white/10 rounded-full mb-6">
            <Mail size={40} className="text-white" />
          </div>
          <h2 className="text-4xl font-bold mb-6">
            Sign Up for the Cadence Newsletter
          </h2>
          <p className="text-xl mb-8">
            Stay updated with the latest news, events, and offers from Cadence.
          </p>
          <form onSubmit={handleSubmit} className="space-y-4">
            <input
              type="email"
              placeholder="Email address"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="w-full px-6 py-4 rounded-lg text-gray-900 text-lg focus:outline-none focus:ring-2 focus:ring-white"
            />
            <input
              type="text"
              placeholder="Zip Code"
              value={zipCode}
              onChange={(e) => setZipCode(e.target.value)}
              className="w-full px-6 py-4 rounded-lg text-gray-900 text-lg focus:outline-none focus:ring-2 focus:ring-white"
            />
            <Button
              type="submit"
              size="lg"
              className="w-full bg-white text-blue-900 hover:bg-gray-100 text-lg py-6"
            >
              Subscribe
            </Button>
          </form>
        </div>
      </div>
    </section>
  )
}

