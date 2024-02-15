import React from "react";
import youtube from '../assets/youtube.jpg';
import Fb from '../assets/Fb.png';
import Spotify from '../assets/Spotify.png';

function Footer() {
  return (
    <footer className="d-flex mt-4 p-2 bg-info">
      <div className="text-center text-white col-md-6 display-3 font-weight-bold mx-auto">
        The Generics
      </div>

      <div className="col-md-6 d-flex align-items-center justify-content-around">
        <ul className="list-unstyled d-flex">
          <li className="px-2">
            <a
              className="text-primary cursor-pointer text-decoration-underline"
              href="https://www.youtube.com"
            >
              <img className="img-fluid" src={youtube} alt="Youtube" style={{height: "40px"}}/>
            </a>
          </li>

          <li className="px-2">
            <a
              className="text-primary cursor-pointer text-decoration-underline"
              href="https://spotify.com"
            >
              <img src={Fb} alt="Fb" style={{height: "40px"}}/>
            </a>
          </li>

          <li className="px-2">
            <a
              className="text-primary cursor-pointer text-decoration-underline"
              href="https://facebook.com"
            >
              <img src={Spotify} alt="Spotify" style={{height: "40px"}}/>
            </a>
          </li>
        </ul>
      </div>
    </footer>
  );
}

export default Footer;
