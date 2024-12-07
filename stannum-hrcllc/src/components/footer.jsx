import React from "react";
import "./footer.css";
import FooterLogo from "../images/Stannum10.png";
import { FaFacebookF, FaInstagram, FaLinkedinIn } from "react-icons/fa";

export default function Footer() {
  return (
    <div className="footer">
      <div className="foot-footer-3">
        <div className="foot-debits">
          <div className="foot-social-links-parent">
            <div className="foot-logo-link">
              <a href="/" className="foot-logo-link">
                <img
                  className="foot-cic-logo-white-icon"
                  alt="CIC Logo"
                  src={FooterLogo}
                />
              </a>
            </div>
            <div className="foot-content49">
              <div className="foot-container7">
                <div className="foot-address">Menu</div>
                <div className="foot-div">
                  <p className="foot-the-board-plays">
                    <a href="/">Home</a>
                  </p>
                  <p className="foot-the-board-plays">
                    <a href="/vacancies">Vacancies</a>
                  </p>
                  <p className="foot-the-board-plays">
                    <a href="/contact-us">Contact Us</a>
                  </p>
                </div>
              </div>
            </div>
            <div className="foot-content49">
              <div className="foot-container7">
                <div className="foot-address">Contact us</div>
                <div className="foot-div">
                  <p className="foot-the-board-plays">
                    <a href="mailto:stannum.hrconsultancy@gmail.com">stannumhrconsultanciesllc@gmail.com</a><br />
                    <a href="mailto:info@stannumhrconsultancy.com">info@stannumhrconsultancy.com</a>
                  </p>
                  <p className="foot-the-board-plays">
                    <a href="tel:+971-4111111">+971505887449</a>
                  </p>
                  <p className="foot-the-board-plays">
                    <a href="tel:+971-4111111">+971585149878</a>
                  </p>
                </div>
              </div>
            </div>
            <div className="foot-content48">
              <div className="foot-address">Address</div>
              <div className="foot-level-1-12-container1">
                <p className="foot-the-board-plays">
                  <div style={{ marginTop: "-13px" }}>
                    <a
                      href="https://maps.app.goo.gl/j4RubZjbYadap8eM9"
                      target="_blank"
                      rel="noopener noreferrer"
                      style={{ lineHeight: 1.8 }}
                    >
                      13b, Hor Al anz, Deira,  <br /> Dubai, UAE.
                    </a>
                  </div>
                </p>
              </div>
            </div>
            <div className="foot-content47">
              <div className="foot-address">Social</div>
              <div className="social-icons">
                <a
                  href="https://www.facebook.com/share/1MVSnDcj5a/?mibextid=LQQJ4d"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="social-icon"
                >
                  <FaFacebookF />
                </a>
                <a
                  href="https://www.instagram.com/stannumhrconsultanciesllc/profilecard/?igsh=dXh5MG42dHZtZWM2"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="social-icon"
                >
                  <FaInstagram />
                </a>
                <a
                  href="https://www.linkedin.com/company/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="social-icon"
                >
                  <FaLinkedinIn />
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="foot-credits">
          <div className="foot-divider11" />
          <div className="foot-row6">
            <div className="foot-web-design-by">
              Powered by <a href="/">AFH</a> IT Solutions | Copyright ©
              2024 Stannum HR
            </div>
            {/* <div className="foot-footer-links">
              <a href="#" className="foot-privacy-policy">{`T&C of Sale`}</a>
              <a href="#" className="foot-privacy-policy">
                Cookie Policy
              </a>
              <a href="#" className="foot-privacy-policy">
                Privacy Policy
              </a>
              <a href="#" className="foot-privacy-policy">
                Sitemap
              </a>
            </div> */}
          </div>
        </div>
      </div>
    </div>
  );
}
