import { motion } from 'framer-motion'

export default function CTA() {
  return (
    <section id="contact" className="relative py-28">
      <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(ellipse_at_bottom,rgba(79,70,229,0.12),transparent_60%)]" />
      <div className="max-w-4xl mx-auto text-center px-6">
        <motion.h3
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.6 }}
          className="text-3xl sm:text-4xl font-semibold text-white"
        >
          Ready to give your product a voice?
        </motion.h3>
        <p className="mt-4 text-slate-300">Talk to sales and get a custom walkthrough of our agent platform.</p>
        <div className="mt-8 flex flex-wrap gap-3 justify-center">
          <a href="#" className="px-5 py-3 rounded-full bg-white text-slate-900 font-medium hover:opacity-90 transition">Book a call</a>
          <a href="#" className="px-5 py-3 rounded-full bg-white/10 text-white border border-white/10 hover:bg-white/15 transition">Start building</a>
        </div>
      </div>
    </section>
  )
}
