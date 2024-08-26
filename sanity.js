import { createClient } from '@sanity/client';
import imageUrlBuilder from '@sanity/image-url';

const client = createClient({
  projectId: 'y2evlou8', 
  dataset: 'production', 
  useCdn: true, 
  apiVersion: '2024-08-20'
});

const builder = imageUrlBuilder(client);

export const urlFor = (source) => builder.image(source);

export default client;
