import React from "react";
import classes from "./Footer.module.css";

const Footer = () => {
  return (
    <div className={classes.footer}>
      <div className="container">
        <div className={classes["footer-text"]}>
          <span className="text-base">©Pomod'</span>
          <span className="text-bold">oro</span>
          <span className="text-base">2021. All Rights Reserved.</span>
        </div>
      </div>
    </div>
  );
};

export default Footer;
