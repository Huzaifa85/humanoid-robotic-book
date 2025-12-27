import { themes as prismThemes } from 'prism-react-renderer';
import type { Config } from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';

const config: Config = {
  title: 'Physical AI & Humanoid Robotics',
  favicon: 'img/img1.png',

  future: {
    v4: true,
  },

  // ⭐ MUST FIX FOR VERCEL (CORRECT URL)
  url: 'https://humanoid-robotics-book-c8pg.vercel.app',

  // ⭐ MUST FIX FOR SUB-PATH DEPLOYMENT
  baseUrl: '/',

  organizationName: 'laibagohar',
  projectName: 'humanoid-robotics-book',

  onBrokenLinks: 'throw',

  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  presets: [
    [
      'classic',
      {
        docs: {
          sidebarPath: './sidebars.ts',
        },
        theme: {
          // ⭐ Correct CSS import
          customCss: require.resolve('./src/css/custom.css'),
        },
      } satisfies Preset.Options,
    ],
  ],

  themeConfig: {
    image: 'img/docusaurus-social-card.jpg',

    colorMode: {
      respectPrefersColorScheme: true,
      defaultMode: 'dark',
    },

    navbar: {
      title: 'Humanoid Robotics',
      logo: {
        alt: 'Logo',
        src: 'img/img1.png',
      },
      items: [
        {
          type: 'docSidebar',
          sidebarId: 'tutorialSidebar',
          position: 'left',
          label: 'Modules',
        },
     

        {
          href: 'https://github.com/Huzaifa85',
          label: 'GitHub',
          position: 'right',
        },
      ],
    },

    footer: {
      style: 'light',
      links: [
        {
          title: 'Explore',
          items: [
            { label: 'All Modules', to: '/docs/modules/module1/' },
            {
              label: 'GitHub Repository',
              href: 'https://github.com/Huzaifa85',
            },
          ],
        },
        {
          title: 'Community',
          items: [
            { label: 'LinkedIn', href: 'https://linkedin.com/' },
            { label: 'Discord', href: 'https://discord.com/' },
          ],
        },
        {
          title: 'More',
          items: [{ label: 'Documentation', to: '/docs/modules/module1/' }],
        },
      ],
      copyright: `
        <div style="text-align:center; padding-top:10px; color:#000;">
          © ${new Date().getFullYear()} Humanoid Robotics Textbook — Built by huzaifa zubair
          <br/>
          <span style="color:#eab308;">Powered by Docusaurus</span>
        </div>
      `,
    },

    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
    },
  },
};

export default config;
