import React from "react";
import image5 from "../assets/image5.webp";
import image6 from "../assets/image6.png";
import classes from "./Section2.module.css";

const Section2 = () => {
  return (
    <>
      <section id="merch" className="container mx-auto p-4">
        <h2 className="text-center p-4 display-4">MERCH</h2>
        <div
          id="merch-content"
          className="d-flex flex-wrap justify-content-around"
        >
          <div id="t-shirt" className="m-3">
            <h3 className="text-center d-block w-100 fs-4 text-dark mb-3">
              T-Shirt
            </h3>
            <div className="m-3" style={{ height: "250px", width: "250px" }}>
              <img
                className="h-100 w-100 p-0 m-0 prod-images img-fluid"
                src={image5}
                alt=""
              />
            </div>
            <div className="d-flex m-2 align-items-center justify-content-between prod-details">
              <span>$19.99</span>
              <button
                className="btn btn-primary cursor-pointer p-2 text-white border-0 fs-6 fw-bold rounded-pill"
                type="button"
              >
                ADD TO CART
              </button>
            </div>
          </div>

          <div id="coffee-cup" className="m-3">
            <h3 className="d-block w-100 text-center fs-24 text-dark mb-3">
              Coffee Cup
            </h3>
            <div
              className="image-container"
              style={{ height: "250px", width: "250px" }}
            >
              <img
                className="img-fluid h-100 w-100 p-0 m-0 img-fluid"
                src={image6}
                alt=""
              />
            </div>
            <div className="d-flex m-2 align-items-center justify-content-between">
              <span>$6.99</span>
              <button
                className="btn btn-primary rounded-pill fw-bold text-white"
                type="button"
              >
                ADD TO CART
              </button>
            </div>
          </div>
        </div>
      </section>

      <button className="btn d-flex px-3 bg-secondary border-0 rounded mx-auto">
        <a href="#cart" className="text-decoration-none text-light font-weight-bold fs-5">
          See the cart
        </a>
      </button>
    </>
  );
};

export default Section2;
