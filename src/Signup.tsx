function Signup() {
  return (
    <div>
      Signup
      <form className="signup" method="post" id="signup">
        <label htmlFor="signup" id="username">
          username
          <input type="text" />
        </label>

        <br />
        <label htmlFor="signup" id="password">
          password
          <input type="text" />
        </label>
      </form>
    </div>
  );
}

export default Signup;
