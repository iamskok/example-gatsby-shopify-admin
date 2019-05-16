# BVA Gatsby Shopify Starter

* Go over `gatsby-source-shopify` (Storefront API) plugin and read "Understranding gatsby-source-shopify plugin" section
* Understand schema definitions for Shopify Admin API

## Progress

* Created private app and generated token to use with Shopify Admin API. 
* Asked questions:
	- https://twitter.com/iamskok/status/1127430452493504517
	- https://spectrum.chat/gatsby-js/general/gatsby-source-graphql-graphql-shopify-admin-api~a4d823cd-02e9-4871-b822-704805c64518
	- https://spectrum.chat/gatsby-js/general/gatsby-source-graphql-and-shopify-graphql-admin-api~b3fbe66b-498d-452c-a745-cbe6869e7e7e
	- https://github.com/gatsbyjs/gatsby/issues/13981
	- https://stackoverflow.com/questions/56096207/gatsby-source-graphql-and-graphql-shopify-admin-api-error
	- https://community.shopify.com/c/Shopify-APIs-SDKs/Using-GraphQL-Admin-API-with-GatsbyJS/m-p/513410
* How will query with custom fields look like?

## Errors

* `43:9  error  Cannot query field "admin" on type "Query"  graphql/template-strings`
* `Error: Schema must contain uniquely named types but contains multiple types named "QueryRoot".`

## To Do

* Try to use advanced configuration with Apollo.
* Check how Gatsby-source-Shopify works 
* Install https://github.com/skevy/graphiql-app
* Try postman
* Read about graphql sdl
* Read about Apollo 
<!-- * Try to use another format of the URL. Private applications authenticate with Shopify through basic HTTP authentication, using the URL format https://{apikey}:{password}@{hostname}/admin/api/{version}/{resource}.json
* Try adding public app -->

## Links 

* Shopify GraphQL Admin API
* Gatsby Source GraphQL
* https://github.com/gatsbyjs/gatsby/tree/master/examples/using-gatsby-source-graphql
* https://www.gatsbyjs.org/docs/third-party-graphql/
* https://github.com/gatsbyjs/gatsby/tree/master/packages/gatsby-source-graphql
gatsby-source-shopify-admin-plugin?
* https://www.gatsbyjs.com/gatsby-themes-webinar-video/?submissionGuid=aab4f5a7-9696-4203-be17-4ad8a8e736f4

# Understranding `gatsby-source-shopify` plugin

`gatsby-source-shopify` (GraphQL Storefront Shopify API) project structure:

## [`lib.js`](https://github.com/gatsbyjs/gatsby/blob/master/packages/gatsby-source-shopify/src/lib.js)

### Dependencies:

	* [`graphql-request`](https://github.com/prisma/graphql-request) (`GraphQLClient`) - Promise based (async/await) Minimal GraphQL client supporting Node and browsers for scripts or simple apps
	* [`prettyjson`](https://github.com/rafeca/prettyjson) - Package for formatting JSON data in a coloured YAML-style, perfect for CLI output.
	* [`lodash/fp`](https://github.com/lodash/lodash) (`get`, `last`) - module promotes a more functional programming (FP) friendly style by exporting an instance of lodash with its methods wrapped to produce immutable auto-curried iteratee-first data-last methods. 

### What is it doing?

	* Create a Shopify Storefront Client for the provided name and token.
	* Get all paginated data from a query. Will execute multiple requests as needed. Utilizes `queryOnce` and `printGraphQLError`

## [`queries.js`](https://github.com/gatsbyjs/gatsby/blob/master/packages/gatsby-source-shopify/src/queries.js)

### Dependencies

None.

### What is it doing?

Defines queries

## [`nodes.js`](https://github.com/gatsbyjs/gatsby/blob/master/packages/gatsby-source-shopify/src/nodes.js)

### Dependencies

### What is it doing?

Defines nodes.

## [`gatsby-node.js`](https://github.com/gatsbyjs/gatsby/blob/master/packages/gatsby-source-shopify/src/gatsby-node.js)

### Dependencies:

* [`lodash/fp`](https://github.com/lodash/lodash) (`pipe`) - module promotes a more functional programming (FP) friendly style by exporting an instance of lodash with its methods wrapped to produce immutable auto-curried iteratee-first data-last methods.
* [`chalk`](https://github.com/chalk/chalk) - terminal string styling done right
* [`p-iteration`](https://github.com/toniov/p-iteration) (`forEach`) - Utilities that make array iteration easy when using async/await or Promises
* `lib.js` (createClient, printGraphQLError, queryAll, queryOnce)
* `nodes.js` defines Gatsby nodes:
	- `ArticleNode`
	- `BlogNode`
	- `CollectionNode`
	- `CommentNode`
	- `ProductNode`
	- `ProductOptionNode`
	- `ProductVariantNode`
	- `ProductTypeNode`
	- `ShopPolicyNode`
* `queries.js` defines queries:
	- `ARTICLES_QUERY`
	- `BLOGS_QUERY`
	- `COLLECTIONS_QUERY`
	- `PRODUCTS_QUERY`
	- `PRODUCT_TYPES_QUERY`
	- `SHOP_POLICIES_QUERY`

### What is it doing?

Controller for creating GraphQL Gatsby Nodes by utilizing GraphQL Client, Nodes and Queries.

1. Sourcing nodes using predefined nodes and queries.
2. Creates nodes using prefefined nodes and queries.
3. Creates createShopPolicies.