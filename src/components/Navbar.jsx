import { useState, useEffect } from 'react'
import { Menu, X } from 'lucide-react'

export default function Navbar() {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 4)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all ${scrolled ? 'backdrop-blur-md bg-slate-900/60 border-b border-white/10' : 'bg-transparent'}`}>
      <nav className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="w-8 h-8 rounded-full bg-gradient-to-tr from-purple-500 via-blue-500 to-orange-400 shadow-lg shadow-purple-500/20" />
          <span className="text-white font-semibold tracking-tight">Auralabs AI</span>
        </div>

        <div className="hidden md:flex items-center gap-8 text-sm text-slate-300">
          <a href="#features" className="hover:text-white transition">Features</a>
          <a href="#solutions" className="hover:text-white transition">Solutions</a>
          <a href="#pricing" className="hover:text-white transition">Pricing</a>
          <a href="#contact" className="hover:text-white transition">Contact</a>
          <a href="#" className="px-4 py-2 rounded-full bg-white/10 hover:bg-white/20 text-white border border-white/10 transition">Sign in</a>
        </div>

        <button className="md:hidden text-white" onClick={() => setOpen(v => !v)} aria-label="Toggle menu">
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>
      </nav>

      {open && (
        <div className="md:hidden px-6 pb-6 space-y-2 text-slate-200">
          <a href="#features" className="block py-2">Features</a>
          <a href="#solutions" className="block py-2">Solutions</a>
          <a href="#pricing" className="block py-2">Pricing</a>
          <a href="#contact" className="block py-2">Contact</a>
          <a href="#" className="inline-block mt-2 px-4 py-2 rounded-full bg-white/10 text-white border border-white/10">Sign in</a>
        </div>
      )}
    </header>
  )
}
