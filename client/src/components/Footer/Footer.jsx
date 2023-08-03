import React from "react";
import {useNavigate, Link } from "react-router-dom";
import "./Footer.scss";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import TwitterIcon from "@mui/icons-material/Twitter";

const Footer = () => {
  const navigate = useNavigate();

  const handleNavigation = (path) => {
    navigate(path);
  };

  return (
    <div className="footer">
      <div className="top">
        <div className="links">
          <h1>Categories</h1>
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
        <div className="links">
          <h1>Links</h1>
          <span onClick={() => handleNavigation("/about")}>About Us</span>
          <span onClick={() => handleNavigation("/contact")}>Contact Us</span>
          <span onClick={() => handleNavigation("/faqs")}>FAQS</span>
          <span>Cookies</span>
        </div>
        <div className="item">
          <h1>About</h1>
          <p>
            We are CELENE Clothing, your premier destination for high-quality,
            stylish garments for men, women, and children. With over two decades
            of experience in the fashion industry, we take great pride in
            offering exceptional clothing options to our esteemed customers.
          </p>
        </div>
        <div className="item">
          <h1>Contact</h1>

          <p>Address : 18 R. A. De Mel Mawatha, Colombo 00500</p>
          <p>Contact Number : +94 011 2060878</p>
          <p>Email Address : CeleneClothing@gmail.com</p>

          <div className="icons">
            <FacebookIcon />
            <InstagramIcon />
            <TwitterIcon />
          </div>
        </div>
      </div>
      <div className="bottom">
        <div className="left">
          <span className="logo">CELENE Clothing</span>
          <span className="copyright">
            © Copyright 2023. All Rights Reserved
          </span>
        </div>
        <div className="right">
          <img src="/img/payment.png" alt="" />
        </div>
      </div>
    </div>
  );
};

export default Footer;
