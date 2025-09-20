'use client'

import { Mail, MessageCircle, Clock } from 'lucide-react'
import { useForm, ValidationError } from '@formspree/react'
import Footer from '@/components/Footer'

export default function Contact() {
  const [state, handleSubmit] = useForm("YOUR FORM ID")

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      <div className="px-4 sm:px-6 lg:px-8 py-20">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h1 className="text-4xl lg:text-5xl font-bold text-white mb-4">Let&apos;s Work Together</h1>
          </div>

          <div className="grid lg:grid-cols-1 xl:grid-cols-2 gap-12">
            <div className="space-y-6">
              <div className="bg-slate-800/50 rounded-xl p-6 border border-slate-700 neon-glow">
                <h2 className="text-2xl font-semibold text-white mb-6">Get In Touch</h2>
                <div className="space-y-4">
                  <div className="flex items-center space-x-4">
                    <div className="p-2 bg-blue-600/20 rounded-lg">
                      <Mail className="w-5 h-5 text-blue-400" />
                    </div>
                    <div>
                      <div className="text-sm text-gray-400">Email</div>
                      <div className="text-white">m1nem.dev@proton.me</div>
                    </div>
                  </div>
                  <div className="flex items-center space-x-4">
                    <div className="p-2 bg-indigo-600/20 rounded-lg">
                      <MessageCircle className="w-5 h-5 text-indigo-400" />
                    </div>
                    <div>
                      <div className="text-sm text-gray-400">Discord</div>
                      <div className="text-white">m1nemx</div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-slate-800/50 rounded-xl p-6 border border-slate-700 neon-glow">
                <h2 className="text-2xl font-semibold text-white mb-4">Quick Response</h2>
                <div className="flex items-start space-x-3">
                  <div className="p-2 bg-green-600/20 rounded-lg">
                    <Clock className="w-5 h-5 text-green-400" />
                  </div>
                  <p className="text-gray-300">
                    I typically respond within 24 hours. Whether you need a website, Discord bot, or data scraper, I&apos;m here to help bring your ideas to life.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-slate-800/50 rounded-xl p-6 sm:p-8 border border-slate-700 neon-glow">
              <h2 className="text-2xl font-semibold text-white mb-6">Send a Message</h2>
              {state.succeeded ? (
                <p className="text-green-400 font-medium">Thanks! Your message has been sent 🚀</p>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-2">Name</label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      className="w-full px-4 py-3 bg-slate-700 border border-slate-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
                      required
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2">Email</label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      className="w-full px-4 py-3 bg-slate-700 border border-slate-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
                      required
                    />
                    <ValidationError prefix="Email" field="email" errors={state.errors} />
                  </div>
                  <div>
                    <label htmlFor="projectType" className="block text-sm font-medium text-gray-300 mb-2">Project Type</label>
                    <select
                      id="projectType"
                      name="projectType"
                      className="w-full px-4 py-3 bg-slate-700 border border-slate-600 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
                      required
                    >
                      <option value="">Select a service</option>
                      <option value="landing-website">Landing Website</option>
                      <option value="multi-page-website">Multi-page Website</option>
                      <option value="complex-website">Complex Website + API</option>
                      <option value="discord-bot">Discord Bot</option>
                      <option value="data-scraper">Data Scraper</option>
                      <option value="pc-build">PC Parts Picking</option>
                    </select>
                  </div>
                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-2">Message</label>
                    <textarea
                      id="message"
                      name="message"
                      rows={4}
                      className="w-full px-4 py-3 bg-slate-700 border border-slate-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
                      required
                    />
                    <ValidationError prefix="Message" field="message" errors={state.errors} />
                  </div>
                  <button
                    type="submit"
                    disabled={state.submitting}
                    className="w-full py-3 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-lg transition-colors disabled:opacity-50"
                  >
                    {state.submitting ? 'Sending...' : 'Send Message'}
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  )
}