import Link from 'next/link'
import { CONTACT_INFO } from '@/components/cadence/contact-info'

export function BuildersShowcase() {
  const builders: Array<{
    name: string
    logo: string
    href: string
    width: number
    height: number
    external?: boolean
  }> = [
    {
      name: 'American Homes 4 Rent',
      logo: 'https://cadencenv.com/wp-content/uploads/2023/08/AMH_Standard-Logo.jpg',
      href: CONTACT_INFO.realScoutRentalsUrl,
      external: true,
      width: 200,
      height: 80,
    },
    {
      name: 'Beazer Homes',
      logo: 'https://cadencenv.com/wp-content/uploads/2024/05/BeazerHomes_Logo.jpg',
      href: CONTACT_INFO.realScoutBeazerHomesUrl,
      width: 300,
      height: 80,
      external: true,
    },
    {
      name: 'Century Communities',
      logo: 'https://cadencenv.com/wp-content/uploads/2021/03/Century-Communities-Logo_Horz_RGB-300x91.jpg',
      href: '/new-homes/century-communities',
      width: 300,
      height: 91,
    },
    {
      name: 'D.R. Horton',
      logo: 'https://cadencenv.com/wp-content/uploads/2021/03/DR_Horton_Logo_Red-Blue-300x100.png',
      href: '/new-homes/dr-horton',
      width: 300,
      height: 100,
    },
    {
      name: 'Lennar',
      logo: 'https://cadencenv.com/wp-content/uploads/2020/11/lennar-logo.png',
      href: '/new-homes/lennar',
      width: 200,
      height: 80,
    },
    {
      name: 'Richmond American',
      logo: 'https://cadencenv.com/wp-content/uploads/2020/12/Richmond-Amer-Home-logo-365x100-1-300x82.png',
      href: '/new-homes/richmond-american',
      width: 300,
      height: 82,
    },
    {
      name: 'StoryBook Homes',
      logo: 'https://cadencenv.com/wp-content/uploads/2022/10/SBHomes_Logo2022-300x146.png',
      href: '/new-homes/storybook-homes',
      width: 300,
      height: 146,
    },
    {
      name: 'Taylor Morrison',
      logo: 'https://cadencenv.com/wp-content/uploads/2024/05/TM_Logo_Hor-300x75.jpg',
      href: '/new-homes/taylor-morrison',
      width: 300,
      height: 75,
    },
    {
      name: 'Woodside Homes',
      logo: 'https://cadencenv.com/wp-content/uploads/2022/08/Woodside-logo_color-200x67-1.png',
      href: '/new-homes/woodside-homes',
      width: 200,
      height: 67,
    },
  ]

  return (
    <section className="py-20 bg-gray-100" aria-labelledby="builders-heading">
      <div className="container mx-auto px-4 sm:px-6">
        <h2 id="builders-heading" className="text-4xl font-bold text-center text-gray-900 mb-12">
          New Home Builders in Cadence Henderson
        </h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6">
          {builders.map((builder) => {
            const className =
              'bg-white rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300 p-6 flex flex-col items-center justify-center text-center group'
            const content = (
              <>
                <div className="relative w-full h-20 mb-3 flex items-center justify-center">
                  <img
                    src={builder.logo}
                    alt={`Cadence Henderson NV 89011 new homes by ${builder.name}`}
                    width={builder.width}
                    height={builder.height}
                    loading="lazy"
                    className="max-w-full max-h-full object-contain group-hover:scale-105 transition-transform"
                  />
                </div>
                <h3 className="font-semibold text-gray-800 text-sm">
                  {builder.name}
                </h3>
              </>
            )
            return builder.external ? (
              <a
                key={builder.name}
                href={builder.href}
                target="_blank"
                rel="noopener noreferrer"
                className={className}
              >
                {content}
              </a>
            ) : (
              <Link key={builder.name} href={builder.href} className={className}>
                {content}
              </Link>
            )
          })}
        </div>
      </div>
    </section>
  )
}

