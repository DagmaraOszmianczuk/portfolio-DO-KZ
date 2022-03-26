module.exports = {
   siteMetadata: {
      title: ``,
      siteUrl: `https://www.yourdomain.tld`,
   },
   plugins: [
      {
         resolve: "gatsby-source-contentful",
         options: {
            accessToken: "E7GfTkZcxo0tZoC59gF5P6Y74fK5xNVz4A8aNb51aoA",
            spaceId: "880vrbdadn02",
         },
      },
      "gatsby-plugin-sass",
      "gatsby-plugin-image",
      "gatsby-plugin-react-helmet",
      {
         resolve: "gatsby-plugin-manifest",
         options: {
            icon: "src/images/icon.png",
         },
      },
      "gatsby-plugin-sharp",
      "gatsby-transformer-sharp",
      {
         resolve: "gatsby-source-filesystem",
         options: {
            name: "images",
            path: "./src/images/",
         },
         __key: "images",
      },
   ],
}
