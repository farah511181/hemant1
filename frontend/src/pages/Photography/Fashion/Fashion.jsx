
import CategoryLayout from '../CategoryLayout'
import { FASHION_IMAGES } from '../../../data/studioData'

export default function Fashion() {
  return (
    <CategoryLayout
      slug="fashion"
      name="Fashion"
      tagline="Style in motion"
      description="Fashion is not only about what you wear. It is about how you carry yourself, the confidence you find within yourself, and the way you choose to be seen. Every person has a different presence, a different energy, and a story worth capturing. These photographs are created to celebrate that individuality — the details, the attitude, the quiet confidence, and everything that makes your expression uniquely yours."
      images={FASHION_IMAGES}
    />
  )
}