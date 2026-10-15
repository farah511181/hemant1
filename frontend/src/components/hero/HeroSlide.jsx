import { motion } from 'motion/react'
import HeroContent from './HeroContent'

const OVERLAY_GRADIENT =
  'linear-gradient(rgba(0,0,0,.45), rgba(0,0,0,.25), rgba(0,0,0,.45))'

export default function HeroSlide({ slide, active, index }) {
  const isFirst = index === 0

  /*
   * The hero images are 16:9 while the desktop hero area is wider/taller
   * depending on the viewport.
   *
   * Slides 05 and 07 contain important subjects near the edges, so they
   * need individual positioning to avoid unnecessary cropping.
   */
  const imageSettings = {
    objectPosition:
      slide.imagePosition ||
      (index === 4
        ? 'center center'
        : index === 6
          ? 'center center'
          : 'center center'),
  }

  return (
    <div className="absolute inset-0 w-full h-full overflow-hidden">
      {/* Background image — fills the complete hero area */}
      <motion.img
        src={slide.image}
        alt={slide.alt}
        loading={isFirst ? 'eager' : 'lazy'}
        fetchPriority={isFirst ? 'high' : 'auto'}
        decoding="async"
        transition={{
          opacity: {
            duration: 1.5,
            ease: 'easeInOut',
          },
        }}
        className="absolute inset-0 block w-full h-full"
        style={{
          objectFit: 'cover',
          objectPosition: imageSettings.objectPosition,
        }}
      />

      {/* Premium dark overlay */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background: OVERLAY_GRADIENT,
        }}
      />

      {/* Content only on slides where showContent is true */}
      {slide.showContent && active && (
        <HeroContent
          key={`${index}-${slide.title}`}
          title={slide.title}
        />
      )}
    </div>
  )
}