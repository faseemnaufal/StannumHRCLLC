import React, { useEffect }  from "react"
import "./latestJobs.css"
import Image1 from "../../images/driver.jpg"
import Image2 from "../../images/cook.jpg"
import Image3 from "../../images/nurse.jpg"
import Aos from "aos";
import "aos/dist/aos.css";


export default function LatestJobs() {

    useEffect(() => {
        Aos.init({ duration: 2000 });
      }, []);


  return (
    <div className="segment-home">
      <center>
        <div className="segment-page-container">
          <div className="segment-column text-column">
            <h2 className="segment-h1" data-aos="fade-right" data-aos-duration="900">
                Latest Job Listing
            </h2>
            <a href="/vacancies" className='homeSeg-target_button' data-aos="zoom-in" data-aos-duration="1000">
                View more
              </a>
          </div>
          <div className="segment-column image-columns">
            <div className="segment-image-container" data-aos="fade-down" data-aos-duration="1000">
              <img className="segment-image2" alt="" src={Image1} />
              <div className="segment-image-p">
                <p className="segment-p3">Company Driver</p>
              </div>
            </div>
            <div className="segment-image-container" data-aos="fade-up" data-aos-duration="1000">
              <img className="segment-image2" alt="" src={Image2} />
              <div className="segment-image-p">
                <p className="segment-p3">House Cook</p>
              </div>
            </div>
            <div className="segment-image-container" data-aos="fade-down" data-aos-duration="1000">
              <img className="segment-image2" alt="" src={Image3} />
              <div className="segment-image-p">
                <p className="segment-p3">Female Nurse</p>
              </div>
            </div>
          </div>
        </div>
      </center>
    </div>
  )
}