import React, { useState } from 'react';
import 'font-awesome/css/font-awesome.min.css';
import './contactForm.css'

const ContactForm = () => {
  // State to store form data
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  // Handle change in form inputs
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    // Reset form data after submission
    setFormData({
      name: '',
      email: '',
      message: ''
    });
    // You can add code here to handle the actual submission (like sending an email)
  };

  return (
    <section className='contact-body' id="contact">
      <h1 className="section-header"></h1>
      <div className="contact-wrapper">
        {/* Left contact page */}
        <form id="contact-form" className="form-horizontal" role="form" onSubmit={handleSubmit}>
          <div className="form-group">
            <div className="col-sm-12">
              <input
                type="text"
                className="form-control"
                id="name"
                placeholder="NAME"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
              />
            </div>
          </div>

          <div className="form-group">
            <div className="col-sm-12">
              <input
                type="email"
                className="form-control"
                id="email"
                placeholder="EMAIL"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </div>
          </div>

          <div className="form-group">
          <textarea
            className="form-control"
            rows="10"
            placeholder="MESSAGE"
            name="message"
            value={formData.message}
            onChange={handleChange}
            required
          ></textarea>
          </div>
         
          <div className="form-group">
          <button className="btn btn-primary send-button" id="submit" type="submit" value="SEND">
            <div className="alt-send-button">
              <i className="fa fa-paper-plane"></i><span className="send-text">SEND</span>
            </div>
          </button>
          </div>
          
        </form>
        {/* Left contact page */}

        <div className="direct-contact-container">
          <ul className="contact-list">
            <li className="list-item">
              <i className="fa fa-map-marker fa-2x">
                <span className="contact-text place">13b, Hor Al anz, Deira, Dubai, UAE</span>
              </i>
            </li>
            <li className="list-item">
              <i className="fa fa-phone fa-2x">
                <span className="contact-text phone">
                  <a href="tel:1-212-555-5555" title="Give me a call">+971505887449</a>
                </span>
              </i>
            </li>
            <li className="list-item">
              <i className="fa fa-envelope fa-2x">
                <span className="contact-text gmail">
                  <a href="mailto:#" title="Send me an email">stannumhrconsultanciesllc@gmail.com</a>
                </span>
              </i>
            </li>
          </ul>

          <hr />
          <ul className="social-media-list">
            <li>
              <a href="https://www.facebook.com/share/1MVSnDcj5a/?mibextid=LQQJ4d" target="_blank" className="contact-icon">
                <i className="fa fa-facebook" aria-hidden="true"></i>
              </a>
            </li>
            {/* <li>
              <a href="#" target="_blank" className="contact-icon">
                <i className="fa fa-codepen" aria-hidden="true"></i>
              </a>
            </li> */}
            <li>
              <a href="#" target="_blank" className="contact-icon">
                <i className="fa fa-linkedin" aria-hidden="true"></i>
              </a>
            </li>
            <li>
              <a href="https://www.instagram.com/stannumhrconsultanciesllc/profilecard/?igsh=dXh5MG42dHZtZWM2" target="_blank" className="contact-icon">
                <i className="fa fa-instagram" aria-hidden="true"></i>
              </a>
            </li>
          </ul>
          <hr />
          {/* <div className="copyright">&copy; ALL OF THE RIGHTS RESERVED</div> */}
        </div>
      </div>
    </section>
  );
};

export default ContactForm;
