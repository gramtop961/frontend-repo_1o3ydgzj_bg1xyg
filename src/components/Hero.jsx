import Spline from '@splinetool/react-spline'
import { motion } from 'framer-motion'

export default function Hero() {
  return (
    <section className="relative min-h-[90vh] flex items-center overflow-hidden">
      {/* Background gradient aura */}
      <div className="absolute inset-0">
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(168,85,247,0.15),transparent_60%)]" />
        <div className="pointer-events-none absolute -top-40 left-1/2 -translate-x-1/2 w-[1200px] h-[1200px] rounded-full blur-3xl opacity-60" style={{background:'conic-gradient(from 90deg at 50% 50%, rgba(168,85,247,0.25), rgba(59,130,246,0.25), rgba(251,146,60,0.25), rgba(168,85,247,0.25))'}} />
      </div>

      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/4cHQr84zOGAHOehh/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-10 py-28">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.4 }} transition={{ duration: 0.8 }}>
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 border border-white/10 text-xs text-white/80 mb-6">
            <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" /> Live AI Voice Agents
          </div>
          <h1 className="text-4xl sm:text-6xl font-semibold leading-tight text-white tracking-tight">
            Conversational AI that feels human
          </h1>
          <p className="mt-5 text-lg text-slate-300 max-w-xl">
            Build voice and chat agents powered by real-time speech, retrieval, and tool use. Ship in days, not months.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <a href="#contact" className="px-5 py-3 rounded-full bg-white text-slate-900 font-medium hover:opacity-90 transition">Request a demo</a>
            <a href="#features" className="px-5 py-3 rounded-full bg-white/10 text-white border border-white/10 hover:bg-white/15 transition">Explore features</a>
          </div>
        </motion.div>

        <div className="relative h-[420px] md:h-[520px]" />
      </div>
    </section>
  )
}
