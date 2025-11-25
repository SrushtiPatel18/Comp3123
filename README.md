Personal Library Manager (React + Redux + JWT Demo)

A simple application demonstrating React, Redux, and JWT concepts for Full Stack Development lab work.


Features

Login (fake JWT token for demonstration)

Add books (name + author)

Delete books

Redux used for global state management

Library page visible only after login



Concepts Demonstrated
a. React

Built using functional components and hooks.

b. Redux (all required concepts)

Concept	Demonstrated In
State	auth.token, books[]
Store	configureStore() in App.js
Reducer	authSlice, booksSlice
Action	login, logout, addBook, deleteBook
Dispatch	dispatch(login()), dispatch(addBook())
Subscribe	useSelector() updates UI automatically


c. JWT

A temporary JWT token ("temp-jwt-token") is set on login.
Library page is protected and only shown if the token exists.


Project Structure
src/
 - App.js
 - Login.js
 - Library.js
 - index.js


How to Run
npm install
npm start


Open: http://localhost:3000




This project fulfills the requirements of demonstrating:

React components

Redux state management

JWT authentication concept

Add/Delete book functionality