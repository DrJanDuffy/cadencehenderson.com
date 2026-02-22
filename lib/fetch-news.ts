/**
 * Fetch news from cadencenv.com WordPress REST API.
 * Uses _embed for featured images. Next.js fetch cache revalidates hourly.
 */

const WORDPRESS_API = 'https://cadencenv.com/wp-json/wp/v2/posts'

export type NewsArticle = {
  id: number
  title: string
  excerpt: string
  link: string
  date: string
  category: string
  image?: string
}

type WpPost = {
  id: number
  date: string
  link: string
  title: { rendered: string }
  excerpt: { rendered: string }
  featured_media: number
  categories: number[]
  _embedded?: {
    'wp:featuredmedia'?: Array<{ source_url: string }>
    'wp:term'?: Array<Array<{ name: string; slug: string }>>
  }
}

function stripHtml(html: string): string {
  return html
    .replace(/<[^>]*>/g, '')
    .replace(/&nbsp;/g, ' ')
    .replace(/&#\d+;/g, '')
    .replace(/&[a-z]+;/g, '')
    .trim()
}

function formatDate(iso: string): string {
  try {
    const d = new Date(iso)
    return d.toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
    })
  } catch {
    return iso
  }
}

function parsePost(post: WpPost): NewsArticle {
  const category = post._embedded?.['wp:term']?.[0]?.[0]?.name ?? 'News'
  const image = post._embedded?.['wp:featuredmedia']?.[0]?.source_url

  return {
    id: post.id,
    title: stripHtml(post.title.rendered),
    excerpt: stripHtml(post.excerpt.rendered),
    link: post.link,
    date: formatDate(post.date),
    category,
    image,
  }
}

/**
 * Fetch news articles from cadencenv.com.
 * Cached via Next.js fetch; revalidates every hour.
 */
export async function fetchNews(perPage = 6): Promise<NewsArticle[]> {
  const url = `${WORDPRESS_API}?per_page=${perPage}&_embed`
  const res = await fetch(url, {
    next: { revalidate: 3600 },
    headers: {
      'User-Agent': 'CadenceHenderson/1.0',
    },
  })

  if (!res.ok) {
    throw new Error(`WordPress API error: ${res.status}`)
  }

  const posts: WpPost[] = await res.json()
  return posts.map(parsePost)
}
