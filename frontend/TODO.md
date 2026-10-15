# Image Fix Implementation TODO

## Data layer ✅
- [x] portfolioData.js: added imports for new images (PW9-PW14, W13, F15, F16)
- [x] portfolioData.js: populated GALLERY_IMAGES per category with appropriate images
- [x] Updated gallery arrays to use newly added Images/ folder images
- [x] pre-wedding gallery expanded with PW9, PW10, PW11, PW13
- [x] post-wedding gallery expanded with PW12, PW14
- [x] wedding gallery expanded with W13
- [x] family gallery expanded with F15, F16

## Home page image sections ✅
- [x] FeaturedWork.jsx: `w-full h-auto object-contain` — full subject visible, natural ratio
- [x] FeaturedFilms.jsx: object-contain (video poster)
- [x] JournalPreview.jsx: `w-full h-auto object-contain` — full image, natural ratio
- [x] InstagramPreview.jsx: `w-full h-auto object-contain` — full image, natural ratio
- [x] AboutPreview.jsx: removed fixed `aspect-[9/16]` container → `w-full h-auto object-contain` so W13 renders fully at natural ratio
- [x] Testimonials.jsx: object-contain (avatar keeps full subject)

## Shared / gallery components ✅
- [x] GalleryCard.jsx: `w-full h-auto object-contain` — full image, natural ratio (no forced 3:4 box)
- [x] PhotographyGallery.jsx: main image `w-full h-auto object-contain`; thumbnails `object-contain object-center`
- [x] PhotographyCategoryCard.jsx: `w-full h-auto object-contain`

## Other non-Hero image sections ✅
- [x] Films.jsx: `w-full h-auto object-contain`
- [x] Poetry.jsx: `w-full h-auto object-contain`
- [x] Blog.jsx: `w-full h-auto object-contain`

## Protected / intentional ✅
- [x] Hero section — completely untouched
- [x] Founder image (clint image.jpeg) — untouched
- [x] PageHero / BlogDetail / FilmDetail full-bleed background images keep `object-cover` (decorative backgrounds with dark overlays)

## Verification ✅
- [x] `npm run build` — succeeded (all new images bundled, no import errors)
- [x] All non-Hero content photography now uses `w-full h-auto object-contain` (no cropping, no stretching, natural aspect ratio)
- [x] Confirmed remaining object-cover usages are only intentional full-bleed background images (PageHero, BlogDetail, FilmDetail) and the protected Hero + Founder sections
