import {defineField, defineType} from 'sanity'
// 1:35 min video paused
export const featuredType = defineType({
  name: 'featured',
  title: 'Featured Restuarants',
  type: 'document',
  fields: [
    defineField({
      name: 'name',
      type: 'string',
      title: 'Restuarant Name',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'description',
      type: 'string',
      title: 'Description',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'restuarants',
      type: 'array',
      title: 'Restuaratns',
      of: [{type: 'reference', to: [{type: 'restuarants'}]}],
    }),
    
  ],
})
