import CategoryLayout from '../CategoryLayout'
import { GROOM_IMAGES } from '../../../data/portfolioData'

export default function GroomGetReady() {
  return (
    <CategoryLayout
      slug="groom"
      name="Groom"
      tagline="The moments before the celebration"
      description="From getting dressed to the final touches, the groom's preparation is filled with excitement, laughter, and anticipation. These photographs preserve the personality and emotions of those moments before the celebrations begin."
      images={GROOM_IMAGES}
    />
  )
}
