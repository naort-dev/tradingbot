var CaseSensitivePathsPlugin = require('case-sensitive-paths-webpack-plugin');
var request = require('sync-request');
const fs = require('fs');
var rimraf = require('rimraf');
const cheerio = require('cheerio');

exports.onCreateWebpackConfig = ({ stage, getConfig, rules, loaders, plugins, actions }) => {
    const config = getConfig();

    const rule = config.module.rules.find((rule) => {
        rule.test && rule.use;
    });
    config.module.rules.forEach((item, i) => {
        if (item.test) {
            const searchImages = `/\\.(ico|svg|jpg|jpeg|png|gif|webp|avif)(\\?.*)?$/`;
            const searchVideos = `/\\.(mp4|webm|ogv|wav|mp3|m4a|aac|oga|flac)$/`;
            const searchFonts = `/\\.(eot|otf|ttf|woff(2)?)(\\?.*)?$/`;
            const test = item.test.toString();
            if (test === searchImages || test === searchVideos || test === searchFonts) {
                item.use[0].options.esModule = false;
                config.module.rules[i] = item;
            }
        }
    });

    if (stage === 'develop' || stage === 'build-javascript') {
        actions.setWebpackConfig({
            plugins: [new CaseSensitivePathsPlugin()],
        });
    }

    actions.replaceWebpackConfig(config);
};

const sleep = async (millis) => {
    new Promise((resolve) => setTimeout(resolve, millis));
};

exports.createPages = async function ({ actions, graphql }) {
    const { data } = await graphql(`
        query {
            allGhostPost {
                edges {
                    node {
                        id
                        url
                        canonical_url
                        authors {
                            cover_image
                            name
                            profile_image
                        }
                        title
                    }
                }
            }
        }
    `);
    data.allGhostPost.edges.forEach((edge) => {
        const item = edge.node;
        actions.createPage({
            path: item.url.replace('https://www.trality.com', ''),
            component: require.resolve(`./src/pages/blogItem.tsx`),
            context: { id: item.id },
        });
    });
};

exports.onPreBootstrap = function () {
    rimraf.sync('./static/blog');
};

exports.onCreateNode = async function ({ node, actions, createNodeId, reporter, cache, store }, pluginOptions) {
    const { createNode } = actions;
    if (node.id.includes('Ghost__Author')) {
        let image;
        if (!node.profile_image) {
            return;
        }
        if (!node.profile_image.includes('www.trality.com') && node.profile_image.includes('http')) {
            return;
        }
        if (!node.profile_image.includes('www.trality.com')) {
            image = request('GET', 'https://blog.trality.com/blog/' + node.profile_image);
        } else {
            image = request(
                'GET',
                'https://blog.trality.com' + node.profile_image.replace('https://www.trality.com', '').replace('https://blog.trality.com', ''),
            );
        }
        let newUrl = './static' + node.profile_image.replace('https://www.trality.com', '').replace('https://blog.trality.com', '');
        if (!newUrl.includes('blog')) {
            newUrl = './static/blog' + node.profile_image.replace('https://www.trality.com', '').replace('https://blog.trality.com', '');
        }
        const folder = newUrl.substring(0, newUrl.lastIndexOf('/'));
        if (!fs.existsSync(folder)) {
            fs.mkdirSync(folder, { recursive: true });
        }
        fs.writeFileSync(newUrl, image.getBody(), { flag: 'a' });
        node.profile_image = newUrl.replace('./static', '');
        await sleep(5000);
        return;
    }
    if (node.ghostId !== undefined && node.feature_image) {
        let newUrl = './static' + node.feature_image.replace('https://www.trality.com', '').replace('https://blog.trality.com', '');
        if (!newUrl.includes('blog')) {
            newUrl = './static/blog' + node.feature_image.replace('https://www.trality.com', '').replace('https://blog.trality.com', '');
        }

        //const file = fs.createWriteStream(newUrl, { flags: 'a' });
        if (!node.feature_image.includes('trality.com') && node.feature_image.includes('http')) {
            return;
        }
        const folder = newUrl.substring(0, newUrl.lastIndexOf('/'));
        if (!fs.existsSync(folder)) {
            fs.mkdirSync(folder, { recursive: true });
        }
        let downloadUrl =
            'https://blog.trality.com/blog' + node.feature_image.replace('https://www.trality.com', '').replace('https://blog.trality.com', '');
        if (node.feature_image.includes('blog/')) {
            downloadUrl =
                'https://blog.trality.com' + node.feature_image.replace('https://www.trality.com', '').replace('https://blog.trality.com', '');
        }

        const result = request('GET', downloadUrl);
        fs.writeFileSync(newUrl, result.getBody(), { flag: 'a' });
        node.feature_image = newUrl.replace('./static', '');
        if (node.html) {
            const $ = cheerio.load(node.html);
            const imgs = $('img');

            $('img').each((i, elm) => {
                const tag = $(elm);
                const item = tag.attr('src');
                let newUrl = './static' + item.replace('https://www.trality.com', '').replace('https://blog.trality.com', '');
                if (!newUrl.includes('blog')) {
                    newUrl = './static/blog' + item.replace('https://www.trality.com', '').replace('https://blog.trality.com', '');
                }
                //const file = fs.createWriteStream(newUrl, { flags: 'a' });
                if (!item.includes('trality.com') && item.includes('http')) {
                    return;
                }
                const folder = newUrl.substring(0, newUrl.lastIndexOf('/'));
                if (!fs.existsSync(folder)) {
                    fs.mkdirSync(folder, { recursive: true });
                }
                const result = request('GET', item);
                fs.writeFileSync(newUrl, result.getBody(), { flag: 'a' });
                tag.attr('src', newUrl.replace('./static', ''));
                //console.log(tag.attr('src'));
            });

            await sleep(5000);
            node.html = $.html();
        }
    }
};
