import React from "react";
import "./grid.css";

// This Container component allows us to use a bootstrap container without worrying about class names
export const PurpleContainer = ({ fluid, children }) => (
  <div className={`container${fluid ? "-fluid" : ""} purple`}>
    {children}
  </div>
);
