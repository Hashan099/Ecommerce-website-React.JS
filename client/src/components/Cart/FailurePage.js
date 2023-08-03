

import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import "./failure.scss";

const FailurePage = () => {
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
      <h1>Payment Failed ❌ </h1>
      <p> Sorry, Your order could not be processed. </p>
      <p> please try again.</p>
      <p>{redirectMessage}</p>
      {/* Additional success page content */}
    </div>
  );
};

export default FailurePage;
