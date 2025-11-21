import { motion, useScroll, useTransform } from 'framer-motion'
import { Cpu, Waves, Mic2, Sparkles, ShieldCheck, Zap } from 'lucide-react'
import { useRef } from 'react'

export default function Features() {
  const ref = useRef(null)
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start end', 'end start'] })
  const y1 = useTransform(scrollYProgress, [0, 1], [40, -40])

  const items = [
    { icon: Mic2, title: 'Real-time voice', desc: 'Low-latency streaming for natural conversations.' },
    { icon: Waves, title: 'RAG built-in', desc: 'Ground responses with your docs and data.' },
    { icon: Cpu, title: 'Tool use', desc: 'Call APIs, trigger workflows, and take action.' },
    { icon: ShieldCheck, title: 'Enterprise ready', desc: 'SOC2, SSO, and audit trails out of the box.' },
    { icon: Sparkles, title: 'Multimodal', desc: 'Voice, text, and vision fused for richer context.' },
    { icon: Zap, title: 'Fast to ship', desc: 'SDKs and templates to launch in days.' },
  ]

  return (
    <section id="features" ref={ref} className="relative py-28 bg-gradient-to-b from-transparent to-slate-950/40">
      <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(ellipse_at_top,rgba(99,102,241,0.08),transparent_60%)]" />
      <div className="max-w-7xl mx-auto px-6">
        <motion.h2 style={{ y: y1 }} className="text-center text-3xl sm:text-5xl font-semibold text-white">
          Everything you need to talk to your product
        </motion.h2>
        <p className="text-center text-slate-300 mt-4 max-w-2xl mx-auto">Powerful building blocks that help you design, deploy, and scale intelligent agents.</p>

        <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {items.map(({ icon: Icon, title, desc }, i) => (
            <motion.div
              key={title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.5, delay: i * 0.05 }}
              className="group relative overflow-hidden rounded-2xl border border-white/10 bg-white/5 p-6 hover:bg-white/[0.08] transition"
            >
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition pointer-events-none" style={{background:'radial-gradient(600px 200px at 10% 0%, rgba(99,102,241,0.12), transparent)'}} />
              <div className="w-12 h-12 rounded-xl bg-white/10 border border-white/10 grid place-items-center text-white">
                <Icon size={22} />
              </div>
              <h3 className="mt-4 text-white text-lg font-semibold">{title}</h3>
              <p className="mt-1 text-slate-300 text-sm">{desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
