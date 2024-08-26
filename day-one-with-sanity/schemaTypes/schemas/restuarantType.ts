import {defineField, defineType} from 'sanity'

export const restuarantType = defineType({
  name: 'restuarants',
  title: 'Restuarant',
  type: 'document',
  fields: [
    defineField({
      name: 'name',
      type: 'string',
      title: 'Restuarant Name',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'imageURL',
      type: 'image',
      title: 'Image URL',
      options: {
        hotspot: true, // Enables image cropping
      },
    }),
    defineField({
      name: 'title',
      type: 'string',
      title: 'Title',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'rating',
      type: 'number',
      title: 'Rating',
      validation: (Rule) => Rule.min(1).max(5),
    }),
    defineField({
      name: 'genre',
      type: 'string',
      title: 'Genre',
    }),
    defineField({
      name: 'address',
      type: 'string',
      title: 'Address',
    }),
    defineField({
      name: 'short_description',
      type: 'text',
      title: 'Short Description',
      validation: (Rule) => Rule.max(200),
    }),
    defineField({
      name: 'type',
      type: 'reference',
      title: 'Category',
      to: [{type: 'categories'}],
    }),
    defineField({
      name: 'dishes',
      type: 'array',
      title: 'Dishes',
      of: [{type: 'reference', to: [{type: 'dishes'}]}],
    }),
    defineField({
      name: 'long',
      type: 'number',
      title: 'Longitude',
    }),
    defineField({
      name: 'lat',
      type: 'number',
      title: 'Latitude',
    }),
  ],
})
