import CategoryLayout from '../CategoryLayout'
import { FAMILY_IMAGES } from '../../../data/studioData'

export default function Family() {
  return (
    <CategoryLayout
      slug="family"
      name="Family"
      tagline="Style in motion"
      description="Family is made up of the moments we sometimes forget to notice — the laughter around the table, a child's hand held tightly, a quiet hug, and the little ways you care for one another every day. Life moves quickly, and everyone grows and changes along the way. These photographs are a way of keeping a piece of this chapter exactly as it is, so you can come back to these memories years from now and still feel the warmth of being together."
      images={FAMILY_IMAGES}
    />
  )
}