import React from "react";
import { Link } from "react-router-dom";

const Login = () => {
  return (
    <>
      <div
        style={{
          height: "80vh",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          flexDirection: "column",
        }}
      >
        <input
          style={{ padding: 10, marginBottom: 20 }}
          type="text"
          placeholder="username"
          className="Link"
        />
        <input
          style={{ padding: 10, marginBottom: 20 }}
          type="password"
          placeholder="password"
          className="Link"
        />
        <button>Login</button>
        <br />

        <Link to="/">Back to Home</Link>
      </div>
    </>
  );
};

export default Login;
