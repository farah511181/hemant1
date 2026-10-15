import { motion } from 'motion/react'
import Button from '../common/Button'

export default function FinalCTA() {
  return (
<section className="relative py-20 lg:py-[100px] overflow-hidden">
      <div className="absolute inset-0 bg-espresso" />
      <div className="absolute inset-0 bg-gradient-to-b from-espresso/80 via-espresso/60 to-espresso/90" />

      <div className="relative z-10 max-w-4xl mx-auto px-6 lg:px-16 text-center">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.7 }}
          className="font-sans text-[11px] uppercase tracking-[0.4em] text-sand mb-6"
        >
          Begin Your Story
        </motion.p>

        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.8, delay: 0.1 }}
className="font-display text-4xl md:text-5xl lg:text-6xl text-ivory leading-[1.08]"
        >
          Let’s Make Your Wedding
          <br />
          <span className="italic text-sand">A Wonderful Story.</span>
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="mt-6 font-sans text-base md:text-lg text-ivory/80 tracking-wide leading-relaxed"
        >
          Your story deserves to be remembered beautifully.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.7, delay: 0.3 }}
          className="mt-10"
        >
          <Button to="/contact" variant="outline-light">
            Get in Touch
          </Button>
        </motion.div>
      </div>
    </section>
  )
}
