function Login() {
  return (
    <div>
      Login
      <form className="login" method="post" id="login">
        <label htmlFor="login" id="username">
          username
          <input type="text" />
        </label>

        <br />
        <label htmlFor="login" id="password">
          password
          <input type="text" />
        </label>
      </form>
    </div>
  );
}

export default Login;
