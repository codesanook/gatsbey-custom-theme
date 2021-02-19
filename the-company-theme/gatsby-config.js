module.exports = (themeOptions) => {
  return {
    plugins: [
      {
        resolve: "gatsby-theme-catalyst-core",
        options: {
          contentPath: themeOptions.contentPath,
          assetPath: themeOptions.assetPath,
          displaySiteLogo: themeOptions.displaySiteLogo,
          displaySiteTitle: themeOptions.displaySiteTitle,
          displaySiteLogoMobile: themeOptions.displaySiteLogoMobile,
          displaySiteTitleMobile: themeOptions.displaySiteTitleMobile,
          invertSiteLogo: themeOptions.invertSiteLogo,
          useStickyHeader: themeOptions.useStickyHeader,
          useSocialLinks: themeOptions.useSocialLinks,
          useColorMode: themeOptions.useColorMode,
          useKatex: themeOptions.useKatex,
          footerContentLocation: themeOptions.footerContentLocation, // "left", "right", "center"
          remarkImagesWidth: themeOptions.remarkImagesWidth,
          imageQuality: themeOptions.imageQuality,
        },
      },
      `gatsby-theme-catalyst-header-top`,
      `gatsby-theme-catalyst-footer`,
    ].filter(Boolean),
  };
};
