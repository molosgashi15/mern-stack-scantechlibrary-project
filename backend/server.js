// server.js
require("dotenv").config();
const express = require("express");
const cors = require("cors");
const { notFound, errorHandler } = require("./src/errorHandler");

const app = express();
app.use(cors());
app.use(express.json());

// Sample in-memory data for a minimal library API
const books = [
	{ id: 1, title: "Pride and Prejudice", author: "Jane Austen", available: true },
	{ id: 2, title: "1984", author: "George Orwell", available: true },
	{ id: 3, title: "To Kill a Mockingbird", author: "Harper Lee", available: false },
	{ id: 4, title: "The Great Gatsby", author: "F. Scott Fitzgerald", available: true },
	{ id: 5, title: "Moby Dick", author: "Herman Melville", available: true }
];

const students = [
	{ id: 1, name: "Alice Johnson" },
	{ id: 2, name: "Bob Smith" }
];

app.get("/api/books", (req, res) => {
	res.json(books);
});

app.get("/api/books/:id", (req, res) => {
	const book = books.find(b => b.id === Number(req.params.id));
	if (!book) return res.status(404).json({ message: "Book not found" });
	res.json(book);
});

app.get("/api/students", (req, res) => {
	res.json(students);
});

app.get("/api/stats", (req, res) => {
	res.json({ books: books.length, students: students.length, loans: 0 });
});

app.post("/api/loans", (req, res) => {
	const { bookId, studentId } = req.body || {};
	if (!bookId || !studentId) return res.status(400).json({ message: "bookId and studentId required" });
	// In-memory mock: mark book unavailable
	const book = books.find(b => b.id === Number(bookId));
	if (book) book.available = false;
	res.status(201).json({ message: "Loan recorded (mock)", bookId, studentId });
});

// 404 + error middleware
app.use(notFound);
app.use(errorHandler);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`API running on port ${PORT}`));