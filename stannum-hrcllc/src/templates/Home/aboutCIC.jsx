import React, { useEffect } from "react"
import "./aboutCIC.css"
import Aos from "aos";
import "aos/dist/aos.css";
import Professional from '../../images/prof.png'
import Experience from '../../images/experience.png'
import Trust from '../../images/trust.png'

export default function AboutCIC() {

  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);

  // return (
  //   <div className="s2-home">
  //     <center>
  //       <div className="page-container">
  //         <div className="column">
  //           <h2 className="aboutcic-h1" data-aos="fade-right" data-aos-duration="900">
  //             Why Choose Us
  //           </h2>
  //           <p className="aboutcic-p1">We are your trusted partner for securing work visas in Dubai and 
  //           fulfilling all your HR needs. With years of expertise and a deep understanding of the local 
  //           requirements, we ensure a smooth and hassle-free process for our clients.</p>
  //         </div>
  //         <div className="column1" data-aos="fade-down" data-aos-duration="900">
  //           <h2 className="aboutcic-h2">Professionals</h2>
  //           <p className="aboutcic-p2">Our team comprises highly skilled professionals with in-depth knowledge 
  //           of visa regulations and HR solutions, dedicated to providing you with personalized and efficient 
  //           services.</p>
  //           <img className="aboutImg" src={Professional} />
  //         </div>
  //         <div className="column1" data-aos="fade-up" data-aos-duration="900">
  //           <h2 className="aboutcic-h2">Experience</h2>
  //           <p className="aboutcic-p2">With extensive experience in the industry, we have built a reputation for 
  //           delivering top-notch solutions that cater to a diverse range of industries and clients.</p>
  //           <img className="aboutImg" src={Experience} alt="exp"/>
  //         </div>
  //         <div className="column1" data-aos="fade-down" data-aos-duration="900">
  //           <h2 className="aboutcic-h2">Trusted</h2>
  //           <p className="aboutcic-p2">We are committed to integrity, transparency, and excellence, making us 
  //           the preferred choice for individuals and businesses seeking reliable work visa and HR services 
  //           in Dubai.</p>
  //           <img className="aboutImg" src={Trust} alt="trs"/>
  //         </div>
  //       </div>
  //     </center>
  //   </div>
  // )

  return (
        <div className="s2-home">
          <h2 className="aboutcic-h1" data-aos="fade-left" data-aos-duration="1200" 
          style={{ justify: "center" }}>
            Why Choose Us
          </h2>
          <center>
            <div className="page-container">
              <div className="column" data-aos="fade-up" data-aos-duration="700">
                <h2 className="aboutcic-h1">Professionals</h2>
                <p className="aboutcic-p1">Our team comprises highly skilled professionals with in-depth knowledge 
                  of visa regulations and HR solutions, dedicated to providing you with personalized and efficient 
                  services.
                </p>
              </div>
              <div className="column" data-aos="fade-up" data-aos-duration="900">
                <h2 className="aboutcic-h1">Experience</h2>
                <p className="aboutcic-p1">With extensive experience in the industry, we have built a reputation for 
                  delivering top-notch solutions that cater to a diverse range of industries and clients.
                </p>
              </div>
              <div className="column" data-aos="fade-up" data-aos-duration="1100">
                <h2 className="aboutcic-h1">Trusted
                </h2>
                <p className="aboutcic-p1">We are committed to integrity, transparency, and excellence, making us 
                  the preferred choice for individuals and businesses seeking reliable work visa and HR services 
                  in Dubai.
                </p>  
              </div>
            </div>
          </center>
        </div>
      )
}