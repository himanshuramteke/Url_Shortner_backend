# URL Shortener Backend

This is a Node.js backend project for a URL Shortener service. It allows users to create short URLs for long links, track click statistics, and manage their own URLs. The backend supports user authentication, custom slugs, and analytics.

## Features

- **User Authentication:** Register, login, and manage user sessions using JWT and cookies.
- **Short URL Generation:** Create short URLs for any long URL, with optional custom slugs.
- **Redirection:** Redirects short URLs to their original long URLs and tracks click counts.
- **User Dashboard:** Authenticated users can view and manage their own URLs.
- **Analytics:** Tracks the number of times each short URL is clicked.
- **MongoDB Database:** Stores users and URLs securely.

## Tech Stack

- **Node.js** with **Express.js**
- **MongoDB** with **Mongoose**
- **JWT** for authentication
- **Cookies** for session management
- **dotenv** for environment variables

## Getting Started

### Prerequisites

- Node.js (v16+ recommended)
- MongoDB database (local or Atlas)

### Installation

1. **Clone the repository:**
   ```bash
   git clone https://github.com/yourusername/url-shortener-backend.git
   cd url-shortener-backend
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Configure environment variables:**

   Create a `.env` file in the root directory:

   ```
   PORT=3000
   FRONTEND_URL=
   APP_URL=
   MONGO_URI=your_mongodb_connection_string
   JWT_SECRET=your_jwt_secret_key
   ```

4. **Start the server:**
   ```bash
   npm start
   ```

   The server will run on `http://localhost:3000` by default.

## API Endpoints

### Authentication

- `POST /api/auth/register` — Register a new user
- `POST /api/auth/login` — Login and receive a cookie
- `POST /api/auth/logout` — Logout user

### URL Shortening

- `POST /api/shortUrl` — Create a new short URL (requires JSON body: `{ "url": "https://..." }`)
- `GET /api/:id` — Redirect to the original URL using the short ID

### User URLs

- `POST /api/user/urls` — Get all URLs created by the authenticated user (requires login)

## Usage with Postman

1. **Register or login** to get the authentication cookie.
2. **Use the cookie** for authenticated routes (Postman handles this automatically).
3. **Create short URLs** and test redirection by visiting `http://localhost:3000/api/v1/<shortId>`.

## Project Structure

```
src/
  config/
  controllers/
  dao/
  middlewares/
  models/
  routes/
  services/
  utils/
  index.js(main file)
.env
```

---

**Contributions are welcome!**