import type { LucideIcon } from 'lucide-react'
import { SiteImage } from '@/components/cadence/site-image'

type PageHeroProps = {
  title: React.ReactNode
  imageSrc: string
  imageAlt: string
  subtitle?: React.ReactNode
  icon?: LucideIcon
  children?: React.ReactNode
}

/**
 * H1 hero with Cloudflare Images photo (git fallback). Used on inner pages.
 */
export function PageHero({
  title,
  imageSrc,
  imageAlt,
  subtitle,
  icon: Icon,
  children,
}: PageHeroProps) {
  return (
    <section
      className="relative min-h-[420px] overflow-hidden bg-black py-28 md:py-36"
      aria-label="Page heading"
    >
      <SiteImage
        src={imageSrc}
        alt={imageAlt}
        fill
        priority
        className="opacity-80"
      />
      <div
        className="absolute inset-0 bg-black/35"
        aria-hidden
      />
      <div className="relative container mx-auto px-4">
        <div className="mx-auto max-w-4xl text-center text-white">
          {Icon ? <Icon size={40} className="mx-auto mb-8 opacity-80" aria-hidden /> : null}
          <h1 className="mb-6 text-4xl md:text-5xl font-extralight tracking-[0.08em]">{title}</h1>
          {subtitle ? <div className="mb-10 text-lg font-light text-white/90">{subtitle}</div> : null}
          {children}
        </div>
      </div>
    </section>
  )
}
