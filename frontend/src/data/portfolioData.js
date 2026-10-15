// =====================================================
// WEDDING IMAGES
// =====================================================

import WeddingImage1 from '../assets/Imagess/WeddingImagess/Image1.jpeg'
import WeddingImage2 from '../assets/Imagess/WeddingImagess/Image2.jpeg'
import WeddingImage3 from '../assets/Imagess/WeddingImagess/Image3.jpeg'
import WeddingImage4 from '../assets/Imagess/WeddingImagess/Image4.jpeg'
import WeddingImage5 from '../assets/Imagess/WeddingImagess/Image5.jpeg'
import WeddingImage6 from '../assets/Imagess/WeddingImagess/Image6.jpeg'
import WeddingImage7 from '../assets/Imagess/WeddingImagess/Image7.jpeg'
import WeddingImage8 from '../assets/Imagess/WeddingImagess/Image8.jpeg'
import WeddingImage9 from '../assets/Imagess/WeddingImagess/Image9.jpeg'
import WeddingImage10 from '../assets/Imagess/WeddingImagess/Image10.jpeg'
import WeddingImage11 from '../assets/Imagess/WeddingImagess/Image11.jpeg'
import WeddingImage12 from '../assets/Imagess/WeddingImagess/Image12.jpeg'
import WeddingImage13 from '../assets/Imagess/WeddingImagess/Image13.jpeg'
import WeddingImage14 from '../assets/Imagess/WeddingImagess/Image14.jpeg'

// =====================================================
// PRE-WEDDING IMAGES
// =====================================================

import PreWeddingImage1 from '../assets/Imagess/Pre-WeddingImagess/Image1.jpeg'
import PreWeddingImage2 from '../assets/Imagess/Pre-WeddingImagess/Image2.jpeg'
import PreWeddingImage3 from '../assets/Imagess/Pre-WeddingImagess/Image3.jpeg'
import PreWeddingImage4 from '../assets/Imagess/Pre-WeddingImagess/Image4.jpeg'
import PreWeddingImage5 from '../assets/Imagess/Pre-WeddingImagess/Image5.jpeg'
import PreWeddingImage6 from '../assets/Imagess/Pre-WeddingImagess/Image6.jpeg'
import PreWeddingImage7 from '../assets/Imagess/Pre-WeddingImagess/Image7.jpeg'
import PreWeddingImage8 from '../assets/Imagess/Pre-WeddingImagess/Image8.jpeg'
import PreWeddingImage9 from '../assets/Imagess/Pre-WeddingImagess/Image9.jpeg'
import PreWeddingImage10 from '../assets/Imagess/Pre-WeddingImagess/Image10.jpeg'
import PreWeddingImage11 from '../assets/Imagess/Pre-WeddingImagess/Image11.jpeg'
import PreWeddingImage12 from '../assets/Imagess/Pre-WeddingImagess/Image12.jpeg'
import PreWeddingImage13 from '../assets/Imagess/Pre-WeddingImagess/Image13.jpeg'
import PreWeddingImage14 from '../assets/Imagess/Pre-WeddingImagess/Image14.jpeg'
import PreWeddingImage15 from '../assets/Imagess/Pre-WeddingImagess/Image15.jpeg'

// =====================================================
// BRIDAL IMAGES
// =====================================================

import BridalImage1 from '../assets/Imagess/BridalImagess/Image1.jpeg'
import BridalImage2 from '../assets/Imagess/BridalImagess/Image2.jpeg'
import BridalImage3 from '../assets/Imagess/BridalImagess/Image3.jpeg'
import BridalImage4 from '../assets/Imagess/BridalImagess/Image4.jpeg'
import BridalImage5 from '../assets/Imagess/BridalImagess/Image5.jpeg'
import BridalImage6 from '../assets/Imagess/BridalImagess/Image6.jpeg'
import BridalImage7 from '../assets/Imagess/BridalImagess/Image7.jpeg'
import BridalImage8 from '../assets/Imagess/BridalImagess/Image8.jpeg'
import BridalImage9 from '../assets/Imagess/BridalImagess/Image9.jpeg'
import BridalImage10 from '../assets/Imagess/BridalImagess/Image10.jpeg'

// =====================================================
// CANDID IMAGES
// =====================================================

