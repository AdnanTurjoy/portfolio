import React from "react";

import "../styles/Footer.css";
import { Facebook, GitHub, LinkedIn } from "@mui/icons-material";

function Footer() {
  return (
    <div className="footer">
      <div className="socialMedia">
      <a href="https://github.com/AdnanTurjoy" target="_blank">
            <GitHub />
          </a>
          <a href="https://facebook.com/adnan.turjoy.9" target="_blank">
            <Facebook />
          </a>
          <a href="https://www.linkedin.com/in/adnan005/" target="_blank">
          <LinkedIn />
          </a>
      </div>
      <p> &copy; 2022 adnan-porfolio.com</p>
    </div>
  );
}

export default Footer;
