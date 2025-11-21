import { motion } from 'framer-motion'

const logos = [
  'https://upload.wikimedia.org/wikipedia/commons/3/3a/Logo-google-icon.png',
  'https://upload.wikimedia.org/wikipedia/commons/a/ab/Apple-logo.png',
  'https://upload.wikimedia.org/wikipedia/commons/4/44/Microsoft_logo.svg',
  'https://upload.wikimedia.org/wikipedia/commons/2/24/Adidas_logo.png',
  'https://upload.wikimedia.org/wikipedia/commons/5/51/IBM_logo.svg',
]

export default function Showcase() {
  return (
    <section className="py-20">
      <div className="max-w-7xl mx-auto px-6">
        <p className="text-center uppercase tracking-widest text-white/60 text-xs">Trusted by forward-thinking teams</p>
        <div className="mt-6 flex flex-wrap items-center justify-center gap-10 opacity-80">
          {logos.map((src, i) => (
            <motion.img
              key={i}
              src={src}
              alt="logo"
              className="h-8 object-contain grayscale invert opacity-80"
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
            />
          ))}
        </div>
      </div>
    </section>
  )
}
