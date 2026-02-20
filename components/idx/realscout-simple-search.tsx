'use client'

import { createElement } from 'react'

/**
 * RealScout simple search widget. Requires realscout-web-components.umd.js in layout.
 * Do not modify without explicit approval (IDX/MLS compliance).
 */
export function RealScoutSimpleSearch() {
  return createElement('realscout-simple-search', {
    'agent-encoded-id': 'QWdlbnQtMjI1MDUw',
  })
}
