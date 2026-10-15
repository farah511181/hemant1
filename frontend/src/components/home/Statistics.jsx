import { useEffect, useRef, useState } from 'react'
import { motion, useInView } from 'motion/react'

const STATS = [
  { value: 253, suffix: '+', label: 'Weddings Captured' },
  { value: 523, suffix: '+', label: 'Happy Couples' },
  { value: 10, suffix: '', label: 'Years of Passion' },
  { value: 26, suffix: '', label: 'Destinations' },
  { value: 338, suffix: '', label: 'Ceremonies' },
]

function Counter({ value }) {
  const ref = useRef(null)

  const inView = useInView(ref, {
    once: true,
    margin: '-60px',
  })

  const [display, setDisplay] = useState(0)

  useEffect(() => {
    if (!inView) return

    let raf
    const duration = 1800
    const start = performance.now()

    const tick = (now) => {
      const progress = Math.min(
        (now - start) / duration,
        1
      )

      const eased = 1 - Math.pow(1 - progress, 3)

      setDisplay(Math.round(eased * value))

      if (progress < 1) {
        raf = requestAnimationFrame(tick)
      }
    }

    raf = requestAnimationFrame(tick)

    return () => cancelAnimationFrame(raf)
  }, [inView, value])

  return (
    <span ref={ref} className="tabular-nums">
      {display}
    </span>
  )
}

export default function Statistics() {
  return (
    <section className="py-20 lg:py-20 bg-espresso">
      <div
        className="
          max-w-7xl
          mx-auto
          px-6
          lg:px-10
          grid
          grid-cols-2
          lg:grid-cols-5
          gap-x-6
          gap-y-10
          text-center
        "
      >
        {STATS.map((stat, i) => (
          <motion.div
            key={stat.label}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{
              duration: 0.6,
              delay: i * 0.1,
            }}
            className="text-center"
          >
            <p
              className="
                font-display
                text-5xl
                md:text-6xl
                text-ivory
              "
            >
              <Counter value={stat.value} />
              {stat.suffix}
            </p>

            <p
              className="
                font-mono
                text-xs
                uppercase
                tracking-[0.25em]
                text-mocha
                mt-3
              "
            >
              {stat.label}
            </p>
          </motion.div>
        ))}
      </div>
    </section>
  )
}

