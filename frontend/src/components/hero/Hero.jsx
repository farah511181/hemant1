import { useRef, useState } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Autoplay, EffectFade, Keyboard } from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/effect-fade'
import HeroSlide from './HeroSlide'
import SliderPagination from './SliderPagination'
import ProgressIndicator from './ProgressIndicator'
import SocialLinks from './SocialLinks'
import HeroControls from './HeroControls'
import { HERO_SLIDES } from '../../data/heroData'

export default function Hero() {
  const [activeIndex, setActiveIndex] = useState(0)
  const swiperRef = useRef(null)

  const handleSelect = (i) => {
    if (swiperRef.current && swiperRef.current.swiper) {
      swiperRef.current.swiper.slideToLoop(i)
    }
  }

  const handlePrev = () => {
    if (swiperRef.current && swiperRef.current.swiper) {
      swiperRef.current.swiper.slidePrev()
    }
  }

  const handleNext = () => {
    if (swiperRef.current && swiperRef.current.swiper) {
      swiperRef.current.swiper.slideNext()
    }
  }

  return (
<section
      className="hero-compact relative h-screen min-h-screen w-full overflow-hidden bg-charcoal"
      style={{ minHeight: '100dvh' }}
    >
      <style>{`@media (min-width: 1024px){ .hero-compact{ min-height: 92dvh; height: 92dvh; } }`}</style>
      <Swiper ref={swiperRef}modules={[Autoplay, EffectFade, Keyboard]}
  effect="fade"
  fadeEffect={{ crossFade: true }}
  speed={1000}
  loop
  keyboard={{ enabled: true }}
  autoplay={{
    delay: 3000,
    disableOnInteraction: false,
  }}
  onSlideChange={(swiper) => setActiveIndex(swiper.realIndex)}
  className="h-full w-full"
>
  {HERO_SLIDES.map((slide, i) => (
    <SwiperSlide key={i} className="!h-full">
      <HeroSlide
        slide={slide}
        active={i === activeIndex}
        index={i}
      />
    </SwiperSlide>
  ))}
</Swiper>

      {/* Controls */}
      <SliderPagination slides={HERO_SLIDES} activeIndex={activeIndex} onSelect={handleSelect} />
      <ProgressIndicator current={activeIndex + 1} total={HERO_SLIDES.length} />
      <HeroControls onPrev={handlePrev} onNext={handleNext} />
      <SocialLinks />
    </section>
  )
}
