import { Link } from 'react-router-dom'
import { motion } from 'motion/react'

export default function PhotographyCategoryCard({ category, index }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{ duration: 0.6, delay: (index % 3) * 0.12 }}
      className="group"
    >
      <Link
        to={`/photography/${category.slug}`}
        className="block"
      >
        {/* ================= IMAGE ================= */}
        {category.image && (
          <div className="overflow-hidden">
            <img
              src={category.image}
              alt={category.name}
              className="w-full h-auto object-contain bg-espresso/5 transition-transform duration-700 ease-out group-hover:scale-[1.02]"
            />
          </div>
        )}

        {/* ================= CONTENT BELOW IMAGE ================= */}
        <div className="pt-6 pb-4">
          <p className="font-mono text-[10px] uppercase tracking-[0.3em] text-mocha mb-2">
            {category.tagline}
          </p>

          <h3 className="font-display text-3xl text-espresso mb-2">
            {category.name}
          </h3>

          <p className="text-sm text-taupe mb-4 line-clamp-2">
            {category.description}
          </p>

          <span className="inline-flex items-center gap-2 font-mono text-[11px] uppercase tracking-[0.25em] text-espresso">
            View portfolio
            <span
              aria-hidden
              className="transition-transform duration-300 group-hover:translate-x-1"
            >
              →
            </span>
          </span>
        </div>
      </Link>
    </motion.div>
  )
}