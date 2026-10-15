import { useEffect, useState } from 'react'
import { motion, AnimatePresence } from 'motion/react'
import SectionHeading from '../common/SectionHeading'
import { TESTIMONIALS } from '../../data/testimonialData'

export default function Testimonials() {
  const [index, setIndex] = useState(0)

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((i) => (i + 1) % TESTIMONIALS.length)
    }, 6500)
    return () => clearInterval(timer)
  }, [])

  return (
<section className="py-20 lg:py-[100px] bg-nude">
      <div className="max-w-4xl mx-auto px-6 lg:px-16">
        <SectionHeading
          eyebrow="Client Love"
          title="What Our Clients Say"
          description="Our clients are happy enough to choose us again for their future celebrations."
        />

        <div className="mt-12 relative">
          <AnimatePresence mode="wait">
            <motion.figure
              key={index}
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -24 }}
              transition={{ duration: 0.6, ease: 'easeOut' }}
              className="text-center"
            >
              {/* Quote mark */}
<div className="mx-auto mb-8 text-walnut">
                <svg width="56" height="44" viewBox="0 0 56 44" fill="currentColor" opacity="0.5">
                  <path d="M0 44V28c0-12 6-22 18-28l4 6c-8 5-12 12-12 20h12v18H0zm28 0V28c0-12 6-22 18-28l4 6c-8 5-12 12-12 20h12v18H28z" />
                </svg>
              </div>

              <blockquote className="font-serif text-xl md:text-2xl lg:text-3xl text-espresso leading-relaxed italic">
                &ldquo;{TESTIMONIALS[index].quote}&rdquo;
              </blockquote>

<figcaption className="mt-10 flex flex-col items-center">
{TESTIMONIALS[index].image && (
                  <div className="w-16 h-16 rounded-full overflow-hidden mb-4 ring-1 ring-walnut/20 ring-offset-2 ring-offset-nude">
<img
                      src={TESTIMONIALS[index].image}
                      alt={TESTIMONIALS[index].name}
                      className="w-full h-full object-contain object-center bg-espresso/5"
                    />
                  </div>
                )}
                <p className="font-display text-lg text-espresso">{TESTIMONIALS[index].name}</p>
<p className="font-sans text-[11px] uppercase tracking-[0.25em] text-walnut mt-1">
                  {TESTIMONIALS[index].event}
                </p>
              </figcaption>
            </motion.figure>
          </AnimatePresence>
        </div>

        <div className="mt-10 flex justify-center gap-3">
          {TESTIMONIALS.map((_, i) => (
            <button
              key={i}
              onClick={() => setIndex(i)}
              className={`h-2 w-2 rounded-full transition-all duration-300 ${
i === index ? 'bg-walnut w-7' : 'bg-taupe/40 hover:bg-walnut/50'
              }`}
              aria-label={`Go to testimonial ${i + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  )
}
