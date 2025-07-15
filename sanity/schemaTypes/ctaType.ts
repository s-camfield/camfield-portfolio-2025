// sanity/schemaTypes/ctaType.ts
import {defineField, defineType} from 'sanity'
// Change the import from MegaphoneIcon to BlockElementIcon
import {BlockElementIcon} from '@sanity/icons'

export const ctaType = defineType({
  name: 'cta',
  title: 'Call to Action',
  type: 'object',
  // Use the new icon here
  icon: BlockElementIcon,
  fields: [
    defineField({
      name: 'title',
      title: 'Title (for internal reference)',
      type: 'string',
      initialValue: 'Call to Action Block',
      hidden: true,
    }),
  ],
  preview: {
    prepare() {
      return {
        title: 'Call to Action Block',
      }
    },
  },
})
