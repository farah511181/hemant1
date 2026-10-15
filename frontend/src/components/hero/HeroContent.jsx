import { motion } from 'motion/react'

export default function HeroContent({ title }) {
  return (
    <div className="absolute inset-0 z-10 flex items-center justify-center px-6 pointer-events-none translate-y-10">
{title && (
        <motion.h2
          className="hero-heading-letter-spacing font-serif font-light text-white"
          style={{
            margin: '0 auto',
            maxWidth: 900,
            fontSize: 'clamp(2.2rem, 3.8vw, 3.1rem)',
            fontWeight: 150,
            letterSpacing: '6px',
            lineHeight: 1.15,
            textAlign: 'center',
          }}
        >
          {title.split(' ').map((word, i) => (
            <motion.span
              key={i}
              initial={{ opacity: 0, y: 25, filter: 'blur(6px)' }}
              animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
transition={{
                duration: 1.0,
                ease: [0.22, 1, 0.36, 1],
                delay: i * 0.18,
              }}
              style={{ display: 'inline-block' }}
            >
              {word}
              {i < title.split(' ').length - 1 ? '\u00A0' : ''}
            </motion.span>
          ))}
        </motion.h2>
      )}

      {/* Mobile: tighter letter-spacing for readability */}
      <style>{`
        @media (max-width: 640px) {
          .hero-heading-letter-spacing {
            letter-spacing: 3px !important;
          }
        }
      `}</style>
    </div>
  )
}
