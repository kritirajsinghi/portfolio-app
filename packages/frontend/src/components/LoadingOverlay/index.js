import React, { useEffect } from "react";
import { createPortal } from "react-dom";
import Loader from "components/Loader";

import "./style.css";

function Overlay() {
  return (
    <div className="loading-overlay">
      <Loader></Loader>
    </div>
  );
}

function LoadingOverlay() {
  const el = document.createElement("div");
  const body = document.querySelector("body");
  useEffect(() => {
    body.style.overflow = "hidden";
    body.appendChild(el);

    return function cleanup() {
      body.style.overflow = "auto";
      body.removeChild(el);
    };
  });
  return createPortal(<Overlay />, el);
}

export default LoadingOverlay;
