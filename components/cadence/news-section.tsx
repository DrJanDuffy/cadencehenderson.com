import { Newspaper } from 'lucide-react'
import { Button } from '@/components/ui/button'

export function NewsSection() {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-flex items-center justify-center w-20 h-20 bg-indigo-600 rounded-full mb-6">
            <Newspaper size={40} className="text-white" />
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

