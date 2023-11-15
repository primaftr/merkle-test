# Merkle - First Test

## Run Locally
Clone the project

```bash
  git clone https://github.com/primaftr/merkle-test.git
```

Go to the project directory

```bash
  cd merkle-test
```

Run the solution
```bash
node first.js
```

# Merkle - Wedding Guestbook

Coding test from merkle about simple api for managing a wedding guestbook, where users can add their information and leave notes.

## Run Locally

Clone the project

```bash
  git clone https://github.com/primaftr/merkle-test.git
```

Go to the project directory

```bash
  cd merkle-test
```

Install dependencies

```bash
  npm install
```

Configure ENV
Add this line to the env
```
  JWT_SECRET=your-secret-key
  PORT=3000
```


Start the server

```bash
  npm run start
```


## API Endpoints


- Guest Form API: POST /api/guests
- Note Gallery API: GET /api/notes
- Authentication API: POST /api/login, POST /api/logout


## Authentication

To authenticate for admin access, obtain a token by sending a POST request to /api/login with the username and password. Include the obtained token in the Authorization header (Bearer Token) for subsequent requests to admin APIs.
