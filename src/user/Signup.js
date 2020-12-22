import React, { useState } from "react";
import { Link, Redirect } from "react-router-dom";
import { signup } from "../auth/helper";
import Base from "../core/Base";

const Signup = () => {
  const [values, setValue] = useState({
    first_name: "",
    last_name: "",
    email: "",
    password: "",
    confirm_password: "",
    phone: "",
    address: "",
    gender: "",
    error: "",
    success: false,
  });

  const [redirect, setRedirect] = useState(false);

  const {
    first_name,
    last_name,
    email,
    password,
    confirm_password,
    phone,
    address,
    gender,
    error,
    success,
  } = values;

  const handleChange = (name) => (event) => {
    setValue({ ...values, error: false, [name]: event.target.value });
  };

  const onSubmit = (event) => {
    event.preventDefault();
    if (password !== confirm_password) {
      setValue({
        ...values,
        error: true,
        success: false,
      });
    } else {
      setValue({ ...values, error: false });
      const name = first_name + " " + last_name;
      signup({ name, email, password, phone, address, gender })
        .then((data) => {
          console.log("DATA", data);
          if (data.email === email) {
            setValue({
              ...values,
              name: "",
              email: "",
              password: "",
              confirm_password: "",
              phone: "",
              address: "",
              gender: "",
              error: "",
              success: true,
            });
            setRedirect(true);
          } else {
            setValue({
              ...values,
              error: true,
              success: false,
            });
          }
        })
        .catch((err) => console.log(err));
    }
  };

  const setToRedirect = () => {
    if (redirect) {
      return <Redirect to="/signin" />;
    }
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

  const validatePassword = (event) => {
    const confirmpassword = event.target.value;
    if (password != confirmpassword) {
      setValue({
        ...values,
        error: true,
      });
    }
  };

  const signUpForm = () => {
    return (
      <div className="row">
        <div className="col-sm-6 offset-sm-3">
          <form>
            <div className="form-group">
              <label className="text-dark">First Name</label>
              <input
                type="text"
                className="form-control"
                value={first_name}
                onChange={handleChange("first_name")}
              />
            </div>
            <div className="form-group">
              <label className="text-dark">Last Name</label>
              <input
                type="text"
                className="form-control"
                value={last_name}
                onChange={handleChange("last_name")}
              />
            </div>
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
            <div className="form-group">
              <label className="text-dark">Confirm Password</label>
              <input
                type="password"
                className="form-control"
                value={confirm_password}
                onChange={handleChange("confirm_password")}
              />
            </div>
            <div className="form-group">
              <label className="text-dark">Phone No.:</label>
              <input
                type="text"
                className="form-control"
                value={phone}
                onChange={handleChange("phone")}
              />
            </div>
            <div className="form-group">
              <label className="text-dark">Address</label>
              <input
                type="text"
                className="form-control"
                value={address}
                onChange={handleChange("address")}
              />
            </div>
            <div className="form-group">
              <label className="text-dark">Gender</label>
              <input
                type="text"
                className="form-control"
                value={gender}
                onChange={handleChange("gender")}
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
    <Base title="SignUp Page" description="Welcome to Signup Page">
      <div>
        {successMesssage()}
        {errorMesssage()}
        {signUpForm()}
        <div className="text-dark text-center">{JSON.stringify(values)}</div>
        {setToRedirect()}
      </div>
    </Base>
  );
};

export default Signup;
