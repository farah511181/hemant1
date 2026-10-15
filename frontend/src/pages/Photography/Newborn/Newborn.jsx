import CategoryLayout from '../CategoryLayout'
import { NEWBORN_IMAGES } from '../../../data/studioData'

export default function Newborn() {
  return (
    <CategoryLayout
      slug="newborn"
      name="Newborn"
      tagline="Style in motion"
      description="They are only this little for such a short while. The tiny fingers, sleepy expressions, soft little sounds, and the way they fit so perfectly in your arms — these are the moments that quietly become your most precious memories. Newborn photography is about holding on to those first days, before they grow a little more every morning and this tiny beginning becomes a distant memory."
      images={NEWBORN_IMAGES}
    />
  )
}