# Reader Server

The GraphQL server for Reader. Written in TypeScript with Apollo Server,
Express, Lowdb, and Node.js.

## Design

This server is designed to be as simple as possible, so that we can focus on
the technologies assigned to our MLH Fellowship Pod. It will not scale to
larger data sets, as we always load all data into memory.

We chose to roll our own server as we needed to comply with Relay's specs,
and unfortunately most popular GraphQL servers (e.g. Prisma, Hasura, 8base)
do not comply with them.

This server fully complies with Relay's
[Cursor Connections Specification](https://relay.dev/graphql/connections.htm).
We also partially comply with Relay's
[Global Object Identification Specification](https://relay.dev/graphql/objectidentification.htm) – all
our objects have globally unique IDs that comply with the field stability
requirements, but we do not yet have a `Node` interface or a `node` query.

## Usage

1. Install Node.js and Yarn.
1. `cd` to this directory.
1. Install dependencies by running `yarn`.
1. Run the server in watch mode by running `yarn start`.

The database file will be saved to `./db.json`.
