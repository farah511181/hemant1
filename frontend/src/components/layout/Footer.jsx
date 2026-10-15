import { Link } from 'react-router-dom'
import { motion } from 'motion/react'
import logo from '../../assets/logo/logo.png'

const EMAIL = 'contact@hemantsharmaphotography.com'
const PHONE = '+91 7744033650'

const SOCIALS = [
  {
    label: 'Instagram',
    href: 'https://www.instagram.com/hemant_sharma_photography',
    icon: (
      <svg
        width="19"
        height="19"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.3"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <rect x="2.5" y="2.5" width="19" height="19" rx="5.5" />
        <circle cx="12" cy="12" r="4.2" />
        <circle
          cx="17.4"
          cy="6.6"
          r="0.9"
          fill="currentColor"
          stroke="none"
        />
      </svg>
    ),
  },

  {
    label: 'Facebook',
    href: 'https://www.facebook.com/share/1CojsRnPts/?mibextid=wwXIfr',
    icon: (
      <svg
        width="19"
        height="19"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.3"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
      </svg>
    ),
  },

  {
    label: 'Email',
    href: `mailto:${EMAIL}`,
    icon: (
      <svg
        width="19"
        height="19"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.3"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <rect
          x="3"
          y="5"
          width="18"
          height="14"
          rx="1.5"
        />
        <path d="M3 7l9 6 9-6" />
      </svg>
    ),
  },
]

const fadeUp = {
  initial: { opacity: 0, y: 24 },
  whileInView: { opacity: 1, y: 0 },
  viewport: {
    once: true,
    margin: '-60px',
  },
  transition: {
    duration: 0.7,
    ease: 'easeOut',
  },
}

