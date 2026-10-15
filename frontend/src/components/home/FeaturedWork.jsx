import { Link } from 'react-router-dom'
import { motion } from 'motion/react'
import SectionHeading from '../common/SectionHeading'
import Button from '../common/Button'
import { FEATURED_STORIES } from '../../data/weddingData'

export default function FeaturedWork() {
  const leftStories = FEATURED_STORIES.filter((_, i) => i % 2 === 0)
  const rightStories = FEATURED_STORIES.filter((_, i) => i % 2 !== 0)

  const renderStory = (story, index) => (
    <motion.article
      key={story.id}
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{
        duration: 0.8,
        delay: index * 0.08,
        ease: 'easeOut',
      }}
      className="group mb-14 lg:mb-20"
    >
      <Link
        to="/photography"
        className="block overflow-hidden relative"
      >
        {story.image && (
          <img
            src={story.image}
            alt={story.title}
            className="w-full h-auto block object-contain bg-espresso/5 transition-transform duration-700 group-hover:scale-[1.02]"
          />
        )}

        <div className="absolute inset-0 bg-gradient-to-t from-espresso/60 via-transparent to-transparent opacity-40 group-hover:opacity-70 transition-opacity duration-500" />
      </Link>

      <div className="pt-5">
        <p className="font-sans text-[10px] uppercase tracking-[0.3em] text-walnut">
          {story.category}
        </p>

        <h3 className="font-display text-xl md:text-2xl text-espresso mt-2 leading-snug group-hover:text-walnut transition-colors duration-500">
          {story.title}
        </h3>

        {story.description && (
          <p className="font-sans text-sm md:text-[15px] leading-7 text-espresso/65 mt-3 max-w-[620px]">
            {story.description}
          </p>
        )}

        <span className="inline-block mt-4 font-sans text-[10px] uppercase tracking-[0.25em] text-walnut border-b border-walnut/40 pb-1 group-hover:border-walnut transition-colors duration-300">
          View Story
        </span>
      </div>
    </motion.article>
  )

  return (
    <section
      id="featured-work"
      className="py-20 lg:py-[100px] bg-ivory"
    >
      <div className="max-w-[1400px] mx-auto px-6 lg:px-16">
        <SectionHeading
          eyebrow="Featured Stories"
          title="Stories We’ve Had the Honour to Tell"
          description="Every wedding leaves behind more than photographs — a collection of laughter, emotions, little details and moments that are uniquely yours. We’re here to preserve those moments as they truly happened, so you can return to them for years to come."
        />

        {/* Mobile */}
        <div className="mt-12 md:mt-16 lg:hidden">
          {FEATURED_STORIES.map((story, index) =>
            renderStory(story, index)
          )}
        </div>

        {/* Desktop Masonry */}
        <div className="hidden lg:grid lg:grid-cols-2 gap-x-8 xl:gap-x-10 mt-16 items-start">
          {/* Left Column */}
          <div>
            {leftStories.map((story, index) =>
              renderStory(story, index)
            )}
          </div>

          {/* Right Column */}
          <div className="pt-24">
            {rightStories.map((story, index) =>
              renderStory(story, index)
            )}
          </div>
        </div>

        <div className="mt-8 lg:mt-10 text-center">
          <Button to="/photography" variant="outline-dark">
            Explore All Stories
          </Button>
        </div>
      </div>
    </section>
  )
}