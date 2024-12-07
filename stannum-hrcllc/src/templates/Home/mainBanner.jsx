import React, { useEffect, useState } from "react";
import './mainBanner.css';
import HomeVideo from "../../images/beachSky1.mp4";
import HomeVideo1 from "../../images/skyScraper.mp4";
import HomeVideo2 from "../../images/skyScraper1.mp4";
import Aos from "aos";
import "aos/dist/aos.css";

export default function MainBanner() {
  const [currentVideo, setCurrentVideo] = useState(HomeVideo1);
  const [fade, setFade] = useState(true); 

  useEffect(() => {
    Aos.init({ duration: 2000 });

    const videoList = [HomeVideo, HomeVideo1, HomeVideo2];
    let videoIndex = 0;

    const interval = setInterval(() => {
      setFade(false);
      setTimeout(() => {
        videoIndex = (videoIndex + 1) % videoList.length;
        setCurrentVideo(videoList[videoIndex]);
        setFade(true); 
      }, 700); 
    }, 7000); 

    return () => clearInterval(interval); 
  }, []);

  return (
    <div>
      <div style={{ position: "relative" }}>
      <video
          className={`home-image ${fade ? "rotate-in" : "rotate-out"}`}
          src={currentVideo}
          alt="loading"
          autoPlay
          loop
          muted
        />
        <div className="video-overlay"></div>
        <div className="image-text-box">
          <div className="image-content">
            <div className="image-background-text">
              <div className="middle-container">
                <h1 className="image-topic scrolling-words-container">
                  <div className="scrolling-words-box">
                    <ul className="vertical-scroll">
                      <li className="vertical-scroll-li">STANNUM</li>
                      <li className="vertical-scroll-li">HR</li>
                      <li className="vertical-scroll-li">Consultancies</li>
                    </ul>
                  </div>
                  We Meet All Your{" "}
                  <br />
                  <span
                    className="image-topic-color"
                    data-aos="fade-up-right"
                    data-aos-duration="1500"
                  >
                    {" "}
                    HR Needs
                  </span>
                </h1>
                {/* <a href="/sustainability" className="bannerButton" role="button">
                  Read More
                </a> */}
              </div>
            </div>
            {/* <img
              className="handShake"
              data-aos="fade-up-right"
              data-aos-duration="800"
              alt="loading"
              src={HandShake}
            /> */}
            <div
              className="handShake"
              data-aos="fade-up-right"
              data-aos-duration="800"
            ></div>

          </div>
        </div>
      </div>
    </div>
  );
}
