import CategoryLayout from '../CategoryLayout'
import { MATERNITY_IMAGES } from '../../../data/studioData'

export default function Maternity() {
  return (
    <CategoryLayout
      slug="maternity"
      name="Maternity"
      tagline="A beautiful season of waiting"
      description="There is something incredibly beautiful about this season of waiting. Before you meet your little one, there are already so many emotions — the excitement, the quiet moments, the little kicks, and the feeling that life is about to change forever. These photographs are here to preserve that beautiful in-between, so one day you can look back and remember not just how you looked, but how deeply you loved someone you had not even met yet."
      images={MATERNITY_IMAGES}
    />
  )
}