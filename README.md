# Furni React Homepage

A React and Vite implementation of the Furni furniture storefront homepage. The page reuses the supplied theme stylesheet and imagery while keeping its sections and content in small, readable React modules.

## Project Structure

```text
src/
  components/       Page sections and reusable interface pieces
  data/             Product, feature, testimonial, and journal content
  App.jsx           Homepage section composition
  index.css         Global defaults and React-specific theme controls
  main.jsx          React application entry point
public/
  furni/
    css/             Furni theme stylesheet
    images/          Furni theme image and icon assets
reactcrud/           Existing PHP CRUD backend
```

Add or update a homepage section in `src/components/`. Keep repeated display content in `src/data/homepage.js`, then compose the section in `src/App.jsx`.

## Development

```sh
npm install
npm run dev
```

## Checks

```sh
npm run build
npm run lint
```

## Account Panel Setup

The React account pages use the PHP API in `reactcrud/api/`. Import `reactcrud/api/schema.sql` into the existing `react_php` database using phpMyAdmin or the MySQL command line. This creates a separate `auth_users` table and does not alter the existing CRUD `users` table.

Start Apache and MySQL in XAMPP, then run the React app. By default, the client connects to `http://<current-host>/reactcrud/api`; set `VITE_AUTH_API_URL` in `.env.local` if the API is hosted elsewhere. The API allows the local Vite origins `http://localhost:5173` and `http://127.0.0.1:5173` by default. For deployment, configure `AUTH_ALLOWED_ORIGINS` and `DB_HOST`, `DB_USER`, `DB_PASSWORD`, and `DB_NAME` in the PHP server environment, and use HTTPS.

The API endpoints are `POST register.php`, `POST login.php`, `GET me.php`, and `POST logout.php`. Passwords are stored as hashes; authenticated requests use an HTTP-only PHP session cookie.

The account routes are `/register`, `/login`, and `/dashboard`.