import { Newspaper } from 'lucide-react'
import { Button } from '@/components/ui/button'

export function NewsSection() {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-flex items-center justify-center mb-6">
            <img
              src="https://cadencenv.com/wp-content/uploads/2021/01/news-home-box-288x300.png"
              width={288}
              height={300}
              alt="Cadence Henderson News"
              className="w-24 h-24 object-contain"
            />
          </div>
          <h2 className="text-4xl font-bold text-gray-900 mb-6">
            Cadence Henderson News
          </h2>
          <p className="text-xl text-gray-700 mb-8 leading-relaxed">
            For announcements, updates, offers and tips, check out our newsroom.
          </p>
          <Button
            size="lg"
            className="bg-blue-900 hover:bg-blue-800 text-lg px-8"
          >
            Read Latest News
          </Button>
        </div>
      </div>
    </section>
  )
}

