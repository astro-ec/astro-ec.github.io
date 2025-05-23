import { getPermalink, getBlogPermalink, getAsset } from './utils/permalinks';

export const headerData = {
  links: [
    {
      text: 'Home',
      href: getPermalink('/index'),
    },
    {
      text: 'Olimpiada Nacional',
      href: getPermalink('/olimpiada-nacional'),
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
      text: 'Ganadores',
      href: getPermalink('/campeones-nacionales'),
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
      ],
    },
  ],
  secondaryLinks: [
    { text: 'Términos de la Olimpiada', href: getPermalink('/terminos') },
  ],
  socialLinks: [
    { ariaLabel: 'Instagram', icon: 'tabler:brand-instagram', href: 'https://www.instagram.com/oeaa_ec' },
    { ariaLabel: 'Facebook', icon: 'tabler:brand-facebook', href: 'https://www.facebook.com/oeaaecuador' },
    { ariaLabel: 'Github', icon: 'tabler:brand-github', href: 'https://github.com/astro-ec' },
  ],
  footNote: `
    The Ecuadorian Olympiads on Astronomy and Astrophysics 2025 · All rights reserved.
  `,
};
