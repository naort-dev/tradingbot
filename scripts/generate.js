const fs = require('fs');
const path = require('path');
const sharp = require('sharp');
const MarkdownIt = require('markdown-it');
const Renderer = new MarkdownIt();
const fsExtra = require('fs-extra');

const PATH = path.join(__dirname, '..', './blog');
const ASSETPATH = path.join(PATH, 'assets');

const TARGET = path.join(__dirname, '..', 'static', 'db');
const DATATARGET = path.join(TARGET, 'data');
const IMAGETARGET = path.join(DATATARGET, 'headers');
const ASSETSTARGET = path.join(DATATARGET, 'images');

const copyRecursiveSync = function(src, dest) {
    fsExtra.copySync(src, dest);
};

function firstHeader(md) {
    const matches = md.match(/^# (.+)/);
    if (!matches || !matches.length) {
        throw new Error('No header found in: \n' + md);
    }
    return matches[0].split('# ').pop();
}

function firstSubHeader(md) {
    const matches = md.match(/## +(.+)/);
    if (!matches || !matches.length) {
        throw new Error('No subheader found in: \n' + md);
    }
    return matches[0].split('## ').pop();
}

async function getFiles() {
    const files = fs.readdirSync(PATH);
    const fileContents = [];
    for (const f of files) {
        if (f.endsWith('.md')) {
            const parts = f.split('_');
            if (parts.length !== 3) {
                throw new Error('Invalid article filename: ' + f);
            }
            const [date, author, link] = parts;
            if (!Date.parse(date)) {
                throw new Error('Invalid date in filename: ' + f);
            }
            const content = fs.readFileSync(PATH + '/' + f).toString();
            const linkSlug = link.split('.')[0];
            const imagePath = path.join(PATH, 'headers', linkSlug + '.png');
            const header = firstHeader(content);
            const subheader = firstSubHeader(content);

            let targetImage = undefined;
            let targetPreviewImage = undefined;

            if (fs.existsSync(imagePath)) {
                targetImage = `/static/db/data/headers/${linkSlug}.png`;
                targetPreviewImage = `/static/db/data/headers/${linkSlug}-preview.png`;
                await sharp(imagePath)
                    .resize(1280)
                    .png()
                    .toFile(`${IMAGETARGET}/${linkSlug}.png`);
                await sharp(imagePath)
                    .resize(350)
                    .png()
                    .toFile(`${IMAGETARGET}/${linkSlug}-preview.png`);
            }

            const replaced = content.replace(/.\/assets\//, '/static/db/data/images/');
            const base64 = Buffer.from(Renderer.render(replaced)).toString('base64');

            fileContents.push({
                date: Date.parse(date),
                author,
                link: linkSlug,
                content: base64,
                image: targetImage,
                imagePreview: targetPreviewImage,
                header,
                subheader,
            });
        }
    }
    return fileContents.sort((a, b) => b.date - a.date);
}

async function run() {
    const files = await getFiles();

    const articles = files.map((f) => ({
        date: f.date,
        author: f.author,
        link: f.link,
        imagePreview: f.imagePreview,
        image: f.image,
        header: f.header,
        subheader: f.subheader,
    }));

    // Write articles overview
    fs.writeFileSync(path.join(TARGET, 'articles.json'), JSON.stringify(articles));

    // Write each articles
    files.forEach((f) => {
        fs.writeFileSync(path.join(DATATARGET, f.link + '.json'), JSON.stringify(f));
    });

    // Copy assets
    copyRecursiveSync(ASSETPATH, ASSETSTARGET);
}

run().then(() => {
    console.log('Finished');
});
