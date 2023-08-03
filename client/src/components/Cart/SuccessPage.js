

import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import "./SuccessPage.scss";

const SuccessPage = () => {
  const navigate = useNavigate();
  const [redirectMessage, setRedirectMessage] = useState("Redirecting to the homepage in  seconds");

  useEffect(() => {
    const redirectTimer = setTimeout(() => {
      navigate("/");
    }, 10000);

  
    const updateMessageInterval = setInterval(() => {
      setRedirectMessage(`Redirecting to the homepage in ${redirectTimer / 1000} seconds`);
    }, 1000);

    
    return () => {
      clearInterval(updateMessageInterval);
      clearTimeout(redirectTimer);
      sessionStorage.setItem("redirectedFromSuccess", "true");
    };
  }, [navigate]);

  return (
    <div className="success-page">
      <h1>Payment Successful ✅ </h1>
      <p> Your order has been placed.</p>
      <p> Thank you for shopping with Us.</p>
      <p>{redirectMessage}</p>
      {/* Additional success page content */}
    </div>
  );
};

export default SuccessPage;
