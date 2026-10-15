
import { motion } from 'motion/react'
import { useState } from 'react'

export default function AboutPreview() {
  const [isPlaying, setIsPlaying] = useState(false)

  const videoId = '1v2q7GBxdXucbo_HPq7p7AB9ICv9CKSZQ'

  const handlePlay = () => {
    setIsPlaying(true)
  }

  return (
    <section className="w-full bg-nude py-8 lg:py-10 overflow-hidden">

      {/* Content */}
      <motion.div
        initial={{ opacity: 0, y: 15 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-60px' }}
        transition={{ duration: 0.7 }}
        className="text-center max-w-4xl mx-auto px-4 mb-6 lg:mb-7"
      >
        <p className="font-sans text-[9px] md:text-[10px] uppercase tracking-[0.3em] text-walnut mb-2">
          Our Philosophy
        </p>

        <h2 className="font-display text-2xl md:text-3xl lg:text-4xl text-espresso leading-tight">
          We Tell Love Stories
        </h2>

        <p className="mt-3 text-sm md:text-base text-taupe leading-relaxed">
          For us, photography is much more than creating beautiful images —
          it’s about preserving emotions, honouring traditions, and capturing
          the moments that become timeless memories. Every wedding carries its
          own rhythm, and we listen before we shoot.
        </p>

        <p className="mt-2 text-sm md:text-base text-taupe leading-relaxed">
          With years of experience photographing destination weddings across
          the world, we bring an editorial, cinematic and deeply personal
          approach to every celebration.
        </p>
      </motion.div>

      {/* Video */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-60px' }}
        transition={{ duration: 0.8 }}
        className="w-[calc(100%-32px)] md:w-[calc(100%-48px)] lg:w-[calc(100%-56px)] mx-auto"
      >
        <div className="relative overflow-hidden aspect-[16/9] bg-black group">

          {!isPlaying ? (
            <button
              type="button"
              onClick={handlePlay}
              aria-label="Play wedding video"
              className="absolute inset-0 z-10 flex items-center justify-center cursor-pointer"
            >
              <div
                className="
                  w-16 h-16
                  md:w-20 md:h-20
                  lg:w-24 lg:h-24
                  rounded-full
                  bg-ivory/95
                  flex items-center justify-center
                  shadow-[0_20px_50px_-10px_rgba(0,0,0,0.5)]
                  group-hover:bg-ivory
                  group-hover:scale-105
                  transition-all duration-500
                "
              >
                <svg
                  width="20"
                  height="24"
                  viewBox="0 0 12 16"
                  fill="#2A211B"
                  aria-hidden="true"
                >
                  <path d="M0 0l12 8-12 8V0z" />
                </svg>
              </div>
            </button>
          ) : (
            <iframe
              src={`https://drive.google.com/file/d/${videoId}/preview`}
              title="Wedding Video"
              allow="autoplay; fullscreen"
              allowFullScreen
              className="absolute inset-0 w-full h-full border-0"
            />
          )}

        </div>
      </motion.div>

    </section>
  )
}
