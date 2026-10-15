export default function HeroControls({ onPrev, onNext }) {
  return (
    <>
      {/* Previous slide */}
      <button
        onClick={onPrev}
        aria-label="Previous slide"
        className="hidden md:flex absolute left-6 lg:left-10 top-1/2 -translate-y-1/2 z-20 items-center justify-center w-11 h-11 rounded-full border border-ivory/30 bg-charcoal/20 text-ivory/70 hover:text-ivory hover:border-ivory/60 transition-all duration-300 backdrop-blur-sm"
      >
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" aria-hidden>
          <path d="M15 18L9 12L15 6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </button>

      {/* Next slide */}
      <button
        onClick={onNext}
        aria-label="Next slide"
        className="hidden md:flex absolute right-6 lg:right-10 top-1/2 -translate-y-1/2 z-20 items-center justify-center w-11 h-11 rounded-full border border-ivory/30 bg-charcoal/20 text-ivory/70 hover:text-ivory hover:border-ivory/60 transition-all duration-300 backdrop-blur-sm"
      >
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" aria-hidden>
          <path d="M9 6L15 12L9 18" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </button>
    </>
  )
}
