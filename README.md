
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

To **register** a new user, send a `POST` request to `/appusers` with a JSON body containing the username, email, password, and other information:

```json
{
  "userId": "sdfsfsf",
  "username": "john_doe",
  "password": "password",
  "email": "john.doe@example.com",
  "mobile": "1234567890",
  "displayPicture": "https://example.com/profile-picture.jpg"
}
```

To **login**, send a `POST` request to `api/auth/login` with the username and password:

```json
{
  "username": "john_doe",
  "password": "password"
}
```

To **update**, send a `PUT` request to `/appusers/{userId}` with the data that needs to be updated, send the access token as bearer token to avoid unauthorized error:

```json
{
  "userId": "sdfsfsf",
  "username": "john_doey",
  "password": "password",
  "email": "john.doe@example.com",
  "mobile": "1234567890",
  "displayPicture": "https://example.com/profile-picture.jpg"
}
```

To **get the new tokens from backend**, send a `POST` request to `api/auth/token` with the access token in body:

```json
{
  "token": "Whgu2Yh7qp2UFmdkG8o28POAodA"
}
```

On successful login, you will receive an `accessToken` and a `refreshToken`.

To access protected routes, include the `accessToken` in the `Authorization` header as a Bearer token:

```plaintext
Authorization: Bearer <Your_Access_Token>
```

When the `accessToken` expires, use the `refreshToken` to obtain a new `accessToken` by sending a `POST` request to `/api/users/token`:
