import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { login, logout } from "./App";

export default function Login() {
  const token = useSelector((state) => state.auth.token);
  const dispatch = useDispatch();
  const [name, setName] = useState("");

  return (
    <div style={{ margin: "20px" }}>
      {!token ? (
        <>
          <h3>Login</h3>
          <input
            placeholder="Enter username"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <button onClick={() => dispatch(login())}>Login</button>
        </>
      ) : (
        <>
          <p>Logged in ✔</p>
          <button onClick={() => dispatch(logout())}>Logout</button>
        </>
      )}
    </div>
  );
}
