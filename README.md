
# Node.js JWT Authentication Project

This project provides a secure authentication system using JWT (JSON Web Tokens) for Node.js applications. It supports user registration, login, and securing routes that require user authentication.

## Getting Started

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes.

### Prerequisites

You need Node.js and a MySQL database installed on your system to run this project.

### Installation

Clone the repository to your local machine:

```bash
git clone https://github.com/yourusername/nodejs-jwt-auth.git
cd nodejs-jwt-auth
```

Install the required dependencies:

```bash
npm install
```

Set up your environment variables by creating a `.env` file in the root directory with the following content:

```env
DB_HOST=localhost
DB_USERNAME=your_database_username
DB_PASSWORD=your_database_password
DB_NAME=your_database_name
ACCESS_TOKEN_SECRET=your_access_token_secret
REFRESH_TOKEN_SECRET=your_refresh_token_secret
```

Run the application:

```bash
npm start
```

### Usage

To **register** a new user, send a `POST` request to `/api/users/register` with a JSON body containing the username, email, and password:

```json
{
  "username": "exampleuser",
  "email": "user@example.com",
  "password": "password123"
}
```

To **login**, send a `POST` request to `/api/users/login` with the username and password:

```json
{
  "username": "exampleuser",
  "password": "password123"
}
```

On successful login, you will receive an `accessToken` and a `refreshToken`.

To access protected routes, include the `accessToken` in the `Authorization` header as a Bearer token:

```plaintext
Authorization: Bearer <Your_Access_Token>
```

When the `accessToken` expires, use the `refreshToken` to obtain a new `accessToken` by sending a `POST` request to `/api/users/token`:
