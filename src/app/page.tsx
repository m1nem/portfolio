'use client'

import Link from 'next/link'
import { Code2, Bot, Palette, Database } from 'lucide-react'
import Footer from '@/components/Footer'
import { useState, useEffect } from 'react'

export default function Home() {
  const [rotatingText, setRotatingText] = useState('responsive UIs')

  const texts = [
    'responsive UIs',
    'modern web apps',
    'simple python bots',
    'data scrapers',
    'discord bots'
  ]

  const sleep = (ms: number) => new Promise(resolve => setTimeout(resolve, ms))

  const typeWriter = async (text: string) => {
    for (let i = 0; i <= text.length; i++) {
      setRotatingText(text.slice(0, i))
      await sleep(80)
    }
  }

  const deleteWriter = async (text: string) => {
    for (let i = text.length; i >= 0; i--) {
      setRotatingText(text.slice(0, i))
      await sleep(50)
    }
  }

  useEffect(() => {
    let currentIndex = 0
    let isMounted = true

    const rotateText = async () => {
      while (isMounted) {
        const text = texts[currentIndex]
        await typeWriter(text)
        await sleep(1000)
        await deleteWriter(text)
        await sleep(500)
        currentIndex = (currentIndex + 1) % texts.length
      }
    }

    rotateText()

    return () => { isMounted = false }
  }, [])

  const services = [
    {
      title: 'Full Stack Development',
      description: 'React, Next.js, TypeScript, Python',
      icon: <Code2 className="w-8 h-8" />
    },
    {
      title: 'Discord Bots',
      description: 'discord.py, API integrations',
      icon: <Bot className="w-8 h-8" />
    },
    {
      title: 'UI/UX Design',
      description: 'Responsive, modern interfaces',
      icon: <Palette className="w-8 h-8" />
    },
    {
      title: 'Database Management',
      description: 'MySQL, PostgreSQL, data scraping',
      icon: <Database className="w-8 h-8" />
    }
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      <section className="relative px-4 sm:px-6 lg:px-8 py-20">
        <div className="mt-16 max-w-7xl mx-auto">
          <div className="flex flex-col lg:grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
            {/* Lewa – tekst */}
            <div className="w-full space-y-6 lg:space-y-8">
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white leading-tight break-words">
                I turn coffee into
                <span className="text-blue-400 inline-block ml-2 min-w-[18ch] whitespace-nowrap">
                  {rotatingText}
                  <span className="animate-pulse text-blue-400">|</span>
                </span>
              </h1>

              <p className="text-sm sm:text-base lg:text-lg text-gray-300 max-w-xl">
                Teen developer building modern web apps, Discord bots, and data scrapers to fund my college journey.
              </p>

              <Link
                href="/projects"
                className="inline-block bg-slate-800/50 rounded-xl px-5 py-3 border border-slate-700 neon-glow cursor-pointer text-white hover:text-blue-400 transition"
              >
                Explore My Work
              </Link>
            </div>

            {/* Prawa – karty */}
            <div className="w-full grid grid-cols-1 sm:grid-cols-2 gap-4 lg:gap-6">
              {services.map((service, index) => (
                <div
                  key={index}
                  className="bg-slate-800/50 rounded-xl p-5 border border-slate-700 neon-glow cursor-pointer"
                >
                  <div className="text-blue-400 mb-3">{service.icon}</div>
                  <h3 className="text-base sm:text-lg font-semibold text-white mb-1">
                    {service.title}
                  </h3>
                  <p className="text-gray-400 text-xs sm:text-sm">
                    {service.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
