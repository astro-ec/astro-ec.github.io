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
        { text: 'Cronograma 8va Olimpiada 2025', href: '#' },
        { text: 'Formato', href: '#' },
        { text: 'Inscripción', href: '#' },
      ],
    },
  ],
  secondaryLinks: [
    { text: 'Terms', href: getPermalink('/terms') },
    { text: 'Privacy Policy', href: getPermalink('/privacy') },
  ],
  socialLinks: [
    { ariaLabel: 'Instagram', icon: 'tabler:brand-instagram', href: 'https://www.instagram.com/oeaa_ec' },
    { ariaLabel: 'Facebook', icon: 'tabler:brand-facebook', href: 'https://www.facebook.com/oeaaecuado' },
    { ariaLabel: 'Github', icon: 'tabler:brand-github', href: 'https://github.com/astro-ec' },
  ],
  footNote: `
    <img class="w-5 h-5 md:w-6 md:h-6 md:-mt-0.5 bg-cover mr-1.5 rtl:mr-0 rtl:ml-1.5 float-left rtl:float-right rounded-sm" src="~/assets/images/nwlg.png" alt="OEAA logo" loading="lazy"></img>
    The Ecuadorian Olympiadas on Astronomy and Astrophysics · All rights reserved.
  `,
};
