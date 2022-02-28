if (process.env.BUILD_ENV === 'prod') {
    require('dotenv').config({
        path: `.env.production`,
    });
} else {
    require('dotenv').config({
        path: `.env.development`,
    });
}

module.exports = {
    siteMetadata: {
        siteUrl: `https://www.trality.com`,
    },
    plugins: [
        {
            resolve: `gatsby-plugin-advanced-sitemap`,
            options: {
                query: `{allGhostPost {
                    edges {
                        node {
                            id
                            slug
                            updated_at
                            feature_image
                        }
                    }
                }}`,

                output: 'blog/sitemap.xml',
                mapping: {
                    // Each data type can be mapped to a predefined sitemap
                    // Routes can be grouped in one of: posts, tags, authors, pages, or a custom name
                    // The default sitemap - if none is passed - will be pages
                    allGhostPost: {
                        sitemap: 'blog',
                        // Add a query level prefix to slugs, Don't get confused with global path prefix from Gatsby
                        // This will add a prefix to this perticular sitemap only
                        prefix: 'blog/',
                        // Custom Serializer
                    },
                },
            },
        },
        'gatsby-plugin-typescript',
        'gatsby-plugin-tsconfig-paths',
        'gatsby-plugin-styled-components',
        'gatsby-plugin-emotion',
        'gatsby-plugin-react-helmet',
        `gatsby-plugin-remove-trailing-slashes`,
        {
            resolve: `gatsby-plugin-layout`,
            options: {
                component: require.resolve(`./src/components/layout.tsx`),
            },
        },
        {
            resolve: `gatsby-source-ghost`,
            options: {
                apiUrl: process.env.GHOST_URL,
                contentApiKey: process.env.GHOST_APIKEY,
                version: `v3`, // Ghost API version, optional, defaults to "v3".
                // Pass in "v2" if your Ghost install is not on 3.0 yet!!!
            },
        },
        {
            resolve: 'gatsby-plugin-html-attributes',
            options: {
                lang: 'en',
            },
        },
    ],
};
