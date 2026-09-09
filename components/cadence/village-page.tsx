import Link from 'next/link'
import { Home } from 'lucide-react'
import { PageHero } from '@/components/cadence/page-hero'
import { AgentContactCta } from '@/components/cadence/agent-contact-cta'
import { Navigation } from '@/components/cadence/navigation'
import { Footer } from '@/components/cadence/footer'
import { BreadcrumbSchema } from '@/components/schema/breadcrumb'
import { RealScoutOfficeListings } from '@/components/idx/realscout-office-listings'
import { Button } from '@/components/ui/button'
import { CONTACT_INFO } from '@/components/cadence/contact-info'
import { cfImage, SITE_IMAGES } from '@/lib/cloudflare-images'
import { getVillagesByBuilder, type Village } from '@/lib/cadence-nv-catalog'

const BASE = 'https://www.cadencehenderson.com'

const HERO_BY_BUILDER: Record<string, keyof typeof SITE_IMAGES.hero> = {
  beazer: 'beazerHomes',
  'century-communities': 'centuryCommunities',
  'dr-horton': 'drHorton',
  lennar: 'lennar',
  'richmond-american-homes': 'richmondAmerican',
  'storybook-homes': 'storybookHomes',
  taylorm: 'taylorMorrison',
  'woodside-homes': 'woodsideHomes',
  'harmony-homes': 'newHomes',
  'toll-brothers': 'newHomes',
  'american-homes-4-rent': 'rentalAmericanHomes',
  adler: 'rentalAdler',
  element12: 'rentalElement12',
}

type VillagePageViewProps = {
  village: Village
}

export function villageMetadata(village: Village) {
  const title = `${village.name} | ${village.builderName} | Cadence Henderson`
  const description = `${village.name} by ${village.builderName} in Cadence Henderson NV 89011. ${village.kind === 'sold-out' ? 'Sold out — ask about resales.' : village.kind === 'rental' ? 'Rental community — confirm current rates.' : 'New homes — confirm current inventory.'} Dr. Jan Duffy ${CONTACT_INFO.phone}.`
  const url = `${BASE}${village.cadencePath}`
  return {
    title,
    description,
    alternates: { canonical: url },
    openGraph: { title, description, url },
  }
}

export function VillagePageView({ village }: VillagePageViewProps) {
  const heroKey = HERO_BY_BUILDER[village.builderSlug] ?? 'newHomes'
  const builderVillages = getVillagesByBuilder(village.builderSlug)
  const siblings = builderVillages.filter(
    (item) => item.communitySlug !== village.communitySlug,
  )
  const builderHubHref =
    builderVillages.length > 0
      ? `/communities/${village.builderSlug}`
      : '/apartments'
  const statusLabel =
    village.kind === 'sold-out'
      ? 'Sold out'
      : village.kind === 'rental'
        ? 'Rental'
        : 'For sale'
  const displayPlans = village.plans.filter((plan) => plan.sqft !== '—')
  const namedOnly = village.plans.filter((plan) => plan.sqft === '—')

  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      <BreadcrumbSchema
        items={[
          { name: 'Cadence Henderson communities', href: `${BASE}/communities` },
          { name: village.builderName, href: `${BASE}${builderHubHref}` },
          { name: village.name },
        ]}
      />

      <PageHero
        title={village.name}
        subtitle={
          <>
            <p className="mb-2 text-sm font-semibold uppercase tracking-[0.12em] text-white/80">
              {village.builderName} · {statusLabel} · Cadence Henderson NV 89011
            </p>
            <p>{village.summary}</p>
          </>
        }
        imageSrc={cfImage(SITE_IMAGES.hero[heroKey], 'hero')}
        imageAlt={`${village.name} by ${village.builderName} in Cadence Henderson NV 89011`}
        icon={Home}
      >
        <Link href="/find-your-home">
          <Button size="lg" className="bg-white text-primary hover:bg-blue-50">
            Search live inventory
          </Button>
        </Link>
      </PageHero>

      <RealScoutOfficeListings />

      {displayPlans.length > 0 ? (
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="mx-auto max-w-4xl">
              <h2 className="mb-2 text-3xl font-extralight tracking-[0.06em] text-neutral-900">
                Published floor plans
              </h2>
              <p className="mb-8 font-light text-neutral-600">
                Names and sizes from the Cadence developer listing (checked
                2026-09-09). Asking prices and lot numbers change — they are not
                shown here. Call {CONTACT_INFO.phone} for what is actually
                available.
              </p>
              <div className="overflow-x-auto">
                <table className="w-full border-collapse text-left text-sm">
                  <thead>
                    <tr className="border-b border-neutral-200">
                      <th className="py-3 font-medium">Plan</th>
                      <th className="py-3 font-medium">Beds</th>
                      <th className="py-3 font-medium">Baths</th>
                      <th className="py-3 font-medium">Sq ft</th>
                    </tr>
                  </thead>
                  <tbody>
                    {displayPlans.map((plan) => (
                      <tr key={plan.name} className="border-b border-neutral-100">
                        <td className="py-3">{plan.name}</td>
                        <td className="py-3">{plan.beds}</td>
                        <td className="py-3">{plan.baths}</td>
                        <td className="py-3">{plan.sqft}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </section>
      ) : null}

      {namedOnly.length > 0 ? (
        <section className="py-8">
          <div className="container mx-auto px-4">
            <p className="mx-auto max-w-4xl font-light text-neutral-600">
              Named plans on the developer site:{' '}
              {namedOnly.map((plan) => plan.name).join(', ')}. Square footage was
              not published — confirm at the sales office.
            </p>
          </div>
        </section>
      ) : null}

      {siblings.length > 0 ? (
        <section className="bg-neutral-50 py-16">
          <div className="container mx-auto px-4">
            <div className="mx-auto max-w-4xl">
              <h2 className="mb-6 text-2xl font-medium text-neutral-900">
                Other {village.builderName} villages in Cadence
              </h2>
              <ul className="grid gap-3 sm:grid-cols-2">
                {siblings.map((item) => (
                  <li key={item.cadencePath}>
                    <Link
                      href={item.cadencePath}
                      className="font-medium text-primary hover:underline"
                    >
                      {item.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>
      ) : null}

      <AgentContactCta
        heading={`Tour ${village.name} with a local agent`}
        body="Dr. Jan Duffy represents Cadence buyers at no extra cost on new construction — the builder typically pays the fee."
      />
      <Footer />
    </div>
  )
}
