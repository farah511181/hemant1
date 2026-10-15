import PageHero from '../../components/common/PageHero'
import PhotographyGallery from '../../components/photography/PhotographyGallery'
import Button from '../../components/common/Button'
import { GALLERY_IMAGES } from '../../data/portfolioData'

export default function CategoryLayout({
  slug,
  name,
  tagline,
  description,
  images: providedImages,
}) {
  // =====================================================
  // GALLERY IMAGES
  //
  // If a page provides its own images, use those.
  // Otherwise use the existing portfolioData images.
  // This keeps Wedding + Pre-Wedding working.
  // =====================================================

  const images = providedImages || GALLERY_IMAGES[slug] || []


  return (
    <>
      {/* =====================================================
          PAGE HERO
          ===================================================== */}

      <PageHero
        eyebrow={tagline}
        title={name}
        description={description}
      />


      {/* =====================================================
          PHOTOGRAPHY GALLERY
          IMPORTANT:
          No max-w-7xl wrapper here.
          Gallery must use the complete available width.
          ===================================================== */}

      <section className="w-full bg-ivory">
        <PhotographyGallery images={images} />
      </section>


      {/* =====================================================
          BOOKING CTA
          ===================================================== */}

      <section className="py-20 bg-ivory">

        <div className="max-w-7xl mx-auto px-6 lg:px-10 flex flex-col md:flex-row items-center justify-between gap-6">

          <div>

            <h3 className="font-display text-2xl md:text-3xl text-espresso">
              Ready to begin your {name.toLowerCase()} story?
            </h3>

            <p className="mt-2 text-taupe">
              Let's plan a session that reflects who you are.
            </p>

          </div>


          <Button
            to="/contact"
            variant="primary"
            size="md"
          >
            Book a Session
          </Button>

        </div>

      </section>
    </>
  )
}