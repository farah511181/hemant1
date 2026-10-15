import { useState } from 'react'
import GalleryCard from './GalleryCard'
import Lightbox from './Lightbox'

export default function Gallery({ images }) {
  const [lightboxIndex, setLightboxIndex] = useState(null)

  const prev = () =>
    setLightboxIndex((i) => (i === null ? null : (i - 1 + images.length) % images.length))
  const next = () =>
    setLightboxIndex((i) => (i === null ? null : (i + 1) % images.length))

  return (
    <>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {images.map((img, i) => (
<GalleryCard
            key={img.src || i}
            image={img}
            index={i}
            onClick={() => setLightboxIndex(i)}
          />
        ))}
      </div>
      <Lightbox
        items={images}
        index={lightboxIndex}
        onClose={() => setLightboxIndex(null)}
        onPrev={prev}
        onNext={next}
      />
    </>
  )
}
