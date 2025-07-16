// sanity/schemaTypes/index.ts
import {authorType} from './authorType'
import {blockContentType} from './blockContentType'
import {categoryType} from './categoryType'
import {postType} from './postType'
import {ctaType} from './ctaType' // <-- ADD THIS IMPORT

export const schemaTypes = [
  postType,
  authorType,
  categoryType,
  blockContentType,
  ctaType, // <-- ADD THIS TO THE ARRAY
]
