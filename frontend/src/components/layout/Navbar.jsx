import { Link, NavLink, useLocation, useNavigate } from 'react-router-dom'
import { motion, AnimatePresence } from 'motion/react'
import { useState, useEffect, useRef } from 'react'
import { Menu, X, ChevronDown } from 'lucide-react'
import logo from '../../assets/logo/logo-white.png'

// ======================================================
// MAIN NAVIGATION
// ======================================================

const NAV_LINKS = [
  { label: 'Home', path: '/' },
  { label: 'About Us', path: '/about' },
  { label: 'Weddings', path: '/photography' },
  { label: 'Studio', path: '/studio' },
  { label: 'Stories', path: '/stories' },
  { label: 'Book Us', path: '/contact' },
]

// ======================================================
// WEDDINGS DROPDOWN
// ======================================================

const WEDDING_LINKS = [
  {
    label: 'Wedding',
    path: '/photography/wedding',
    number: '01',
    description:
      'Timeless celebrations, real emotions and beautiful moments.',
  },
  {
    label: 'Pre-Wedding',
    path: '/photography/pre-wedding',
    number: '02',
    description:'Intimate stories captured with an editorial cinematic feel.',
 },
]

// ======================================================
// STUDIO DROPDOWN
// ======================================================

const STUDIO_LINKS = [
  {
    label: 'Kids',
    path: '/studio/kids',
    number: '01',
    description:
      'Playful portraits and beautiful little moments captured naturally.',
  },
  {
    label: 'Maternity',
    path: '/studio/maternity',
    number: '02',
    description:
      'Elegant portraits celebrating motherhood and new beginnings.',
  },
  {
    label: 'Newborn',
    path: '/studio/newborn',
    number: '03',
    description:
      'Soft and intimate portraits preserving the earliest days of your little one.',
  },
  {
    label: 'Family',
    path: '/studio/family',
    number: '04',
    description:
      'Warm family portraits capturing connection, love and togetherness.',
  },
  {
    label: 'Fashion ',
    path: '/studio/fashion',
    number: '05',
    description:
      'Editorial portraits, creative concepts and fashion-forward visual stories.',
  },
]

// ======================================================
// STORIES DROPDOWN
// ======================================================

const STORIES_LINKS = [
  {
    label: 'Candid',
    path: '/stories/candid',
    number: '01',
    description:
      'Natural emotions, spontaneous moments and beautifully honest frames.',
  },
{
  label: 'Bridal Portraits',
  path: '/stories/bridal',
  number: '02',
  description:
    'Elegant bridal portraits capturing beauty, grace and personality.',
},
  {
    label: 'Groom Portraits',
    path: '/stories/getting-ready',
    number: '03',
    description:
      'The intimate details, emotions and anticipation before the celebration.',
  },
]

