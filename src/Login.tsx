/* eslint-disable node/no-unsupported-features/es-syntax */
import { useState } from "react";

function Login() {
  const [input, setInput] = useState({
    username: "",
    password: "",
  });
  const { username, password } = input;

  function handleChange(event) {
    console.log("handling change", input);
    return setInput({ ...input, [event.target.name]: event.target.value });
  }
  function handleSubmit(event) {
    event.preventDefault();
    console.log("handling submit", input);
  }
  return (
    <div>
      Login
      <form className="login" id="login" onSubmit={handleSubmit}>
        <label htmlFor="login" id="username">
          username
          <input
            type="text"
            name="username"
            onChange={handleChange}
            value={username}
          />
        </label>

        <br />
        <label htmlFor="login" id="password">
          password
          <input
            type="text"
            name="password"
            onChange={handleChange}
            value={password}
          />
        </label>
        <br />
        <label htmlFor="submit" id="submit">
          <input type="submit" name="submit" />
        </label>
      </form>
    </div>
  );
}

export default Login;
