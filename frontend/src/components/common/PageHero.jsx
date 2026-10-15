import { motion } from 'motion/react'

export default function PageHero({ eyebrow, title, description, image }) {
  return (
    <section className="relative min-h-[32vh] lg:min-h-[30vh] flex items-center justify-center overflow-hidden">

      {image && (
        <div className="absolute inset-0">
          <img
            src={image}
            alt=""
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-espresso/70" />
        </div>
      )}

      {!image && (
        <div className="absolute inset-0 bg-espresso" />
      )}

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: 'easeOut' }}
        className="relative z-10 text-center px-6 py-14"
      >
        {eyebrow && (
          <p className="font-mono text-xs uppercase tracking-[0.4em] text-mocha mb-5">
            {eyebrow}
          </p>
        )}

        <h1 className="font-display text-4xl md:text-5xl lg:text-5xl text-ivory leading-tight">
          {title}
        </h1>

        {description && (
          <p className="mt-5 max-w-2xl mx-auto text-base lg:text-lg text-taupe leading-relaxed">
            {description}
          </p>
        )}
      </motion.div>

    </section>
  )
}