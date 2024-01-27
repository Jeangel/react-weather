# ⛈️ React Weather 🌦️

## How to run the app

1. Clone the repository
2. Run `npm install` (App was created with node version v20.10.0)
3. Create a `.env` file using as reference the `.env.example` file
4. Run `npm run dev` to run the application
5. App should be available on http://localhost:5173

## How to run E2E tests

1. Run the application (previous steps)
2. Run `npm run cypress:open`
3. Select E2E testing
4. Select browser
5. Select `App.cy.ts`

## TODO

- Create fixtures for E2E tests to not use the real API
- Use dynamic image resizing from Unsplash API
- Error handling in general
- Loading state when API is loading
- Display Hourly/Daily weather in the Dashboard section (Under favorites)
- Improve look and feel
- A11y improvements (roles, markup semantic, proper labels)
