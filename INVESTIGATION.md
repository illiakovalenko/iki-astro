# Astro POC

## How to setup

1. Install dependencies: `npm install`
1. Setup config (_jss setup_) and deploy items to Sitecore (_jss deploy_)
1. Don't forget to promote the items in Workbox if needed.
1. Run the app: `npm run dev`

## Investigation

> **_NOTE:_** In order to start use Astro, it's required for JSS to start using **ES modules** by default. This is not supported by JSS yet. Currently there are different workarounds applied for this, like using _import pkg from '@sitecore-jss/sitecore-jss'_ statement.

* [x] Personalization - CloudSDK team also made a POC using SDK and Astro app. In order to enable Astro, there are changes that needed to be done in the SDK: new typeguards, new AstroRequest, AstroResponse types and ES modules support. Currently all the workarounds are applied here in POC app, but all personalization related files are disabled by default, since there is no way to deploy app to Vercel because of that, without making manual changes in __node_modules\@sitecore-cloudsdk\personalize\package.json__, apply the following changes:

  ```json
  "exports": {
    "./server": {
      "import": "./server.cjs",
      "require": "./server.cjs",
      "types": "./server.d.ts"
    },
    "./browser": {
      "import": "./browser.js",
      "require": "./browser.cjs",
      "types": "./browser.d.ts"
    }
  }
  ```

* [x] Multisite
* [x] i18n
* [x] localized routing
* [x] Hybrid rendering (SSG + SSR)
* [x] SSG, SSG sitemap - Reused _GraphQLSitemapService_ from _@sitecore-jss/sitecore-jss-nextjs_
* [x] Custom Error pages:
  * [x] 404 - _./src/pages/404.tsx_
  * [] 500 - a custom error page is not supported by Astro yet
* [x] React components examples:
  * [x] ContentBlock
  * [x] GraphQL-Layout
  * [x] GraphQL-IntegratedDemo
  * [] GraphQL-ConnectedDemo - not implemented (no easy way to fetch data from GraphQL endpoint on the server side)
* [x] Editing:
  * _/api/editing/render_ - POST endpoint to request a page rendering, requests /api/editing/page.
  * _/api/editing/page_ - Endpoint to render a layout with editing capabilities by using common JssLayout component.
* [x] Vercel deployment - achived by using _@astrojs/vercel/serverless_ adapter
* [x] Environment variables
* [x] Debug logging using _debug_ package - enabled programmatically using _DEBUG_ environment variable. In Astro you can access .env environment variables using _import.meta.env_. _enableDebug_ is called in _src/middleware.ts_, since it's an entrypoint of the application.
* [x] Astro common components are placed in _./src/sdk_ folder
* [x] Included code-first _./data_ approach to easily prepare the data for testing purposes.
