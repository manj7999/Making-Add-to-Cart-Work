import React from "react";

function Footer() {
  return (
    <footer className="bg-dark text-light py-5">
      <div className="container">
        <div className="row">
          <div className="col-12 col-md-6">
            <div className="footer-title">The Generics</div>
          </div>
          <div className="col-12 col-md-6">
            <div className="footer-icons">
              <ul className="list-unstyled d-flex justify-content-end mb-0">
                <li className="mr-3"><a href="https://www.youtube.com"><img src="./img/6260efc8fc9a9002669d2f4ad9956cc0.jpg" alt="" /></a></li>
                <li className="mr-3"><a href="https://spotify.com"><img src="./img/Spotify Logo.png" alt="" /></a></li>
                <li><a href="https://facebook.com"><img src="./img/Facebook Logo.png" alt="" /></a></li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
