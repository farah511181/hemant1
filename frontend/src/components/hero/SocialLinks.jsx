const SOCIALS = [
  { label: 'FB', href: 'https://www.facebook.com/share/1CojsRnPts/?mibextid=wwXIfr' },
  { label: 'IN', href: 'https://www.instagram.com/hemant_sharma_photography' },
]

export default function SocialLinks() {
  return (
<div className="hidden md:flex absolute left-8 lg:left-12 bottom-6 flex-col gap-3 z-20">
      {SOCIALS.map((s, i) => (
        <div key={s.label} className="flex items-center gap-4">
          {i > 0 && <span className="h-px w-5 bg-ivory/30" aria-hidden />}
          <a
            href={s.href}
            target="_blank"
            rel="noreferrer"
            className="font-sans text-[10px] uppercase tracking-[0.3em] text-ivory/60 hover:text-ivory opacity-80 hover:opacity-100 transition-opacity duration-300"
          >
            {s.label}
          </a>
        </div>
      ))}
    </div>
  )
}
