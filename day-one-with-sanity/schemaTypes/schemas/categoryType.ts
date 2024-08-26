import {defineField, defineType} from 'sanity'

export const categoryType = defineType({
  name: 'categories',
  title: 'Categories',
  type: 'document',
  fields: [
    defineField({
      name: 'name',
      type: 'string',
      title: 'Name',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'imageURL',
      type: 'image',
      title: 'Image',
      options: {
        hotspot: true, // Enables image cropping
      },
    }),
  ],
})
