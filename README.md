# craftonomy-ui
[![Website](https://img.shields.io/website?url=https%3A%2F%2Fcraftonomy.net)](https://craftonomy.net)
[![Latest Release](https://img.shields.io/github/v/release/Ubunfu/craftonomy-ui)](https://github.com/Ubunfu/craftonomy-ui/releases)
[![CircleCI](https://img.shields.io/circleci/build/github/Ubunfu/craftonomy-ui?logo=circleci)](https://app.circleci.com/pipelines/github/Ubunfu/craftonomy-ui)
![Contrubutors](https://img.shields.io/github/contributors/Ubunfu/craftonomy-ui?color=blue)
![Last Commit](https://img.shields.io/github/last-commit/Ubunfu/craftonomy-ui)

A simple web UI to show the catalog of items available within mc-shop.

## Run Locally

1. In the root of the project, create a file named `.env`, and within it, set all of the config that's required (as 
noted below) in the [format expected by `dotenv`](https://www.dotenv.org/env). 
2. Build the Docker image by running `docker compose build`.
3. Bring the service up by running `docker compose up`.
4. The site is available at http://localhost:8080.

> Note: You can build and run in one step by running `docker compose up --build`. Any changes to the config set in 
> `.env` will require the whole image to be re-built and started up again to take effect.

## Configuration

### Environment Variables

The Dockerfile compiles this project into static HTML/CSS/JS and loads it into an NGINX web server.  The environment 
variables are sourced from `.env` files and processed at compile time, so if serving this project from a Docker container, changes to these configs
will require rebuilding the image for them to take effect.    

| Parameter                   | Description                                                                                                                                  | Default | Required? |
|-----------------------------|----------------------------------------------------------------------------------------------------------------------------------------------|---------|-----------|
| VUE_APP_MC_SHOP_CATALOG_URL | URL for the web service returning the mc-shop item catalog.                                                                                  | n/a     | Yes       |
| VUE_APP_IDP_LOGIN_URI       | URL for the IDP providing authentication.                                                                                                    | n/a     | Yes       |
| VUE_APP_IDP_TOKEN_URI       | URL for the OAuth API provided by the IDP used to exchange an auth code for tokens.                                                          | n/a     | Yes       |
| VUE_APP_IDP_REDIRECT_URI    | URL that the IDP will use to redirect the user back to craftonomy-ui after authentication.  Must be pre-registered to the client in the IDP. | n/a     | Yes       |
| VUE_APP_IDP_CLIENT_ID       | ID issued to craftonomy-ui by the IDP.                                                                                                       | n/a     | Yes       |

### TLS Certificates

NGINX is configured for TLS usage, so it's necessary to generate some certificates and place them in a directory where 
NGINX can find them and load them up.

1. Install [certbot](https://certbot.eff.org/instructions) to help generate TLS certificates issued by 
[Let's Encrypt](https://letsencrypt.org/) for free.
2. Since this runs in a containerized environment instead of on traditional persistent webserver infrastructure, just
operate certbot in manual mode.  You will have to manually complete a couple challenges to prove domain ownership, then
it will write your certificate files locally.  `sudo certbot certonly --manual`
3. Use OpenSSL to generate a file containing Diffie-Hellman key exchange parameters used by NGINX.  The command assumes
your TLS certs were generated with 2048-bit keys, so adjust if necessary: 
`openssl dhparam 2048 -out dhparam.pem`
4. Download the latest cross-signed certificates from Let's Encrypt to support OCSP stapling by NGINX: 
`wget -O lets-encrypt-x3-cross-signed.pem "https://letsencrypt.org/certs/lets-encrypt-x3-cross-signed.pem"`
5. Put all the files generated above in a directory on the server that will host the app.  Make these files available
to the docker container overriding `/path/my/certs` to this directory in `docker-compose.yml`

## Design Principles

### Component Styling
Generally speaking, an attempt has been made to limit component-scoped styling to that which is just enough to allow the
component to appear how it is meant to, without consideration for where or how it may be used within the site.  Styling 
related to the placement / usage of a component is delegated to the instantiating component.  This seems to help 
promote generality and re-use as first-class considerations when designing components.