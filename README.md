# mc-shop-ui
[![Website](https://img.shields.io/website?url=http%3A%2F%2Fshop.craftonomy.net)](http://shop.craftonomy.net)
[![Latest Release](https://img.shields.io/github/v/release/Ubunfu/mc-shop-ui)](https://github.com/Ubunfu/mc-shop-ui/releases)
[![CircleCI](https://img.shields.io/circleci/build/github/Ubunfu/mc-shop-ui?logo=circleci)](https://app.circleci.com/pipelines/github/Ubunfu/mc-shop-ui)
![Contrubutors](https://img.shields.io/github/contributors/Ubunfu/mc-shop-ui?color=blue)
![Last Commit](https://img.shields.io/github/last-commit/Ubunfu/mc-shop-ui)

A simple web UI to show the catalog of items available within mc-shop.

## Configuration

### Environment Variables

The Dockerfile compiles this project into static HTML/CSS/JS and loads it into an NGINX web server.  The environment 
variables are sourced from `.env` files and processed at compile time, so if serving this project from a Docker container, changes to these configs
will require rebuilding the image for them to take effect.    

| Parameter                   | Description                                                                                                                                | Default   | Required? |
|-----------------------------|--------------------------------------------------------------------------------------------------------------------------------------------|-----------|-----------|
| VUE_APP_MC_SHOP_CATALOG_URL | URL for the web service returning the mc-shop item catalog.                                                                                | n/a       | Yes       |
| VUE_APP_IDP_LOGIN_URI       | URL for the IDP providing authentication.                                                                                                  | n/a       | Yes       |
| VUE_APP_IDP_TOKEN_URI       | URL for the OAuth API provided by the IDP used to exchange an auth code for tokens.                                                        | n/a       | Yes       |
| VUE_APP_IDP_REDIRECT_URI    | URL that the IDP will use to redirect the user back to mc-shop-ui after authentication.  Must be pre-registered to the client in the IDP.  | n/a       | Yes       |
| VUE_APP_IDP_CLIENT_ID       | ID issued to mc-shop-ui by the IDP.                                                                                                        | n/a       | Yes       |