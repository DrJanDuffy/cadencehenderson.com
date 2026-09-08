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
      className="relative min-h-[280px] overflow-hidden bg-slate-900 py-20"
      aria-label="Page heading"
    >
      <SiteImage
        src={imageSrc}
        alt={imageAlt}
        fill
        priority
        className="opacity-90"
      />
      <div
        className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/40 to-black/25"
        aria-hidden
      />
      <div className="relative container mx-auto px-4">
        <div className="mx-auto max-w-4xl text-center text-white">
          {Icon ? <Icon size={64} className="mx-auto mb-6" aria-hidden /> : null}
          <h1 className="mb-6 text-5xl font-bold">{title}</h1>
          {subtitle ? <div className="mb-8 text-xl">{subtitle}</div> : null}
          {children}
        </div>
      </div>
    </section>
  )
}
