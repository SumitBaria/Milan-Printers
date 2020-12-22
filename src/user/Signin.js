import React, { useState } from "react";
import { Link, Redirect } from "react-router-dom";
import { authenticate, isAuthenticated, signin } from "../auth/helper";
import Base from "../core/Base";

const Signin = () => {
  const [values, setValue] = useState({
    name: "",
    email: "five@milan.printers",
    password: "123456789",
    error: "",
    success: false,
    loading: false,
    didRedirect: false,
  });

  const {
    name,
    email,
    password,
    error,
    success,
    loading,
    didRedirect,
  } = values;

  const handleChange = (name) => (event) => {
    setValue({ ...values, error: false, [name]: event.target.value });
  };

  const onSubmit = (event) => {
    event.preventDefault();
    setValue({ ...values, error: false, loading: true });
    signin({ email, password })
      .then((data) => {
        console.log(data);
        if (data.token) {
          authenticate(data, () => {
            console.log("TOKEN ADDED");
            setValue({
              ...values,
              didRedirect: true,
            });
          });
        } else {
          setValue({
            ...values,
            error: true,
            loading: false,
          });
        }
      })
      .catch((err) => console.log(err));
  };

  const performRedirect = () => {
    if (isAuthenticated()) {
      return <Redirect to="/" />;
    }
  };

  const loadingMessage = () => {
    loading && (
      <div className="alert alert-success">
        <h2>Loding...</h2>
      </div>
    );
  };

  const successMesssage = () => {
    return (
      <div className="row">
        <div className="col-sm-6 offset-sm-3 text-center">
          <div
            className="alert alert-success"
            style={{ display: success ? "" : "none" }}
          >
            New Account Created Successfully, Please{" "}
            <Link to="/signin"> Log in! </Link>
          </div>
        </div>
      </div>
    );
  };

  const errorMesssage = () => {
    return (
      <div className="row">
        <div className="col-sm-6 offset-sm-3 text-center">
          <div
            className="alert alert-danger"
            style={{ display: error ? "" : "none" }}
          >
            Please Check all fields!
          </div>
        </div>
      </div>
    );
  };

  const signInForm = () => {
    return (
      <div className="row">
        <div className="col-sm-6 offset-sm-3">
          <form>
            <div className="form-group">
              <label className="text-dark">Email</label>
              <input
                type="email"
                className="form-control"
                value={email}
                onChange={handleChange("email")}
              />
            </div>
            <div className="form-group">
              <label className="text-dark">Password</label>
              <input
                type="password"
                className="form-control"
                value={password}
                onChange={handleChange("password")}
              />
            </div>
            <button onClick={onSubmit} className="btn btn-success btn-block">
              Submit
            </button>
          </form>
        </div>
      </div>
    );
  };

  return (
    <Base title="Signin Page" description="Welcome to the signin Page">
      {loadingMessage()}
      {errorMesssage()}
      {signInForm()}
      <div className="text-center">{JSON.stringify(values)}</div>
      {performRedirect()}
    </Base>
  );
};

export default Signin;
