# InsurGrid Take Home Assignment

## Backend (Port 5000)

Refer to the OpenAPI spec for endpoints:

- `GET /api/carrier` retrieves a list of carriers (simply with `name` and `id`)
- `POST /api/carrier/:carrier_id` attempts to sign in on a carrier and displays the result
  - By default, only Progressive has error handling and a robust workflow built in.

`npm run start` will run using `ts-node`, and `npm run watch` will run using `nodemon`. However, `nodemon` was giving `EADDRINUSE` issues during development, so that may be an issue here.

Proxy and CORS are specified to allow `localhost` development.

## Frontend (Port 3000)

Material UI and React is used. A loader / spinner was not implemented given time constraints. Error notification was not implemented for non-Progressive carriers given time constraints.

User clicks to retrieve a list of carriers and selects a carrier to attempt to authenticate with. User then inputs credentials an attempts to sign in. Max timeout is 10 seconds for the authentication process.

The `useContext` API is used to share state (the selected carrier) between components.

`npm run start` and `npm run watch` will run using `react-scripts start`.

## Combined

`lerna` was used as a simple package manager. `lerna run start` will run both `backend` and `frontend` in parallel, `lerna run watch` will do the same in watch mode.