import CandidImage1 from '../assets/Imagess/CandidImagess/Image1.jpeg'
import CandidImage2 from '../assets/Imagess/CandidImagess/Image2.jpeg'
import CandidImage3 from '../assets/Imagess/CandidImagess/Image3.jpeg'
import CandidImage4 from '../assets/Imagess/CandidImagess/Image4.jpeg'
import CandidImage5 from '../assets/Imagess/CandidImagess/Image5.jpeg'
import CandidImage6 from '../assets/Imagess/CandidImagess/Image6.jpeg'
import CandidImage7 from '../assets/Imagess/CandidImagess/Image7.jpeg'
import CandidImage8 from '../assets/Imagess/CandidImagess/Image8.jpeg'
import CandidImage9 from '../assets/Imagess/CandidImagess/Image9.jpeg'
import CandidImage10 from '../assets/Imagess/CandidImagess/Image10.jpeg'

// =====================================================
// GROOM IMAGES
// =====================================================

// All Groom images are expected in GroomImagess.
// If your actual folder is GroomGetImagess, change
// these paths to that folder's exact name.

import GroomImage1 from '../assets/Imagess/GroomImagess/Image1.jpeg'
import GroomImage2 from '../assets/Imagess/GroomImagess/Image2.jpeg'
import GroomImage3 from '../assets/Imagess/GroomImagess/Image3.jpeg'
import GroomImage4 from '../assets/Imagess/GroomImagess/Image4.jpeg'
import GroomImage5 from '../assets/Imagess/GroomImagess/Image5.jpeg'
import GroomImage6 from '../assets/Imagess/GroomImagess/Image6.jpeg'
import GroomImage7 from '../assets/Imagess/GroomImagess/Image7.jpeg'
import GroomImage8 from '../assets/Imagess/GroomImagess/Image8.jpeg'
import GroomImage9 from '../assets/Imagess/GroomImagess/Image9.jpeg'
import GroomImage10 from '../assets/Imagess/GroomImagess/Image10.jpeg'

// =====================================================
// WEDDING IMAGE DATA
// =====================================================

export const WEDDING_IMAGES = [
  WeddingImage1,
  WeddingImage2,
  WeddingImage3,
  WeddingImage4,
  WeddingImage5,
  WeddingImage6,
  WeddingImage7,
  WeddingImage8,
  WeddingImage9,
  WeddingImage10,
  WeddingImage11,
  WeddingImage12,
  WeddingImage13,
  WeddingImage14,
].map((src, index) => ({
  src,
  alt: `Wedding Photography ${index + 1}`,
}))

// =====================================================
// PRE-WEDDING IMAGE DATA
// =====================================================

export const PRE_WEDDING_IMAGES = [
  PreWeddingImage1,
  PreWeddingImage2,
  PreWeddingImage3,
  PreWeddingImage4,
  PreWeddingImage5,
  PreWeddingImage6,
  PreWeddingImage7,
  PreWeddingImage8,
  PreWeddingImage9,
  PreWeddingImage10,
  PreWeddingImage11,
  PreWeddingImage12,
  PreWeddingImage13,
  PreWeddingImage14,
  PreWeddingImage15,
].map((src, index) => ({
  src,
  alt: `Pre-Wedding Photography ${index + 1}`,
}))

// =====================================================
// BRIDAL IMAGE DATA
// =====================================================

export const BRIDAL_IMAGES = [
  BridalImage1,
  BridalImage2,
  BridalImage3,
  BridalImage4,
  BridalImage5,
  BridalImage6,
  BridalImage7,
  BridalImage8,
  BridalImage9,
  BridalImage10,
].map((src, index) => ({
  src,
  alt: `Bridal Photography ${index + 1}`,
}))

// =====================================================
// CANDID IMAGE DATA
// =====================================================

export const CANDID_IMAGES = [
  CandidImage1,
  CandidImage2,
  CandidImage3,
  CandidImage4,
  CandidImage5,
  CandidImage6,
  CandidImage7,
  CandidImage8,
  CandidImage9,
  CandidImage10,
].map((src, index) => ({
  src,
  alt: `Candid Wedding Photography ${index + 1}`,
}))

// =====================================================
// GROOM IMAGE DATA
// =====================================================

export const GROOM_IMAGES = [
  GroomImage1,
  GroomImage2,
  GroomImage3,
  GroomImage4,
  GroomImage5,
  GroomImage6,
  GroomImage7,
  GroomImage8,
  GroomImage9,
  GroomImage10,
].map((src, index) => ({
  src,
  alt: `Groom Photography ${index + 1}`,
}))

// =====================================================
// CATEGORIES
// =====================================================

