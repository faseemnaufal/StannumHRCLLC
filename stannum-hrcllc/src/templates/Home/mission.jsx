import React, { useEffect } from "react";
import "./mission.css";
import Aos from "aos";
import "aos/dist/aos.css";
import MissionImage from '../../images/Stannum10.png';
// import MissionImage from "../../images/MissionNew.png";
// import VisionImage from "../../images/VisionNew.png";

export default function HomeMission() {
  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);

  return (
    <div>
      <div className="betterFuture-layout">
        <div
          className="betterFuture-title"
          data-aos="fade-down"
          data-aos-duration="700"
        >
          <h1 className="betterFuture-title-h1">We Find Your Success</h1>
        </div>

        <div className="betterFuture-cards-container">
          <div
            className="betterFuture-card"
            data-aos="fade-right"
            data-aos-duration="700"
          >
            <div className="betterFuture-content">
              <div className="betterFuture-front1">
                <div className="header-front"></div>
                <div className="icon-front-1">
                  <img src={MissionImage} alt="Vission Image" />
                </div>
                <h2 className="betterFuture-front-h2">Our Vision</h2>
              </div>
              <div className="betterFuture-back betterFuture-back1">
                <div className="header-back"></div>
                <div className="icon-back-1">
                  <img src={MissionImage} alt="Mission Image" />
                </div>
                <div className="card-content-back">
                  <p className="betterFuture-back-p">
                    To be the most trusted and innovative agency for work visa and HR services in 
                    Dubai, known for delivering unparalleled value and setting the benchmark for 
                    service quality in the industry. 
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div
            className="betterFuture-card"
            data-aos="fade-left"
            data-aos-duration="700"
          >
            <div className="betterFuture-content">
              <div className="betterFuture-front2">
                <div className="header-front"></div>
                <div className="icon-front">
                  <img src={MissionImage} alt="Mission Image" />
                </div>
                <h2 className="betterFuture-front-h2">Our Mission</h2>
              </div>
              <div className="betterFuture-back betterFuture-back2">
                <div className="header-back"></div>
                <div className="icon-back">
                  <img src={MissionImage} alt="Mission Image" />
                </div>
                <div className="card-content-back">
                  <p className="betterFuture-back-p">
                    To empower individuals and businesses by simplifying the 
                    process of obtaining work visas in Dubai and providing comprehensive 
                    HR solutions that enable our clients to thrive in a dynamic global environment. 
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
