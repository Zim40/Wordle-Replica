import React from "react";
import HeaderNavbar from "../Navbar";

export default function Header() {
  return (
    <div className="header">
      <h1 className="brandTitle">Wordle</h1>
         <div className="Nav-bar">
            <HeaderNavbar />
         </div>
    </div>
  );
}
