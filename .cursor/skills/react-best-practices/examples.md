# React Best Practices — Examples

Before/after snippets for common patterns.

---

## Typed props and destructuring

**Before:**
```tsx
export function Card(props: any) {
  return (
    <div>
      <h2>{props.title}</h2>
      {props.children}
    </div>
  )
}
```

**After:**
```tsx
type CardProps = {
  title: string
  children: React.ReactNode
}

export function Card({ title, children }: CardProps) {
  return (
    <div>
      <h2>{title}</h2>
      {children}
    </div>
  )
}
```

---

## Next.js 15 dynamic params (Promise)

**Before (Next 14):**
```tsx
export default function Page({ params }: { params: { slug: string } }) {
  const slug = params.slug
  // ...
}
```

**After (Next 15):**
```tsx
type Props = { params: Promise<{ slug: string }> }

export default async function Page({ params }: Props) {
  const { slug } = await params
  // ...
}
```

---

## Custom elements (e.g. RealScout) without JSX intrinsic errors

**Before (can fail type-check):**
```tsx
return <realscout-office-listings agent-encoded-id="QWdlbnQtMjI1MDUw" />
```

**After:**
```tsx
import { createElement } from 'react'

return createElement('realscout-office-listings', {
  'agent-encoded-id': 'QWdlbnQtMjI1MDUw',
  'sort-order': 'NEWEST',
  'listing-status': 'For Sale',
})
```

---

## Script with onLoad in Next.js (Server vs Client)

**Before (fails: event handler from Server Component):**
```tsx
// app/layout.tsx (Server Component)
<Script src="https://example.com/widget.js" onLoad={() => initWidget()} />
```

**After:**
```tsx
// components/widget-scripts.tsx
'use client'
import Script from 'next/script'

export function WidgetScripts() {
  return (
    <Script
      src="https://example.com/widget.js"
      strategy="lazyOnload"
      onLoad={() => initWidget()}
    />
  )
}

// app/layout.tsx
<WidgetScripts />
```

---

## useEffect cleanup (subscription/listener)

**Before (leak):**
```tsx
useEffect(() => {
  window.addEventListener('resize', handleResize)
}, [])
```

**After:**
```tsx
useEffect(() => {
  window.addEventListener('resize', handleResize)
  return () => window.removeEventListener('resize', handleResize)
}, [handleResize])
```

---

## Error boundary (App Router)

**Before (no boundary):**
```tsx
// Crashes bubble to root
export default function Page() {
  return <RiskyWidget />
}
```

**After:**
```tsx
// app/dashboard/error.tsx
'use client'

export default function DashboardError({
  error,
  reset,
}: {
  error: Error & { digest?: string }
  reset: () => void
}) {
  return (
    <div className="p-4 border-l-4 border-red-500">
      <h2>Something went wrong</h2>
      <p>{error.message}</p>
      <button onClick={reset}>Try again</button>
    </div>
  )
}
```

---

## Central config (e.g. contact info)

**Before (hardcoded):**
```tsx
<a href="tel:702-500-1955">702-500-1955</a>
<span>License S.0197614</span>
```

**After:**
```tsx
import { CONTACT_INFO } from '@/components/cadence/contact-info'

<a href={`tel:${CONTACT_INFO.phone.replace(/-/g, '')}`}>
  {CONTACT_INFO.phone}
</a>
<span>{CONTACT_INFO.licenseNumber}</span>
```

---

## List keys

**Before:**
```tsx
{items.map((item, index) => (
  <Item key={index} item={item} />
))}
```

**After:**
```tsx
{items.map((item) => (
  <Item key={item.id} item={item} />
))}
```

---

## Form with single state and handler

**Before (many useState):**
```tsx
const [name, setName] = useState('')
const [email, setEmail] = useState('')
const [phone, setPhone] = useState('')
// ...
```

**After:**
```tsx
const [form, setForm] = useState({ name: '', email: '', phone: '' })

const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
  setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }))
}
```
