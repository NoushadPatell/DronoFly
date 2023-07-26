import React from 'react';
import "./Navbar.css";
import { Link } from 'react-router-dom'; 
import * as Unicons from "@iconscout/react-unicons";

function Navbar() {
  return (
    <div className="navbar">
      <div className="n-left">
        <span><Unicons.UilChannel size="37"/></span>
        <span>DronoFLY</span>
      </div>

      <div className="n-right">
        {/* <Link to={"http://localhost:3000/camera"}>Explore</Link>
        <Link to={"http://localhost:3000"}>Support</Link>
        <Link>Media</Link> */}
      </div>
    </div>
  )
}

export default Navbar