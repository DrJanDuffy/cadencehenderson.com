import Link from 'next/link'

export function BuildersShowcase() {
  const builders: Array<{
    name: string
    logo: string
    href: string
    width: number
    height: number
  }> = [
    {
      name: 'American Homes 4 Rent',
      logo: 'https://cadencenv.com/wp-content/uploads/2023/08/AMH_Standard-Logo.jpg',
      href: '/rentals',
      width: 200,
      height: 80,
    },
    {
      name: 'Beazer Homes',
      logo: 'https://cadencenv.com/wp-content/uploads/2024/05/BeazerHomes_Logo.jpg',
      href: '/new-homes/beazer-homes',
      width: 300,
      height: 80,
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
    <section className="py-20 bg-gray-100">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center text-gray-900 mb-12">
          View Homes from Our Builders
        </h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6">
          {builders.map((builder) => (
            <Link
              key={builder.name}
              href={builder.href}
              className="bg-white rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300 p-6 flex flex-col items-center justify-center text-center group"
            >
              <div className="relative w-full h-20 mb-3 flex items-center justify-center">
                <img
                  src={builder.logo}
                  alt={`${builder.name} - New homes at Cadence Henderson`}
                  width={builder.width}
                  height={builder.height}
                  loading="lazy"
                  className="max-w-full max-h-full object-contain group-hover:scale-105 transition-transform"
                />
              </div>
              <h3 className="font-semibold text-gray-800 text-sm">
                {builder.name}
              </h3>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}