export const CATEGORIES = [
  {
    id: 1,
    title: 'Wedding',
    slug: 'wedding',
    description:
      'Timeless wedding stories captured with emotion, elegance and authenticity.',
  },
  {
    id: 2,
    title: 'Pre-Wedding',
    slug: 'pre-wedding',
    description:
      'Beautiful pre-wedding stories filled with natural moments and genuine emotions.',
  },
  {
    id: 3,
    title: 'Bridal',
    slug: 'bridal',
    description:
      'Elegant bridal portraits and meaningful moments before the celebration begins.',
  },
  {
    id: 4,
    title: 'Fashion',
    slug: 'fashion',
    description:
      'Creative fashion photography with a modern visual approach.',
  },
  {
    id: 5,
    title: 'Maternity',
    slug: 'maternity',
    description:
      'Beautiful maternity stories celebrating motherhood and new beginnings.',
  },
  {
    id: 6,
    title: 'Candid',
    slug: 'candid',
    description:
      'Real emotions, genuine laughter and beautiful moments captured naturally.',
  },
  {
    id: 7,
    title: 'Groom',
    slug: 'groom',
    description:
      'Portraits and memorable moments celebrating the groom.',
  },
]

// =====================================================
// FILMS
// =====================================================

export const FILMS = [
  {
    id: 1,
    title: 'Every Love Story, Told in Motion',
    category: 'Wedding Films',
    description:
      'Cinematic wedding films created around real emotions, natural moments and unforgettable memories.',
  },
  {
    id: 2,
    title: 'Stories That Stay Forever',
    category: 'Wedding Films',
    description:
      'A visual journey through the emotions, people and moments that make every celebration unique.',
  },
  {
    id: 3,
    title: 'The Beginning of Forever',
    category: 'Pre-Wedding Films',
    description:
      'A beautiful visual story celebrating love before the wedding day.',
  },
]

// =====================================================
// POETRY
// =====================================================

export const POETRY_IMAGES = [
  {
    id: 1,
    title: 'Moments Between Moments',
    description:
      'The quiet emotions that often become the most memorable part of a celebration.',
  },
  {
    id: 2,
    title: 'Where Love Lives',
    description:
      'Stories of connection, laughter and togetherness.',
  },
  {
    id: 3,
    title: 'A Moment To Remember',
    description:
      'Some moments deserve to be remembered exactly as they happened.',
  },
  {
    id: 4,
    title: 'Timeless',
    description:
      'Photography that turns fleeting moments into memories.',
  },
]

// =====================================================
// BLOG POSTS
// =====================================================

export const BLOG_POSTS = [
  {
    id: 1,
    title: 'How We Capture Real Wedding Emotions',
    category: 'Wedding Photography',
    excerpt:
      'Our approach to capturing genuine emotions and authentic wedding moments.',
  },
  {
    id: 2,
    title: 'Why Candid Photography Matters',
    category: 'Photography',
    excerpt:
      'The beauty of photographs that feel natural, honest and completely yours.',
  },
  {
    id: 3,
    title: 'Planning Your Wedding Photography',
    category: 'Wedding Planning',
    excerpt:
      'A simple guide to planning your photography experience for the wedding day.',
  },
  {
    id: 4,
    title: 'Creating Memories That Last',
    category: 'Stories',
    excerpt:
      'Why meaningful photography is about more than simply taking pictures.',
  },
]

// =====================================================
// TESTIMONIALS
// =====================================================

export const TESTIMONIALS = [
  {
    id: 1,
    quote:
      'They made every moment of our celebration feel effortless and beautiful. From the smallest details to the biggest emotions, they captured everything exactly as we remember it. For every celebration we have in the future, they will be the first people we call.',
    name: 'Ananya & Rohan',
    event: 'Wedding & Reception',
  },
  {
    id: 2,
    quote:
      'We trusted them with our destination wedding across two countries, and they never once let us feel distant or unsure. The film still makes us cry. When our daughter gets married someday, we already know who will be behind the camera.',
    name: 'Meera & Arjun',
    event: 'Destination Wedding',
  },
  {
    id: 3,
    quote:
      'From our engagement to our one-year anniversary portraits, they have been with us at every milestone. There is a warmth and patience to the way they work that makes you forget the camera is even there. They are family now.',
    name: 'Sara & Kabir',
    event: 'Engagement & Anniversary',
  },
]

// =====================================================
// GALLERY IMAGES
// =====================================================

export const GALLERY_IMAGES = {
  wedding: WEDDING_IMAGES,
  'pre-wedding': PRE_WEDDING_IMAGES,
  bridal: BRIDAL_IMAGES,
  candid: CANDID_IMAGES,
  groom: GROOM_IMAGES,
}

// =====================================================
// DEFAULT EXPORT
// =====================================================

export default {
  WEDDING_IMAGES,
  PRE_WEDDING_IMAGES,
  BRIDAL_IMAGES,
  CANDID_IMAGES,
  GROOM_IMAGES,
  CATEGORIES,
  FILMS,
  POETRY_IMAGES,
  BLOG_POSTS,
  TESTIMONIALS,
  GALLERY_IMAGES,
}
