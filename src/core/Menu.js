import React, { Fragment } from "react";
import { Link, withRouter } from "react-router-dom";
import { signout, isAuthenticated } from "../auth/helper";
import "../styles.css";

const currentTab = (history, path) => {
  if (history.location.pathname === path) {
    return { color: "#ff0000" };
  } else {
    return { color: "#0099ff" };
  }
};

const Menu = ({ history, path }) => {
  return (
    <div>
      <nav className="navbar fixed-top ">
        <Link
          to="/"
          style={{ color: "#f80000" }}
          className="navbar-brand text-uppercase"
        >
          Milan Printers
        </Link>
        <div className="navcollapse ml-auto" id="navbarCollapse">
          <ul className="nav nav-pills">
            <li className="nav-item">
              <Link
                to="/"
                style={currentTab(history, "/")}
                className="nav-link"
              >
                HOME
              </Link>
            </li>
            {isAuthenticated() && (
              <Fragment>
                <li className="nav-item">
                  <Link
                    to="/cart"
                    style={currentTab(history, "/cart")}
                    className="nav-link"
                  >
                    CART
                  </Link>
                </li>
                <li className="nav-item">
                  <Link
                    to="/user/product"
                    style={currentTab(history, "/user/product")}
                    className="nav-link"
                  >
                    PRODUCT
                  </Link>
                </li>
              </Fragment>
            )}
            {!isAuthenticated() && (
              <Fragment>
                <li className="nav-item">
                  <Link
                    to="/signup"
                    style={currentTab(history, "/signup")}
                    className="nav-link"
                  >
                    SIGNUP
                  </Link>
                </li>
                <li className="nav-item">
                  <Link
                    to="/signin"
                    style={currentTab(history, "/signin")}
                    className="nav-link"
                  >
                    SIGNIN
                  </Link>
                </li>
              </Fragment>
            )}

            {isAuthenticated() && (
              <li className="nav-item">
                <span
                  onClick={() => {
                    signout(() => {
                      history.push("/");
                    });
                  }}
                  className="nav-link text-info signout"
                >
                  SIGNOUT
                </span>
              </li>
            )}
          </ul>
        </div>
      </nav>
    </div>
  );
};

export default withRouter(Menu);
