import React from "react";

import "../styles/Footer.css";
import { Facebook, GitHub, LinkedIn } from "@mui/icons-material";

function Footer() {
  return (
    <div className="footer">
      <div className="socialMedia">
        <GitHub />
        <Facebook />
        <LinkedIn />
      </div>
      <p> &copy; 2022 pedrotech.com</p>
    </div>
  );
}

export default Footer;
