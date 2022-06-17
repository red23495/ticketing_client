import { useState } from "react";
import ErrorAlert from "../component/ErrorAlert";
import useRequest from "../hook/request";
import Router from "next/router";

const SignUpPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { makeRequest, error } = useRequest({
    url: "/api/users/signup/",
    method: "post",
    data: { email, password },
    onSuccess: (resp) => Router.push("/"),
  });
  const submitHandler = async (e) => {
    e.preventDefault();
    await makeRequest();
  };
  return (
    <form>
      {error && <ErrorAlert {...error} />}
      <h1>Sign up</h1>
      <div className="form-group my-3">
        <label>Email</label>
        <input
          type="text"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="form-control"
        />
      </div>
      <div className="form-group my-3">
        <label>Password</label>
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="form-control"
        />
      </div>
      <button className="btn btn-primary" onClick={submitHandler}>
        Sign Up
      </button>
    </form>
  );
};

export default SignUpPage;
