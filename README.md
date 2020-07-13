# Trality Landingpage

## Tracking package
Create a Github auth token and insert the following lines into the ~/.npmrc file
```
@trality:registry=https://npm.pkg.github.com
//npm.pkg.github.com/:_authToken=TOKEN
```

## Adding Popups

Create your popup under 

    containers/popup/impl

then add it to 

    containers/popup/types.ts

with a random UUID.

Finally, add it as an environment variable in  `.env`.

## Deploying

Deploy using the following command

    yarn deploy
