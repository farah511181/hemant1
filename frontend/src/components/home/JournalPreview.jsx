import { Link } from 'react-router-dom'
import { motion } from 'motion/react'
import SectionHeading from '../common/SectionHeading'
import Button from '../common/Button'
import { JOURNAL_POSTS } from '../../data/journalData'

export default function JournalPreview() {
  return (
    <section className="py-20 lg:py-[100px] bg-ivory">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-16">

        <SectionHeading
          eyebrow="Our Journal"
          title="Read Our Journal"
          description="Inspiration, Stories & Tips For Your Big Day"
        />

        <div className="mt-12 md:mt-14 grid grid-cols-1 md:grid-cols-3 gap-8">
          {JOURNAL_POSTS.map((post, i) => (
            <motion.article
              key={post.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.8, delay: i * 0.12 }}
              className="group"
            >
              <Link to="/blog" className="block">

                {post.image && (
                  <div className="overflow-hidden">
                    <img
                      src={post.image}
                      alt={post.title}
                      className="w-full h-auto object-contain bg-espresso/5"
                    />
                  </div>
                )}

                <div className="pt-6">
                  <p className="font-sans text-[10px] uppercase tracking-[0.3em] text-walnut mb-3">
                    {post.category}
                  </p>

                  <h3 className="font-display text-2xl text-espresso leading-snug group-hover:text-walnut transition-colors duration-500">
                    {post.title}
                  </h3>

                  <p className="mt-4 text-sm text-taupe leading-relaxed">
                    {post.description}
                  </p>

                  <span className="inline-flex items-center gap-2 mt-5 font-sans text-[11px] uppercase tracking-[0.25em] text-espresso group-hover:gap-3 transition-all duration-500">
                    Read More <span aria-hidden>→</span>
                  </span>
                </div>

              </Link>
            </motion.article>
          ))}
        </div>

        <div className="mt-16 text-center">
          <Button to="/blog" variant="outline-dark">
            Visit the Journal
          </Button>
        </div>

      </div>
    </section>
  )
}