declare global {
  interface Window {
    Calendly?: {
      initPopupWidget?: (options: { url: string }) => void
      initInlineWidget?: (options: {
        url: string
        parentElement: HTMLElement
      }) => void
      initBadgeWidget?: (o: object) => void
    }
  }
}

export {}
