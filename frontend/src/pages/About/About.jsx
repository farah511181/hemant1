import { motion } from 'motion/react'
import PageHero from '../../components/common/PageHero'
import SectionHeading from '../../components/common/SectionHeading'
import clientImage from '../../assets/client/images/clint image.jpeg'

const VALUES = [
  {
    title: 'Authenticity',
    description:
      'We never chase a pose. The most powerful images are the ones that happen naturally, between the moments we plan.',
  },
  {
    title: 'Light',
    description:
      'Light is our language. We study it, chase it, and use it to sculpt emotion in every single frame.',
  },
  {
    title: 'Storytelling',
    description:
      'Every session is a narrative. We look for the connective tissue that turns a collection of photos into a story.',
  },
  {
    title: 'Connection',
    description:
      'Trust is the foundation of great portraiture. We build real relationships with every family, couple, and client.',
  },
]

export default function About() {
  return (
    <>
      {/* ====================================================== */}
      {/* PAGE HERO */}
      {/* ====================================================== */}

      <PageHero
        eyebrow="About Hemant Sharma"
        title="The Story Behind the Lens"
        description="Photographer, storyteller, and Founder of Hemant Sharma Photography and Studio Portrait by Hemant."
      />

      {/* ====================================================== */}
      {/* MEET THE FOUNDER */}
      {/* ====================================================== */}

      <section className="bg-black overflow-hidden">
        <div className="lg:min-h-[640px] grid grid-cols-1 lg:grid-cols-2 lg:items-stretch">

          {/* ================================================== */}
          {/* ABOUT CONTENT — LEFT */}
          {/* ================================================== */}

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.9, ease: 'easeOut' }}
            className="
              order-2
              lg:order-1
              flex
              items-center
              justify-center
              bg-[#E2D8CA]
              px-6
              py-16
              sm:px-10
              lg:px-14
              lg:py-20
            "
          >
            <div className="max-w-xl text-center lg:text-left">

              {/* Eyebrow */}

              <p
                className="
                  font-sans
                  text-[11px]
                  md:text-xs
                  uppercase
                  tracking-[0.45em]
                  text-[#A07A68]
                  mb-5
                "
              >
                About
              </p>

              {/* Heading */}

              <h2
                className="
                  font-display
                  text-4xl
                  md:text-5xl
                  text-[#A07A68]
                  leading-tight
                "
              >
                Hemant Sharma
              </h2>

              {/* About Content */}

              <div
                className="
                  mt-8
                  space-y-6
                  text-sm
                  md:text-base
                  leading-relaxed
                  text-[#5F5148]
                "
              >

                <p>
                  I’m <span className="text-[#A07A68] font-medium">Hemant Sharma</span>, Founder and Creative Director of{' '}
                  <span className="text-[#A07A68] font-medium">Hemant Sharma Photography</span> and{' '}
                  <span className="text-[#A07A68] font-medium">Studio Portrait by Hemant</span>.
                </p>

                <p>
                  For me, photography is more than creating beautiful images—it’s about preserving emotions,
                  genuine connections, and life’s most meaningful moments. With{' '}
                  <span className="text-[#A07A68] font-medium">7+ years of professional experience</span> and{' '}
                  <span className="text-[#A07A68] font-medium">500+ weddings captured</span>, I believe the best
                  photographs are the ones you can truly feel.
                </p>

                <p>
                  Every wedding, portrait, and celebration has its own story. Instead of following a standard
                  approach, we take the time to understand each client and create timeless, natural images filled
                  with real emotions, authentic expressions, and meaningful moments.
                </p>

                <p>
                  Our style blends storytelling, creative composition, and refined aesthetics to deliver photographs
                  that are both elegant and memorable. From the first consultation to the final delivery, every
                  detail is handled with care to ensure a seamless and premium experience.
                </p>

                <p>
                  Every image is carefully selected and professionally edited with attention to detail. Our goal is
                  not just to deliver photographs, but to create memories that you and your family will cherish for
                  generations.
                </p>

                <p>
                  Our mission is simple:{' '}
                  <span className="text-[#A07A68] font-medium">to create photographs that make you feel.</span>
                </p>

              </div>
            </div>
          </motion.div>

          {/* ================================================== */}
          {/* FOUNDER IMAGE — RIGHT */}
          {/* ================================================== */}

          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.9, ease: 'easeOut' }}
            className="
              relative
              order-1
              lg:order-2
              h-[60vh]
              lg:h-auto
              overflow-hidden
              bg-black
            "
          >
            <img
              src={clientImage}
              alt="Hemant Sharma, Founder & Creative Director"
              className="
                w-full
                h-full
                object-cover
                object-center
                grayscale
                contrast-125
              "
            />
          </motion.div>

        </div>
      </section>


      {/* ====================================================== */}
      {/* VALUES */}
      {/* ====================================================== */}

      <section className="py-20 lg:py-20 bg-nude">

        <div className="max-w-7xl mx-auto px-6 lg:px-10">

          <SectionHeading
            eyebrow="Our Approach"
            title="What Guides Our Craft"
            description="At Studio Portrait by Hemant, we believe great photography isn't about perfect poses — it's about genuine expressions, real emotions, and unforgettable moments."
          />

          <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">

            {VALUES.map((value, i) => (

              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-60px' }}
                transition={{
                  duration: 0.6,
                  delay: i * 0.1,
                }}
                className="
                  bg-ivory
                  p-7
                  border
                  border-espresso/5
                  hover:border-mocha/40
                  transition-colors
                "
              >

                <span className="font-display text-4xl text-mocha/30">
                  {String(i + 1).padStart(2, '0')}
                </span>

                <h3
                  className="
                    font-display
                    text-2xl
                    text-espresso
                    mt-3
                    mb-3
                  "
                >
                  {value.title}
                </h3>

                <p className="text-sm text-taupe leading-relaxed">
                  {value.description}
                </p>

              </motion.div>

            ))}

          </div>
        </div>
      </section>

      {/* ====================================================== */}
      {/* STATS */}
      {/* ====================================================== */}

      <section className="py-20 lg:py-20 bg-espresso">

        <div
          className="
            max-w-7xl
            mx-auto
            px-6
            lg:px-10
            grid
            grid-cols-2
            lg:grid-cols-4
            gap-10
            text-center
          "
        >

          {[
            ['7+', 'Years of Experience'],
            ['500+', 'Weddings Captured'],
            ['1000+', 'Happy Clients'],
            ['100%', 'Commitment to Quality'],
          ].map(([num, label], i) => (

            <motion.div
              key={label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.6,
                delay: i * 0.1,
              }}
            >

              <p
                className="
                  font-display
                  text-5xl
                  md:text-6xl
                  text-ivory
                "
              >
                {num}
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
                {label}
              </p>

            </motion.div>

          ))}

        </div>
      </section>
    </>
  )
}