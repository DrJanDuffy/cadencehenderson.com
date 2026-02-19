import Link from 'next/link'
import { Button } from '@/components/ui/button'

export function NewsSection() {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-flex items-center justify-center mb-6">
            <img
              src="https://cadencenv.com/wp-content/uploads/2021/01/news-home-box-288x300.png"
              width={96}
              height={100}
              loading="lazy"
              alt="Cadence Henderson news and community updates"
              className="w-24 h-24 object-contain"
            />
          </div>
          <h2 className="text-4xl font-bold text-gray-900 mb-6">
            Cadence Henderson News
          </h2>
          <p className="text-xl text-gray-700 mb-8 leading-relaxed">
            For announcements, updates, offers and tips, check out our newsroom.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Button
              size="lg"
              className="bg-blue-900 hover:bg-blue-800 text-lg px-8"
              asChild
            >
              <Link href="/news">Read Latest News</Link>
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-blue-900 text-blue-900 hover:bg-blue-50 text-lg px-8"
              asChild
            >
              <Link href="/gallery">View Photo Gallery</Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}

