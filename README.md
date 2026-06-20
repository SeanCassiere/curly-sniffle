# Spreadsheet Package

A pnpm/Turbo workspace for spreadsheet packages and apps.

## Workspace

- `packages/spreadsheet-core`: distributable TypeScript spreadsheet utilities built with Vite.
- `apps/spreadsheet-react-app`: Vite + React + TypeScript app that consumes `spreadsheet-core`.
- `packages/eslint-config`: shared ESLint flat configs.
- `packages/typescript-config`: shared TypeScript configs.

## Commands

```sh
pnpm install
pnpm build
pnpm lint
pnpm check-types
pnpm format
```

Run a single project with Turbo filters, for example:

```sh
pnpm turbo run build --filter spreadsheet-core
pnpm turbo run build --filter spreadsheet-react-app
```
