import React from "react";
function Footer() {
  const currentYear = new Date().getFullYear();
  return <p className="footer">copyright©{currentYear}</p>;
}
export default Footer;
