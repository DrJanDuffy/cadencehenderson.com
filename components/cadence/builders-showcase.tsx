export function BuildersShowcase() {
  const builders = [
    { name: 'American Homes 4 Rent', logo: '🏠 AMH' },
    { name: 'Century Communities', logo: '🏘️ Century' },
    { name: 'D.R. Horton', logo: '🏗️ D.R. Horton' },
    { name: 'Express Homes', logo: '⚡ Express' },
    { name: 'Lennar', logo: '🏡 Lennar' },
    { name: 'Richmond American', logo: '🇺🇸 Richmond' },
    { name: 'StoryBook Homes', logo: '📖 StoryBook' },
    { name: 'Toll Brothers', logo: '🏛️ Toll Brothers' },
    { name: 'Woodside Homes', logo: '🌲 Woodside' },
  ]

  return (
    <section className="py-20 bg-gray-100">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center text-gray-900 mb-12">
          View Homes from Our Builders
        </h2>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6">
          {builders.map((builder) => (
            <div
              key={builder.name}
              className="bg-white rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300 p-6 flex flex-col items-center justify-center text-center cursor-pointer group"
            >
              <div className="text-4xl mb-3 group-hover:scale-110 transition-transform">
                {builder.logo.split(' ')[0]}
              </div>
              <h3 className="font-semibold text-gray-800 text-sm">
                {builder.name}
              </h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