// ======================================================
// NAVBAR
// ======================================================

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [hidden, setHidden] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)

  // Desktop Weddings dropdown
  const [weddingsOpen, setWeddingsOpen] = useState(false)

  // Desktop Studio dropdown
  const [studioOpen, setStudioOpen] = useState(false)

  // Desktop Stories dropdown
  const [storiesOpen, setStoriesOpen] = useState(false)

  // Mobile Weddings submenu
  const [mobileWeddingsOpen, setMobileWeddingsOpen] =
    useState(false)

  // Mobile Studio submenu
  const [mobileStudioOpen, setMobileStudioOpen] =
    useState(false)

  // Mobile Stories submenu
  const [mobileStoriesOpen, setMobileStoriesOpen] =
    useState(false)

  const location = useLocation()
  const navigate = useNavigate()

  const lastYRef = useRef(0)
  const rafRef = useRef(null)

  const weddingsRef = useRef(null)
  const studioRef = useRef(null)
  const storiesRef = useRef(null)

  // ======================================================
  // SCROLL HANDLER
  // ======================================================

  useEffect(() => {
    const onScroll = () => {
      if (rafRef.current) return

      rafRef.current = requestAnimationFrame(() => {
        const y = window.scrollY
        const delta = y - lastYRef.current

        if (y <= 40) {
          setHidden(false)
          setScrolled(false)
        } else {
          setScrolled(true)

          if (delta > 4) {
            setHidden(true)
          } else if (delta < -4) {
            setHidden(false)
          }
        }

        lastYRef.current = y
        rafRef.current = null
      })
    }

    window.addEventListener('scroll', onScroll, {
      passive: true,
    })

    return () => {
      window.removeEventListener('scroll', onScroll)

      if (rafRef.current) {
        cancelAnimationFrame(rafRef.current)
      }
    }
  }, [])

  // ======================================================
  // CLOSE MENUS AFTER NAVIGATION
  // ======================================================

  useEffect(() => {
    setMobileOpen(false)
    setWeddingsOpen(false)
    setStudioOpen(false)
    setStoriesOpen(false)
    setMobileWeddingsOpen(false)
    setMobileStudioOpen(false)
    setMobileStoriesOpen(false)
  }, [location.pathname])

  // ======================================================
  // CLOSE DESKTOP DROPDOWNS WHEN CLICKING OUTSIDE
  // ======================================================

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        weddingsRef.current &&
        !weddingsRef.current.contains(event.target)
      ) {
        setWeddingsOpen(false)
      }

      if (
        studioRef.current &&
        !studioRef.current.contains(event.target)
      ) {
        setStudioOpen(false)
      }

      if (
        storiesRef.current &&
        !storiesRef.current.contains(event.target)
      ) {
        setStoriesOpen(false)
      }
    }

    document.addEventListener(
      'mousedown',
      handleClickOutside
    )

    return () => {
      document.removeEventListener(
        'mousedown',
        handleClickOutside
      )
    }
  }, [])

  // ======================================================
  // NAVBAR STATE
  // ======================================================

  const solid = scrolled || mobileOpen
  const isHidden = hidden && !mobileOpen

  // ======================================================
  // LINK STYLE
  // ======================================================

  const linkClass = (isActive) => {
    const base =
      'font-sans text-[11px] lg:text-[11px] uppercase tracking-[0.28em] transition-all duration-300 relative py-2'

    return `${base} ${
      isActive
        ? 'text-sand'
        : 'text-ivory/85 hover:text-ivory'
    }`
  }

  // ======================================================
  // ACTIVE STATES
  // ======================================================

  const isWeddingsActive =
    location.pathname.startsWith('/photography')

  const isStudioActive =
    location.pathname.startsWith('/studio')

  const isStoriesActive =
    location.pathname.startsWith('/stories')

  // ======================================================
  // HANDLE WEDDINGS BUTTON
  // ======================================================

  const handleWeddingsClick = () => {
    setWeddingsOpen((value) => !value)
    setStudioOpen(false)
    setStoriesOpen(false)
  }

  // ======================================================
  // HANDLE STUDIO BUTTON
  // ======================================================

  const handleStudioClick = () => {
    setStudioOpen((value) => !value)
    setWeddingsOpen(false)
    setStoriesOpen(false)
  }

  // ======================================================
  // HANDLE STORIES BUTTON
  // ======================================================

  const handleStoriesClick = () => {
    setStoriesOpen((value) => !value)
    setWeddingsOpen(false)
    setStudioOpen(false)
  }

  // ======================================================
  // HANDLE MOBILE WEDDINGS
  // ======================================================

  const handleMobileWeddingsClick = () => {
    setMobileWeddingsOpen((value) => !value)
    setMobileStudioOpen(false)
    setMobileStoriesOpen(false)
  }

  // ======================================================
  // HANDLE MOBILE STUDIO
  // ======================================================

  const handleMobileStudioClick = () => {
    setMobileStudioOpen((value) => !value)
    setMobileWeddingsOpen(false)
    setMobileStoriesOpen(false)
  }

  // ======================================================
  // HANDLE MOBILE STORIES
  // ======================================================

  const handleMobileStoriesClick = () => {
    setMobileStoriesOpen((value) => !value)
    setMobileWeddingsOpen(false)
    setMobileStudioOpen(false)
  }

  // ======================================================
  // GO TO WEDDINGS LANDING
  // ======================================================

  const handleWeddingsTitleClick = () => {
    setWeddingsOpen(false)
    navigate('/photography')
  }

  // ======================================================
  // GO TO STUDIO LANDING
  // ======================================================

  const handleStudioTitleClick = () => {
    setStudioOpen(false)
    navigate('/studio')
  }

  // ======================================================
  // GO TO STORIES LANDING
  // ======================================================

  const handleStoriesTitleClick = () => {
    setStoriesOpen(false)
    navigate('/stories')
  }

  // ======================================================
  // RETURN
  // ======================================================

  return (
    <header
      className="fixed top-0 left-0 right-0 w-full z-[9999]"
      style={{
        transform: isHidden
          ? 'translateY(-100%)'
          : 'translateY(0)',

        transition:
          'transform 0.4s ease, background-color 0.3s ease, backdrop-filter 0.3s ease',

        backgroundColor: solid
          ? '#4e392f'
          : 'transparent',

        backdropFilter: solid
          ? 'blur(18px)'
          : 'blur(0px)',

        WebkitBackdropFilter: solid
          ? 'blur(18px)'
          : 'blur(0px)',
      }}
    >

      {/* ======================================================
          NAVBAR
          ====================================================== */}

      <nav className="w-full">

        <div className="w-full px-6 lg:px-8 py-4 flex items-center">

          {/* ======================================================
              LEFT: LOGO
              ====================================================== */}

          <div className="-ml-2 lg:-ml-4 flex-shrink-0">

            <Link
              to="/"
              aria-label="Hemant Sharma Photography"
            >
              <img
                src={logo}
                alt="Hemant Sharma Photography"
                className="w-32 lg:w-32 h-auto object-contain"
              />
            </Link>

          </div>

          {/* ======================================================
              RIGHT: DESKTOP NAVIGATION
              ====================================================== */}

          <div className="hidden lg:flex items-center ml-auto">

            <ul className="flex items-center gap-7">

              {NAV_LINKS.map((link) => {

                // ==================================================
                // WEDDINGS
                // ==================================================

                if (link.label === 'Weddings') {
                  return (
                    <li
                      key={link.label}
                      ref={weddingsRef}
                      className="relative"
                    >

                      <button
                        type="button"
                        onClick={handleWeddingsClick}
                        aria-expanded={weddingsOpen}
                        aria-haspopup="true"
                        className={`
                          ${linkClass(isWeddingsActive)}
                          flex items-center gap-2
                        `}
                      >
                        <span>
                          Weddings
                        </span>

                        <motion.span
                          animate={{
                            rotate: weddingsOpen
                              ? 180
                              : 0,
                          }}
                          transition={{
                            duration: 0.25,
                          }}
                          className="flex items-center"
                        >
                          <ChevronDown
                            size={13}
                            strokeWidth={1.2}
                          />
                        </motion.span>
                      </button>

                      <AnimatePresence>

                        {weddingsOpen && (

                          <motion.div
                            initial={{
                              opacity: 0,
                              y: 12,
                              scale: 0.98,
                            }}
                            animate={{
                              opacity: 1,
                              y: 0,
                              scale: 1,
                            }}
                            exit={{
                              opacity: 0,
                              y: 10,
                              scale: 0.98,
                            }}
                            transition={{
                              duration: 0.3,
                              ease: [
                                0.22,
                                1,
                                0.36,
                                1,
                              ],
                            }}
                            className="
                              absolute
                              top-full
                              right-0
                              mt-5
                              w-[430px]
                              overflow-hidden
                              border
                              border-ivory/10
                              bg-[#4e392f]/95
                              backdrop-blur-2xl
                              shadow-2xl
                            "
                          >

                            <div className="px-7 pt-7 pb-5 border-b border-ivory/10">

                              <div className="flex items-center justify-between">

                                <div>

                                  <p className="
                                    font-sans
                                    text-[9px]
                                    uppercase
                                    tracking-[0.35em]
                                    text-ivory/45
                                    mb-2
                                  ">
                                    Explore Our Work
                                  </p>

                                  <h3 className="
                                    font-serif
                                    text-2xl
                                    italic
                                    text-ivory
                                  ">
                                    Weddings
                                  </h3>

                                </div>

                                <button
                                  type="button"
                                  onClick={handleWeddingsTitleClick}
                                  className="
                                    font-sans
                                    text-[9px]
                                    uppercase
                                    tracking-[0.25em]
                                    text-ivory/45
                                    hover:text-sand
                                    transition-colors
                                  "
                                >
                                  View All
                                </button>

                              </div>

                            </div>

                            <div className="p-3">

                              {WEDDING_LINKS.map(
                                (item, index) => (

                                  <motion.div
                                    key={item.path}
                                    initial={{
                                      opacity: 0,
                                      x: -8,
                                    }}
                                    animate={{
                                      opacity: 1,
                                      x: 0,
                                    }}
                                    transition={{
                                      delay:
                                        index * 0.06,
                                      duration: 0.3,
                                    }}
                                  >

                                    <Link
                                      to={item.path}
                                      className="
                                        group
                                        flex
                                        items-center
                                        gap-5
                                        px-4
                                        py-4
                                        transition-all
                                        duration-300
                                        hover:bg-ivory/5
                                      "
                                    >

                                      <span className="
                                        font-sans
                                        text-[9px]
                                        tracking-[0.2em]
                                        text-ivory/30
                                        w-6
                                      ">
                                        {item.number}
                                      </span>

                                      <div className="flex-1">

                                        <h4 className="
                                          font-serif
                                          text-xl
                                          italic
                                          text-ivory
                                          group-hover:text-sand
                                          transition-colors
                                          duration-300
                                        ">
                                          {item.label}
                                        </h4>

                                        <p className="
                                          mt-1
                                          font-sans
                                          text-[9px]
                                          leading-relaxed
                                          tracking-[0.04em]
                                          text-ivory/45
                                          max-w-[260px]
                                        ">
                                          {item.description}
                                        </p>

                                      </div>

                                      <span className="
                                        text-ivory/25
                                        group-hover:text-sand
                                        group-hover:translate-x-1
                                        transition-all
                                        duration-300
                                        text-lg
                                      ">
                                        →
                                      </span>

                                    </Link>

                                  </motion.div>

                                )
                              )}

                            </div>

                            <div className="
                              px-7
                              py-4
                              border-t
                              border-ivory/10
                            ">

                              <p className="
                                font-sans
                                text-[8px]
                                uppercase
                                tracking-[0.3em]
                                text-ivory/30
                              ">
                                Weddings · Pre-Weddings
                              </p>

                            </div>

                          </motion.div>

                        )}

                      </AnimatePresence>

                    </li>
                  )
                }

                // ==================================================
                // STUDIO
                // ==================================================

                if (link.label === 'Studio') {
                  return (
                    <li
                      key={link.label}
                      ref={studioRef}
                      className="relative"
                    >

                      <button
                        type="button"
                        onClick={handleStudioClick}
                        aria-expanded={studioOpen}
                        aria-haspopup="true"
                        className={`
                          ${linkClass(isStudioActive)}
                          flex items-center gap-2
                        `}
                      >
                        <span>
                          Studio
                        </span>

                        <motion.span
                          animate={{
                            rotate: studioOpen
                              ? 180
                              : 0,
                          }}
                          transition={{
                            duration: 0.25,
                          }}
                          className="flex items-center"
                        >
                          <ChevronDown
                            size={13}
                            strokeWidth={1.2}
                          />
                        </motion.span>
                      </button>

                      <AnimatePresence>

                        {studioOpen && (

                          <motion.div
                            initial={{
                              opacity: 0,
                              y: 12,
                              scale: 0.98,
                            }}
                            animate={{
                              opacity: 1,
                              y: 0,
                              scale: 1,
                            }}
                            exit={{
                              opacity: 0,
                              y: 10,
                              scale: 0.98,
                            }}
                            transition={{
                              duration: 0.3,
                              ease: [
                                0.22,
                                1,
                                0.36,
                                1,
                              ],
                            }}
                            className="
                              absolute
                              top-full
                              right-0
                              mt-5
                              w-[430px]
                              overflow-hidden
                              border
                              border-ivory/10
                              bg-[#4e392f]/95
                              backdrop-blur-2xl
                              shadow-2xl
                            "
                          >

                            {/* TOP INTRO */}

                            <div className="px-7 pt-7 pb-5 border-b border-ivory/10">

                              <div className="flex items-center justify-between">

                                <div>

                                  <p className="
                                    font-sans
                                    text-[9px]
                                    uppercase
                                    tracking-[0.35em]
                                    text-ivory/45
                                    mb-2
                                  ">
                                    Explore Our Studio
                                  </p>

                                  <h3 className="
                                    font-serif
                                    text-2xl
                                    italic
                                    text-ivory
                                  ">
                                    Studio
                                  </h3>

                                </div>

                                <button
                                  type="button"
                                  onClick={handleStudioTitleClick}
                                  className="
                                    font-sans
                                    text-[9px]
                                    uppercase
                                    tracking-[0.25em]
                                    text-ivory/45
                                    hover:text-sand
                                    transition-colors
                                  "
                                >
                                  View All
                                </button>

                              </div>

                            </div>

                            {/* STUDIO CATEGORY LINKS */}

                            <div className="p-3">

                              {STUDIO_LINKS.map(
                                (item, index) => (

                                  <motion.div
                                    key={item.path}
                                    initial={{
                                      opacity: 0,
                                      x: -8,
                                    }}
                                    animate={{
                                      opacity: 1,
                                      x: 0,
                                    }}
                                    transition={{
                                      delay:
                                        index * 0.06,
                                      duration: 0.3,
                                    }}
                                  >

                                    <Link
                                      to={item.path}
                                      className="
                                        group
                                        flex
                                        items-center
                                        gap-5
                                        px-4
                                        py-4
                                        transition-all
                                        duration-300
                                        hover:bg-ivory/5
                                      "
                                    >

                                      <span className="
                                        font-sans
                                        text-[9px]
                                        tracking-[0.2em]
                                        text-ivory/30
                                        w-6
                                      ">
                                        {item.number}
                                      </span>

                                      <div className="flex-1">

                                        <h4 className="
                                          font-serif
                                          text-xl
                                          italic
                                          text-ivory
                                          group-hover:text-sand
                                          transition-colors
                                          duration-300
                                        ">
                                          {item.label}
                                        </h4>

                                        <p className="
                                          mt-1
                                          font-sans
                                          text-[9px]
                                          leading-relaxed
                                          tracking-[0.04em]
                                          text-ivory/45
                                          max-w-[260px]
                                        ">
                                          {item.description}
                                        </p>

                                      </div>

                                      <span className="
                                        text-ivory/25
                                        group-hover:text-sand
                                        group-hover:translate-x-1
                                        transition-all
                                        duration-300
                                        text-lg
                                      ">
                                        →
                                      </span>

                                    </Link>

                                  </motion.div>

                                )
                              )}

                            </div>

                            {/* BOTTOM LINE */}

                            <div className="
                              px-7
                              py-4
                              border-t
                              border-ivory/10
                            ">

                              <p className="
                                font-sans
                                text-[8px]
                                uppercase
                                tracking-[0.3em]
                                text-ivory/30
                              ">
                                Kids · Maternity · Newborn · Family · Fashion
                              </p>

                            </div>

                          </motion.div>

                        )}

                      </AnimatePresence>

                    </li>
                  )
                }

                // ==================================================
                // STORIES
                // ==================================================

                if (link.label === 'Stories') {
                  return (
                    <li
                      key={link.label}
                      ref={storiesRef}
                      className="relative"
                    >

                      <button
                        type="button"
                        onClick={handleStoriesClick}
                        aria-expanded={storiesOpen}
                        aria-haspopup="true"
                        className={`
                          ${linkClass(isStoriesActive)}
                          flex items-center gap-2
                        `}
                      >
                        <span>
                          Stories
                        </span>

                        <motion.span
                          animate={{
                            rotate: storiesOpen
                              ? 180
                              : 0,
                          }}
                          transition={{
                            duration: 0.25,
                          }}
                          className="flex items-center"
                        >
                          <ChevronDown
                            size={13}
                            strokeWidth={1.2}
                          />
                        </motion.span>
                      </button>

                      <AnimatePresence>

                        {storiesOpen && (

                          <motion.div
                            initial={{
                              opacity: 0,
                              y: 12,
                              scale: 0.98,
                            }}
                            animate={{
                              opacity: 1,
                              y: 0,
                              scale: 1,
                            }}
                            exit={{
                              opacity: 0,
                              y: 10,
                              scale: 0.98,
                            }}
                            transition={{
                              duration: 0.3,
                              ease: [
                                0.22,
                                1,
                                0.36,
                                1,
                              ],
                            }}
                            className="
                              absolute
                              top-full
                              right-0
                              mt-5
                              w-[430px]
                              overflow-hidden
                              border
                              border-ivory/10
                              bg-[#4e392f]/95
                              backdrop-blur-2xl
                              shadow-2xl
                            "
                          >

                            <div className="px-7 pt-7 pb-5 border-b border-ivory/10">

                              <div className="flex items-center justify-between">

                                <div>

                                  <p className="
                                    font-sans
                                    text-[9px]
                                    uppercase
                                    tracking-[0.35em]
                                    text-ivory/45
                                    mb-2
                                  ">
                                    Explore Our Stories
                                  </p>

                                  <h3 className="
                                    font-serif
                                    text-2xl
                                    italic
                                    text-ivory
                                  ">
                                    Stories
                                  </h3>

                                </div>

                                <button
                                  type="button"
                                  onClick={handleStoriesTitleClick}
                                  className="
                                    font-sans
                                    text-[9px]
                                    uppercase
                                    tracking-[0.25em]
                                    text-ivory/45
                                    hover:text-sand
                                    transition-colors
                                  "
                                >
                                  View All
                                </button>

                              </div>

                            </div>

                            <div className="p-3">

                              {STORIES_LINKS.map(
                                (item, index) => (

                                  <motion.div
                                    key={item.path}
                                    initial={{
                                      opacity: 0,
                                      x: -8,
                                    }}
                                    animate={{
                                      opacity: 1,
                                      x: 0,
                                    }}
                                    transition={{
                                      delay:
                                        index * 0.06,
                                      duration: 0.3,
                                    }}
                                  >

                                    <Link
                                      to={item.path}
                                      className="
                                        group
                                        flex
                                        items-center
                                        gap-5
                                        px-4
                                        py-4
                                        transition-all
                                        duration-300
                                        hover:bg-ivory/5
                                      "
                                    >

                                      <span className="
                                        font-sans
                                        text-[9px]
                                        tracking-[0.2em]
                                        text-ivory/30
                                        w-6
                                      ">
                                        {item.number}
                                      </span>

                                      <div className="flex-1">

                                        <h4 className="
                                          font-serif
                                          text-xl
                                          italic
                                          text-ivory
                                          group-hover:text-sand
                                          transition-colors
                                          duration-300
                                        ">
                                          {item.label}
                                        </h4>

                                        <p className="
                                          mt-1
                                          font-sans
                                          text-[9px]
                                          leading-relaxed
                                          tracking-[0.04em]
                                          text-ivory/45
                                          max-w-[260px]
                                        ">
                                          {item.description}
                                        </p>

                                      </div>

                                      <span className="
                                        text-ivory/25
                                        group-hover:text-sand
                                        group-hover:translate-x-1
                                        transition-all
                                        duration-300
                                        text-lg
                                      ">
                                        →
                                      </span>

                                    </Link>

                                  </motion.div>

                                )
                              )}

                            </div>

                            <div className="
                              px-7
                              py-4
                              border-t
                              border-ivory/10
                            ">

                              <p className="
                                font-sans
                                text-[8px]
                                uppercase
                                tracking-[0.3em]
                                text-ivory/30
                              ">
                                Candid · Bridal · Editorial
                              </p>

                            </div>

                          </motion.div>

                        )}

                      </AnimatePresence>

                    </li>
                  )
                }

                // ==================================================
                // OTHER DESKTOP LINKS
                // ==================================================

                return (
                  <li
                    key={link.label}
                    className="relative"
                  >

                    <NavLink
                      to={link.path}
                      className={({ isActive }) =>
                        linkClass(isActive)
                      }
                    >
                      {link.label}
                    </NavLink>

                  </li>
                )
              })}

            </ul>

            {/* INFO */}
          </div>

          {/* ======================================================
              MOBILE MENU TOGGLE
              ====================================================== */}

          <button
            type="button"
            className="
              lg:hidden
              relative
              z-[60]
              ml-auto
              transition-colors
              text-ivory
            "
            onClick={() =>
              setMobileOpen((value) => !value)
            }
            aria-label="Toggle menu"
            aria-expanded={mobileOpen}
          >

            {mobileOpen ? (
              <X
                size={22}
                strokeWidth={1}
              />
            ) : (
              <Menu
                size={22}
                strokeWidth={1}
              />
            )}

          </button>

        </div>

      </nav>

      {/* ======================================================
          MOBILE MENU
          ====================================================== */}

      <AnimatePresence>

        {mobileOpen && (

          <motion.div
            initial={{
              opacity: 0,
              height: 0,
            }}
            animate={{
              opacity: 1,
              height: 'auto',
            }}
            exit={{
              opacity: 0,
              height: 0,
            }}
            transition={{
              duration: 0.4,
              ease: [
                0.22,
                1,
                0.36,
                1,
              ],
            }}
            className="
              lg:hidden
              bg-[#4e392f]
              backdrop-blur-2xl
              overflow-hidden
              border-t
              border-ivory/10
            "
          >

            <ul className="px-8 py-8 flex flex-col gap-1">

              {NAV_LINKS.map((link, i) => {

                // ==================================================
                // MOBILE WEDDINGS
                // ==================================================

                if (link.label === 'Weddings') {

                  return (
                    <motion.li
                      key={link.label}
                      initial={{
                        opacity: 0,
                        x: -12,
                      }}
                      animate={{
                        opacity: 1,
                        x: 0,
                      }}
                      transition={{
                        delay: i * 0.05,
                        duration: 0.4,
                      }}
                    >

                      <button
                        type="button"
                        onClick={
                          handleMobileWeddingsClick
                        }
                        className="
                          w-full
                          flex
                          items-center
                          justify-between
                          font-serif
                          text-3xl
                          italic
                          py-2
                          text-left
                          transition-colors
                          text-ivory
                        "
                        aria-expanded={
                          mobileWeddingsOpen
                        }
                      >

                        <span>
                          Weddings
                        </span>

                        <motion.span
                          animate={{
                            rotate:
                              mobileWeddingsOpen
                                ? 180
                                : 0,
                          }}
                          transition={{
                            duration: 0.25,
                          }}
                        >
                          <ChevronDown
                            size={20}
                            strokeWidth={1}
                          />
                        </motion.span>

                      </button>

                      <AnimatePresence>

                        {mobileWeddingsOpen && (

                          <motion.div
                            initial={{
                              opacity: 0,
                              height: 0,
                            }}
                            animate={{
                              opacity: 1,
                              height: 'auto',
                            }}
                            exit={{
                              opacity: 0,
                              height: 0,
                            }}
                            transition={{
                              duration: 0.35,
                              ease: [
                                0.22,
                                1,
                                0.36,
                                1,
                              ],
                            }}
                            className="
                              overflow-hidden
                              pl-5
                              border-l
                              border-ivory/15
                              mt-2
                              mb-3
                            "
                          >

                            {WEDDING_LINKS.map(
                              (item, index) => (

                                <motion.div
                                  key={item.path}
                                  initial={{
                                    opacity: 0,
                                    x: -8,
                                  }}
                                  animate={{
                                    opacity: 1,
                                    x: 0,
                                  }}
                                  transition={{
                                    delay:
                                      index * 0.05,
                                    duration: 0.3,
                                  }}
                                >

                                  <NavLink
                                    to={item.path}
                                    className="
                                      group
                                      flex
                                      items-center
                                      gap-4
                                      py-3
                                    "
                                  >

                                    <span className="
                                      font-sans
                                      text-[9px]
                                      tracking-[0.2em]
                                      text-ivory/30
                                    ">
                                      {item.number}
                                    </span>

                                    <span className="
                                      font-serif
                                      text-xl
                                      italic
                                      text-ivory/80
                                      group-hover:text-sand
                                      transition-colors
                                    ">
                                      {item.label}
                                    </span>

                                  </NavLink>

                                </motion.div>

                              )
                            )}

                          </motion.div>

                        )}

                      </AnimatePresence>

                    </motion.li>
                  )
                }

                // ==================================================
                // MOBILE STUDIO
                // ==================================================

                if (link.label === 'Studio') {

                  return (
                    <motion.li
                      key={link.label}
                      initial={{
                        opacity: 0,
                        x: -12,
                      }}
                      animate={{
                        opacity: 1,
                        x: 0,
                      }}
                      transition={{
                        delay: i * 0.05,
                        duration: 0.4,
                      }}
                    >

                      <button
                        type="button"
                        onClick={
                          handleMobileStudioClick
                        }
                        className="
                          w-full
                          flex
                          items-center
                          justify-between
                          font-serif
                          text-3xl
                          italic
                          py-2
                          text-left
                          transition-colors
                          text-ivory
                        "
                        aria-expanded={
                          mobileStudioOpen
                        }
                      >

                        <span>
                          Studio
                        </span>

                        <motion.span
                          animate={{
                            rotate:
                              mobileStudioOpen
                                ? 180
                                : 0,
                          }}
                          transition={{
                            duration: 0.25,
                          }}
                        >
                          <ChevronDown
                            size={20}
                            strokeWidth={1}
                          />
                        </motion.span>

                      </button>

                      <AnimatePresence>

                        {mobileStudioOpen && (

                          <motion.div
                            initial={{
                              opacity: 0,
                              height: 0,
                            }}
                            animate={{
                              opacity: 1,
                              height: 'auto',
                            }}
                            exit={{
                              opacity: 0,
                              height: 0,
                            }}
                            transition={{
                              duration: 0.35,
                              ease: [
                                0.22,
                                1,
                                0.36,
                                1,
                              ],
                            }}
                            className="
                              overflow-hidden
                              pl-5
                              border-l
                              border-ivory/15
                              mt-2
                              mb-3
                            "
                          >

                            {STUDIO_LINKS.map(
                              (item, index) => (

                                <motion.div
                                  key={item.path}
                                  initial={{
                                    opacity: 0,
                                    x: -8,
                                  }}
                                  animate={{
                                    opacity: 1,
                                    x: 0,
                                  }}
                                  transition={{
                                    delay:
                                      index * 0.05,
                                    duration: 0.3,
                                  }}
                                >

                                  <NavLink
                                    to={item.path}
                                    className="
                                      group
                                      flex
                                      items-center
                                      gap-4
                                      py-3
                                    "
                                  >

                                    <span className="
                                      font-sans
                                      text-[9px]
                                      tracking-[0.2em]
                                      text-ivory/30
                                    ">
                                      {item.number}
                                    </span>

                                    <span className="
                                      font-serif
                                      text-xl
                                      italic
                                      text-ivory/80
                                      group-hover:text-sand
                                      transition-colors
                                    ">
                                      {item.label}
                                    </span>

                                  </NavLink>

                                </motion.div>

                              )
                            )}

                          </motion.div>

                        )}

                      </AnimatePresence>

                    </motion.li>
                  )
                }

                // ==================================================
                // MOBILE STORIES
                // ==================================================

                if (link.label === 'Stories') {

                  return (
                    <motion.li
                      key={link.label}
                      initial={{
                        opacity: 0,
                        x: -12,
                      }}
                      animate={{
                        opacity: 1,
                        x: 0,
                      }}
                      transition={{
                        delay: i * 0.05,
                        duration: 0.4,
                      }}
                    >

                      <button
                        type="button"
                        onClick={
                          handleMobileStoriesClick
                        }
                        className="
                          w-full
                          flex
                          items-center
                          justify-between
                          font-serif
                          text-3xl
                          italic
                          py-2
                          text-left
                          transition-colors
                          text-ivory
                        "
                        aria-expanded={
                          mobileStoriesOpen
                        }
                      >

                        <span>
                          Stories
                        </span>

                        <motion.span
                          animate={{
                            rotate:
                              mobileStoriesOpen
                                ? 180
                                : 0,
                          }}
                          transition={{
                            duration: 0.25,
                          }}
                        >
                          <ChevronDown
                            size={20}
                            strokeWidth={1}
                          />
                        </motion.span>

                      </button>

                      <AnimatePresence>

                        {mobileStoriesOpen && (

                          <motion.div
                            initial={{
                              opacity: 0,
                              height: 0,
                            }}
                            animate={{
                              opacity: 1,
                              height: 'auto',
                            }}
                            exit={{
                              opacity: 0,
                              height: 0,
                            }}
                            transition={{
                              duration: 0.35,
                              ease: [
                                0.22,
                                1,
                                0.36,
                                1,
                              ],
                            }}
                            className="
                              overflow-hidden
                              pl-5
                              border-l
                              border-ivory/15
                              mt-2
                              mb-3
                            "
                          >

                            {STORIES_LINKS.map(
                              (item, index) => (

                                <motion.div
                                  key={item.path}
                                  initial={{
                                    opacity: 0,
                                    x: -8,
                                  }}
                                  animate={{
                                    opacity: 1,
                                    x: 0,
                                  }}
                                  transition={{
                                    delay:
                                      index * 0.05,
                                    duration: 0.3,
                                  }}
                                >

                                  <NavLink
                                    to={item.path}
                                    className="
                                      group
                                      flex
                                      items-center
                                      gap-4
                                      py-3
                                    "
                                  >

                                    <span className="
                                      font-sans
                                      text-[9px]
                                      tracking-[0.2em]
                                      text-ivory/30
                                    ">
                                      {item.number}
                                    </span>

                                    <span className="
                                      font-serif
                                      text-xl
                                      italic
                                      text-ivory/80
                                      group-hover:text-sand
                                      transition-colors
                                    ">
                                      {item.label}
                                    </span>

                                  </NavLink>

                                </motion.div>

                              )
                            )}

                          </motion.div>

                        )}

                      </AnimatePresence>

                    </motion.li>
                  )
                }

                // ==================================================
                // OTHER MOBILE LINKS
                // ==================================================

                return (
                  <motion.li
                    key={link.label}
                    initial={{
                      opacity: 0,
                      x: -12,
                    }}
                    animate={{
                      opacity: 1,
                      x: 0,
                    }}
                    transition={{
                      delay: i * 0.05,
                      duration: 0.4,
                    }}
                  >

                    <NavLink
                      to={link.path}
                      className={({ isActive }) =>
                        `
                          font-serif
                          text-3xl
                          italic
                          py-2
                          block
                          transition-colors
                          ${
                            isActive
                              ? 'text-sand'
                              : 'text-ivory hover:text-sand'
                          }
                        `
                      }
                    >
                      {link.label}
                    </NavLink>

                  </motion.li>
                )

              })}

            </ul>

          </motion.div>

        )}

      </AnimatePresence>

    </header>
  )
}