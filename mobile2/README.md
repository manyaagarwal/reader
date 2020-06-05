# Reader Mobile App

The Reader mobile app. Written in TypeScript with React Native and Relay, and
minimal Jest tests.

## Usage

1. Install Node.js and Yarn.
1. Start the server following instructions in [its README](../server/README.md#Usage).
1. `cd` to this directory.
1. Install dependencies by running `yarn`.
1. If running on a mobile device, be sure to change
   [src/Environment.ts](src/Environment.ts) to point to your GraphQL server.
1. Run the server in watch mode by running `yarn android`.

If Relay-specific files are changed, e.g. if any fragments, mutations, or
queries are changed, be sure to run `yarn relay` to regenerate the TypeScript
types stored in `__generated__` directories.
