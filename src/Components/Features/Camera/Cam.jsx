import React, { useState } from "react";
import "./Cam.css";

import CamVideo1 from "../../../Media/Videos/Haz1.mp4";
import CamVideo2 from "../../../Media/Videos/Haz2.mp4";

import CamImg1 from "../../../Media/Images/haz1.jpg";
import CamImg2 from "../../../Media/Images/haz2.jpg";

function Cam() {
  const [cam1mouseEntered, setCam1MouseEntered] = useState(false);
  const [cam2mouseEntered, setCam2MouseEntered] = useState(false);

  const cam1mouseEnter = () => {
    setCam1MouseEntered(true);
  };

  const cam1mouseLeave = () => {
    setCam1MouseEntered(false);
  };

  const cam2mouseEnter = () => {
    setCam2MouseEntered(true);
  };

  const cam2mouseLeave = () => {
    setCam2MouseEntered(false);
  };

  return (
    <div className="camera_container">
      <div className="camera_video">
        <video src={CamVideo1} autoPlay muted/>
      </div>

      <div className="camera_specifications">
        <div className="left_camera">
          <img
            src={CamImg1}
            alt="Nothin in here"
            onMouseEnter={cam1mouseEnter}
            onMouseLeave={cam1mouseLeave}
          />
          <div
            className="cam1_description"
            style={{ visibility: cam1mouseEntered ? "visible" : "hidden" }}
          >
            <h2>AeroWide Lens Duo</h2>
            <p>
              Mavic 3 is the most comprehensive improvement to the world’s most
              popular drone series in three years, boosting performance in every
              function to create new aerial possibilities for flight,
              photography, and fun. Mavic 3 is redesigned from tip to tail as
              worthy of the Mavic series’ reputation as the world’s best and
              most popular drones. From its 4/3 CMOS Hasselblad camera and 28x
              hybrid zoom camera, to its omnidirectional obstacle sensors with a
              maximum 200-meter range, [1] to its redesigned batteries that
              provide up to 46 minutes of flight time, Mavic 3 provides
              unprecedented flight performance and a peerless content creation
              experience. Its upgraded hardware and software can process 5.1K
              video at 50 frames per second in supple and nuanced color with
              heightened low-light sensitivity, and support 4K/120fps for
              higher-quality results for slow-motion footage. An enhanced Mavic
              3 Cine edition offers Apple ProRes 422 HQ encoding for richer
              video processing, with an internal 1TB SSD onboard for high-speed
              data storage.
            </p>
          </div>
        </div>
        <div className="right_camera">
          <img src={CamImg2} alt="nothing" onMouseLeave={cam2mouseLeave} onMouseEnter={cam2mouseEnter} />
          <div
            className="cam2_description"
            style={{ visibility: cam2mouseEntered ? "visible" : "hidden" }}
          >
            <h2>Hasselblad L2D-20C</h2>
            <p>
            The iconic Swedish brand Hasselblad designed and built the L2D-20c aerial camera just for DJI Mavic 3, embedding a professional-grade 4/3 CMOS in an unbelievably compact space. Rigorous Hasselblad standards are applied to both hardware performance and software algorithms, bringing imaging quality to an entirely new level.
            Mavic 3 features the Hasselblad Natural Colour Solution, the culmination of decades of photographic experience that delivers vivid, natural colors with the simple press of the shutter.
            Higher dynamic range allows for more natural transitions between highlights and shadows, preserving rich visual information with a greater sense of depth.
            Mavic 3 not only records aerial videos at high resolutions and framerates, it also captures up to 1 billion colors with a 10-bit D-Log color profile. This delivers more natural gradations of sky coloring with more details retained for greater flexibility in post-production.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Cam;
