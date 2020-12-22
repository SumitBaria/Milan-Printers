import React from "react";
import { Link } from "react-router-dom";
import { isAuthenticated } from "../auth/helper";
import Menu from "./Menu";
import "../styles.css";
import { Fragment } from "react";

const Base = ({
  title = "Unknown",
  description = "Default Description",
  className = "p-4",
  children,
}) => {
  return (
    <div>
      <Menu />
      <div className="container-fluid mt-4 py-4">
        <div className=" jumbotron text-white text-center row">
          <div className="col-sm-6 mt-5 mb-4">
            <h2
              className="display-4 logo-page text-uppercase"
              style={{ color: "#fc4445" }}
            >
              {title}
            </h2>
            <h5
              className="mt-3 logo1 text-uppercase"
              style={{ color: "#fc4445" }}
            >
              {description}
            </h5>
          </div>
          <div className="col-sm-3 mb-3 align-self-center justify-content-center">
            <img
              className="rounded"
              src="https://lh3.googleusercontent.com/YGZ9ukW6C_zL3Uj0UASwKhMnyxUjhTfdCug3163rzImDw0fgE3uNiONgrATgK02jaSNWxAdeOUkhyD3zV0fxQaQEv4k=w1000"
              style={{ maxHeight: "243.2px", maxWidth: "100%" }}
            />
          </div>
          <div className="col-sm-3 mb-3 align-self-center justify-content-center">
            <img
              className="rounded"
              src="https://london.bridestory.com/images/c_fill,dpr_1.0,f_auto,fl_progressive,pg_1,q_80,w_680/v1/assets/graphic06-SyLDi42qE/123weddingcards_indian-wedding-invitations-custom_4.png"
              style={{ maxHeight: "243.2px", maxWidth: "100%" }}
            />
          </div>
        </div>
      </div>

      <div className={className}>{children}</div>

      <footer className="footer" id="contectus">
        <div className="container-fluid row ">
          <div className=" col-4  offset-sm-2 col-sm-2 mt-3">
            <h4 className="logo1" style={{ color: "#fc4445" }}>
              Milan Printers
            </h4>
            <ul className="list-unstyled text-uppercase">
              <li>
                <Link to="/home" style={{ color: "#fc4445" }}>
                  Home
                </Link>
              </li>
              <li>
                <Link to="/product" style={{ color: "#fc4445" }}>
                  Product
                </Link>
              </li>
            </ul>
          </div>
          <div className="col-7  address col-sm-5 mt-3 text-uppercase">
            <h4 style={{ color: "#fc4445" }}>Our Address</h4>
            <address style={{ color: "#fc4445" }}>
              Milan Printers,
              <br />
              Santarampur Road,
              <br />
              Santroad
              <br />
              <i className="fa fa-phone"></i>: +9426586088
              <br />
              <i className="fa fa-fax"></i>: +9409294275
              <br />
              <i className="fa fa-envelope "></i>:{" "}
              <a
                href="mailto:milanprinters@gmail.com"
                style={{ color: "#fc4445" }}
                className="text-lowercase"
              >
                milanprinters@gmail.com
              </a>
            </address>
          </div>
          <div className="col-12 col-md-3  mt-3 mb-3 ">
            <div className=" row social-button">
              <a href="http://google.com/+" style={{ color: "#fc4445" }}>
                {" "}
                <i className="fa fa-google-plus fa-lg col-1"></i>
              </a>
              <a
                href="https://www.facebook.com/sumit.baria.35"
                style={{ color: "#fc4445" }}
              >
                <i className="fa fa-facebook fa-lg col-1"></i>
              </a>
              <a
                href="http://www.linkedin.com/in/"
                style={{ color: "#fc4445" }}
              >
                <i className="fa fa-linkedin fa-lg col-1"></i>
              </a>
              <a href="http://twitter.com/" style={{ color: "#fc4445" }}>
                <i className="fa fa-twitter fa-lg col-1"></i>
              </a>
              <a
                href="https://www.instagram.com/imsumitbaria/"
                style={{ color: "#fc4445" }}
              >
                <i className="fa fa-instagram fa-lg col-1"></i>
              </a>
              <a
                href="https://www.youtube.com/channel/UCh8p21JwcU5Ml9lG-t18R0A?view_as=subscriber"
                style={{ color: "#fc4445" }}
              >
                <i className="fa fa-youtube fa-lg col-1"></i>
              </a>
              <a
                href="mailto:milanprinters@gmail.com"
                style={{ color: "#fc4445" }}
              >
                <i className="fa fa-envelope-o fa-lg col-1"></i>
              </a>
            </div>
          </div>
        </div>
        <div className="row justify-content-center">
          <div className="col-auto" style={{ color: "#fc4445" }}>
            <p>© Copyright 2020 Milan Printers</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Base;
