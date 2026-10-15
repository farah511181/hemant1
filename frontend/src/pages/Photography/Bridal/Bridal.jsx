import CategoryLayout from '../CategoryLayout'
import { BRIDAL_IMAGES } from '../../../data/portfolioData'
export default function Bridal() {
  return (
    <CategoryLayout
      slug="bridal"
      name="Bridal"
      tagline="Elegance in every detail"
      description="Beautiful bridal portraits and intimate moments captured with grace, emotion and timeless elegance."
      images={BRIDAL_IMAGES}
    />
  )
}
