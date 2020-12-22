import React, { useState, useEffect } from "react";
import Base from "./Base";
import Card from "./Card";

import { getProduct, getOwner } from "./helper/coreapicalls";
import "../styles.css";
import OwnerCard from "./OwnerCard";
import { useHistory } from "react-router-dom";

const Home = () => {
  const history = useHistory();

  const [products, setProducts] = useState([]);
  const [owners, setOwner] = useState([]);
  const [error, setError] = useState(false);

  const loadAllProducts = () => {
    getProduct()
      .then((data) => {
        if (data.error) {
          setError(data.error);
          console.log(data.error);
        } else {
          setProducts(data);
        }
      })
      .catch((err) => console.log(err));
  };

  const loadAllInfo = () => {
    getOwner()
      .then((data) => {
        if (data.error) {
          setOwner(data.error);
          console.log(data.error);
        } else {
          setOwner(data);
        }
      })
      .catch((err) => console.log(err));
  };

  const RedirectToSignup = () => {
    history.push("/signup");
  };

  const RedirectToSignin = () => {
    history.push("/signin");
  };

  const handleProduct = () => {
    history.push("/user/product");
  };

  useEffect(() => {
    loadAllProducts();
    loadAllInfo();
  }, []);

  return (
    <Base title="Milan Printers" description="Welcome to Milan Printers">
      <div id="SignupButton">
        <div
          className=" text-uppercase text-center"
          style={{ color: "#f80000" }}
          id="signu"
        >
          <div className="row justify-content-center">
            <button
              className="btn btn-danger col-4 text-uppercase signbtn mr-3 "
              onClick={RedirectToSignup}
            >
              You are new at this site? Signup
            </button>
            <button
              className="btn btn-danger col-4 text-uppercase signbtn"
              onClick={RedirectToSignin}
            >
              Do you already have an Account? Login
            </button>
          </div>
        </div>
      </div>

      <div id="product">
        <div className="row">
          <h3
            className=" text-uppercase col-11 text-left"
            style={{ color: "#f80000" }}
            id="product"
          >
            Products :
          </h3>
          <button
            onClick={handleProduct}
            className="btn btn-outline-danger col-1 mb-4"
          >
            Product
          </button>
        </div>
        <div className="row mt-3 mb-4">
          {products.map((product, index) => {
            return (
              <div key={index} className="col-lg-3 mx-auto col-sm-6  mb-3">
                <Card product={product} />
              </div>
            );
          })}
        </div>
      </div>
      <div id="owner">
        <h3 className=" text-uppercase" style={{ color: "#f80000" }}>
          Owner Info :
        </h3>
        <div className="row mt-3 mb-4">
          {owners.map((owner, index) => {
            return (
              <div
                key={index}
                className="col-lg-3 d-flex col-sm-6 mb-3 mx-auto"
              >
                <OwnerCard owner={owner} />
              </div>
            );
          })}
        </div>
      </div>
    </Base>
  );
};

export default Home;
