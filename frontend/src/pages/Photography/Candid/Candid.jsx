import CategoryLayout from '../CategoryLayout'
import { CANDID_IMAGES } from '../../../data/portfolioData'

export default function Candid() {
  return (
    <CategoryLayout
      slug="candid"
      name="Candid"
      tagline="Moments, just as they happen"
      description="Real emotions, genuine laughter, and beautiful little moments captured naturally."
      images={CANDID_IMAGES}
    />
  )
}

