import React from 'react'
import "./contactMainBanner.css"
import ContactImage from "../../images/contact.jpg"

export default function ContactMainBanner() {
  return (
    <div>
        <div className="contact-us" style={{ position: "relative" }}>
            <img className="contact-home-image" alt="" src={ContactImage} />
          {/* <div class="contactBannerparallax"></div> */}
          <div className="contact-image-text-box">
            <div className="contact-image-background-text">
              <h1 className="contact-image-topic">
                Contact
              </h1>
            </div>
          </div>
        </div>
    </div>
  )
}
