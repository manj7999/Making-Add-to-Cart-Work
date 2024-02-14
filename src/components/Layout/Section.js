import React from "react";

function Section() {
  return (
    <>
      <section id="music" className="container-fluid">
        <h2 className="text-center py-5">MUSIC</h2>
        <div id="music-content" className="row">
          <div id="album1" className="col-md-3">
            <h3 className="text-center py-3">Album 1</h3>
            <div className="image-container text-center">
              <img className="prod-images" style={{width: "50%"}}  src={require(".././assets/image1.jpg")} alt="" />
            </div>
            <div className="prod-details text-center">
              <span style={{padding: "95px"}}>
                $<span >12.99</span>
              </span>
              <button style={{padding_left: "95px"}} className="btn btn-primary shop-item-button" type="button">
                ADD TO CART
              </button>
            </div>
          </div>

          <div id="album2" className="col-md-3">
            <h3 className="text-center py-3">Album 2</h3>
            <div className="image-container text-center">
              <img className="prod-images" style={{width: "50%"}} src={require(".././assets/image2.jpg")} alt="" />
            </div>
            <div className="prod-details text-center">
              <span style={{padding: "95px"}}>
                $<span>14.99</span>
              </span>
              <button className="btn btn-primary shop-item-button" type="button">
                ADD TO CART
              </button>
            </div>
          </div>
          <div id="album3" className="col-md-3">
            <h3 className="text-center py-3">Album 3</h3>
            <div className="image-container text-center">
              <img className="prod-images" style={{width: "50%"}} src={require(".././assets/image3.webp")} alt="" />
            </div>
            <div className="prod-details text-center">
              <span style={{padding: "95px"}}>
                $<span>9.99</span>
              </span>
              <button className="btn btn-primary shop-item-button" type="button">
                ADD TO CART
              </button>
            </div>
          </div>
          <div id="album4" className="col-md-3">
            <h3 className="text-center py-3">Album 4</h3>
            <div className="image-container text-center">
              <img className="prod-images" style={{width: "50%"}} src={require(".././assets/image4.jpg")} alt="" />
            </div>
            <div className="prod-details text-center">
              <span style={{padding: "95px"}}>
                $<span>19.99</span>
              </span>
              <button className="btn btn-primary shop-item-button" type="button">
                ADD TO CART
              </button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Section;
