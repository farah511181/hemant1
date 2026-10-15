import PageHero from '../../components/common/PageHero'
import PhotographyCategoryCard from '../../components/photography/PhotographyCategoryCard'
import { CATEGORIES } from '../../data/portfolioData'

export default function Photography() {
  const weddingCategories = CATEGORIES.filter(
    (category) =>
      category.slug === 'pre-wedding' ||
      category.slug === 'wedding'
  )

  return (
    <>
      <PageHero
        eyebrow="Wedding"
        title="Our Collections"
        description="Explore our wedding and pre-wedding stories — each collection told in its own light."
      />

      <section className="py-20 lg:py-20 bg-ivory">
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {weddingCategories.map((category, index) => (
              <PhotographyCategoryCard
                key={category.slug}
                category={category}
                index={index}
              />
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
