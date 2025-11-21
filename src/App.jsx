import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Showcase from './components/Showcase'
import Features from './components/Features'
import CTA from './components/CTA'

function App() {
  return (
    <div className="min-h-screen bg-slate-950 text-slate-100">
      <Navbar />
      <Hero />
      <Showcase />
      <Features />
      <CTA />
      <footer className="py-10 text-center text-sm text-white/60">© 2025 Auralabs AI. All rights reserved.</footer>
    </div>
  )
}

export default App
