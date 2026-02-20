'use client'

import { createElement } from 'react'

/**
 * RealScout home value widget. Requires realscout-web-components.umd.js in layout.
 * Do not modify without explicit approval (IDX/MLS compliance).
 */
export function RealScoutHomeValue() {
  return createElement('realscout-home-value', {
    'agent-encoded-id': 'QWdlbnQtMjI1MDUw',
    'include-name': true,
    'include-phone': true,
  })
}
