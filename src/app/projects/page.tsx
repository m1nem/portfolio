'use client'

import Image from 'next/image'
import Link from 'next/link'
import { Github } from 'lucide-react'
import { useState } from 'react'
import Footer from '@/components/Footer'

export default function Projects() {
  const [activeFilter, setActiveFilter] = useState('All Projects')

  const filters = ['All Projects', 'React', 'Next.js', 'Python', 'Discord', 'C#']

  const projects = [
    {
      title: 'Modern E-commerce Platform',
      description: 'Full-stack e-commerce solution with React and Next.js, featuring payment integration and admin dashboard.',
      image: '/images/ecommerce-preview.jpg',
      technologies: ['React', 'Next.js', 'Stripe'],
      githubUrl: 'https://github.com/m1nem/modern-ecommerce',
      category: 'React'
    },
    {
      title: 'Discord Moderation Bot',
      description: 'Advanced Discord bot with moderation features, custom commands, and database integration using discord.py.',
      image: '/images/discord-bot-preview.jpg',
      technologies: ['Python', 'discord.py', 'PostgreSQL'],
      githubUrl: 'https://github.com/m1nem/ModerationBot',
      category: 'Discord'
    },
    {
      title: 'SOON',
      description: 'Real-time task management application with drag-and-drop functionality and team collaboration features.',
      image: '/images/task-app-preview.jpg',
      technologies: ['React', 'Firebase', 'Material-UI'],
      githubUrl: 'https://github.com/m1nem/task-app',
      category: 'React'
    },
    {
      title: 'Data Scraping Webhook',
      description: 'Automated data extraction tool with real-time offers, multiple user agents, and discord webhook support.',
      image: '/images/scraping-tool-preview.jpg',
      technologies: ['Python', 'Discord'],
      githubUrl: 'https://github.com/m1nem/data-scraper-samsung',
      category: 'Python'
    },
    {
      title: 'Developer Portfolio',
      description: 'Modern portfolio website built with Next.js 15, featuring smooth animations and dark/light mode.',
      image: '/images/portfolio-preview.jpg',
      technologies: ['Next.js', 'TypeScript', 'Tailwind CSS'],
      githubUrl: 'https://github.com/m1nem/portfolio',
      category: 'Next.js'
    },
    {
      title: 'SOON',
      description: 'Feature-rich music player app playlist management, queue system, and audio controls.',
      image: '/images/music-bot-preview.jpg',
      technologies: ['C#', '.NET', 'Avalonia'],
      githubUrl: 'https://github.com/m1nem/music-player',
      category: 'C#'
    }
  ]

  const filteredProjects = activeFilter === 'All Projects'
    ? projects
    : projects.filter(project =>
        project.technologies.some(tech => tech.includes(activeFilter)) ||
        project.category === activeFilter
      )

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      <div className="px-4 sm:px-6 lg:px-8 py-20">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h1 className="text-4xl lg:text-5xl font-bold text-white mb-4">Featured Projects</h1>
            <p className="text-lg text-gray-400 max-w-2xl mx-auto">
              A showcase of my latest work spanning web development, Discord bots, and automation tools.
            </p>
          </div>

          <div className="flex flex-wrap justify-center gap-3 mb-12">
            {filters.map((filter) => (
              <button
                key={filter}
                onClick={() => setActiveFilter(filter)}
                className={`px-4 sm:px-6 py-2 rounded-full text-sm font-medium transition-all ${
                  activeFilter === filter
                    ? 'bg-blue-600 text-white'
                    : 'bg-slate-800 text-gray-300 hover:bg-slate-700'
                }`}
              >
                {filter}
              </button>
            ))}
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {filteredProjects.map((project, index) => (
              <div
                key={index}
                className="bg-slate-800/50 rounded-xl overflow-hidden border border-slate-700 neon-glow"
              >
                <div className="aspect-video bg-slate-700 overflow-hidden">
                  <Image
                    src={project.image}
                    alt={project.title}
                    width={400}
                    height={250}
                    className="w-full h-full object-cover"
                  />
                </div>

                <div className="p-4 sm:p-6">
                  <h3 className="text-lg sm:text-xl font-semibold text-white mb-2">{project.title}</h3>
                  <p className="text-gray-400 text-sm mb-4 line-clamp-3">{project.description}</p>

                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.technologies.map((tech, techIndex) => (
                      <span
                        key={techIndex}
                        className="px-3 py-1 bg-slate-700 text-gray-300 text-xs rounded-full"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  <Link
                    href={project.githubUrl}
                    className="inline-flex items-center space-x-2 text-blue-400 hover:text-blue-300 transition-colors"
                  >
                    <Github className="w-4 h-4" />
                    <span className="text-sm cursor-pointer">View Code</span>
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <Footer />
    </div>
  )
}