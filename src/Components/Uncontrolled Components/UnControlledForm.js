import React from "react";

const UnControlledForm = () => {
  const SignupUser = (event) => {
    event.preventDefault();
    const form = new FormData(event.target);
    const username = form.get("username");

    alert(`Welcome ${username}`)
  };
  return (
    <div>
      <form onSubmit={SignupUser}>
        <div>
          <label>
            Username: <br />
            <input type="text" name="username" />
          </label>
        </div>

        <div>
          <label>
            Email: <br />
            <input type="text" name="email" />
          </label>
        </div>

        <div>
          <label>
            Password: <br />
            <input type="password" name="password" />
          </label>
        </div>

        <div>
          <label>
            Confirm password: <br />
            <input type="password" name="confirmpassword" />
          </label>
        </div>

        <button type="submit">Sign up</button>
      </form>
    </div>
  );
};

export default UnControlledForm;
