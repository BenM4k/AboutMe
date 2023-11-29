import { createClient } from '@sanity/client';
import imageUrlBuilder from '@sanity/image-url';

export const client = createClient({
    // projectId: process?.env.REACT_APP_SANITY_PROJECT_ID || '',
    projectId: '619mge9p',
    dataset: 'production',
    apiVersion: '2023-02-01',
    useCdn:'true',
    token: 'skHLIXnMAJpw3Ww0QfzQW6xDfKV1RVyZarTXktqRl4K31ASIOP1uwNJlOpmq6e6Sf0NCSBDjZnv9dg3uXwCIHrbujcT0G4hNbkROWXIE4FqITCeelupcFortqvotowqvi2k21SgTqoSMdvjddYUrqk0h9aPw5zMMpWKcGg9W36HPTN6BhNSB',
    ignoreBrowserTokenWarning: true,
});

const builder = imageUrlBuilder(client);

export const urlFor = (source) => builder.image(source);