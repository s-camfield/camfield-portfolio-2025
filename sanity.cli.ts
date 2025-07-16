// sanity.config.ts
'use client'

/**
 * This configuration is used to for the Sanity Studio that’s mounted on the `/app/studio/[[...tool]]/page.tsx` route
 */

import {visionTool} from '@sanity/vision'
import {defineConfig} from 'sanity'
import {structureTool} from 'sanity/structure'

// Go to https://www.sanity.io/docs/api-versioning to learn how API versioning works
import {apiVersion, dataset, projectId} from './sanity/env'
import {structure} from './sanity/structure'

// --- THIS IS THE CRUCIAL IMPORT ---
// We need to import the list of all your schema types from the index file.
import {schemaTypes} from './sanity/schemaTypes'

export default defineConfig({
  basePath: '/studio',
  projectId,
  dataset,
  
  // --- THIS IS THE FIX ---
  // We are now telling Sanity about all the schema types you've defined.
  schema: {
    types: schemaTypes,
  },

  plugins: [
    structureTool({structure}),
    // Vision is for querying with GROQ from inside the Studio
    // https://www.sanity.io/docs/the-vision-plugin
    visionTool({defaultApiVersion: apiVersion}),
  ],
})
