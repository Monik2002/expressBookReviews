const express = require("express");
let books = require("./booksdb.js");
let isValid = require("./auth_users.js").isValid;
let users = require("./auth_users.js").users;
const public_users = express.Router();

// // Task 1: Get the book list available in the shop
// public_users.get("/", (req, res) => {
//   res.status(200).json(books);
// });

// // Task 2: Get book details based on ISBN
// public_users.get("/isbn/:isbn", (req, res) => {
//   const { isbn } = req.params;
//   if (books[isbn]) {
//     res.status(200).json(books[isbn]);
//   } else {
//     res.status(404).json({ message: "Book not found." });
//   }
// });

// // Task 3: Get book details based on author
// public_users.get("/author/:author", (req, res) => {
//   const { author } = req.params;
//   const result = Object.values(books).filter((book) => book.author === author);
//   if (result.length > 0) {
//     res.status(200).json(result);
//   } else {
//     res.status(404).json({ message: "No books found for this author." });
//   }
// });

// // Task 4: Get all books based on title
// public_users.get("/title/:title", (req, res) => {
//   const { title } = req.params;
//   const result = Object.values(books).filter((book) => book.title === title);
//   if (result.length > 0) {
//     res.status(200).json(result);
//   } else {
//     res.status(404).json({ message: "No books found with this title." });
//   }
// });

// Task 5: Get book review
public_users.get("/review/:isbn", (req, res) => {
  const { isbn } = req.params;
  if (books[isbn]) {
    res.status(200).json(books[isbn].reviews);
  } else {
    res.status(404).json({ message: "Book not found." });
  }
});

// Task 6: Register a new user
public_users.post("/register", (req, res) => {
  const { username, password } = req.body;
  if (!username || !password) {
    return res
      .status(400)
      .json({ message: "Username and password are required." });
  }
  if (isValid(username)) {
    return res.status(400).json({ message: "Username already exists." });
  }
  users.push({ username, password });
  return res.status(200).json({ message: "User registered successfully." });
});

// Task 10: Get the book list available in the shop using async-await
public_users.get("/", async (req, res) => {
  try {
    const response = await axios.get("http://localhost:5000/");
    res.status(200).json(response.data);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// Task 11: Get book details based on ISBN using async-await
public_users.get("/isbn/:isbn", async (req, res) => {
  try {
    const { isbn } = req.params;
    const response = await axios.get(`http://localhost:5000/isbn/${isbn}`);
    res.status(200).json(response.data);
  } catch (error) {
    res.status(404).json({ message: "Book not found." });
  }
});

// Task 12: Get book details based on author using async-await
public_users.get("/author/:author", async (req, res) => {
  try {
    const { author } = req.params;
    const response = await axios.get(`http://localhost:5000/author/${author}`);
    res.status(200).json(response.data);
  } catch (error) {
    res.status(404).json({ message: "No books found for this author." });
  }
});

// Task 13: Get book details based on title using async-await
public_users.get("/title/:title", async (req, res) => {
  try {
    const { title } = req.params;
    const response = await axios.get(`http://localhost:5000/title/${title}`);
    res.status(200).json(response.data);
  } catch (error) {
    res.status(404).json({ message: "No books found with this title." });
  }
});

module.exports.general = public_users;
