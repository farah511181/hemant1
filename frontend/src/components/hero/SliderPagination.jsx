import { motion } from 'motion/react'

export default function SliderPagination({ slides, activeIndex, onSelect }) {
  return (
<div className="absolute bottom-6 left-1/2 -translate-x-1/2 z-20 flex items-center">
      {slides.map((slide, i) => {
        const isActive = i === activeIndex
        return (
          <div key={i} className="flex items-center" style={{ marginRight: i < slides.length - 1 ? 18 : 0 }}>
<motion.button
              onClick={() => onSelect(i)}
              aria-label={`Go to slide ${i + 1}`}
              transition={{ duration: 0.3 }}
              className="p-1"
            >
              {/* Diamond-shaped indicator */}
              <span
                className="block transition-colors duration-300"
                style={{
                  width: 10,
                  height: 10,
                  transform: 'rotate(45deg)',
                  border: `1px solid #FAF8F5`,
                  backgroundColor: isActive ? '#FAF8F5' : 'transparent',
                  opacity: isActive ? 1 : 0.6,
                }}
              />
            </motion.button>
          </div>
        )
      })}
    </div>
  )
}
