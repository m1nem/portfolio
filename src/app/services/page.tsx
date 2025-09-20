import { Globe, Layers, Settings, Bot, Bug, Cpu } from 'lucide-react'
import Footer from '@/components/Footer'

export default function Services() {
  const services = [
    { title: 'Landing Websites', description: 'Single-page websites with modern design', price: '$20-30', icon: <Globe className="w-8 h-8" /> },
    { title: 'Multi-page Websites', description: 'Complete websites with multiple sections', price: '$40-70', icon: <Layers className="w-8 h-8" /> },
    { title: 'Complex Websites + API', description: 'Advanced features and integrations', price: '$100+', icon: <Settings className="w-8 h-8" /> },
    { title: 'Discord Bots', description: 'Custom bots for your Discord server', price: '$25', icon: <Bot className="w-8 h-8" /> },
    { title: 'Data Scrapers', description: 'Automated data collection scripts', price: '$50', icon: <Bug className="w-8 h-8" /> },
    { title: 'PC Parts Picking', description: 'Custom PC build recommendations', price: '$10', icon: <Cpu className="w-8 h-8" /> }
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      <div className="px-4 sm:px-6 lg:px-8 py-20">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h1 className="text-4xl lg:text-5xl font-bold text-white mb-4">Services & Pricing</h1>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service, index) => (
              <div
                key={index}
                className="bg-slate-800/50 rounded-xl p-6 sm:p-8 border border-slate-700 neon-glow cursor-pointer"
              >
                <div className="text-blue-400 mb-6">{service.icon}</div>
                <h3 className="text-lg sm:text-xl font-semibold text-white mb-3">{service.title}</h3>
                <p className="text-gray-400 text-sm mb-6">{service.description}</p>
                <div className="text-2xl font-bold text-white">{service.price}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <Footer />
    </div>
  )
}