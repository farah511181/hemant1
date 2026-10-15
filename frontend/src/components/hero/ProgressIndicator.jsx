import { AnimatePresence, motion } from 'motion/react'

export default function ProgressIndicator({ current, total }) {
  const progress = (current / total) * 100

  return (
<div className="hidden md:flex absolute right-8 lg:right-12 top-1/2 -translate-y-1/2 flex-col items-center gap-5 z-20">
      {/* Current / Total */}
      <AnimatePresence mode="wait">
        <motion.span
          key={current}
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -8 }}
          transition={{ duration: 0.4 }}
          className="font-sans text-[11px] tracking-[0.3em] text-ivory/80"
        >
          {String(current).padStart(2, '0')} / {String(total).padStart(2, '0')}
        </motion.span>
      </AnimatePresence>

      {/* Vertical progress line */}
      <div className="relative h-28 w-px bg-ivory/20">
        <motion.div
          className="absolute left-0 top-0 w-px bg-ivory"
          animate={{ height: `${progress}%` }}
          transition={{ duration: 1.2, ease: 'easeInOut' }}
        />
      </div>
    </div>
  )
}
