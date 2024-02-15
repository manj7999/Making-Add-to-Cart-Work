import React from "react";
import image1 from "../assets/image1.jpg";
import image2 from "../assets/image2.jpg";
import image3 from "../assets/image3.jpg";
import image4 from "../assets/image4.jpg";
import classes from "./Section.module.css";

const Section = () => {
  return (
    <section id="music" className="container mx-auto py-4">
      <h2 className="text-center py-4">MUSIC</h2>
      <div
        id="music-content"
        className="d-flex flex-wrap justify-content-around"
      >
        
        <div id="album1" className="m-3">
          <h3 className="text-center d-block w-100 fs-4 text-dark mb-3">
            Album 1
          </h3>
          <div className="m-3">
            <img
              className="h-100 w-100 p-0 m-0 prod-images img-fluid"
              src={image1}
              alt=""
            />
          </div>
          <div className="d-flex m-2 align-items-center justify-content-between prod-details">
            <span>$12.99</span>
            <button
              className="btn btn-primary cursor-pointer p-2 text-white border-0 fs-6 fw-bold rounded-pill"
              type="button"
            >
              ADD TO CART
            </button>
          </div>
        </div>

        <div id="album2" className="m-3">
          <h3 className="text-center d-block w-100 fs-4 text-dark mb-3">
            Album 2
          </h3>
          <div className="m-3">
            <img
              className="h-100 w-100 p-0 m-0 prod-images img-fluid"
              src={image2}
              alt=""
            />
          </div>
          <div className="d-flex m-2 align-items-center justify-content-between prod-details">
            <span>$14.99</span>
            <button
              className="btn btn-primary cursor-pointer p-2 text-white border-0 fs-6 fw-bold rounded-pill"
              type="button"
            >
              ADD TO CART
            </button>
          </div>
        </div>

        <div id="album3" className="m-3">
          <h3 className="text-center d-block w-100 fs-4 text-dark mb-3">
            Album 3
          </h3>
          <div className="m-3">
            <img
              className="h-100 w-100 p-0 m-0 prod-images img-fluid"
              src={image3}
              alt=""
            />
          </div>
          <div className="d-flex m-2 align-items-center justify-content-between prod-details">
            <span>$9.99</span>
            <button
              className="btn btn-primary cursor-pointer p-2 text-white border-0 fs-6 fw-bold rounded-pill"
              type="button"
            >
              ADD TO CART
            </button>
          </div>
        </div>

        <div id="album4" className="m-3">
          <h3 className="text-center d-block w-100 fs-4 text-dark mb-3">
            Album 4
          </h3>
          <div className="m-3">
            <img
              className="h-100 w-100 p-0 m-0 prod-images img-fluid"
              src={image4}
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
      </div>
    </section>
  );
};

export default Section;