export default function Footer() {
  const year = 2026

  return (
    <footer
      className="w-full"
      style={{
        backgroundColor: '#E2D8CA',
      }}
    >
      {/* ===== MAIN FOOTER ===== */}
      <div
        className="max-w-[1400px] mx-auto px-6 lg:px-16"
        style={{
          paddingTop: '50px',
          paddingBottom: '45px',
        }}
      >
        <div
          className="
            grid
            grid-cols-1
            md:grid-cols-2
            lg:grid-cols-3
            gap-y-10
            md:gap-8
            lg:gap-6
            items-center
          "
        >

          {/* ===== LEFT — FOLLOW US ===== */}
          <motion.div
            {...fadeUp}
            className="
              flex
              flex-col
              items-center
              lg:items-start
              justify-center
              text-center
              lg:text-left
            "
          >
            <h3
              className="font-serif font-light italic leading-tight"
              style={{
                color: '#654C43',
                fontSize: '34px',
                letterSpacing: '4px',
              }}
            >
              Follow Us
            </h3>

            {/* ===== SOCIAL ICONS ===== */}
            <div className="mt-5 flex items-center">
              {SOCIALS.map((s, i) => (
                <span
                  key={s.label}
                  className="flex items-center"
                >
                  {/* Divider */}
                  {i > 0 && (
                    <span
                      className="mx-8 h-[40px] w-px"
                      style={{
                        backgroundColor: '#D5C9BB',
                      }}
                      aria-hidden
                    />
                  )}

                  <motion.a
                    href={s.href}
                    target={
                      s.label === 'Email'
                        ? '_self'
                        : '_blank'
                    }
                    rel={
                      s.label === 'Email'
                        ? undefined
                        : 'noreferrer'
                    }
                    aria-label={s.label}
                    title={
                      s.label === 'Email'
                        ? EMAIL
                        : s.label
                    }
                    whileHover={{
                      y: -3,
                    }}
                    transition={{
                      duration: 0.3,
                      ease: 'easeOut',
                    }}
                    className="
                      flex
                      items-center
                      justify-center
                      w-10
                      h-10
                    "
                  >
                    <span
                      className="transition-colors duration-300"
                      style={{
                        color: '#806B60',
                      }}
                      onMouseEnter={(e) =>
                        (e.currentTarget.style.color =
                          '#654C43')
                      }
                      onMouseLeave={(e) =>
                        (e.currentTarget.style.color =
                          '#806B60')
                      }
                    >
                      {s.icon}
                    </span>
                  </motion.a>
                </span>
              ))}
            </div>
          </motion.div>

          {/* ===== CENTER — OFFICIAL LOGO ===== */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{
              once: true,
              margin: '-60px',
            }}
            transition={{
              duration: 0.9,
              ease: 'easeOut',
            }}
            className="
              flex
              items-center
              justify-center
              order-first
              lg:order-none
              mb-4
              lg:mb-0
              md:col-span-2
              lg:col-span-1
            "
          >
            <div className="flex items-center gap-12 lg:gap-16">

              {/* Left divider */}
              <span
                className="hidden lg:block h-20 w-px"
                style={{
                  backgroundColor: '#D5C9BB',
                }}
                aria-hidden
              />

              {/* Logo */}
              <Link
                to="/"
                aria-label="Hemant Sharma Photography — Home"
                className="block"
              >
                <img
                  src={logo}
                  alt="Hemant Sharma Photography"
                  className="
                    w-[120px]
                    md:w-[155px]
                    lg:w-[220px]
                    h-auto
                    object-contain
                  "
                />
              </Link>

              {/* Right divider */}
              <span
                className="hidden lg:block h-20 w-px"
                style={{
                  backgroundColor: '#D5C9BB',
                }}
                aria-hidden
              />

            </div>
          </motion.div>

          {/* ===== RIGHT — REACH US ===== */}
          <motion.div
            {...fadeUp}
            className="
              flex
              flex-col
              items-center
              lg:items-end
              justify-center
              text-center
              lg:text-right
            "
          >
            <h3
              className="font-serif font-light italic leading-tight"
              style={{
                color: '#654C43',
                fontSize: '34px',
                letterSpacing: '4px',
              }}
            >
              Reach Us
            </h3>

            {/* Phone */}
            <a
              href={`tel:${PHONE}`}
              className="
                mt-3
                font-sans
                text-[17px]
                transition-colors
                duration-300
              "
              style={{
                color: '#806B60',
              }}
              onMouseEnter={(e) =>
                (e.currentTarget.style.color =
                  '#654C43')
              }
              onMouseLeave={(e) =>
                (e.currentTarget.style.color =
                  '#806B60')
              }
            >
              {PHONE}
            </a>

            {/* Book Your Shoot */}
            <Link
              to="/contact"
              className="
                group
                relative
                mt-3
                inline-flex
                items-center
                gap-3
                font-sans
                text-[13px]
                uppercase
                tracking-[0.28em]
                py-1
              "
              style={{
                color: '#654C43',
              }}
            >
              Book Your Shoot

              <span
                className="
                  absolute
                  left-0
                  -bottom-0.5
                  h-px
                  w-0
                  group-hover:w-full
                  transition-all
                  duration-[600ms]
                "
                style={{
                  backgroundColor: '#654C43',
                }}
              />
            </Link>
          </motion.div>

        </div>
      </div>

      {/* ===== COPYRIGHT ===== */}
      <div
        className="w-full flex items-center"
        style={{
          height: '60px',
          backgroundColor: '#FFFFFF',
          borderTop: '1px solid #E5DDD4',
        }}
      >
        <div
          className="
            max-w-[1400px]
            mx-auto
            w-full
            px-6
            lg:px-16
            flex
            items-center
            justify-center
          "
        >
          <p
            className="
              font-sans
              text-[11px]
              uppercase
              tracking-[0.18em]
              text-center
            "
            style={{
              color: '#806B60',
            }}
          >
            © {year} Hemant Sharma Photography. All Rights Reserved.
          </p>

          
<p
  className="font-sans text-[14px] tracking-[0.08em] text-center"
  style={{
    color: '#654C43',
    marginLeft: '40px',
    fontWeight: 500,
  }}> Developed by Farah Naz</p>
        </div>
      </div>
    </footer>
  )
}