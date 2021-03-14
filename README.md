# mc-shop-ui
[![Latest Release](https://img.shields.io/github/v/release/Ubunfu/mc-shop-ui)](https://github.com/Ubunfu/mc-shop-ui/releases)
[![CircleCI](https://img.shields.io/circleci/build/github/Ubunfu/mc-shop-ui?logo=circleci)](https://app.circleci.com/pipelines/github/Ubunfu/mc-shop-ui)
![Contrubutors](https://img.shields.io/github/contributors/Ubunfu/mc-shop-ui?color=blue)
![Last Commit](https://img.shields.io/github/last-commit/Ubunfu/mc-shop-ui)

A simple web UI to show the catalog of items available within mc-shop.

This service runs as an Express JS application, powered by the Serverless Framework and AWS Lambda.

## Configuration

### Environment Variables
| Parameter           | Description                                                                     | Default | Required? |
|---------------------|---------------------------------------------------------------------------------|---------|-----------|
| MC_SHOP_CATALOG_URL | URL for the web service returning the mc-shop item catalog.                     | n/a     | Yes       |
| LOCAL               | Boolean (true|false) flag controlling whether Express `app.listen()` is called. | false   | No        |
| LOCAL_PORT          | Port on which the server should listen if the above is `true`.                  | n/a     | No        |