// app/studio/[[...index]]/page.tsx
'use client'

import { NextStudio } from 'next-sanity/studio'
import config from '../../../sanity.config'
import { useEffect } from 'react'

// These are important for the Studio to work properly
export const dynamic = 'force-static'

export default function StudioPage() {
  useEffect(() => {
    // Add the bridge script dynamically
    const script = document.createElement('script')
    script.src = 'https://core.sanity-cdn.com/bridge.js'
    script.async = true
    script.type = 'module'
    document.body.appendChild(script)
    
    return () => {
      if (document.body.contains(script)) {
        document.body.removeChild(script)
      }
    }
  }, [])
  
  return <NextStudio config={config} />
}
