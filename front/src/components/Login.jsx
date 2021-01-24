import React, { useState } from "react";
import AuthService from "../services/AuthService";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  return (
    <div>
      <form>
        <label htmlFor="email">
          <span>Email:&nbsp;</span>
          <input
            id="email"
            type="email"
            value={email}
            onChange={(event) => {
              setEmail(event.target.value);
            }}
          />
        </label>
        <br />
        <br />
        <label htmlFor="password">
          <span>Password:&nbsp;</span>
          <input
            id="password"
            type="password"
            value={password}
            onChange={(event) => {
              setPassword(event.target.value);
            }}
          />
        </label>
        <br />
        <br />
        <input
          type="submit"
          value="Login"
          onClick={async (event) => {
            event.preventDefault();
            try {
              const result = await AuthService.login(email, password);
              localStorage.setItem("USER_ID", result.user.id);
              localStorage.setItem("USER_TOKEN", result.token);
              alert("Vous êtes bien connecté!!!");
            } catch (err) {
              console.error("error", err);
            }
          }}
        />
      </form>
    </div>
  );
};

export default Login;
