import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { addBook, deleteBook } from "./App";

export default function Library() {
  const token = useSelector((state) => state.auth.token);
  const books = useSelector((state) => state.books);

  const dispatch = useDispatch();

  const [name, setName] = useState("");
  const [author, setAuthor] = useState("");

  if (!token) return null; // protect Library (JWT required)

  return (
    <div style={{ margin: "20px" }}>
      <h3>Your Books</h3>

      <input
        placeholder="Book Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <input
        placeholder="Author"
        value={author}
        onChange={(e) => setAuthor(e.target.value)}
      />
      <button
        onClick={() => {
          if (!name || !author) return;
          dispatch(addBook({ name, author }));
          setName("");
          setAuthor("");
        }}
      >
        Add Book
      </button>

      <ul style={{ marginTop: "20px" }}>
        {books.map((b, index) => (
          <li key={index}>
            {b.name} — {b.author}{" "}
            <button onClick={() => dispatch(deleteBook(index))}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
}
