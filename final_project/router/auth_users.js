const express = require("express");
const jwt = require("jsonwebtoken");
let books = require("./booksdb.js");
const regd_users = express.Router();

let users = [];

const isValid = (username) => {
  return users.some((user) => user.username === username);
};

const authenticatedUser = (username, password) => {
  return users.some(
    (user) => user.username === username && user.password === password
  );
};

// Task 7: Login
regd_users.post("/login", (req, res) => {
  const { username, password } = req.body;
  if (!username || !password) {
    return res
      .status(400)
      .json({ message: "Username and password are required." });
  }
  if (authenticatedUser(username, password)) {
    const token = jwt.sign({ id: username }, "secretkey", { expiresIn: 86400 });
    req.session.token = token;
    return res.status(200).json({ auth: true, token });
  } else {
    return res.status(401).json({ message: "Invalid credentials." });
  }
});

// Task 8: Add or modify a book review
regd_users.put("/auth/review/:isbn", (req, res) => {
  const { isbn } = req.params;
  const { review } = req.body;
  if (!books[isbn]) {
    return res.status(404).json({ message: "Book not found." });
  }
  if (!review) {
    return res.status(400).json({ message: "Review content is required." });
  }
  books[isbn].reviews[req.userId] = review;
  return res
    .status(200)
    .json({ message: "Review added/updated successfully." });
});

// Task 9: Delete a book review
regd_users.delete("/auth/review/:isbn", (req, res) => {
  const { isbn } = req.params;
  if (books[isbn] && books[isbn].reviews[req.userId]) {
    delete books[isbn].reviews[req.userId];
    return res.status(200).json({ message: "Review deleted successfully." });
  } else {
    return res.status(404).json({ message: "Review not found." });
  }
});

module.exports.authenticated = regd_users;
module.exports.isValid = isValid;
module.exports.users = users;
