import { motion } from 'motion/react'

export default function GalleryCard({ image, index, onClick }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{ duration: 0.6, delay: (index % 3) * 0.12 }}
className="group relative overflow-hidden cursor-pointer"
      onClick={onClick}
    >
{image.src ? (
<img
          src={image.src}
          alt={image.alt}
          className="w-full h-auto object-contain bg-espresso/5"
        />
      ) : (
        <div className="w-full h-full aspect-[3/4] bg-espresso/10" />
      )}
      <div className="absolute inset-0 bg-espresso/0 group-hover:bg-espresso/30 transition-colors duration-500" />
      <div className="absolute bottom-0 left-0 right-0 p-4 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
        <p className="font-mono text-[10px] uppercase tracking-[0.25em] text-ivory">
          {image.alt}
        </p>
      </div>
    </motion.div>
  )
}
