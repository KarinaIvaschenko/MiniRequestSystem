# Mini Request System

Package name: `mini-request-system`

A mini request management app with role-based access (user / manager): create requests, filter them, and update statuses.

https://mini-request-system.vercel.app/

## Tech stack

- **React 19** + **TypeScript** — UI and type safety
- **Vite** — build tool and dev server
- **Redux Toolkit** + **React Redux** — global state management (requests, role, filter)
- **React Router DOM v7** — routing
- **SCSS** — styling
- **ESLint** + **typescript-eslint** — linting

## Key features

- Role switcher between **user** and **manager** with different available actions
- Add new requests via a form with validation
- Filter requests by title, description, and status (manager only)
- Update request status by click (manager only); statuses progress through a fixed chain
- Reusable `RequestFields` component shared between the create form and the filter
- Requests are persisted in `localStorage` — data survives page reloads

## Requirements

- Node.js `>=22.12.0`
- Yarn

## Install dependencies

```bash
yarn
```

## Run in development mode

```bash
yarn start
```

The app will be available at [http://localhost:3000](http://localhost:3000) (or the port Vite prints to the console).  
The page reloads automatically on edits. ESLint errors appear in the console.

## Build for production

```bash
yarn build
```

Runs TypeScript type checking (`tsc -b`) and then builds the app with Vite.  
The production bundle is placed in the `dist` folder.

## Preview production build

```bash
yarn preview
```

Serves the built `dist` folder locally to preview the production build before deployment.

## Lint

```bash
yarn lint
```

Runs ESLint across the project.