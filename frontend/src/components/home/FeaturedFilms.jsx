import { motion } from 'motion/react'
import SectionHeading from '../common/SectionHeading'

const WEDDING_VIDEOS = [
  {
    id: 1,
    videoId: '1YQSy7DkpRA97OzBYqHIoICATHU-qrt-T',
  },
  {
    id: 2,
    videoId: '1SnN-a3Eu7_UHRYfFQasbpGTSHr8EYPTS',
  },
]

export default function FeaturedFilms() {
  return (
    <section className="w-full bg-espresso relative">

      {/* Heading */}
      <div className="max-w-[1200px] mx-auto px-6 pt-8 lg:pt-12">
        <SectionHeading
          eyebrow="Wedding Films"
          title="Redefining Wedding Films Through Storytelling"
          description="Our wedding films are tailor-made for your big day. We make every film feel personal and earthy, with real emotions, natural sounds and candid moments captured as they unfold."
          light
        />
      </div>

      {/* Scrollable Videos */}
      <div className="mt-6 w-full">

        {WEDDING_VIDEOS.map((film, index) => (
          <div
            key={film.id}
            className="w-full mb-8"
          >
            {index === 1 && (
              <div className="w-full flex justify-center items-center px-6 py-4">
                <h3 className="font-display text-2xl md:text-4xl text-ivory text-center">
                 Couple Names: Aishwarya & Sanket
Theme: Court Marriage
                  <br/>
Video Style: Cinematic Storytelling
<br/>
A heartfelt storytelling film capturing Aishwarya & Sanket’s court marriage journey — a beautiful beginning of their forever, told through real moments and emotions.
                </h3>
              </div>
            )}

            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true, amount: 0.1 }}
              transition={{ duration: 0.6 }}
              className="w-full"
            >
              <div
                className="relative w-full overflow-hidden bg-[#171310]"
                style={{ aspectRatio: '16 / 9' }}
              >
                <iframe
                  src={`https://drive.google.com/file/d/${film.videoId}/preview`}
                  title={`Wedding Film ${film.id}`}
                  allow="autoplay; fullscreen"
                  allowFullScreen
                  loading="lazy"
                  className="absolute inset-0 block w-full h-full border-0"
                />
              </div>
            </motion.div>
          </div>
        ))}

      </div>

    </section>
  )
}
