# Book Review API with Authentication

This project is a comprehensive Book Review API with user authentication. It allows users to browse books, retrieve detailed information by ISBN, author, or title, add or update book reviews, and register new users. The API features secure endpoints that require authentication for adding or updating reviews, ensuring that only registered users can modify content.

## Features

- **Public Endpoints:** Browse books, get book details by ISBN, author, or title, and view reviews.
- **Authentication:** User registration and secure login with JWT-based authentication.
- **Protected Endpoints:** Add or update book reviews only for authenticated users.
- **Async/Await:** Utilizes async/await for handling asynchronous operations, making the API robust and responsive.

## Technologies

- **Express.js:** For creating the server and defining routes.
- **JWT (JsonWebToken):** For user authentication and secure access.
- **Axios:** For making HTTP requests (though in this project, internal data access doesn’t require it).
- **Body-Parser:** For parsing incoming request bodies.

## Project Structure


Sure, here's a detailed README.md file for your project:

markdown
Copy code
# Book Review API with Authentication

This project is a comprehensive Book Review API with user authentication. It allows users to browse books, retrieve detailed information by ISBN, author, or title, add or update book reviews, and register new users. The API features secure endpoints that require authentication for adding or updating reviews, ensuring that only registered users can modify content.

## Features

- **Public Endpoints:** Browse books, get book details by ISBN, author, or title, and view reviews.
- **Authentication:** User registration and secure login with JWT-based authentication.
- **Protected Endpoints:** Add or update book reviews only for authenticated users.
- **Async/Await:** Utilizes async/await for handling asynchronous operations, making the API robust and responsive.

## Technologies

- **Express.js:** For creating the server and defining routes.
- **JWT (JsonWebToken):** For user authentication and secure access.
- **Nodemon:** For automatically restarting the server during development.

## Project Structure

expressBookReviews/
│
├── final_project/
│ ├── index.js
│ ├── booksdb.js
│ └── router/
│ ├── auth_users.js
│ └── general.js

GET /public

#### Get book details based on ISBN

GET /public/isbn/

#### Get book details based on ISBN

GET /public/author/

#### Get book details based on author

GET /public/title/

#### Get book details based on title

POST /auth/register

#### Register a new user

POST /auth/login

#### Login with user credentials

POST /protected

#### Add a new review

PUT /protected

#### Update an existing review

DELETE /protected

#### Delete a review

## Installation

1. Clone the repository and navigate to the project folder.
2. Install the dependencies using `npm install`.
3. cd expressBookReviews .
4. cd final_project .
5. Start the server with `npm start`.
6. Access the API endpoints using Postman or any other API testing tool.


## Example Usage

1. Register a new user by sending a POST request to `/auth/register` with the following JSON data:

```json
{
  "username": "user1",
  "password": "password1"
}
```

2. Log in with the registered user by sending a POST request to `/auth/login` with the same JSON data.
3. Copy the JWT token from the response.
4. Use the token to access protected endpoints like `/protected`, `/protected`, and `/protected` by adding an `Authorization` header with the value
5. `Bearer <token>` in your requests.
6. Add a new review by sending a POST request to `/protected` with the following JSON data:

```json
{
  "review": "This book is amazing!"
}
```

## Conclusion

This project demonstrates how to create a secure Book Review API with user authentication using Express.js and JWT. By implementing public and protected endpoints, users can browse books, view reviews, and add or update reviews securely. The project structure is organized and easy to navigate, making it a great starting point for building more complex APIs.

