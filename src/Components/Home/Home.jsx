import React, { useState } from "react";
import "./Home.css";
import Intro_Video from "../../Media/Videos/drone-intro.webm";
import { Link } from "react-router-dom";

export function Home() {
  const [isHovering, setIsHovering] = useState(false);
  const [isHoveringWings, setIsHoveringWings] = useState(false);

  const handleMouseEnterCam = () => {
    setIsHovering(true);
  };

  const handleMouseLeaveCam = () => {
    setIsHovering(false);
  };

  const handleMouseEnterWings = () => {
    setIsHoveringWings(true);
  };

  const handleMouseLeaveWings = () => {
    setIsHoveringWings(false);
  };

  return (
    <div className="home">
      <video src={Intro_Video} autoPlay muted />
      <div className="content">
        <h1>Fly Mavic 3 Pro</h1>
        <p>
          Experience the next generation of drone technology, soaring through
          the skies with unparalleled clarity and precision.
        </p>
      </div>

      <div className="decriptions">
        <div
          className="wings"
          onMouseEnter={handleMouseEnterWings}
          onMouseLeave={handleMouseLeaveWings}
        >
          <div
            className="wings_container left_wing"
            style={{ visibility: isHoveringWings ? "visible" : "hidden" }}
          >
            <p>The left wing of a drone is a critical component responsible for providing lift and stability during flight. It works in tandem with the right wing to maintain balance and control the drone's movement. </p>
          </div>
        </div>

        <div
          className="camera"
          onMouseEnter={handleMouseEnterCam}
          onMouseLeave={handleMouseLeaveCam}
        >
          <div
            className="camera_container"
            style={{ visibility: isHovering ? "visible" : "hidden" }}
          >
            <h3>Hasselblad L2D-20C</h3>
            <p>The Hasselblad L2D-20c Drone Camera stands as a pinnacle of innovation in the realm of drone-based photography. Its ability to capture stunning aerial visuals with precision and efficiency makes it an essential tool for professionals in various fields.</p>
            <Link to={"https://drono-fly.vercel.app/camera"}>
             <button>Learn More</button>
            </Link>
          </div>
        </div>

        <div
          className="wings"
          onMouseEnter={handleMouseEnterWings}
          onMouseLeave={handleMouseLeaveWings}
        >
          <div
            className="wings_container right_wing"
            style={{ visibility: isHoveringWings ? "visible" : "hidden" }}
          >
            <p>The right wing boasts an innovative AeroFlex Control Matrix, a smart material embedded with microsensors and shape-memory alloys. This matrix adapts to the drone's flight path in real-time.</p>   
          </div>
        </div>
      </div>
    </div>
  );
}
