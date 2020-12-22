import React from "react";
import ImageHelper from "./helper/imageHelper";
import "../styles.css";
import { Redirect } from "react-router-dom";
import { addItemToCart, removeItemFromCart } from "./helper/cartHelper";
import { isAuthenticated } from "../auth/helper";
import { Fragment } from "react";

const Card = ({ product, addtocart = true, removeFromCart = true }) => {
  const addToCart = () => {
    if (isAuthenticated) {
      addItemToCart(product, () => {});
      console.log("Added to Cart!");
    } else {
      console.log("Login Please!");
    }
  };

  const setToRedirect = (redirect) => {
    if (redirect) {
      return <Redirect to="/cart" />;
    }
  };

  const showAddToCart = (addtocart) => {
    return (
      addToCart && (
        <button
          onClick={addtocart}
          className="btn btn-outline-success col-12 mb-1 "
        >
          Add To Cart
        </button>
      )
    );
  };

  const showRemoveFromCart = (removeFromCart) => {
    return (
      removeFromCart && (
        <button
          onClick={() => {
            removeItemFromCart(product._id);
            console.log("Removed From Cart");
          }}
          className="btn btn-outline-danger col-12 mb-1"
        >
          Remove From Cart
        </button>
      )
    );
  };

  const cartTitle = product ? product.name : "A photo of Cart";
  const cartDescription = product
    ? product.description
    : "A Default Desription";
  const cartPrice = product ? product.price : "Default";

  return (
    <div className="card text-center">
      <div className="overflow card-img-top">
        <ImageHelper product={product} />
      </div>
      <hr />
      {isAuthenticated() && (
        <Fragment>
          <div className=" card-body ">
            <div className="card-title">
              <h3>{cartTitle}</h3>
            </div>
            <div className="card-text text-secondary">
              <p>{cartDescription}</p>
            </div>
            <div className="">
              <h5>$ {cartPrice}</h5>
            </div>
          </div>
          <div className="card-footer">
            <div className="row ">
              {showAddToCart(addToCart)}
              {showRemoveFromCart(removeFromCart)}
            </div>
          </div>
        </Fragment>
      )}
    </div>
  );
};
export default Card;
