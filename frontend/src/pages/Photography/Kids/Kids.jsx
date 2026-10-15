import CategoryLayout from '../CategoryLayout'
import { KIDS_IMAGES } from '../../../data/studioData'

export default function Kids() {
  return (
    <CategoryLayout
      slug="kids"
      name="Kids"
      tagline="Style in motion"
      description="Childhood passes quietly, almost before we realise it. One day they are running around with messy hair and endless energy, and before you know it, they have grown into someone completely new. The little laughs, funny expressions, curious eyes, and personalities that fill your home are moments you can never truly recreate. These photographs are about keeping a little piece of their childhood close, exactly as you remember it today."
      images={KIDS_IMAGES}
    />
  )
}