import { Code2, Zap, Database, Palette } from 'lucide-react'
import Footer from '@/components/Footer'

export default function Skills() {
  const skills = [
    { name: 'HTML', description: 'Semantic markup, accessibility', icon: <Code2 className="w-8 h-8" /> },
    { name: 'CSS', description: 'Tailwind CSS, animations', icon: <Palette className="w-8 h-8" /> },
    { name: 'JavaScript', description: 'ES6+, async/await', icon: <Code2 className="w-8 h-8" /> },
    { name: 'React', description: 'Hooks, context, Redux', icon: <Zap className="w-8 h-8" /> },
    { name: 'Next.js', description: 'App Router, SSR, SSG', icon: <Zap className="w-8 h-8" /> },
    { name: 'TypeScript', description: 'Type safety, interfaces', icon: <Code2 className="w-8 h-8" /> },
    { name: 'Python', description: 'discord.py, scripting', icon: <Code2 className="w-8 h-8" /> },
    { name: 'Databases', description: 'MySQL, PostgreSQL', icon: <Database className="w-8 h-8" /> }
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      <div className="px-4 sm:px-6 lg:px-8 py-20">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h1 className="text-4xl lg:text-5xl font-bold text-white mb-4">Technical Skills</h1>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {skills.map((skill, index) => (
              <div
                key={index}
                className="bg-slate-800/50 rounded-xl p-6 border border-slate-700 neon-glow cursor-pointer"
              >
                <div className="text-blue-400 mb-4 transition-colors">{skill.icon}</div>
                <h3 className="text-lg sm:text-xl font-semibold text-white mb-2">{skill.name}</h3>
                <p className="text-gray-400 text-sm">{skill.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
      <Footer />
    </div>
  )
}