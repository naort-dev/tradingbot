# Trality Landingpage

## Adding blog articles

Simple add a markdown page in the folder `./blog` with the following format

    YYYY-MM-DD_authorName_linkName

`linkName` must be unique and will be the url under which the blog entry is visible,
e.g.

    `/blog/linkName`

Once ready, run

    `yarn blog`

to update blog articles. You can also preview them locally, just make sure to refresh your page.

## Deploying

Deploy using the following command

    yarn deploy
