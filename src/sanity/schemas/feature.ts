
export default {
  name: 'feature',
  title: 'Feature',
  type: 'document',
  fields: [
    {
      name: 'title',
      title: 'Title',
      type: 'string',
    },
    {
      name: 'description',
      title: 'Description',
      type: 'text',
    },
    {
      name: 'icon',
      title: 'Icon',
      type: 'image',
    },
    {
      name: 'locale',
      title: 'Locale',
      type: 'string',
      options: {
        list: ['en', 'es', 'nl'],
      },
    },
  ],
}
