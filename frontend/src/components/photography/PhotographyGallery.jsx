import { useEffect, useMemo, useRef, useState } from 'react'

export default function PhotographyGallery({ images = [] }) {
  const [activeIndex, setActiveIndex] = useState(0)

  // Har image ka orientation store hoga
  const [orientations, setOrientations] = useState({})

  const mainImageAreaRef = useRef(null)

  const galleryImages = useMemo(() => {
    return images.filter(Boolean)
  }, [images])

  // ---------------------------------------------------------
  // RESET WHEN NEW CATEGORY OPENS
  // ---------------------------------------------------------

  useEffect(() => {
    setActiveIndex(0)
    setOrientations({})
  }, [images])

  // ---------------------------------------------------------
  // DETECT IMAGE ORIENTATION
  // ---------------------------------------------------------

  const detectOrientation = (index, event) => {
    const img = event.currentTarget

    if (!img.naturalWidth || !img.naturalHeight) return

    const ratio = img.naturalWidth / img.naturalHeight

    setOrientations((prev) => ({
      ...prev,
      [index]: ratio >= 1 ? 'landscape' : 'portrait',
    }))
  }

  // ---------------------------------------------------------
  // EMPTY
  // ---------------------------------------------------------

  if (!galleryImages.length) {
    return (
      <section className="w-full min-h-[70vh] bg-ivory flex items-center justify-center">
        <p className="text-[11px] tracking-[0.45em] uppercase text-taupe">
          Portfolio Coming Soon
        </p>
      </section>
    )
  }

  const activeImage = galleryImages[activeIndex]

  const activeOrientation =
    orientations[activeIndex] || 'landscape'

  const isLandscape =
    activeOrientation === 'landscape'

  return (
    <section
      className="
        relative
        w-full
        h-[calc(100vh-118px)]
        min-h-[650px]
        overflow-hidden
        bg-[#11100e]
      "
    >

      {/* =====================================================
          MAIN GALLERY
          ===================================================== */}

      <div className="absolute inset-0 flex">

        {/* ===================================================
            LEFT IMAGE AREA
            =================================================== */}

        <main
          ref={mainImageAreaRef}
          className="
            relative
            h-full
            flex-1
            min-w-0
            overflow-hidden
            bg-[#11100e]
            flex
            items-center
            justify-center
          "
        >

          {/* =================================================
              BLURRED BACKGROUND
              Same active image used as background
              ================================================= */}

          <div
            className="
              absolute
              inset-0
              overflow-hidden
              pointer-events-none
            "
          >

            <img
              src={activeImage.src || activeImage}
              alt=""
              aria-hidden="true"
              className="
                absolute
                inset-[-80px]
                w-[calc(100%+160px)]
                h-[calc(100%+160px)]
                object-cover
                scale-110
                blur-2xl
                opacity-35
                select-none
              "
            />

            <div
              className="
                absolute
                inset-0
                bg-black/35
              "
            />

          </div>


          {/* =================================================
              IMAGE COUNTER
              ================================================= */}

          <div
            className="
              absolute
              top-5
              left-5
              z-30
              px-4
              py-2
              bg-black/60
              border
              border-white/10
              backdrop-blur-md
            "
          >

            <span className="text-[10px] tracking-[0.28em] text-white">

              {String(activeIndex + 1).padStart(2, '0')}

              <span className="mx-2 text-white/30">
                /
              </span>

              {String(galleryImages.length).padStart(2, '0')}

            </span>

          </div>


          {/* =================================================
              MAIN IMAGE

              IMPORTANT:
              NO CROP

              max-w-full + max-h-full
              means image will ALWAYS stay inside
              available area.
              ================================================= */}

          <div
            className="
              absolute
              inset-0
              z-10
              flex
              items-center
              justify-center
              overflow-hidden
              p-0
            "
          >

            <img
              key={`main-image-${activeIndex}`}
              data-gallery-main-image="true"
              src={activeImage.src || activeImage}
              alt={
                activeImage.alt ||
                `Photography ${activeIndex + 1}`
              }
              onLoad={(event) => {
                detectOrientation(
                  activeIndex,
                  event
                )
              }}
              className="
                block
                w-auto
                h-auto
                max-w-full
                max-h-full
                object-contain
                border
                border-[#a87858]
                select-none
              "
              draggable="false"
            />

          </div>

        </main>


        {/* ===================================================
            RIGHT SIDEBAR
            Slightly smaller so MAIN IMAGE gets more width
            =================================================== */}

        <aside
          className="
            relative
            z-40
            flex-none
            w-[180px]
            lg:w-[200px]
            h-full
            overflow-hidden
            border-l
            border-white/10
            bg-[#11100e]
          "
        >

          {/* =================================================
              BLUR BACKGROUND
              ================================================= */}

          <div
            className="
              absolute
              inset-0
              overflow-hidden
              pointer-events-none
            "
          >

            <img
              src={activeImage.src || activeImage}
              alt=""
              aria-hidden="true"
              className="
                absolute
                inset-[-35px]
                w-[calc(100%+70px)]
                h-[calc(100%+70px)]
                object-cover
                scale-110
                blur-2xl
                opacity-20
              "
            />

            <div
              className="
                absolute
                inset-0
                bg-[#11100e]/80
              "
            />

          </div>


          {/* =================================================
              THUMBNAILS
              ================================================= */}

          <div
            className="
              relative
              z-10
              h-full
              overflow-y-auto
              overflow-x-hidden
              px-3
              py-5
            "
          >

            <div
              className="
                flex
                flex-col
                items-center
                gap-4
              "
            >

              {galleryImages.map((image, index) => {

                const selected =
                  index === activeIndex

                return (
                  <button
                    key={index}
                    type="button"
                    onClick={() =>
                      setActiveIndex(index)
                    }
                    className={`
                      relative
                      block
                      w-full
                      max-w-[175px]
                      overflow-hidden
                      bg-black/30
                      transition-all
                      duration-300
                      focus:outline-none

                      ${
                        selected
                          ? `
                            border-2
                            border-[#a87858]
                            scale-[1.015]
                          `
                          : `
                            border
                            border-white/10
                            hover:border-[#a87858]/70
                          `
                      }
                    `}
                  >

                    <img
                      src={image.src || image}
                      alt={
                        image.alt ||
                        `Thumbnail ${index + 1}`
                      }
                      onLoad={(event) =>
                        detectOrientation(
                          index,
                          event
                        )
                      }
                      className="
                        block
                        w-full
                        h-auto
                        max-h-[145px]
                        object-contain
                        select-none
                      "
                      loading="lazy"
                      draggable="false"
                    />


                    {/* IMAGE NUMBER */}

                    <span
                      className={`
                        absolute
                        bottom-1.5
                        left-1.5
                        min-w-[27px]
                        px-1.5
                        py-1
                        text-center
                        text-[8px]
                        tracking-[0.15em]

                        ${
                          selected
                            ? `
                              bg-[#a87858]
                              text-white
                            `
                            : `
                              bg-black/70
                              text-white/80
                            `
                        }
                      `}
                    >
                      {String(index + 1).padStart(2, '0')}
                    </span>

                  </button>
                )
              })}

            </div>

          </div>

        </aside>

      </div>

    </section>
  )
}