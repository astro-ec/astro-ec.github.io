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
      text: 'Campeones Nacionales',
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
        { text: 'Inscripción', href: 'https://bit.ly/oeaa2026' },
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
