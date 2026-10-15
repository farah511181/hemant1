import { motion, AnimatePresence } from 'motion/react'
import { useEffect } from 'react'

export default function Lightbox({ items, index, onClose, onPrev, onNext }) {
  useEffect(() => {
    const onKey = (e) => {
      if (e.key === 'Escape') onClose()
      if (e.key === 'ArrowLeft') onPrev()
      if (e.key === 'ArrowRight') onNext()
    }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [onClose, onPrev, onNext])

  if (index === null || !items[index]) return null

  const current = items[index]

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 z-[100] bg-espresso/95 flex items-center justify-center p-4"
        onClick={onClose}
      >
        <button
          className="absolute top-6 right-6 text-ivory text-4xl hover:text-mocha transition-colors"
          onClick={onClose}
          aria-label="Close"
        >
          &times;
        </button>

        <button
          className="absolute left-4 md:left-8 text-ivory text-4xl hover:text-mocha transition-colors"
          onClick={(e) => {
            e.stopPropagation()
            onPrev()
          }}
          aria-label="Previous"
        >
          &#8249;
        </button>

{current.src ? (
          <motion.img
            key={current.src}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.3 }}
            src={current.src}
            alt={current.alt}
            className="max-w-full max-h-[85vh] object-contain"
            onClick={(e) => e.stopPropagation()}
          />
        ) : (
          <div className="max-w-full max-h-[85vh] w-[60vw] h-[60vh] bg-espresso/40 flex items-center justify-center">
            <p className="font-mono text-xs uppercase tracking-[0.3em] text-mocha">
              {current.alt}
            </p>
          </div>
        )}

        <button
          className="absolute right-4 md:right-8 text-ivory text-4xl hover:text-mocha transition-colors"
          onClick={(e) => {
            e.stopPropagation()
            onNext()
          }}
          aria-label="Next"
        >
          &#8250;
        </button>

        <p className="absolute bottom-6 left-1/2 -translate-x-1/2 font-mono text-xs uppercase tracking-[0.3em] text-mocha">
          {index + 1} / {items.length}
        </p>
      </motion.div>
    </AnimatePresence>
  )
}
