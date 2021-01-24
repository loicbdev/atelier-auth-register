import React, { useState } from "react";
import axios from "axios";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { REACT_APP_SERVER_ADDRESS } = process.env;

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
              const result = await axios.post(
                `${REACT_APP_SERVER_ADDRESS}/users/login`,
                {
                  email,
                  password,
                }
              );
              console.log("result", result);
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
