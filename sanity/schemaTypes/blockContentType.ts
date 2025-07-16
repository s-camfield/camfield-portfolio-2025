// sanity/schemaTypes/blockContentType.ts
import {defineType, defineArrayMember} from 'sanity'

export const blockContentType = defineType({
  title: 'Block Content',
  name: 'blockContent',
  type: 'array',
  of: [
    defineArrayMember({
      title: 'Block',
      type: 'block',
      styles: [ /* ...your styles... */ ],
      lists: [ /* ...your lists... */ ],
      marks: { /* ...your marks... */ },
    }),
    defineArrayMember({
      type: 'image',
      options: {hotspot: true},
    }),
    // Add our custom CTA block here
    defineArrayMember({
      type: 'cta',
    }),
  ],
})
