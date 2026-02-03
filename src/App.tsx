import { useState, useEffect } from 'react'
import {
  Facebook,
  Instagram,
  Youtube,
  Mail,
  Globe,
  MessageCircle,
  Github,
  Send
} from 'lucide-react'

interface SocialLink {
  name: string
  icon: React.ReactNode
  url: string
  gradient: string
}

function App() {
  const [isVisible, setIsVisible] = useState(false)
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })

  useEffect(() => {
    setIsVisible(true)

    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY })
    }

    window.addEventListener('mousemove', handleMouseMove)
    return () => window.removeEventListener('mousemove', handleMouseMove)
  }, [])

  const socialLinks: SocialLink[] = [
    {
      name: 'Facebook',
      icon: <Facebook className="w-6 h-6" />,
      url: 'https://facebook.com/dzbuild',
      gradient: 'from-yellow-400 to-yellow-500'
    },
    {
      name: 'Instagram',
      icon: <Instagram className="w-6 h-6" />,
      url: 'https://instagram.com/dz_build',
      gradient: 'from-yellow-500 to-amber-500'
    },
    {
      name: 'YouTube',
      icon: <Youtube className="w-6 h-6" />,
      url: 'https://www.youtube.com/@DZBuild-off',
      gradient: 'from-yellow-500 to-amber-600'
    },
    {
      name: 'GitHub',
      icon: <Github className="w-6 h-6" />,
      url: 'https://github.com/DZBuild-com',
      gradient: 'from-yellow-400 to-amber-400'
    },
    {
      name: 'WhatsApp',
      icon: <MessageCircle className="w-6 h-6" />,
      url: 'https://wa.me/213782729944',
      gradient: 'from-yellow-500 to-yellow-600'
    },
    {
      name: 'Telegram',
      icon: <Send className="w-6 h-6" />,
      url: 'https://t.me/dzbuild',
      gradient: 'from-amber-400 to-yellow-500'
    },
    {
      name: 'Email',
      icon: <Mail className="w-6 h-6" />,
      url: 'mailto:support@dzbuild.com',
      gradient: 'from-yellow-400 to-amber-500'
    },
    {
      name: 'Website',
      icon: <Globe className="w-6 h-6" />,
      url: 'https://dzbuild.com',
      gradient: 'from-amber-500 to-yellow-600'
    }
  ]

  return (
    <main className="min-h-screen bg-black relative overflow-hidden">
      <div
        className="absolute inset-0 opacity-20"
        style={{
          background: `radial-gradient(circle at ${mousePosition.x}px ${mousePosition.y}px, rgba(234, 179, 8, 0.3), transparent 50%)`
        }}
      />

      <div className="absolute inset-0 overflow-hidden pointer-events-none" aria-hidden="true">
        <div className="absolute top-20 left-10 w-72 h-72 bg-yellow-500/10 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-amber-500/10 rounded-full blur-3xl animate-pulse delay-1000" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-yellow-600/5 rounded-full blur-2xl animate-pulse delay-500" />
      </div>

      <div className="absolute inset-0 bg-[linear-gradient(rgba(234,179,8,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(234,179,8,0.03)_1px,transparent_1px)] bg-[size:50px_50px] [mask-image:radial-gradient(ellipse_80%_80%_at_50%_50%,black,transparent)]" aria-hidden="true" />

      <div className="relative z-10 container mx-auto px-4 py-16 md:py-24">
        <article className={`max-w-4xl mx-auto transition-all duration-1000 transform ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <header className="text-center mb-16 space-y-6">
            <div className="inline-block">
              <a
                href="https://dzbuild.com"
                target="_blank"
                rel="noopener noreferrer"
                className="block"
                aria-label="Visit DZBuild homepage"
              >
                <div className="relative group">
                  <div className="absolute inset-0 blur-3xl opacity-60 bg-gradient-to-r from-yellow-400 to-amber-500 -z-10 group-hover:opacity-80 transition-opacity duration-500" aria-hidden="true" />
                  <img
                    src="/dzb_uhq.png"
                    alt="DZBuild - Your Gateway to Digital Commerce"
                    className="w-48 h-48 md:w-64 md:h-64 mx-auto object-contain drop-shadow-2xl transform transition-transform duration-500 hover:scale-105 cursor-pointer"
                    width="256"
                    height="256"
                  />
                </div>
              </a>
            </div>

            <h1 className="text-white text-xl md:text-2xl font-light tracking-wide">
              Your Gateway to Digital Commerce
            </h1>

            <div className="flex items-center justify-center gap-2 text-yellow-400/70" aria-hidden="true">
              <div className="h-px w-12 bg-gradient-to-r from-transparent to-yellow-400" />
              <span className="text-sm uppercase tracking-widest">Connect With Us</span>
              <div className="h-px w-12 bg-gradient-to-l from-transparent to-yellow-400" />
            </div>
          </header>

          <nav aria-label="Social media links">
            <h2 className="sr-only">Connect with DZBuild on Social Media</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
              {socialLinks.map((link, index) => (
                <a
                  key={link.name}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group relative"
                  aria-label={`Connect with DZBuild on ${link.name}`}
                  style={{
                    animationDelay: `${index * 100}ms`
                  }}
                >
                  <div className={`
                    relative overflow-hidden
                    bg-gradient-to-br from-gray-900 to-black
                    border border-yellow-500/20
                    rounded-2xl p-6
                    transition-all duration-500 ease-out
                    hover:border-yellow-500/60
                    hover:shadow-[0_0_30px_rgba(234,179,8,0.3)]
                    hover:-translate-y-2
                    backdrop-blur-sm
                    transform-gpu
                    ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}
                  `}>
                    <div className={`
                      absolute inset-0 bg-gradient-to-br ${link.gradient}
                      opacity-0 group-hover:opacity-10
                      transition-opacity duration-500
                    `} aria-hidden="true" />

                    <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" aria-hidden="true">
                      <div className={`absolute inset-0 rounded-2xl bg-gradient-to-r ${link.gradient} blur-xl opacity-50`} />
                    </div>

                    <div className="relative flex items-center gap-4">
                      <div className={`
                        flex items-center justify-center
                        w-14 h-14 rounded-xl
                        bg-gradient-to-br ${link.gradient}
                        shadow-lg
                        transform transition-transform duration-500
                        group-hover:scale-110 group-hover:rotate-6
                      `} aria-hidden="true">
                        <div className="text-black">
                          {link.icon}
                        </div>
                      </div>

                      <div className="flex-1">
                        <h3 className="text-white font-semibold text-lg group-hover:text-yellow-400 transition-colors duration-300">
                          {link.name}
                        </h3>
                        <p className="text-gray-400 text-sm group-hover:text-gray-300 transition-colors duration-300">
                          Connect now
                        </p>
                      </div>

                      <div className="transform transition-transform duration-300 group-hover:translate-x-1" aria-hidden="true">
                        <svg className="w-5 h-5 text-yellow-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                        </svg>
                      </div>
                    </div>

                    <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-700" aria-hidden="true">
                      <div className="absolute inset-0 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000 bg-gradient-to-r from-transparent via-white/10 to-transparent skew-x-12" />
                    </div>
                  </div>
                </a>
              ))}
            </div>
          </nav>

          <footer className="mt-16 text-center space-y-4">
            <div className="flex items-center justify-center gap-3">
              <div className="h-px w-16 bg-gradient-to-r from-transparent via-yellow-500/50 to-transparent" aria-hidden="true" />
              <p className="text-gray-500 text-sm">
                Powered by <span className="text-yellow-500 font-semibold">dzbuild</span>
              </p>
              <div className="h-px w-16 bg-gradient-to-r from-transparent via-yellow-500/50 to-transparent" aria-hidden="true" />
            </div>

            <p className="text-gray-600 text-xs">
              Building the future of e-commerce
            </p>
          </footer>
        </article>
      </div>
    </main>
  )
}

export default App;
