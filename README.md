

**Yarn v2** based monorepo template for quickly bootstrapping production ready web
application projects optimized for [serverless](https://cloud.google.com/serverless)
infrastructure, using code-first **GraphQL API** and **PostgreSQL** backend.

This monorepo was bootstrapped with [Node.js API Starter Kit](https://github.com/kriasoft/nodejs-api-starter).

## Monorepo Structure

`├──`[`.github`](.github) — GitHub configuration including CI/CD<br>
`├──`[`.vscode`](.vscode) — VSCode settings including code snippets, recommended extensions etc.<br>
`├──`[`env`](./env) — environment variables used for local development<br>
`├──`[`db`](./db) — database schema and some administration tools<br>
`├──`[`api`](./api) — GraphQL API server and authentication middleware<br>
`└── ...` — add more packages such as `worker`, `web`, `mobile`, etc.

## Requirements

- [Node.js](https://nodejs.org/) v12 or higher, [Yarn](https://yarnpkg.com/) package manager
- Local or remote instance of [PostgreSQL](https://www.postgresql.org/) (see [Postgres.app](https://postgresapp.com/), [Google Cloud SQL](https://cloud.google.com/sql))
- [VS Code](https://code.visualstudio.com/) editor with [recommended extensions](.vscode/extensions.json)

## Getting Started

Just clone the repo, tweak `.env` files inside of the [`env`](env) package and run `yarn start`:

```bash
$ npx degit https://github.com/kriasoft/nodejs-api-starter example
$ cd ./example                  # Change current directory to the newly created one
$ yarn install                  # Install Node.js dependencies
$ yarn db:reset                 # Initialize a new PostgreSQL database
$ yarn api:start                # Launch Node.js API application
```

The API server must become available at [http://localhost:8080/graphql](http://localhost:8080/graphql).

