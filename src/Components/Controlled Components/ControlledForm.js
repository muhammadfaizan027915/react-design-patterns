import React, { useReducer } from "react";

const initicalValue = {
  username: "",
  email: "",
  password: "",
  confirmpassword: "",
};

const reducer = (state, action) => {
  switch (action.type) {
    case "user":
      return { ...state, [action.name]: action.value };

    default:
      return state;
  }
};

const ControlledForm = () => {
  const [state, dispatch] = useReducer(reducer, initicalValue);
  const handleChange = (event) => {
    dispatch({
      type: "user",
      name: event.target.name,
      value: event.target.value,
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    alert(`Welcome ${state.username}`);
  };
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div>
          <label>
            Username: <br />
            <input
              type="text"
              name="username"
              value={state.username}
              onChange={handleChange}
            />
          </label>
        </div>

        <div>
          <label>
            Email: <br />
            <input
              type="text"
              name="email"
              value={state.email}
              onChange={handleChange}
            />
          </label>
        </div>

        <div>
          <label>
            Password: <br />
            <input
              type="password"
              name="password"
              value={state.password}
              onChange={handleChange}
            />
          </label>
        </div>

        <div>
          <label>
            Confirm password: <br />
            <input
              type="password"
              name="confirmpassword"
              value={state.confirmpassword}
              onChange={handleChange}
            />
          </label>
        </div>

        <button type="submit">Sign up</button>
      </form>
    </div>
  );
};

export default ControlledForm;
