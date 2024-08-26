import {defineField, defineType} from 'sanity'

export const dishType = defineType({
  name: 'dishes',
  title: 'Dish',
  type: 'document',
  fields: [
    defineField({
      name: 'name',
      type: 'string',
      title: 'Dish Name',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'imageURL',
      type: 'image',
      title: 'Image URL',
      options: {
        hotspot: true,
      },
    }),
    defineField({
      name: 'price',
      type: 'number',
      title: 'Price',
      validation: (Rule) => Rule.required().min(0),
    }),
    defineField({
      name: 'short_description',
      type: 'text',
      title: 'Short Description',
      validation: (Rule) => Rule.max(200),
    }),
  ],
})
