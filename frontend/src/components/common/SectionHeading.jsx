import { motion } from 'motion/react'

export default function SectionHeading({
  eyebrow,
  title,
  description,
  align = 'center',
  light = false,
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-80px' }}
      transition={{ duration: 0.7, ease: 'easeOut' }}
      className={`max-w-2xl ${align === 'center' ? 'mx-auto text-center' : 'text-left'}`}
    >
{eyebrow && (
        <p
          className={`font-mono text-xs uppercase tracking-[0.35em] mb-3 ${
            light ? 'text-mocha' : 'text-mocha'
          }`}
        >
          {eyebrow}
        </p>
      )}
<h2
        className={`font-display text-2xl md:text-3xl lg:text-3xl leading-tight ${
          light ? 'text-ivory' : 'text-espresso'
        }`}
      >
        {title}
      </h2>
{description && (
        <p
className={`mt-4 text-base md:text-lg leading-relaxed ${
            light ? 'text-taupe' : 'text-taupe'
          }`}
        >
          {description}
        </p>
      )}
    </motion.div>
  )
}
