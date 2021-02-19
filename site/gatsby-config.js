module.exports = {
  siteMetadata: {
    title: `Meddbtech`,
    description: `The company theme`,
    keywords: [`gatsby`, `theme`, `react`],
    author: `Meddbtech Co.,Ltd`,
    siteUrl: `https://www.meddbtech.com`, //Change to you site address, required for sitemap.xml and robots.txt file among other things
    menuLinks: [
      {
        name: `Page 1`,
        link: `/page-1/`,
        type: `internal`, //internal or anchor
        location: `right`,
      },
      {
        name: `Anchor 1`,
        link: `#anchor-1`,
        type: `anchor`, //internal or anchor
        location: `right`,
      },
      {
        name: `Page 2`,
        link: `/page-2/`,
        type: `internal`, //internal or anchor
        location: `right`,
        subMenu: [
          {
            name: `Sub 1`,
            link: `/sub-1/`,
            type: `internal`, //internal or anchor
          },
          {
            name: `Sub 2`,
            link: `/sub-2/`,
            type: `internal`, //internal or anchor
          },
        ],
      },
    ],
    socialLinks: [
      {
        name: `Email`,
        link: `eric@erichowey.dev`,
        location: `footer`, //Options are "all", "header", "footer"
      },
    ],
  },
  plugins: [
    {
      resolve: `the-company-theme`,
      options: {
        contentPath: `src/pages`,
        assetPath: `src/assets`,
        footerContentLocation: "center", // "left", "right", "center"
      },
    },
  ],
};
