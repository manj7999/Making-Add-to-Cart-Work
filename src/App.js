import React, { useState } from "react";
import Header from "./components/Layout/Header";
import Section from "./components/Layout/Section";
import Section2 from "./components/Layout/Section2";
import Footer from "./components/Layout/Footer";
import "bootstrap/dist/css/bootstrap.min.css";
import Cart from "./components/Cart/Cart";
import CartProvider from "./components/Store/CartProvider";

function App() {
  const [show, setShow] = useState(false);

  const showCartHandler = () => {
    setShow(true);
  };

  const hideCartHandler = () => {
    setShow(false);
  };

  return (
    <CartProvider>
      <div>
        <Header showCartHandler={showCartHandler} />
        <Section />
        <Section2 />
        <Footer />
        {show && <Cart onClose={hideCartHandler} />}
      </div>
    </CartProvider>
  );
}

export default App;