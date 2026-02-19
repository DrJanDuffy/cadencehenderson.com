'use client'

import {
  createContext,
  useCallback,
  useContext,
  useRef,
  useState,
  type ReactNode,
} from 'react'

const CALENDLY_SCRIPT =
  'https://assets.calendly.com/assets/external/widget.js'
const CALENDLY_CSS =
  'https://assets.calendly.com/assets/external/widget.css'

type CalendlyContextValue = {
  loadCalendly: () => Promise<void>
  isLoaded: boolean
}

const CalendlyContext = createContext<CalendlyContextValue | null>(null)

export function useCalendly() {
  const ctx = useContext(CalendlyContext)
  if (!ctx) {
    return {
      loadCalendly: async () => {},
      isLoaded: false,
    }
  }
  return ctx
}

function ensureCalendlyCss() {
  if (typeof document === 'undefined') return
  const link = document.querySelector<HTMLLinkElement>(
    `link[href="${CALENDLY_CSS}"]`
  )
  if (link) link.media = 'all'
  else {
    const l = document.createElement('link')
    l.rel = 'stylesheet'
    l.href = CALENDLY_CSS
    document.head.appendChild(l)
  }
}

function loadScript(): Promise<void> {
  if (typeof document === 'undefined') return Promise.resolve()
  const existing = document.querySelector(`script[src="${CALENDLY_SCRIPT}"]`)
  if (existing) return Promise.resolve()
  return new Promise((resolve, reject) => {
    const script = document.createElement('script')
    script.src = CALENDLY_SCRIPT
    script.async = true
    script.onload = () => {
      ensureCalendlyCss()
      resolve()
    }
    script.onerror = () => reject(new Error('Calendly script failed to load'))
    document.body.appendChild(script)
  })
}

export function CalendlyProvider({ children }: { children: ReactNode }) {
  const [isLoaded, setIsLoaded] = useState(false)
  const loadPromise = useRef<Promise<void> | null>(null)

  const loadCalendly = useCallback(() => {
    if (loadPromise.current) return loadPromise.current
    loadPromise.current = loadScript().then(() => {
      setIsLoaded(true)
    })
    return loadPromise.current
  }, [])

  return (
    <CalendlyContext.Provider value={{ loadCalendly, isLoaded }}>
      {children}
    </CalendlyContext.Provider>
  )
}
