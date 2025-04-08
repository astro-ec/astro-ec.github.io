import { getPermalink, getBlogPermalink, getAsset } from './utils/permalinks';

export const headerData = {
  links: [
    {
      text: 'Olimpiada Nacional',
      href: '#',
    },
    {
      text: 'Internacional',
      href: '#',
    },
    {
      text: 'Recursos',
      href: '#',
    },
    {
      text: 'Blog',
      href: '#',
    },
  ],
  actions: [{ text: 'Contáctanos', href: 'mailto:info@oeaa-astro.org', target: '_blank' }],
};

export const footerData = {
  links: [
    {
      title: 'La Olimpiada Nacional',
      links: [
        { text: 'Cronograma 2025', href: '#' },
        { text: 'Formato', href: '#' },
        { text: 'Inscripción', href: '#' },
      ],
    },
    {
      title: 'Recursos',
      links: [
        { text: 'Exámenes Nacionales', href: '#' },
        { text: 'Exámenes Internacionales', href: '#' },
        { text: 'Material de estudiox', href: '#' },
      ],
    },
  ],
  secondaryLinks: [
    { text: 'Terms', href: getPermalink('/terms') },
    { text: 'Privacy Policy', href: getPermalink('/privacy') },
  ],
  socialLinks: [
    { ariaLabel: 'Instagram', icon: 'tabler:brand-instagram', href: 'https://www.instagram.com/oeaa_ec' },
    { ariaLabel: 'Facebook', icon: 'tabler:brand-facebook', href: 'https://www.facebook.com/oeaaecuador' },
    { ariaLabel: 'Github', icon: 'tabler:brand-github', href: 'https://github.com/astro-ec' },
  ],
  footNote: `
    The Ecuadorian Olympiadas on Astronomy and Astrophysics 2025 · All rights reserved.
  `,
};
