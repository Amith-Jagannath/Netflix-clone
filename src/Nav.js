import React, { useEffect, useState } from "react";
import "./Nav.css";

function Nav() {
  const [show, handleScroll] = useState(false);
  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 100) {
        handleScroll(true);
      } else handleScroll(false);
    });
    return () => {
      // window.removeEventListener("scroll");
    };
  }, []);

  return (
    <div className={`nav ${show && "nav__black"}`}>
      <img className="nav__logo" src="netflix2.png" alt="netflix" />
      <img className="nav__profile" src="profile.png" alt="netflix" />
    </div>
  );
}

export default Nav;
