import React, {useContext} from 'react';
import CartContext from '../Store/CartContext';
import classes from './Header.module.css'

const Header = (props) => {
  const cartCtx = useContext(CartContext);
  return (
    <header className="{classes.header} text-center pb-3 bg-secondary text-light">
      <ul className="d-flex px-2 fs-5 fw-light justify-content-center border-bottom fixed-top w-100 bg-dark ">
        <li className="mx-3 my-0"><a className="text-white text-decoration-none pointer" href="./index.html">HOME</a></li>

        <li className="mx-3 my-0"><a 
        className="text-white text-decoration-none pointer" href="#">STORE</a></li>

        <li className="mx-3 my-0"><a  
         className="text-white text-decoration-none pointer" 
        href="./about.html">ABOUT</a></li>

        <button className="border border-primary rounded px-2 py-1" style={{position: "absolute", right: "2%"}} onClick={props.showCartHandler}>cart: {cartCtx.cart.length}{cartCtx.cart.length}</button>
      </ul>
      <h1 className="py-5 px-4 display-1">The Generics</h1>
    </header>
  );
}

export default Header;
