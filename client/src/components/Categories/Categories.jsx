import React from "react";
import "./Categories.scss";
import { Link } from "react-router-dom";

const Categories = () => {
  return (
    <div className="categories">
    
        <div className="row">
          <img
            src="/img/sale.jpg"
            alt=""
          />
          <button>
            <Link className="link" to="/products/4">
              Sale
            </Link>
          </button>
        </div>
        
        <div className="row">
          <img
            src="/img/men.jpeg"
            alt=""
          />
          <button>
            <Link to="/products/2" className="link">
              Men
            </Link>
          </button>
        </div>
      
      <div className="col">
        <div className="row">
          {" "}
          <img
            src="/img/women.jpg"
            alt=""
          />
          <button>
            <Link to="/products/1" className="link">
              Women
            </Link>
          </button>
        </div>
      </div>
    
        <div className="row">
          <div className="col">
            <div className="row">
              <img
                src="/img/kids.jpg"
                alt=""
              />
              <button>
                <Link to="/products/3" className="link">
                  Kids
                </Link>
              </button>
            </div>
          </div>          
        </div>
      
    </div>
  );
};

export default Categories;