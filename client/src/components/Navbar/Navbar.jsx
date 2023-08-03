import React, { useState, useRef } from "react";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import { Link } from "react-router-dom";
import "./Navbar.scss";
import Cart from "../Cart/Cart";
import { useSelector } from "react-redux";
import { useEffect } from "react";

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const products = useSelector((state) => state.cart.products);
  const storeDropdownRef = useRef(null);

  const [storeDropdownOpen, setStoreDropdownOpen] = useState(false);



  const handleStoreDropdownEnter = () => {
    setStoreDropdownOpen(true);
  };

  const handleStoreDropdownLeave = (event) => {
    if (!storeDropdownRef.current.contains(event.target)) {
      setStoreDropdownOpen(false);
    }
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
   
      if (
        storeDropdownRef.current &&
        !storeDropdownRef.current.contains(event.target) &&
        event.target.className !== "link"
      ) {
       
        setStoreDropdownOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <div className="navbar-container">
      <div className="navbar">
        <div className="wrapper">
          <div className="left">
            <img src="/img/111.png" alt="Logo" className="logo" />
            <Link className="link" to="/">
              CELENE Clothing
            </Link>
          </div>
          <div className="left">
            <div className="links">
              <Link className="link" to="/">
                Home
              </Link>
            </div>
            <div className="links">
              <Link className="link" to="/about">
                About US
              </Link>
            </div>
            <div className="links">
              <Link className="link" to="/contact">
                Contact US
              </Link>
            </div>
            <div
              className="links"
              onMouseEnter={handleStoreDropdownEnter}
              onMouseLeave={handleStoreDropdownLeave}
            >
              <Link className="link" to="#">
                Shop
              </Link>
              {storeDropdownOpen && (
                <div
                  className="store-dropdown"
                  ref={storeDropdownRef}
                  onMouseEnter={handleStoreDropdownEnter}
                  onMouseLeave={(event) => handleStoreDropdownLeave(event)}
                >
                  <Link className="link" to="/products/2">
                    Men
                  </Link>
                  <Link className="link" to="/products/1">
                    Women
                  </Link>
                  <Link className="link" to="/products/3">
                    Kids
                  </Link>
                  <Link className="link" to="/products/4">
                    On Sale
                  </Link>
                </div>
              )}
            </div>
          </div>
          <div className="right">
            <div className="icons">
              <div className="cartIcon" onClick={() => setOpen(!open)}>
                <ShoppingCartOutlinedIcon />
                <span>{products.length}</span>
              </div>
            </div>
          </div>
        </div>
        {open && <Cart />}
      </div>
    </div>
  );
};

export default Navbar;
