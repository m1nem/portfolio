import Image from 'next/image'
import Footer from '@/components/Footer'

export default function About() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      <div className="px-4 sm:px-6 lg:px-8 py-20">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16">
            <h1 className="text-4xl lg:text-5xl font-bold text-white mb-4">
              About Me
            </h1>
          </div>

          {/* Content Grid */}
          <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
            {/* Text Content */}
            <div className="bg-slate-800/50 rounded-2xl p-8 border border-slate-700 neon-glow">
              <p className="text-gray-300 leading-relaxed">
                Hey! name&apos;s <span className="text-white font-semibold">m1nem</span>. I&apos;m a teenager trying
                to raise some college funds. I build
                websites, work with databases, and
                create simple graphics. This portfolio
                showcases my projects and how I break
                down code like a pro.
              </p>
            </div>

            {/* Setup Photo */}
            <div className="relative">
              <div className="bg-slate-800/50 rounded-2xl p-6 border border-slate-700 neon-glow">
                <div className="aspect-video bg-slate-700 rounded-xl overflow-hidden">
                  <Image
                    src="/images/setup-photo.jpg"
                    alt="m1nem's coding setup"
                    width={600}
                    height={400}
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </div>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 gap-8 max-w-lg mx-auto">
            <div className="text-center">
              <div className="text-4xl font-bold text-white mb-2">18</div>
              <div className="text-gray-400">Years Old</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-white mb-2">College</div>
              <div className="text-gray-400">Fund Goal</div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  )
}